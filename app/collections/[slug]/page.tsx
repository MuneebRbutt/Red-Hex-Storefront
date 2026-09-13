import { notFound } from 'next/navigation';
import { CATEGORIES } from '@/lib/categories';
import React from 'react';
import CollectionClient from '@/components/collections/CollectionClient';
import { MOCK_PRODUCTS } from '@/lib/mockProducts';

// ─────────────────────────────────────────────────────────────────────────────
// Static parameter pre-generation definition (Server Component side)
// ─────────────────────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return CATEGORIES.map(category => ({ slug: category.slug }));
}


export default async function CollectionPage({ params }: { params: { slug: string } }) {
  const category = CATEGORIES.find(item => item.slug === params.slug);
  if (!category) notFound();
  let liveVariants = [];
  let collectionName: string = category.name;
  let collectionDesc: string = category.description;

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_VENDURE_SHOP_API || 'http://localhost:3000/shop-api', {
      method: 'POST',
      signal: AbortSignal.timeout(5000),
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetCollectionProducts($slug: String!) {
            collection(slug: $slug) {
              id
              name
              description
              productVariants(options: { take: 50 }) {
                items {
                  id
                  name
                  priceWithTax
                  product {
                    id
                    name
                    slug
                    description
                    featuredAsset { preview }
                    assets { preview }
                  }
                }
              }
            }
          }
        `,
        variables: { slug: params.slug }
      }),
      next: { revalidate: 60 }
    });

    const json = await res.json();
    const collection = json?.data?.collection;
    if (collection) {
      collectionName = collection.name;
      collectionDesc = collection.description;
      
      const extractImageUrl = (description: string) => {
        try {
          const match = description?.match(/\{"_imageUrl":"([^"]+)"\}/)
          return match ? match[1] : null
        } catch {
          return null
        }
      };

      liveVariants = (collection.productVariants?.items || []).map((v: any) => {
        const cloudinaryUrl = extractImageUrl(v.product.description || '');
        if (cloudinaryUrl) {
          return {
            ...v,
            product: {
              ...v.product,
              featuredAsset: { preview: cloudinaryUrl }
            }
          };
        }
        return v;
      });
    }
  } catch (err) {
    console.error('Failed to fetch live collection:', err);
  }

  let initialVariants = liveVariants;
  if (liveVariants.length === 0) {
    const filteredMocks = MOCK_PRODUCTS.filter(p => p.category === params.slug || p.subcategory === params.slug);
    if (filteredMocks.length > 0) {
      initialVariants = filteredMocks.map((m, i) => ({
        id: `mock-variant-${i}`,
        name: m.name,
        priceWithTax: m.price * 100,
        product: {
          id: m.id || `mock-prod-${i}`,
          name: m.name,
          slug: m.slug,
          description: m.description,
          featuredAsset: { preview: m.images[0] },
          assets: m.images.map(img => ({ preview: img }))
        }
      }));
    }
  }

  return (
    <CollectionClient 
      slug={params.slug} 
      initialVariants={initialVariants} 
      serverCollectionName={collectionName} 
      serverCollectionDesc={collectionDesc} 
    />
  );
}

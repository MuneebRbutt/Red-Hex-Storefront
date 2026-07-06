import React from 'react';
import CollectionClient from '@/components/collections/CollectionClient';
import { MOCK_PRODUCTS } from '@/lib/mockProducts';

// ─────────────────────────────────────────────────────────────────────────────
// Static parameter pre-generation definition (Server Component side)
// ─────────────────────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return [
    // Main category slugs
    { slug: 'sportswear' },
    { slug: 'casual-wear' },
    { slug: 'jacket-collections' },
    { slug: 'gymwear-activewear' },
    { slug: 'safety-work-wear' },
    // Sportswear subcategories
    { slug: 'soccer-uniform' },
    { slug: 'baseball-uniform' },
    { slug: 'american-football-uniform' },
    { slug: 'basketball-uniform' },
    { slug: 'ice-hockey-uniform' },
    { slug: 'tennis-uniform' },
    // Casual Wear subcategories
    { slug: 'tracksuits' },
    { slug: 'hoodies' },
    { slug: 'sweatshirt' },
    { slug: 'sweat-pants' },
    { slug: 't-shirts' },
    // Gymwear & Activewear subcategories
    { slug: 'tank-top' },
    { slug: 'compression-shirts' },
    { slug: 'dry-fit-t-shirts' },
    { slug: 'gym-shorts' },
    { slug: 'track-jackets' },
    { slug: 'wrist-straps' },
    { slug: 'headbands' },
    { slug: 'gym-socks' },
    // Safety & Work Wear subcategories
    { slug: 'safety-vests' },
    { slug: 'construction-suits' },
    { slug: 'safety-jackets' },
  ];
}


export default async function CollectionPage({ params }: { params: { slug: string } }) {
  let liveVariants = [];
  let collectionName = '';
  let collectionDesc = '';

  try {
    const res = await fetch('https://red-hex-backend.onrender.com/shop-api', {
      method: 'POST',
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
    } else {
      initialVariants = [
        {
          id: 'mock-1',
          name: 'Coming Soon: Premium Gear',
          priceWithTax: 5999,
          product: {
            id: 'mock-prod-1',
            name: 'Coming Soon: Premium Gear',
            slug: 'coming-soon-premium-gear',
            description: 'Our latest collection is currently in production.',
            featuredAsset: { preview: 'https://placehold.co/600x800/1a1a1a/ffffff?text=Coming+Soon' },
            assets: []
          }
        }
      ];
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

import React from 'react';
import CollectionClient from '@/components/collections/CollectionClient';

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
    // Jacket Collections subcategories
    { slug: 'bomber-jackets' },
    { slug: 'puffer-jackets' },
    { slug: 'leather-jackets' },
    { slug: 'varsity-jacket' },
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
    { slug: 'denim-jacket' },
    { slug: 'windbreaker-jacket' },
  ];
}

const MOCK_PRODUCTS = [
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
  },
  {
    id: 'mock-2',
    name: 'Coming Soon: Signature Collection',
    priceWithTax: 8999,
    product: {
      id: 'mock-prod-2',
      name: 'Coming Soon: Signature Collection',
      slug: 'coming-soon-signature-collection',
      description: 'Exclusive pieces dropping soon.',
      featuredAsset: { preview: 'https://placehold.co/600x800/1a1a1a/ffffff?text=Coming+Soon' },
      assets: []
    }
  }
];

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
      liveVariants = collection.productVariants?.items || [];
    }
  } catch (err) {
    console.error('Failed to fetch live collection:', err);
  }

  const initialVariants = liveVariants.length > 0 ? liveVariants : MOCK_PRODUCTS;

  return (
    <CollectionClient 
      slug={params.slug} 
      initialVariants={initialVariants} 
      serverCollectionName={collectionName} 
      serverCollectionDesc={collectionDesc} 
    />
  );
}

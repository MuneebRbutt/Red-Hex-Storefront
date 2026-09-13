export const CATEGORIES = [
  { name: 'Welding gloves', slug: 'welding-gloves', description: 'Gloves for welding and metalwork.' },
  { name: 'Golf gloves', slug: 'golf-gloves', description: 'Gloves for your time on the course.' },
  { name: 'Mechanic gloves', slug: 'mechanic-gloves', description: 'Gloves for workshop and mechanical tasks.' },
  { name: 'Driver gloves', slug: 'driver-gloves', description: 'Leather gloves for driving and everyday handling.' },
  { name: 'Canadian rigger gloves', slug: 'canadian-rigger-gloves', description: 'Work gloves for rigging and general handling.' },
  { name: 'Assembly gloves', slug: 'assembly-gloves', description: 'Gloves for assembly and detailed work.' },
  { name: 'Fashion driver gloves', slug: 'fashion-driver-gloves', description: 'Driving gloves with a focus on personal style.' },
] as const;

export function isTanauraCategory(slug: string): boolean {
  return CATEGORIES.some(category => category.slug === slug);
}

export function isTanauraProduct(product: { collections?: { slug: string }[] }): boolean {
  return product.collections?.some(collection => isTanauraCategory(collection.slug)) ?? false;
}

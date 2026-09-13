export interface MockProduct {
  id?: string;
  slug: string;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  category: string;
  images: string[];
  subcategory?: string;
  sizes: string[];
}

const weldingProduct = (
  slug: string,
  name: string,
  image: string,
  description: string,
): MockProduct => ({
  id: slug,
  slug,
  name,
  price: 0,
  shortDescription: description,
  description,
  category: 'welding-gloves',
  images: [`/products/welding/${image}`],
  sizes: ['M', 'L', 'XL'],
});

// This is the public catalogue. Add future products here with their image in public/products.
export const mockProducts: MockProduct[] = [
  weldingProduct(
    'black-contrast-stitch-welding-gloves',
    'Black Contrast-Stitch Welding Gloves',
    'black-contrast-stitch.jpg',
    'Black suede leather welding gloves finished with orange contrast stitching and a protective cuff. A professional, durable design for workshop and welding tasks.',
  ),
  weldingProduct(
    'green-reinforced-palm-welding-gloves',
    'Green Reinforced-Palm Welding Gloves',
    'green-reinforced-palm.jpg',
    'Deep green suede leather gloves featuring a golden palm reinforcement and long cuff. Built for dependable handling, welding, and fabrication work.',
  ),
  weldingProduct(
    'red-long-cuff-welding-gloves',
    'Red Long-Cuff Welding Gloves',
    'red-long-cuff.jpg',
    'Red suede leather welding gloves with black piping and a long cuff. A bold, comfortable option for welding, metal fabrication, and general industrial work.',
  ),
  weldingProduct(
    'golden-leather-canvas-cuff-welding-gloves',
    'Golden Leather Canvas-Cuff Welding Gloves',
    'golden-canvas-cuff.jpg',
    'Golden suede leather gloves paired with a light canvas cuff for extended wrist coverage. Suitable for welding, fabrication, and industrial handling work.',
  ),
  weldingProduct(
    'grey-long-cuff-welding-gloves',
    'Grey Long-Cuff Welding Gloves',
    'grey-long-cuff.jpg',
    'Grey suede leather welding gloves with a full-length protective cuff. A clean, durable option for welding, fabrication, and general metalwork.',
  ),
  weldingProduct(
    'royal-blue-long-cuff-welding-gloves',
    'Royal Blue Long-Cuff Welding Gloves',
    'royal-blue-long-cuff.jpg',
    'Royal blue suede leather welding gloves with contrast stitching and a long flared cuff. A practical choice for welders who want full hand and wrist coverage.',
  ),
  weldingProduct(
    'green-leather-welding-gloves',
    'Green Leather Welding Gloves',
    'green-leather.jpg',
    'Green suede leather gloves with contrasting yellow trim and an extended cuff. Designed for comfortable handling during routine welding and workshop tasks.',
  ),
  weldingProduct(
    'golden-reinforced-palm-welding-gloves',
    'Golden Reinforced-Palm Welding Gloves',
    'golden-reinforced-palm.jpg',
    'Golden leather welding gloves with a red reinforced palm panel and extended cuff. Made for welders who need added durability around the palm and thumb.',
  ),
  weldingProduct(
    'blue-reinforced-palm-welding-gloves',
    'Blue Reinforced-Palm Welding Gloves',
    'blue-reinforced-palm.jpg',
    'Blue suede leather gloves with a golden reinforced palm and thumb panel. Extra reinforcement supports grip and durability in high-contact working areas.',
  ),
];

export const MOCK_PRODUCTS = mockProducts;

export function getProductBySlug(slug: string) {
  return MOCK_PRODUCTS.find(product => product.slug === slug);
}

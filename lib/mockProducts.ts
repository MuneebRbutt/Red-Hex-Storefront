export interface MockProduct {
  id?: string;
  slug: string;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  category: string;
  images: string[]; // URLs relative to public folder
  subcategory?: string;
  sizes: string[];
}

// The previous catalog has been cleared. Add the new Tanaura products here.
export const mockProducts: MockProduct[] = [];
export const MOCK_PRODUCTS = mockProducts;

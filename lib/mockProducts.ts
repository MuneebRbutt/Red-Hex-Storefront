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

export const mockProducts: MockProduct[] = [
  {
    slug: 'red-hex-sport-jersey',
    name: 'Red Hex Sport Jersey',
    price: 79.99,
    shortDescription: 'High‑performance jersey for sports enthusiasts.',
    description: `<p>Our Red Hex Sport Jersey combines breathable fabric with a sleek fit, perfect for soccer, basketball, or any active pursuit. The vibrant red hexagonal pattern stands out on the field.</p><ul><li>100% polyester, moisture‑wicking</li><li>Available in multiple sizes</li><li>Machine washable</li></ul>`,
    category: 'sportswear',
    subcategory: 'sportswear',
    images: [
      '/images/mock/sport-jersey-1.jpg',
      '/images/mock/sport-jersey-2.jpg',
      '/images/mock/sport-jersey-3.jpg',
      '/images/mock/sport-jersey-4.jpg',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    slug: 'red-hex-casual-hoodie',
    name: 'Red Hex Casual Hoodie',
    price: 59.99,
    shortDescription: 'Cozy, soft‑fleece hoodie perfect for everyday wear.',
    description: `<p>Stay warm during cooler evenings with our heavyweight Red Hex Hoodie. Made from premium cotton‑blend, it offers comfort without sacrificing style.</p><ul><li>50% cotton, 50% polyester</li><li>Brushed interior</li><li>Adjustable drawstring hood</li></ul>`,
    category: 'casual-wear',
    subcategory: 'casual-wear',
    images: [
      '/images/mock/hoodie-1.jpg',
      '/images/mock/hoodie-2.jpg',
      '/images/mock/hoodie-3.jpg',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    slug: 'red-hex-bomber-jacket',
    name: 'Red Hex Bomber Jacket',
    price: 129.99,
    shortDescription: 'Sleek bomber with embroidered hex pattern.',
    description: `<p>The Red Hex Bomber Jacket blends classic silhouette with modern detailing. Perfect for street‑wear looks.</p><ul><li>Polyester shell</li><li>Ribbed cuffs and hem</li><li>Full‑zip front</li></ul>`,
    category: 'jacket-collections',
    subcategory: 'jacket-collections',
    images: [
      '/images/mock/bomber-1.jpg',
      '/images/mock/bomber-2.jpg',
      '/images/mock/bomber-3.jpg',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    slug: 'red-hex-gym-shorts',
    name: 'Red Hex Gym Shorts',
    price: 34.99,
    shortDescription: 'Lightweight shorts for high‑intensity workouts.',
    description: `<p>Designed for mobility, the Red Hex Gym Shorts feature a breathable mesh lining and a secure elastic waistband.</p><ul><li>Quick‑dry fabric</li><li>Four‑way stretch</li><li>Inner pocket for keys</li></ul>`,
    category: 'gymwear-activewear',
    subcategory: 'gymwear-activewear',
    images: [
      '/images/mock/gym-shorts-1.jpg',
      '/images/mock/gym-shorts-2.jpg',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: "sv-01",
    name: "Safety Vest 01",
    slug: "safety-vest-01",
    price: 0,
    shortDescription: "High-visibility safety vest",
    description: "This safety vest is designed to provide excellent visibility and reliable protection in demanding work environments. Manufactured from lightweight, breathable fabric with high-quality reflective strips, it offers comfort during extended working hours while helping improve workplace safety.",
    category: "safety-work-wear",
    subcategory: "safety-vests",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783167917/safety_vest_1.jpg_xwpofd.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "sv-02",
    name: "Safety Vest 02",
    slug: "safety-vest-02",
    price: 0,
    shortDescription: "Durable high-visibility vest",
    description: "This safety vest combines durability, comfort, and high visibility to meet the requirements of industrial professionals. The reflective design enhances worker visibility in low-light conditions, making it suitable for construction sites, warehouses, and roadwork.",
    category: "safety-work-wear",
    subcategory: "safety-vests",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783167875/safety_vest_2.jpg_cvzhnm.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "sv-03",
    name: "Safety Vest 03",
    slug: "safety-vest-03",
    price: 0,
    shortDescription: "Premium performance safety vest",
    description: "Built with premium materials, this safety vest offers dependable performance for everyday use. The lightweight construction ensures freedom of movement, while reflective strips help increase visibility in busy and hazardous workplaces.",
    category: "safety-work-wear",
    subcategory: "safety-vests",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783167874/safety_vest_3.jpg_gaoz4s.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "sv-04",
    name: "Safety Vest 04",
    slug: "safety-vest-04",
    price: 0,
    shortDescription: "Comfortable safety apparel",
    description: "This safety vest is crafted for professionals who require reliable safety apparel without sacrificing comfort. Its fluorescent fabric and reflective tape provide enhanced visibility for both indoor and outdoor working environments.",
    category: "safety-work-wear",
    subcategory: "safety-vests",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783167874/safety_vest_3.jpg_gaoz4s.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "sv-05",
    name: "Safety Vest 05",
    slug: "safety-vest-05",
    price: 0,
    shortDescription: "Long-lasting safety vest",
    description: "Designed for long-lasting performance, this safety vest delivers excellent comfort and visibility throughout the workday. The durable construction makes it ideal for industrial, logistics, maintenance, and construction applications.",
    category: "safety-work-wear",
    subcategory: "safety-vests",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783167872/safety_vest_6.jpg_s8laq5.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "sv-06",
    name: "Safety Vest 06",
    slug: "safety-vest-06",
    price: 0,
    shortDescription: "Lightweight and breathable vest",
    description: "This safety vest features a lightweight and breathable design that keeps workers comfortable during extended shifts. High-quality reflective strips improve visibility, helping create a safer working environment.",
    category: "safety-work-wear",
    subcategory: "safety-vests",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783167872/safety_vest_5.jpg_tre7lp.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "sv-07",
    name: "Safety Vest 07",
    slug: "safety-vest-07",
    price: 0,
    shortDescription: "Durable and functional vest",
    description: "Offering a combination of durability and functionality, this safety vest is suitable for a wide range of professional applications. The bright fluorescent color and reflective detailing help ensure maximum visibility on the job.",
    category: "safety-work-wear",
    subcategory: "safety-vests",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783167872/safety_vest_5.jpg_tre7lp.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "sv-08",
    name: "Safety Vest 08",
    slug: "safety-vest-08",
    price: 0,
    shortDescription: "Quality safety vest",
    description: "This safety vest is manufactured using quality materials to withstand demanding workplace conditions. Its comfortable fit and reflective design make it an excellent choice for construction, manufacturing, warehouses, and traffic management.",
    category: "safety-work-wear",
    subcategory: "safety-vests",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783167871/safety_vest_9.jpg_tpav0t.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "sv-09",
    name: "Safety Vest 09",
    slug: "safety-vest-09",
    price: 0,
    shortDescription: "Dependable visibility vest",
    description: "Designed with worker safety in mind, this safety vest provides dependable visibility and everyday comfort. The lightweight fabric and durable reflective strips help support safe operations in high-risk environments.",
    category: "safety-work-wear",
    subcategory: "safety-vests",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783167871/safety_vest_8.jpg_pw50up.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "sv-10",
    name: "Safety Vest 10",
    slug: "safety-vest-10",
    price: 0,
    shortDescription: "Comfortable fit safety vest",
    description: "This safety vest delivers dependable performance with a comfortable fit and enhanced visibility. Suitable for a variety of industrial and commercial workplaces, it is designed to support safety, durability, and all-day wear.",
    category: "safety-work-wear",
    subcategory: "safety-vests",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783167871/safety_vest_10.jpg_iozz20.jpg"],
    sizes: ['M', 'L', 'XL']
  }
];

export const MOCK_PRODUCTS = mockProducts;

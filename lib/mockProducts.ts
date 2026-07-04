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
  },
  {
    id: "cs-01",
    name: "Construction Suit 01",
    slug: "construction-suit-01",
    price: 0,
    shortDescription: "Reliable construction suit",
    description: "This construction suit is designed to provide reliable protection and all-day comfort in demanding work environments. Manufactured from durable, breathable fabric, it offers excellent freedom of movement while standing up to the rigors of construction, industrial, and maintenance tasks.",
    category: "safety-work-wear",
    subcategory: "construction-suits",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783171243/safety_jackets_1_xzuss5.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "cs-02",
    name: "Construction Suit 02",
    slug: "construction-suit-02",
    price: 0,
    shortDescription: "Durable construction suit",
    description: "Built for professional use, this construction suit combines durability with practical comfort. Its high-quality stitching and resilient fabric make it suitable for long working hours in construction sites, workshops, factories, and engineering projects.",
    category: "safety-work-wear",
    subcategory: "construction-suits",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783171242/safety_jackets_2_vsqhxf.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "cs-03",
    name: "Construction Suit 03",
    slug: "construction-suit-03",
    price: 0,
    shortDescription: "Dependable performance suit",
    description: "This construction suit is crafted to deliver dependable performance in challenging conditions. The lightweight yet durable material helps workers stay comfortable while providing the protection required for daily industrial operations.",
    category: "safety-work-wear",
    subcategory: "construction-suits",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783171242/safety_jackets_3_bdmelp.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "cs-04",
    name: "Construction Suit 04",
    slug: "construction-suit-04",
    price: 0,
    shortDescription: "Comfortable fit suit",
    description: "Designed for demanding workplaces, this construction suit offers a comfortable fit without compromising durability. The premium fabric ensures long-lasting wear, making it an excellent choice for construction, manufacturing, and maintenance professionals.",
    category: "safety-work-wear",
    subcategory: "construction-suits",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783171240/safety_jackets_5_nqjpbq.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "cs-05",
    name: "Construction Suit 05",
    slug: "construction-suit-05",
    price: 0,
    shortDescription: "Flexible construction suit",
    description: "This construction suit provides a perfect balance of strength, flexibility, and comfort. Engineered for everyday industrial use, it allows unrestricted movement while maintaining durability throughout extended work shifts.",
    category: "safety-work-wear",
    subcategory: "construction-suits",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783171241/safety_jackets_4_pvussu.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "cs-06",
    name: "Construction Suit 06",
    slug: "construction-suit-06",
    price: 0,
    shortDescription: "Tough environment suit",
    description: "Manufactured from high-quality materials, this construction suit is built to withstand tough working environments. Its breathable fabric and reinforced stitching provide lasting comfort and dependable performance on the job.",
    category: "safety-work-wear",
    subcategory: "construction-suits",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783171239/safety_jackets_6_xpkkxh.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "cs-07",
    name: "Construction Suit 07",
    slug: "construction-suit-07",
    price: 0,
    shortDescription: "Everyday workwear suit",
    description: "This construction suit is designed for professionals who require reliable workwear every day. The durable construction and comfortable fit make it suitable for construction sites, warehouses, engineering projects, and industrial facilities.",
    category: "safety-work-wear",
    subcategory: "construction-suits",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783171235/safety_jackets_11_ygie8u.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "cs-08",
    name: "Construction Suit 08",
    slug: "construction-suit-08",
    price: 0,
    shortDescription: "Heavy-duty construction suit",
    description: "Combining functionality with durability, this construction suit offers dependable protection for demanding tasks. The lightweight design ensures comfort throughout the day while maintaining the strength needed for heavy-duty work.",
    category: "safety-work-wear",
    subcategory: "construction-suits",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783171236/safety_jackets_10_asfufv.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "cs-09",
    name: "Construction Suit 09",
    slug: "construction-suit-09",
    price: 0,
    shortDescription: "Maximum durability suit",
    description: "This construction suit is engineered for maximum durability and everyday performance. The quality fabric resists wear and tear while providing the flexibility and comfort required for physically demanding jobs.",
    category: "safety-work-wear",
    subcategory: "construction-suits",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783171236/safety_jackets_9_vkin5l.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "cs-10",
    name: "Construction Suit 10",
    slug: "construction-suit-10",
    price: 0,
    shortDescription: "Productivity-focused suit",
    description: "Designed with productivity and comfort in mind, this construction suit delivers reliable performance across a variety of industrial applications. Its durable finish and practical design make it ideal for long working hours in challenging environments.",
    category: "safety-work-wear",
    subcategory: "construction-suits",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783171237/safety_jackets_8_urdbhl.jpg"],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: "cs-11",
    name: "Construction Suit 11",
    slug: "construction-suit-11",
    price: 0,
    shortDescription: "Professional construction suit",
    description: "This construction suit is built to meet the needs of professionals working in construction, manufacturing, and industrial settings. Featuring durable craftsmanship and a comfortable fit, it provides dependable protection and long-lasting performance for everyday use.",
    category: "safety-work-wear",
    subcategory: "construction-suits",
    images: ["https://res.cloudinary.com/ng5enocm/image/upload/v1783171238/safety_jackets_7_au5jtd.jpg"],
    sizes: ['M', 'L', 'XL']
  }
];

export const MOCK_PRODUCTS = mockProducts;

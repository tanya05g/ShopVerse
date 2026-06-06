// 30 mock products for ShopVerse.
// Image URLs use Unsplash (free, no key required).

export const categories = [
  { slug: "electronics", name: "Electronics", icon: "Laptop" },
  { slug: "fashion",     name: "Fashion",     icon: "Shirt" },
  { slug: "shoes",       name: "Shoes",       icon: "Footprints" },
  { slug: "home",        name: "Home",        icon: "Home" },
  { slug: "beauty",      name: "Beauty",      icon: "Sparkles" },
  { slug: "sports",      name: "Sports",      icon: "Dumbbell" },
  { slug: "books",       name: "Books",       icon: "BookOpen" },
];

const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

export const products = [
  // Electronics
  { id: 1,  name: "Aurora Wireless Headphones",  category: "electronics", price: 189, discount: 25, rating: 4.8, stock: 24, image: img("photo-1505740420928-5e560c06d30e"), description: "Studio-grade sound with active noise cancellation and 40h battery life.", trending: true,  featured: true },
  { id: 2,  name: "Nimbus Smartwatch Pro",        category: "electronics", price: 249, discount: 15, rating: 4.6, stock: 12, image: img("photo-1546868871-7041f2a55e12"), description: "Health, fitness and notifications on a vivid AMOLED display.", trending: true },
  { id: 3,  name: "PixelCam 4K Mirrorless",       category: "electronics", price: 899, discount: 10, rating: 4.9, stock: 6,  image: img("photo-1502920917128-1aa500764cbd"), description: "Compact mirrorless camera with cinematic 4K60 video.", featured: true },
  { id: 4,  name: "Echo Bluetooth Speaker",       category: "electronics", price: 79,  discount: 30, rating: 4.4, stock: 0,  image: img("photo-1608043152269-423dbba4e7e1"), description: "Pocket-sized speaker, room-filling sound." },
  { id: 5,  name: "Orbit Wireless Charger",       category: "electronics", price: 39,  discount: 20, rating: 4.3, stock: 40, image: img("photo-1591290619762-c44b8e9c91e5"), description: "Fast 15W charging with a minimal Scandinavian design." },

  // Fashion
  { id: 6,  name: "Linen Oversized Shirt",        category: "fashion", price: 69,  discount: 10, rating: 4.5, stock: 30, image: img("photo-1520975916090-3105956dac38"), description: "Breathable European linen, relaxed silhouette.", featured: true },
  { id: 7,  name: "Heritage Denim Jacket",        category: "fashion", price: 129, discount: 0,  rating: 4.7, stock: 14, image: img("photo-1495105787522-5334e3ffa0ef"), description: "Selvedge denim with vintage wash and brass hardware." },
  { id: 8,  name: "Cashmere Crew Sweater",        category: "fashion", price: 159, discount: 20, rating: 4.8, stock: 9,  image: img("photo-1434389677669-e08b4cac3105"), description: "Grade-A cashmere — soft, light, warm.", trending: true },
  { id: 9,  name: "Pleated Midi Skirt",           category: "fashion", price: 89,  discount: 15, rating: 4.4, stock: 22, image: img("photo-1583496661160-fb5886a13d44"), description: "Flowy pleats with elasticated waist." },
  { id: 10, name: "Wool Overcoat",                category: "fashion", price: 299, discount: 25, rating: 4.9, stock: 7,  image: img("photo-1539109136881-3be0616acf4b"), description: "Italian wool, double-breasted, tailored fit." },

  // Shoes
  { id: 11, name: "Cloud Runner Sneakers",        category: "shoes", price: 139, discount: 20, rating: 4.7, stock: 18, image: img("photo-1542291026-7eec264c27ff"), description: "Featherweight cushioning for everyday running.", trending: true, featured: true },
  { id: 12, name: "Leather Chelsea Boots",        category: "shoes", price: 219, discount: 10, rating: 4.6, stock: 11, image: img("photo-1543163521-1bf539c55dd2"), description: "Full-grain leather, Goodyear-welted sole." },
  { id: 13, name: "Court Classic Whites",         category: "shoes", price: 99,  discount: 0,  rating: 4.5, stock: 26, image: img("photo-1600185365926-3a2ce3cdb9eb"), description: "Minimalist court silhouette in premium leather." },
  { id: 14, name: "Trail Hiker GTX",              category: "shoes", price: 179, discount: 15, rating: 4.7, stock: 9,  image: img("photo-1606107557195-0e29a4b5b4aa"), description: "Waterproof Gore-Tex with aggressive grip." },

  // Home
  { id: 15, name: "Ceramic Pour-Over Set",        category: "home", price: 59,  discount: 10, rating: 4.6, stock: 33, image: img("photo-1495474472287-4d71bcdd2085"), description: "Hand-thrown ceramic dripper with carafe." },
  { id: 16, name: "Linen Bedding Bundle",         category: "home", price: 189, discount: 25, rating: 4.8, stock: 15, image: img("photo-1505693416388-ac5ce068fe85"), description: "Stone-washed linen — softer every wash.", featured: true },
  { id: 17, name: "Olive Wood Cutting Board",     category: "home", price: 49,  discount: 5,  rating: 4.7, stock: 41, image: img("photo-1556909114-f6e7ad7d3136"), description: "Hand-finished olive wood, each piece unique." },
  { id: 18, name: "Architect Desk Lamp",          category: "home", price: 119, discount: 0,  rating: 4.5, stock: 19, image: img("photo-1507473885765-e6ed057f782c"), description: "Articulated brass arm with warm LED." },

  // Beauty
  { id: 19, name: "Glow Serum — Vitamin C",       category: "beauty", price: 39,  discount: 15, rating: 4.6, stock: 50, image: img("photo-1556228720-195a672e8a03"), description: "Brightening serum with 15% L-ascorbic acid." },
  { id: 20, name: "Velvet Matte Lipstick Set",    category: "beauty", price: 49,  discount: 20, rating: 4.7, stock: 28, image: img("photo-1586495777744-4413f21062fa"), description: "Six nudes — long-wear, never drying.", trending: true },
  { id: 21, name: "Spa Candle — Cedar & Sage",    category: "beauty", price: 34,  discount: 0,  rating: 4.5, stock: 60, image: img("photo-1602874801007-bd458bb1b8b6"), description: "Soy wax, 60h burn time." },
  { id: 22, name: "Botanical Face Oil",           category: "beauty", price: 58,  discount: 10, rating: 4.8, stock: 22, image: img("photo-1570194065650-d99fb4bedf0a"), description: "Cold-pressed rosehip, jojoba and squalane." },

  // Sports
  { id: 23, name: "Studio Yoga Mat",              category: "sports", price: 69,  discount: 10, rating: 4.6, stock: 35, image: img("photo-1518611012118-696072aa579a"), description: "Eco TPE, 6mm cushioning, alignment lines." },
  { id: 24, name: "Pro Dumbbell Pair — 10kg",     category: "sports", price: 129, discount: 0,  rating: 4.5, stock: 0,  image: img("photo-1517836357463-d25dfeac3438"), description: "Hex rubber-coated, knurled chrome handle." },
  { id: 25, name: "Trailblazer Backpack 30L",     category: "sports", price: 149, discount: 20, rating: 4.7, stock: 17, image: img("photo-1553062407-98eeb64c6a62"), description: "Weatherproof, padded straps, hydration ready.", featured: true },
  { id: 26, name: "Carbon Road Bike Helmet",      category: "sports", price: 189, discount: 15, rating: 4.6, stock: 13, image: img("photo-1518830340604-44765aa5e7a3"), description: "MIPS protection at 220g." },

  // Books
  { id: 27, name: "Atomic Mindset (Hardcover)",   category: "books", price: 24,  discount: 10, rating: 4.9, stock: 80, image: img("photo-1544947950-fa07a98d237f"), description: "Build identity-based habits that compound." },
  { id: 28, name: "The Quiet Garden — Novel",     category: "books", price: 19,  discount: 0,  rating: 4.6, stock: 45, image: img("photo-1512820790803-83ca734da794"), description: "A lyrical literary debut." },
  { id: 29, name: "Design Foundations",           category: "books", price: 39,  discount: 15, rating: 4.7, stock: 22, image: img("photo-1589998059171-988d887df646"), description: "Visual hierarchy, color & type, for builders." },
  { id: 30, name: "Cooking from the Pantry",      category: "books", price: 29,  discount: 5,  rating: 4.5, stock: 38, image: img("photo-1532012197267-da84d127e765"), description: "120 weeknight recipes from staples." },
];

export const getById = (id) => products.find((p) => String(p.id) === String(id));
export const getRelated = (product, n = 4) =>
  products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, n);

export const testimonials = [
  { name: "Amelia R.",  role: "Product Designer", text: "ShopVerse feels like browsing a beautiful magazine. The checkout was seamless.", avatar: img("photo-1494790108377-be9c29b29330") },
  { name: "Jordan K.",  role: "Photographer",     text: "Premium quality and fast shipping. The packaging itself felt like a gift.",   avatar: img("photo-1500648767791-00dcc994a43e") },
  { name: "Priya S.",   role: "Founder",          text: "My go-to for everyday essentials. The recommendations are scarily good.",      avatar: img("photo-1438761681033-6461ffad8d80") },
  { name: "Marcus T.",  role: "Engineer",         text: "Clean UI, real reviews, and prices that don't insult you.",                    avatar: img("photo-1599566150163-29194dcaad36") },
];

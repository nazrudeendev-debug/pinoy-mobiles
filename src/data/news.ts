export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
}

export const news: NewsArticle[] = [
  {
    id: 1,
    title: "Samsung Galaxy S25 Series: Everything We Know So Far",
    slug: "samsung-galaxy-s25-series-leaks",
    thumbnail: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
    date: "2024-11-28",
    excerpt: "The upcoming Samsung Galaxy S25 series is expected to bring major improvements in AI capabilities and camera performance.",
    content: `<p>Samsung is gearing up for the launch of its next flagship series, the Galaxy S25. Based on recent leaks and reports, here's what we can expect from the upcoming smartphones.</p>
    
    <h2>Design Changes</h2>
    <p>The Galaxy S25 Ultra is rumored to feature a more rounded design, moving away from the boxy aesthetics of its predecessors. The titanium frame will remain, but with smoother edges for improved ergonomics.</p>
    
    <h2>Snapdragon 8 Gen 4</h2>
    <p>All three variants - S25, S25+, and S25 Ultra - are expected to be powered by the Qualcomm Snapdragon 8 Gen 4 processor globally, which promises significant performance and efficiency improvements.</p>
    
    <h2>AI Features</h2>
    <p>Samsung will likely double down on Galaxy AI features, with on-device AI processing taking center stage. Expect enhanced photo editing, real-time translation, and smarter Samsung Bixby integration.</p>
    
    <h2>Camera Improvements</h2>
    <p>The Ultra model may retain the 200MP main sensor but with improved image processing algorithms. A new variable aperture system is also rumored for better low-light performance.</p>`,
    author: "Tech Team",
    category: "Upcoming Phones"
  },
  {
    id: 2,
    title: "iPhone 16 Pro Max vs Samsung Galaxy S24 Ultra: Ultimate Comparison",
    slug: "iphone-16-pro-max-vs-samsung-s24-ultra",
    thumbnail: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
    date: "2024-11-25",
    excerpt: "A comprehensive comparison between Apple's latest flagship and Samsung's best offering.",
    content: `<p>The battle of the titans continues in 2024 as Apple and Samsung compete for smartphone supremacy. Let's break down how these two flagships compare.</p>
    
    <h2>Display</h2>
    <p>Both phones feature stunning displays, but Samsung edges ahead with its brighter panel and better outdoor visibility. The S24 Ultra's 2600 nits peak brightness surpasses the iPhone's 2000 nits.</p>
    
    <h2>Camera</h2>
    <p>Samsung's 200MP sensor captures more detail, while Apple's 48MP sensor excels in color accuracy and video recording. Both offer excellent 5x optical zoom capabilities.</p>
    
    <h2>Performance</h2>
    <p>The A18 Pro chip in the iPhone 16 Pro Max leads in benchmark tests, but real-world performance between both devices is virtually indistinguishable for most users.</p>
    
    <h2>Software</h2>
    <p>iOS 18 brings customization features long available on Android, while One UI 6.1 offers more flexibility and Samsung's unique AI features.</p>`,
    author: "Review Team",
    category: "Comparisons"
  },
  {
    id: 3,
    title: "Best Budget 5G Phones Under ₱15,000 in the Philippines (2024)",
    slug: "best-budget-5g-phones-2024",
    thumbnail: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
    date: "2024-11-22",
    excerpt: "Looking for an affordable 5G phone? Here are the best options available in the Philippine market.",
    content: `<p>5G connectivity is becoming more accessible than ever, with several budget-friendly options now available in the Philippine market.</p>
    
    <h2>Redmi Note 13 5G</h2>
    <p>Starting at ₱11,990, the Redmi Note 13 5G offers excellent value with its Dimensity 6080 chip, 108MP camera, and 5000mAh battery with 33W charging.</p>
    
    <h2>Realme Note 50</h2>
    <p>At ₱9,990, this phone punches above its weight class with a 90Hz display, decent cameras, and 5G connectivity for those on a tight budget.</p>
    
    <h2>Samsung Galaxy A15 5G</h2>
    <p>Samsung's budget 5G offering at ₱12,990 brings the brand's reliability and software support to the affordable segment.</p>
    
    <h2>Infinix Note 40 5G</h2>
    <p>The Infinix Note 40 5G at ₱13,999 offers 70W charging and a decent camera system, making it a compelling option for budget-conscious buyers.</p>`,
    author: "Buyer's Guide Team",
    category: "Buying Guide"
  },
  {
    id: 4,
    title: "Xiaomi 14T Pro Philippines Launch: Pricing and Availability",
    slug: "xiaomi-14t-pro-philippines-launch",
    thumbnail: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800",
    date: "2024-11-20",
    excerpt: "Xiaomi officially launches the 14T Pro in the Philippines with Leica cameras and MediaTek Dimensity 9300+.",
    content: `<p>Xiaomi has officially launched the 14T Pro in the Philippines, bringing flagship-level specifications at a competitive price point.</p>
    
    <h2>Key Specifications</h2>
    <p>The Xiaomi 14T Pro features the MediaTek Dimensity 9300+ chipset, a 6.67-inch 144Hz AMOLED display, and Leica-branded cameras.</p>
    
    <h2>Camera System</h2>
    <p>The triple camera setup includes a 50MP Light Fusion 900 main sensor, 50MP telephoto with 2x zoom, and 12MP ultrawide lens - all tuned by Leica.</p>
    
    <h2>Philippine Pricing</h2>
    <ul>
      <li>12GB/256GB: ₱34,999</li>
      <li>12GB/512GB: ₱37,999</li>
    </ul>
    
    <h2>Availability</h2>
    <p>The Xiaomi 14T Pro is now available at all authorized Xiaomi stores and online through Lazada and Shopee official stores.</p>`,
    author: "News Team",
    category: "Launch News"
  },
  {
    id: 5,
    title: "OnePlus 13 Specs Leaked: Snapdragon 8 Elite and 6,000mAh Battery",
    slug: "oneplus-13-specs-leaked",
    thumbnail: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800",
    date: "2024-11-18",
    excerpt: "The OnePlus 13 is shaping up to be a beast with the latest Snapdragon chipset and a massive battery.",
    content: `<p>OnePlus is preparing to launch its next flagship, and the leaked specifications suggest it will be one of the most powerful smartphones of 2025.</p>
    
    <h2>Snapdragon 8 Elite</h2>
    <p>The OnePlus 13 will be among the first phones to feature Qualcomm's new Snapdragon 8 Elite chipset, promising unprecedented performance and efficiency.</p>
    
    <h2>Massive Battery</h2>
    <p>A 6,000mAh battery is expected - the largest ever in a OnePlus flagship - along with 100W wired and 50W wireless charging support.</p>
    
    <h2>Display</h2>
    <p>A 6.82-inch BOE X2 LTPO OLED display with 2K resolution and up to 4500 nits brightness is rumored, making it one of the brightest smartphone displays.</p>
    
    <h2>Camera</h2>
    <p>The Hasselblad partnership continues with a 50MP main sensor, 50MP ultrawide, and 50MP 3x telephoto - promising significant improvements in low-light photography.</p>`,
    author: "Leaks Team",
    category: "Rumors & Leaks"
  },
  {
    id: 6,
    title: "How to Choose the Right Phone: A Complete Buying Guide",
    slug: "phone-buying-guide-2024",
    thumbnail: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=800",
    date: "2024-11-15",
    excerpt: "Confused about which phone to buy? Our comprehensive guide will help you make the right decision.",
    content: `<p>With hundreds of smartphones available in the market, choosing the right one can be overwhelming. Here's a comprehensive guide to help you decide.</p>
    
    <h2>Set Your Budget</h2>
    <p>Determine how much you're willing to spend. Phones are generally categorized as:</p>
    <ul>
      <li>Budget: Under ₱15,000</li>
      <li>Mid-range: ₱15,000 - ₱30,000</li>
      <li>Premium: ₱30,000 - ₱50,000</li>
      <li>Flagship: Above ₱50,000</li>
    </ul>
    
    <h2>Identify Your Priorities</h2>
    <p>What matters most to you? Camera quality, gaming performance, battery life, or display quality? Prioritize features based on your usage patterns.</p>
    
    <h2>Consider the Ecosystem</h2>
    <p>If you already own Apple products, an iPhone might integrate better with your existing devices. Similarly, Samsung users might benefit from the Galaxy ecosystem.</p>
    
    <h2>Future-Proofing</h2>
    <p>Look for phones with promised software updates. Samsung offers 7 years of updates for flagships, while Google's Pixel phones also receive extended support.</p>`,
    author: "Editorial Team",
    category: "Guides"
  }
];

export const getNewsBySlug = (slug: string): NewsArticle | undefined => {
  return news.find(article => article.slug === slug);
};

export const getLatestNews = (count: number = 6): NewsArticle[] => {
  return [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
};

export const getRelatedNews = (currentSlug: string, count: number = 3): NewsArticle[] => {
  return news.filter(article => article.slug !== currentSlug).slice(0, count);
};

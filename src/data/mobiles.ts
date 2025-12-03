export interface Mobile {
  id: number;
  brandSlug: string;
  brandName: string;
  name: string;
  slug: string;
  priceNew: string;
  priceMin: number;
  camera: string;
  battery: string;
  chipset: string;
  ram: string;
  storage: string;
  display: string;
  network: string;
  images: string[];
  pros: string[];
  cons: string[];
  variants: string[];
  specs: {
    general: Record<string, string>;
    display: Record<string, string>;
    processor: Record<string, string>;
    memory: Record<string, string>;
    camera: Record<string, string>;
    battery: Record<string, string>;
    network: Record<string, string>;
    features: Record<string, string>;
  };
  featured?: boolean;
  trending?: boolean;
}

export const mobiles: Mobile[] = [
  {
    id: 1,
    brandSlug: "samsung",
    brandName: "Samsung",
    name: "Samsung Galaxy S24 Ultra",
    slug: "samsung-galaxy-s24-ultra",
    priceNew: "₱74,990 - ₱89,990",
    priceMin: 74990,
    camera: "200MP + 12MP + 50MP + 10MP",
    battery: "5000mAh",
    chipset: "Snapdragon 8 Gen 3",
    ram: "12GB",
    storage: "256GB",
    display: "6.8-inch Dynamic AMOLED 2X",
    network: "5G",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
    ],
    pros: ["Exceptional camera system", "S Pen included", "7 years of updates", "Titanium frame"],
    cons: ["High price", "Heavy device", "No charger in box"],
    variants: ["12GB/256GB", "12GB/512GB", "12GB/1TB"],
    specs: {
      general: { "Release Date": "January 2024", "OS": "Android 14, One UI 6.1", "Dimensions": "162.3 x 79 x 8.6 mm", "Weight": "232g", "Colors": "Titanium Gray, Titanium Black, Titanium Violet, Titanium Yellow" },
      display: { "Type": "Dynamic AMOLED 2X", "Size": "6.8 inches", "Resolution": "1440 x 3120 pixels", "Refresh Rate": "1-120Hz", "Protection": "Corning Gorilla Armor" },
      processor: { "Chipset": "Snapdragon 8 Gen 3", "CPU": "Octa-core", "GPU": "Adreno 750" },
      memory: { "RAM": "12GB", "Internal Storage": "256GB/512GB/1TB", "Card Slot": "No" },
      camera: { "Main": "200MP, f/1.7, OIS", "Ultrawide": "12MP, f/2.2", "Telephoto 1": "50MP, f/3.4, 5x optical", "Telephoto 2": "10MP, f/2.4, 3x optical", "Front": "12MP, f/2.2" },
      battery: { "Capacity": "5000mAh", "Charging": "45W wired, 15W wireless", "Reverse Wireless": "4.5W" },
      network: { "5G": "Yes", "4G LTE": "Yes", "Wi-Fi": "Wi-Fi 7", "Bluetooth": "5.3", "NFC": "Yes" },
      features: { "S Pen": "Yes, built-in", "IP Rating": "IP68", "Fingerprint": "Ultrasonic, in-display", "Face Recognition": "Yes", "Stereo Speakers": "Yes" }
    },
    featured: true,
    trending: true
  },
  {
    id: 2,
    brandSlug: "apple",
    brandName: "Apple",
    name: "iPhone 15 Pro Max",
    slug: "iphone-15-pro-max",
    priceNew: "₱79,990 - ₱99,990",
    priceMin: 79990,
    camera: "48MP + 12MP + 12MP",
    battery: "4441mAh",
    chipset: "Apple A17 Pro",
    ram: "8GB",
    storage: "256GB",
    display: "6.7-inch Super Retina XDR OLED",
    network: "5G",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800"
    ],
    pros: ["Best-in-class performance", "Titanium design", "Excellent video recording", "5x optical zoom"],
    cons: ["Expensive", "No USB-C fast charging standard", "Limited customization"],
    variants: ["256GB", "512GB", "1TB"],
    specs: {
      general: { "Release Date": "September 2023", "OS": "iOS 17", "Dimensions": "159.9 x 76.7 x 8.3 mm", "Weight": "221g", "Colors": "Black Titanium, White Titanium, Blue Titanium, Natural Titanium" },
      display: { "Type": "Super Retina XDR OLED", "Size": "6.7 inches", "Resolution": "1290 x 2796 pixels", "Refresh Rate": "1-120Hz ProMotion", "Protection": "Ceramic Shield" },
      processor: { "Chipset": "Apple A17 Pro", "CPU": "6-core", "GPU": "6-core" },
      memory: { "RAM": "8GB", "Internal Storage": "256GB/512GB/1TB", "Card Slot": "No" },
      camera: { "Main": "48MP, f/1.78, OIS", "Ultrawide": "12MP, f/2.2", "Telephoto": "12MP, f/2.8, 5x optical", "Front": "12MP, f/1.9" },
      battery: { "Capacity": "4441mAh", "Charging": "27W wired, 15W MagSafe", "Reverse Wireless": "No" },
      network: { "5G": "Yes", "4G LTE": "Yes", "Wi-Fi": "Wi-Fi 6E", "Bluetooth": "5.3", "NFC": "Yes" },
      features: { "Action Button": "Yes", "IP Rating": "IP68", "Face ID": "Yes", "USB Type-C": "Yes (USB 3)", "Stereo Speakers": "Yes" }
    },
    featured: true,
    trending: true
  },
  {
    id: 3,
    brandSlug: "xiaomi",
    brandName: "Xiaomi",
    name: "Xiaomi 14 Ultra",
    slug: "xiaomi-14-ultra",
    priceNew: "₱69,990 - ₱79,990",
    priceMin: 69990,
    camera: "50MP + 50MP + 50MP + 50MP",
    battery: "5000mAh",
    chipset: "Snapdragon 8 Gen 3",
    ram: "16GB",
    storage: "512GB",
    display: "6.73-inch LTPO AMOLED",
    network: "5G",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800"
    ],
    pros: ["Leica optics", "Variable aperture", "90W fast charging", "Photography kit available"],
    cons: ["No wireless charging on base model", "Heavy", "Premium pricing"],
    variants: ["16GB/512GB", "16GB/1TB"],
    specs: {
      general: { "Release Date": "February 2024", "OS": "Android 14, HyperOS", "Dimensions": "161.4 x 75.3 x 9.2 mm", "Weight": "220g", "Colors": "Black, White" },
      display: { "Type": "LTPO AMOLED", "Size": "6.73 inches", "Resolution": "1440 x 3200 pixels", "Refresh Rate": "1-120Hz", "Protection": "Corning Gorilla Glass Victus 2" },
      processor: { "Chipset": "Snapdragon 8 Gen 3", "CPU": "Octa-core", "GPU": "Adreno 750" },
      memory: { "RAM": "16GB", "Internal Storage": "512GB/1TB", "Card Slot": "No" },
      camera: { "Main": "50MP, f/1.63-4.0, OIS, Leica", "Ultrawide": "50MP, f/1.8", "Telephoto 1": "50MP, f/1.8, 3.2x", "Telephoto 2": "50MP, f/2.5, 5x", "Front": "32MP, f/2.0" },
      battery: { "Capacity": "5000mAh", "Charging": "90W wired, 80W wireless", "Reverse Wireless": "10W" },
      network: { "5G": "Yes", "4G LTE": "Yes", "Wi-Fi": "Wi-Fi 7", "Bluetooth": "5.4", "NFC": "Yes" },
      features: { "Leica Optics": "Yes", "IP Rating": "IP68", "Fingerprint": "Ultrasonic, in-display", "IR Blaster": "Yes", "Stereo Speakers": "Yes" }
    },
    featured: true,
    trending: true
  },
  {
    id: 4,
    brandSlug: "oppo",
    brandName: "OPPO",
    name: "OPPO Find X7 Ultra",
    slug: "oppo-find-x7-ultra",
    priceNew: "₱64,990 - ₱74,990",
    priceMin: 64990,
    camera: "50MP + 50MP + 50MP + 50MP",
    battery: "5000mAh",
    chipset: "Snapdragon 8 Gen 3",
    ram: "16GB",
    storage: "256GB",
    display: "6.82-inch LTPO AMOLED",
    network: "5G",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800"
    ],
    pros: ["Dual periscope cameras", "Hasselblad tuning", "100W charging", "Great display"],
    cons: ["No global availability", "No wireless charging", "Heavy"],
    variants: ["16GB/256GB", "16GB/512GB", "16GB/1TB"],
    specs: {
      general: { "Release Date": "January 2024", "OS": "Android 14, ColorOS 14", "Dimensions": "164.3 x 76.2 x 9.5 mm", "Weight": "221g", "Colors": "Sepia Brown, Ocean Blue" },
      display: { "Type": "LTPO AMOLED", "Size": "6.82 inches", "Resolution": "1440 x 3168 pixels", "Refresh Rate": "1-120Hz", "Protection": "Corning Gorilla Glass Victus 2" },
      processor: { "Chipset": "Snapdragon 8 Gen 3", "CPU": "Octa-core", "GPU": "Adreno 750" },
      memory: { "RAM": "16GB", "Internal Storage": "256GB/512GB/1TB", "Card Slot": "No" },
      camera: { "Main": "50MP, f/1.8, OIS, Hasselblad", "Ultrawide": "50MP, f/2.0", "Periscope 1": "50MP, f/2.6, 3x", "Periscope 2": "50MP, f/4.3, 6x", "Front": "32MP, f/2.4" },
      battery: { "Capacity": "5000mAh", "Charging": "100W wired, 50W wireless", "Reverse Wireless": "10W" },
      network: { "5G": "Yes", "4G LTE": "Yes", "Wi-Fi": "Wi-Fi 7", "Bluetooth": "5.4", "NFC": "Yes" },
      features: { "Hasselblad": "Yes", "IP Rating": "IP68", "Fingerprint": "Ultrasonic, in-display", "Alert Slider": "Yes", "Stereo Speakers": "Yes" }
    },
    featured: true,
    trending: false
  },
  {
    id: 5,
    brandSlug: "vivo",
    brandName: "Vivo",
    name: "Vivo X100 Pro",
    slug: "vivo-x100-pro",
    priceNew: "₱54,990 - ₱64,990",
    priceMin: 54990,
    camera: "50MP + 50MP + 50MP",
    battery: "5400mAh",
    chipset: "MediaTek Dimensity 9300",
    ram: "16GB",
    storage: "256GB",
    display: "6.78-inch LTPO AMOLED",
    network: "5G",
    images: [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800",
      "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=800"
    ],
    pros: ["Zeiss optics", "100W fast charging", "Great battery life", "Excellent display"],
    cons: ["No IP68 rating globally", "ColorOS learning curve", "Limited availability"],
    variants: ["12GB/256GB", "16GB/512GB"],
    specs: {
      general: { "Release Date": "November 2023", "OS": "Android 14, FuntouchOS 14", "Dimensions": "164.1 x 75.3 x 8.9 mm", "Weight": "225g", "Colors": "Asteroid Black, Stardust Blue" },
      display: { "Type": "LTPO AMOLED", "Size": "6.78 inches", "Resolution": "1260 x 2800 pixels", "Refresh Rate": "1-120Hz", "Protection": "Zeiss T* coating" },
      processor: { "Chipset": "MediaTek Dimensity 9300", "CPU": "Octa-core", "GPU": "Immortalis-G720" },
      memory: { "RAM": "12GB/16GB", "Internal Storage": "256GB/512GB", "Card Slot": "No" },
      camera: { "Main": "50MP, f/1.75, OIS, ZEISS", "Ultrawide": "50MP, f/2.0", "Telephoto": "50MP, f/2.5, 4.3x", "Front": "32MP, f/2.0" },
      battery: { "Capacity": "5400mAh", "Charging": "100W wired, 50W wireless", "Reverse Wireless": "Yes" },
      network: { "5G": "Yes", "4G LTE": "Yes", "Wi-Fi": "Wi-Fi 7", "Bluetooth": "5.4", "NFC": "Yes" },
      features: { "ZEISS Optics": "Yes", "IP Rating": "IP68", "Fingerprint": "Ultrasonic, in-display", "IR Blaster": "Yes", "Stereo Speakers": "Yes" }
    },
    featured: false,
    trending: true
  },
  {
    id: 6,
    brandSlug: "realme",
    brandName: "Realme",
    name: "Realme GT 5 Pro",
    slug: "realme-gt-5-pro",
    priceNew: "₱34,990 - ₱39,990",
    priceMin: 34990,
    camera: "50MP + 8MP + 50MP",
    battery: "5400mAh",
    chipset: "Snapdragon 8 Gen 3",
    ram: "12GB",
    storage: "256GB",
    display: "6.78-inch LTPO AMOLED",
    network: "5G",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800"
    ],
    pros: ["Flagship chipset at lower price", "100W charging", "Great display", "Good value"],
    cons: ["Ultrawide camera weak", "No wireless charging", "Plastic frame"],
    variants: ["12GB/256GB", "16GB/512GB", "16GB/1TB"],
    specs: {
      general: { "Release Date": "December 2023", "OS": "Android 14, Realme UI 5.0", "Dimensions": "161.7 x 73.5 x 8.8 mm", "Weight": "194g", "Colors": "Rock Grey, Moon White" },
      display: { "Type": "LTPO AMOLED", "Size": "6.78 inches", "Resolution": "1264 x 2780 pixels", "Refresh Rate": "1-144Hz", "Protection": "Corning Gorilla Glass Victus 2" },
      processor: { "Chipset": "Snapdragon 8 Gen 3", "CPU": "Octa-core", "GPU": "Adreno 750" },
      memory: { "RAM": "12GB/16GB", "Internal Storage": "256GB/512GB/1TB", "Card Slot": "No" },
      camera: { "Main": "50MP, f/1.69, OIS", "Ultrawide": "8MP, f/2.2", "Telephoto": "50MP, f/2.0, 3x", "Front": "16MP, f/2.5" },
      battery: { "Capacity": "5400mAh", "Charging": "100W wired", "Reverse Wireless": "No" },
      network: { "5G": "Yes", "4G LTE": "Yes", "Wi-Fi": "Wi-Fi 7", "Bluetooth": "5.4", "NFC": "Yes" },
      features: { "IP Rating": "IP64", "Fingerprint": "Ultrasonic, in-display", "Stereo Speakers": "Yes", "Gaming Mode": "GT Mode 6.0" }
    },
    featured: false,
    trending: true
  },
  {
    id: 7,
    brandSlug: "oneplus",
    brandName: "OnePlus",
    name: "OnePlus 12",
    slug: "oneplus-12",
    priceNew: "₱49,990 - ₱54,990",
    priceMin: 49990,
    camera: "50MP + 48MP + 64MP",
    battery: "5400mAh",
    chipset: "Snapdragon 8 Gen 3",
    ram: "12GB",
    storage: "256GB",
    display: "6.82-inch LTPO AMOLED",
    network: "5G",
    images: [
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800",
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800"
    ],
    pros: ["Hasselblad partnership", "100W wired + 50W wireless", "Excellent display", "OxygenOS smooth"],
    cons: ["No IP68 in all regions", "Large and heavy", "Alert slider removed in some markets"],
    variants: ["12GB/256GB", "16GB/512GB"],
    specs: {
      general: { "Release Date": "January 2024", "OS": "Android 14, OxygenOS 14", "Dimensions": "164.3 x 75.8 x 9.2 mm", "Weight": "220g", "Colors": "Silky Black, Flowy Emerald" },
      display: { "Type": "LTPO AMOLED", "Size": "6.82 inches", "Resolution": "1440 x 3168 pixels", "Refresh Rate": "1-120Hz", "Protection": "Corning Gorilla Glass Victus 2" },
      processor: { "Chipset": "Snapdragon 8 Gen 3", "CPU": "Octa-core", "GPU": "Adreno 750" },
      memory: { "RAM": "12GB/16GB", "Internal Storage": "256GB/512GB", "Card Slot": "No" },
      camera: { "Main": "50MP, f/1.6, OIS, Hasselblad", "Ultrawide": "48MP, f/2.2", "Periscope": "64MP, f/2.6, 3x", "Front": "32MP, f/2.4" },
      battery: { "Capacity": "5400mAh", "Charging": "100W wired, 50W wireless", "Reverse Wireless": "10W" },
      network: { "5G": "Yes", "4G LTE": "Yes", "Wi-Fi": "Wi-Fi 7", "Bluetooth": "5.4", "NFC": "Yes" },
      features: { "Hasselblad": "Yes", "IP Rating": "IP65", "Fingerprint": "Ultrasonic, in-display", "Alert Slider": "Yes", "Stereo Speakers": "Yes" }
    },
    featured: true,
    trending: true
  },
  {
    id: 8,
    brandSlug: "google",
    brandName: "Google",
    name: "Google Pixel 8 Pro",
    slug: "google-pixel-8-pro",
    priceNew: "₱59,990 - ₱69,990",
    priceMin: 59990,
    camera: "50MP + 48MP + 48MP",
    battery: "5050mAh",
    chipset: "Google Tensor G3",
    ram: "12GB",
    storage: "128GB",
    display: "6.7-inch LTPO OLED",
    network: "5G",
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800",
      "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=800"
    ],
    pros: ["7 years of updates", "Best-in-class AI features", "Clean Android experience", "Temperature sensor"],
    cons: ["Tensor chip runs hot", "Slower charging", "Gaming performance"],
    variants: ["12GB/128GB", "12GB/256GB", "12GB/512GB", "12GB/1TB"],
    specs: {
      general: { "Release Date": "October 2023", "OS": "Android 14", "Dimensions": "162.6 x 76.5 x 8.8 mm", "Weight": "213g", "Colors": "Obsidian, Porcelain, Bay" },
      display: { "Type": "LTPO OLED", "Size": "6.7 inches", "Resolution": "1344 x 2992 pixels", "Refresh Rate": "1-120Hz", "Protection": "Corning Gorilla Glass Victus 2" },
      processor: { "Chipset": "Google Tensor G3", "CPU": "9-core", "GPU": "Immortalis-G715" },
      memory: { "RAM": "12GB", "Internal Storage": "128GB/256GB/512GB/1TB", "Card Slot": "No" },
      camera: { "Main": "50MP, f/1.68, OIS", "Ultrawide": "48MP, f/1.95", "Telephoto": "48MP, f/2.8, 5x", "Front": "10.5MP, f/2.2" },
      battery: { "Capacity": "5050mAh", "Charging": "30W wired, 23W wireless", "Reverse Wireless": "Yes" },
      network: { "5G": "Yes", "4G LTE": "Yes", "Wi-Fi": "Wi-Fi 7", "Bluetooth": "5.3", "NFC": "Yes" },
      features: { "Temperature Sensor": "Yes", "IP Rating": "IP68", "Fingerprint": "Optical, in-display", "Face Unlock": "Yes", "Stereo Speakers": "Yes" }
    },
    featured: true,
    trending: false
  },
  {
    id: 9,
    brandSlug: "nothing",
    brandName: "Nothing",
    name: "Nothing Phone (2)",
    slug: "nothing-phone-2",
    priceNew: "₱34,990 - ₱39,990",
    priceMin: 34990,
    camera: "50MP + 50MP",
    battery: "4700mAh",
    chipset: "Snapdragon 8+ Gen 1",
    ram: "12GB",
    storage: "256GB",
    display: "6.7-inch LTPO OLED",
    network: "5G",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800"
    ],
    pros: ["Unique Glyph interface", "Clean software", "Wireless charging", "Premium build"],
    cons: ["No telephoto", "Glyph is gimmicky", "Not the latest chipset"],
    variants: ["8GB/128GB", "12GB/256GB", "12GB/512GB"],
    specs: {
      general: { "Release Date": "July 2023", "OS": "Android 13, Nothing OS 2.0", "Dimensions": "162.1 x 76.4 x 8.6 mm", "Weight": "201g", "Colors": "White, Dark Grey" },
      display: { "Type": "LTPO OLED", "Size": "6.7 inches", "Resolution": "1080 x 2412 pixels", "Refresh Rate": "1-120Hz", "Protection": "Corning Gorilla Glass 5" },
      processor: { "Chipset": "Snapdragon 8+ Gen 1", "CPU": "Octa-core", "GPU": "Adreno 730" },
      memory: { "RAM": "8GB/12GB", "Internal Storage": "128GB/256GB/512GB", "Card Slot": "No" },
      camera: { "Main": "50MP, f/1.88, OIS", "Ultrawide": "50MP, f/2.2", "Front": "32MP, f/2.5" },
      battery: { "Capacity": "4700mAh", "Charging": "45W wired, 15W wireless", "Reverse Wireless": "5W" },
      network: { "5G": "Yes", "4G LTE": "Yes", "Wi-Fi": "Wi-Fi 6", "Bluetooth": "5.3", "NFC": "Yes" },
      features: { "Glyph Interface": "Yes", "IP Rating": "IP54", "Fingerprint": "Optical, in-display", "Face Unlock": "Yes", "Stereo Speakers": "Yes" }
    },
    featured: false,
    trending: true
  },
  {
    id: 10,
    brandSlug: "samsung",
    brandName: "Samsung",
    name: "Samsung Galaxy A55 5G",
    slug: "samsung-galaxy-a55-5g",
    priceNew: "₱24,990 - ₱27,990",
    priceMin: 24990,
    camera: "50MP + 12MP + 5MP",
    battery: "5000mAh",
    chipset: "Exynos 1480",
    ram: "8GB",
    storage: "128GB",
    display: "6.6-inch Super AMOLED",
    network: "5G",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800"
    ],
    pros: ["Great value", "IP67 rating", "4 years of updates", "Super AMOLED display"],
    cons: ["No telephoto", "Slow charging", "Exynos chip in all markets"],
    variants: ["8GB/128GB", "8GB/256GB"],
    specs: {
      general: { "Release Date": "March 2024", "OS": "Android 14, One UI 6.1", "Dimensions": "161.1 x 77.4 x 8.2 mm", "Weight": "213g", "Colors": "Awesome Iceblue, Awesome Lilac, Awesome Lemon, Awesome Navy" },
      display: { "Type": "Super AMOLED", "Size": "6.6 inches", "Resolution": "1080 x 2340 pixels", "Refresh Rate": "120Hz", "Protection": "Corning Gorilla Glass Victus+" },
      processor: { "Chipset": "Exynos 1480", "CPU": "Octa-core", "GPU": "Xclipse 530" },
      memory: { "RAM": "8GB", "Internal Storage": "128GB/256GB", "Card Slot": "Yes, microSDXC" },
      camera: { "Main": "50MP, f/1.8, OIS", "Ultrawide": "12MP, f/2.2", "Macro": "5MP, f/2.4", "Front": "32MP, f/2.2" },
      battery: { "Capacity": "5000mAh", "Charging": "25W wired", "Reverse Wireless": "No" },
      network: { "5G": "Yes", "4G LTE": "Yes", "Wi-Fi": "Wi-Fi 6", "Bluetooth": "5.3", "NFC": "Yes" },
      features: { "IP Rating": "IP67", "Fingerprint": "Optical, in-display", "Samsung Knox": "Yes", "Stereo Speakers": "Yes" }
    },
    featured: false,
    trending: false
  },
  {
    id: 11,
    brandSlug: "xiaomi",
    brandName: "Xiaomi",
    name: "Redmi Note 13 Pro+ 5G",
    slug: "redmi-note-13-pro-plus-5g",
    priceNew: "₱18,990 - ₱21,990",
    priceMin: 18990,
    camera: "200MP + 8MP + 2MP",
    battery: "5000mAh",
    chipset: "MediaTek Dimensity 7200 Ultra",
    ram: "8GB",
    storage: "256GB",
    display: "6.67-inch AMOLED",
    network: "5G",
    images: [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
    ],
    pros: ["200MP camera", "120W fast charging", "Curved display", "IP68 rating"],
    cons: ["No OIS on main camera", "MIUI bloatware", "No wireless charging"],
    variants: ["8GB/256GB", "12GB/512GB"],
    specs: {
      general: { "Release Date": "January 2024", "OS": "Android 13, MIUI 14", "Dimensions": "161.4 x 74.2 x 8.9 mm", "Weight": "204.5g", "Colors": "Midnight Black, Aurora Purple, Ice Blue" },
      display: { "Type": "AMOLED", "Size": "6.67 inches", "Resolution": "1220 x 2712 pixels", "Refresh Rate": "120Hz", "Protection": "Corning Gorilla Glass Victus" },
      processor: { "Chipset": "MediaTek Dimensity 7200 Ultra", "CPU": "Octa-core", "GPU": "Mali-G610 MC4" },
      memory: { "RAM": "8GB/12GB", "Internal Storage": "256GB/512GB", "Card Slot": "No" },
      camera: { "Main": "200MP, f/1.65", "Ultrawide": "8MP, f/2.2", "Macro": "2MP, f/2.4", "Front": "16MP, f/2.5" },
      battery: { "Capacity": "5000mAh", "Charging": "120W wired", "Reverse Wireless": "No" },
      network: { "5G": "Yes", "4G LTE": "Yes", "Wi-Fi": "Wi-Fi 6", "Bluetooth": "5.3", "NFC": "Yes" },
      features: { "IP Rating": "IP68", "Fingerprint": "Optical, in-display", "IR Blaster": "Yes", "Stereo Speakers": "Yes" }
    },
    featured: false,
    trending: true
  },
  {
    id: 12,
    brandSlug: "motorola",
    brandName: "Motorola",
    name: "Motorola Edge 50 Ultra",
    slug: "motorola-edge-50-ultra",
    priceNew: "₱44,990 - ₱49,990",
    priceMin: 44990,
    camera: "50MP + 50MP + 64MP",
    battery: "4500mAh",
    chipset: "Snapdragon 8s Gen 3",
    ram: "16GB",
    storage: "512GB",
    display: "6.7-inch pOLED",
    network: "5G",
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800",
      "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=800"
    ],
    pros: ["Clean Android", "125W charging", "Wood back option", "IP68"],
    cons: ["Curved display", "Smaller battery", "Limited availability"],
    variants: ["16GB/512GB", "16GB/1TB"],
    specs: {
      general: { "Release Date": "May 2024", "OS": "Android 14, Hello UI", "Dimensions": "161.1 x 72.4 x 8.6 mm", "Weight": "197g", "Colors": "Forest Grey, Peach Fuzz, Nordic Wood" },
      display: { "Type": "pOLED", "Size": "6.7 inches", "Resolution": "1220 x 2712 pixels", "Refresh Rate": "144Hz", "Protection": "Corning Gorilla Glass Victus" },
      processor: { "Chipset": "Snapdragon 8s Gen 3", "CPU": "Octa-core", "GPU": "Adreno 735" },
      memory: { "RAM": "16GB", "Internal Storage": "512GB/1TB", "Card Slot": "No" },
      camera: { "Main": "50MP, f/1.6, OIS", "Ultrawide": "50MP, f/2.0", "Telephoto": "64MP, f/2.0, 3x", "Front": "50MP, f/1.9" },
      battery: { "Capacity": "4500mAh", "Charging": "125W wired, 50W wireless", "Reverse Wireless": "10W" },
      network: { "5G": "Yes", "4G LTE": "Yes", "Wi-Fi": "Wi-Fi 7", "Bluetooth": "5.4", "NFC": "Yes" },
      features: { "IP Rating": "IP68", "Fingerprint": "Optical, in-display", "Moto Actions": "Yes", "Stereo Speakers": "Yes" }
    },
    featured: false,
    trending: false
  }
];

export const getMobileBySlug = (slug: string): Mobile | undefined => {
  return mobiles.find(mobile => mobile.slug === slug);
};

export const getMobilesByBrand = (brandSlug: string): Mobile[] => {
  return mobiles.filter(mobile => mobile.brandSlug === brandSlug);
};

export const getFeaturedMobiles = (): Mobile[] => {
  return mobiles.filter(mobile => mobile.featured);
};

export const getTrendingMobiles = (): Mobile[] => {
  return mobiles.filter(mobile => mobile.trending);
};

export const searchMobiles = (query: string): Mobile[] => {
  const lowerQuery = query.toLowerCase();
  return mobiles.filter(mobile => 
    mobile.name.toLowerCase().includes(lowerQuery) ||
    mobile.brandName.toLowerCase().includes(lowerQuery)
  );
};

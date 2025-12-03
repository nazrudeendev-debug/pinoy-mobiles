export interface Brand {
  id: number;
  name: string;
  slug: string;
  logo: string;
  models: number;
  tagline: string;
}

export const brands: Brand[] = [
  { id: 1, name: "Samsung", slug: "samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png", models: 45, tagline: "Do What You Can't" },
  { id: 2, name: "Apple", slug: "apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", models: 28, tagline: "Think Different" },
  { id: 3, name: "Xiaomi", slug: "xiaomi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1024px-Xiaomi_logo_%282021-%29.svg.png", models: 52, tagline: "Innovation for Everyone" },
  { id: 4, name: "OPPO", slug: "oppo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/OPPO_LOGO_2019.svg/1280px-OPPO_LOGO_2019.svg.png", models: 38, tagline: "Inspiration Ahead" },
  { id: 5, name: "Vivo", slug: "vivo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Vivo_logo_2019.svg/1280px-Vivo_logo_2019.svg.png", models: 35, tagline: "Camera & Music" },
  { id: 6, name: "Realme", slug: "realme", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Realme_logo.svg/1280px-Realme_logo.svg.png", models: 42, tagline: "Dare to Leap" },
  { id: 7, name: "OnePlus", slug: "oneplus", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/OnePlus_logo.svg/1280px-OnePlus_logo.svg.png", models: 18, tagline: "Never Settle" },
  { id: 8, name: "Huawei", slug: "huawei", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Huawei_Logo.svg/1280px-Huawei_Logo.svg.png", models: 32, tagline: "Make It Possible" },
  { id: 9, name: "Google", slug: "google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png", models: 12, tagline: "Pixel Perfect" },
  { id: 10, name: "Nothing", slug: "nothing", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Nothing_logo.svg/1280px-Nothing_logo.svg.png", models: 6, tagline: "Less is More" },
  { id: 11, name: "Motorola", slug: "motorola", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Motorola_logo.svg/1280px-Motorola_logo.svg.png", models: 24, tagline: "Hello Moto" },
  { id: 12, name: "ASUS", slug: "asus", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/1280px-ASUS_Logo.svg.png", models: 15, tagline: "In Search of Incredible" },
];

export const getBrandBySlug = (slug: string): Brand | undefined => {
  return brands.find(brand => brand.slug === slug);
};

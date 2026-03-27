// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SanityImageSource = any;

export interface SanitySlug {
  current: string;
}

export interface SanityMenuItem {
  _id: string;
  name: string;
  price: number;
  description: string;
  image?: SanityImageSource;
  isAvailable: boolean;
  dietaryFlags?: string[];
}

export interface SanityMenuSection {
  _id: string;
  name: string;
  tagline?: string;
  sortOrder: number;
  items: SanityMenuItem[];
}

export interface SanityMenuCategory {
  _id: string;
  name: string;
  slug: SanitySlug;
  description: string;
  icon?: SanityImageSource;
  heroImage?: SanityImageSource;
  sortOrder: number;
  metaTitle?: string;
  metaDescription?: string;
  sections: SanityMenuSection[];
}

export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: SanitySlug;
  publishedAt: string;
  mainImage?: SanityImageSource;
  excerpt?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any[];
  tags?: string[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface SanityTestimonial {
  _id: string;
  quote: string;
  author: string;
  source: string;
  rating: number;
  sortOrder: number;
}

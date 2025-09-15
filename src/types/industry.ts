export interface Industry {
  id: number;
  name: string;
  slug: string;
  description: string;
  images: string[];
  image_alt_texts: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
  author_name: string;
  author_email: string;
  meta_title: string;
  meta_description: string;
  og_image: string;
  canonical_url: string;
}

export interface IndustryApiResponse {
  message: string;
  data: Industry;
}

export interface IndustriesApiResponse {
  message: string;
  data: Industry[];
} 
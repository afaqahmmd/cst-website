export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  images: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
  author_name: string;
  author_email: string;
  meta_title: string | null;
  meta_description: string | null;
  og_image: string;
  canonical_url: string;
}

export interface ServicesApiResponse {
  message: string;
  data: Service[];
}

export interface ServiceApiResponse {
  message: string;
  data: Service;
} 
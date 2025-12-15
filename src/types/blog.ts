export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: {
    id: number;
    image: string;
    alt_text: string;
  } | null;
  tags: string[];
  is_published: boolean;
  created_at: string;
  created_by: string | null;
  updated_at?: string;
  content?: string;
  meta_title?: string | null;
  meta_description?: string | null;
}

export interface BlogApiResponse {
  message: string;
  results: Blog;
}

export interface BlogsApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Blog[];
}

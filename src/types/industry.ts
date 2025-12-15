export interface IndustryImage {
  id: number;
  image: string;
  alt_text: string;
}

export interface ProjectsStat {
  name: string;
  count: number;
}

export interface ChallengeSection {
  title: string;
  items: string[];
}

export interface ExpertiseSubSection {
  image: string;
  title: string;
  description: string;
  image_alt_text: string;
}

export interface ExpertiseSection {
  title: string;
  skills: string[];
  summary: string;
  description: string;
  sub_sections: ExpertiseSubSection[];
}

export interface WhatSetsUsApartSubSection {
  image: string;
  title: string;
  description: string;
  image_alt_text: string;
}

export interface WhatSetsUsApartSection {
  title: string;
  points: string[];
  description: string;
  sub_sections: WhatSetsUsApartSubSection[];
}

export interface WeBuildSection {
  title: string;
  description: string;
  sub_sections: string[];
  [key: string]: any;
}

export interface Industry {
  id: number;
  title: string;
  slug: string;
  description?: string;
  industry_category: string;
  category_icon: IndustryImage | null;
  hero_image: IndustryImage;
  meta_title: string;
  meta_description: string;
  projects_count: number;
  reviews_count: number;
  industries_count: number;
  is_published: boolean;
  created_at: string;
  updated_at?: string;
  tags: string[];
  created_by?: number;
  
  // Detail page sections
  projects_stats_section?: ProjectsStat[];
  challenge_section?: ChallengeSection;
  expertise_section?: ExpertiseSection;
  what_sets_us_apart_section?: WhatSetsUsApartSection;
  we_build_section?: WeBuildSection;
  
  // Legacy fields for backward compatibility
  name?: string;
  images?: string[];
  image_alt_texts?: string[];
  is_active?: boolean;
  author_name?: string;
  author_email?: string;
  og_image?: string;
  canonical_url?: string;
}

export interface IndustryApiResponse {
  message?: string;
  data?: Industry;
}

export interface IndustriesApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Industry[];
  // Legacy format
  message?: string;
  data?: Industry[];
}
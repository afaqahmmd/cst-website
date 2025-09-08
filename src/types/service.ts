export interface ServiceSection {
  title: string;
  description: string;
  sub_sections: Array<{
    title?: string;
    description?: string;
    name?: string;
    summary?: string;
    experience?: string;
    designation?: string;
    stars?: number;
    comment?: string;
  }>;
}

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
  sections?: {
    hero_section?: ServiceSection;
    about_section?: ServiceSection;
    why_choose_us_section?: ServiceSection;
    what_we_offer_section?: ServiceSection;
    perfect_business_section?: ServiceSection;
    design_section?: ServiceSection;
    team_section?: ServiceSection;
    tools_used_section?: ServiceSection;
    client_feedback_section?: ServiceSection;
  };
}

export interface ServicesApiResponse {
  message: string;
  data: Service[];
}

export interface ServiceApiResponse {
  message: string;
  data: Service;
} 
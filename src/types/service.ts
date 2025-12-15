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
  name: string;
  slug: string;
  description: string;
  projects_delivered: number;
  clients_satisfaction: number;
  bullet_points: string[];
  icon: {
    id: number;
    image: string;
    alt_text: string;
  };
  hero_image: {
    id: number;
    image: string;
    alt_text: string;
  };
  is_published: boolean;
  created_at: string;
  updated_at: string;
  created_by: number;
  meta_title: string;
  meta_description: string;
  
  // About section fields
  about_title?: string;
  about_description?: string;
  about_subsections?: Array<{
    icon: string;
    title: string;
    alt_text: string;
    description: string;
  }>;
  
  // Why choose section fields
  why_choose_title?: string;
  why_choose_description?: string;
  why_choose_subsections?: Array<{
    icon: string;
    title: string;
    alt_text: string;
    description: string;
  }>;
  
  // What we offer section fields
  what_we_offer_title?: string;
  what_we_offer_description?: string;
  what_we_offer_subsections?: Array<{
    icon: string;
    title: string;
    alt_text: string;
    points: string[];
  }>;
  
  // Business section fields
  business_title?: string;
  business_description?: string;
  business_subsections?: Array<{
    icon: string;
    title: string;
    alt_text: string;
    description: string;
  }>;
  
  // Design process section fields
  design_process_title?: string;
  design_process_description?: string;
  design_process_subsections?: Array<{
    title: string;
    description: string;
  }>;
  
  // Design team section fields
  design_team_title?: string;
  design_team_description?: string;
  design_team_subsections?: Array<{
    name: string;
    image: string;
    summary: string;
    alt_text: string;
    experience: string;
    designation: string;
  }>;
  design_team_image?: string | null;
  
  // Meet design team section fields
  meet_design_team_title?: string;
  meet_design_team_description?: string;
  meet_design_team_subsections?: Array<{
    name: string;
    image: string;
    summary: string;
    alt_text: string;
    experience: string;
    designation: string;
  }>;
  
  // Tools section fields
  tools_title?: string;
  tools_description?: string;
  tools_subsections?: Array<{
    title: string;
    points: string[];
  }>;
  
  // Testimonials
  testimonials?: Array<{
    name: string;
    image: string;
    stars: number;
    comment: string;
    alt_text: string;
    designation: string;
  }>;
  
  // Legacy fields for backward compatibility
  title?: string;
  features?: string[];
  images?: string[];
  is_active?: boolean;
  author_name?: string;
  author_email?: string;
  og_image?: string;
  canonical_url?: string;
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
  count: number;
  next: string | null;
  previous: string | null;
  results: Service[];
  // Legacy format
  message?: string;
  data?: Service[];
}

export interface ServiceApiResponse {
  message: string;
  data: Service;
}
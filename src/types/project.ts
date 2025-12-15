// Image object structure used across project
export interface ProjectImage {
  id: number;
  image: string;
  alt_text: string;
}

// Project Goal Content Item
export interface ProjectGoalContentItem {
  goal: string;
  icon: string;
  alt_text: string;
}

// Project Goal Section Item
export interface ProjectGoalSectionItem {
  title: string;
  desc: string;
  points: string[];
}

// Project Goal Section
export interface ProjectGoalSection {
  intro: string;
  items: ProjectGoalSectionItem[];
}

// Technology Content Icon
export interface TechnologyIcon {
  url: string;
  alt_text: string;
}

// Technology Content Item
export interface TechnologyContentItem {
  name: string;
  icons: TechnologyIcon[];
}

// Base Project for list view
export interface Project {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  hero_image: ProjectImage | null;
  is_published: boolean;
  created_at: string;
  tags: string[];
}

// Full Project details for single project view
export interface ProjectDetail extends Project {
  updated_at: string;
  icons: ProjectImage[];
  services_used: any[];
  meta_title: string;
  meta_description: string;
  challenge_title: string;
  challenge_description: string;
  project_goal_title: string;
  project_goal_content: ProjectGoalContentItem[];
  project_goal_section: ProjectGoalSection | null;
  technology_title: string;
  technology_description: string;
  technology_content: TechnologyContentItem[];
  technology_section: any | null;
  created_by: number | null;
  industry: any | null;
}

// API Response for projects list
export interface ProjectsApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Project[];
}

// API Response for single project
export interface ProjectApiResponse {
  data: ProjectDetail;
}
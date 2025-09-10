export interface ProjectTag {
  id: number;
  name: string;
}

export interface ProjectHeroSection {
  title: string;
  description: string;
  sub_sections: Array<{
    image?: string;
  }>;
  hero_main_image: string;
}

export interface ProjectAboutSection {
  title: string;
  description: string;
  sub_sections: any[];
}

export interface ProjectGoalsSubSection {
  image?: string;
  title?: string;
}

export interface ProjectApproach {
  title: string;
  description: string;
  additional_info: string[];
}

export interface ProjectGoalsSection {
  title: string;
  description: string;
  sub_sections: ProjectGoalsSubSection[];
  approaches: ProjectApproach[];
}

export interface ProjectTechnologySubSection {
  title: string;
  images: string[];
  description: string;
}

export interface ProjectTechnologiesSection {
  title: string;
  description: string;
  sub_sections: ProjectTechnologySubSection[];
}

export interface ProjectServiceSubSection {
  title: string;
  description: string;
  additional_info: string[];
}

export interface ProjectServicesSection {
  title: string;
  description: string;
  sub_sections: ProjectServiceSubSection[];
}

export interface ProjectSections {
  hero_section: ProjectHeroSection;
  about_section: ProjectAboutSection;
  project_goals_section: ProjectGoalsSection;
  technologies_used_section: ProjectTechnologiesSection;
  services_provided_section: ProjectServicesSection;
}

export interface Project {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  published: boolean;
  created_at: string;
  updated_at: string;
  tags: ProjectTag[];
  author_email: string;
  canonical_url: string;
  sections?: ProjectSections;
}

export interface ProjectsApiResponse {
  message: string;
  data: Project[];
}

export interface ProjectApiResponse {
  message: string;
  data: Project;
} 
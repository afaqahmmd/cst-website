# Projects Components

This directory contains the refactored components for the projects page, broken down from the original monolithic page component.

## Components

### ProjectsHeroSection

- Displays the hero section with title and subtitle
- Uses the existing HeroSection component with project-specific content

### FeaturedProjectSection

- Shows the featured project with large banner image
- Contains static content for the design showcase

### RecentProjectsSection

- Displays the most recent projects
- Shows the first project in a large format
- Displays the next 3 projects in a grid layout
- Accepts projects data as props

### PopularProjectsSection

- Shows popular projects in a grid layout
- Displays projects 2-7 from the data
- Accepts projects data as props

### ProjectCard

- Reusable card component for individual projects
- Displays project image, tags, date, title, description, and read more button
- Handles proper image optimization and responsive design

## Usage

The main page component now uses these smaller components:

```tsx
import {
  ProjectsHeroSection,
  FeaturedProjectSection,
  RecentProjectsSection,
  PopularProjectsSection,
} from "@/components/projects";

// In the page component
<ProjectsHeroSection />
<FeaturedProjectSection />
<RecentProjectsSection projects={projectsData} />
<PopularProjectsSection projects={projectsData} />
```

## Benefits

1. **Modularity**: Each section is now a separate, reusable component
2. **Maintainability**: Easier to update individual sections
3. **Server-Side Rendering**: The page is now SSR-compatible
4. **Performance**: Better code splitting and loading
5. **Reusability**: Components can be used in other parts of the application

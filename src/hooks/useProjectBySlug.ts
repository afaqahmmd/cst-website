import { useQuery } from "@tanstack/react-query";
import { fetchProjects, fetchProjectById } from "@/lib/api";
import { Project } from "@/types/project";

export function useProjectBySlug(slug: string) {
  // First, fetch all projects to find the one with matching slug
  const { data: projectsData, isLoading: isLoadingProjects, error: projectsError } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 5, // 5 minutes caching
  });
  console.log("projects data in useProjectBySlug", projectsData);
  
  // Find the project with matching slug from results array
  const projects = projectsData?.results || [];
  const projectFromSlug = projects.find((project: Project) => project.slug === slug);
  console.log("project from slug", projectFromSlug);
  
  // If we found a project with matching slug, fetch its full details by ID
  const { data: projectData, isLoading: isLoadingProject, error: projectError } = useQuery({
    queryKey: ["project", projectFromSlug?.id],
    queryFn: () => {
      if (!projectFromSlug?.id) {
        throw new Error("Project ID not found");
      }
      return fetchProjectById(projectFromSlug.id);
    },
    enabled: !!projectFromSlug?.id, // Only run if we have a project ID
    staleTime: 1000 * 60 * 5, // 5 minutes caching
  });

  return {
    project: projectData || null,
    isLoading: isLoadingProjects || isLoadingProject,
    error: projectsError || projectError,
    notFound: !isLoadingProjects && !projectsError && !projectFromSlug,
  };
}

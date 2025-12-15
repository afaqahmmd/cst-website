import { useQuery } from "@tanstack/react-query";
import { fetchIndustries, fetchIndustryById } from "@/lib/api";
import { Industry } from "@/types/industry";

export function useIndustryBySlug(slug: string) {
  // First, fetch all industries to find the one with matching slug
  const { data: industriesData, isLoading: isLoadingIndustries, error: industriesError } = useQuery({
    queryKey: ["industries"],
    queryFn: fetchIndustries,
    staleTime: 1000 * 60 * 5, // 5 minutes caching
  });

  // Find the industry with matching slug from the results array
  const industryFromSlug = (industriesData?.results || industriesData?.data || [])
    .find((industry: Industry) => industry.slug === slug);

  // If we found an industry with matching slug, fetch its full details by ID
  const { data: industryData, isLoading: isLoadingIndustry, error: industryError } = useQuery({
    queryKey: ["industry", industryFromSlug?.id],
    queryFn: () => {
      if (!industryFromSlug?.id) {
        throw new Error("Industry ID not found");
      }
      return fetchIndustryById(industryFromSlug.id);
    },
    enabled: !!industryFromSlug?.id, // Only run if we have an industry ID
    staleTime: 1000 * 60 * 5, // 5 minutes caching
  });

  // The API returns the industry object directly
  const industry: Industry | null = industryData || null;

  return {
    industry,
    isLoading: isLoadingIndustries || isLoadingIndustry,
    error: industriesError || industryError,
    notFound: !isLoadingIndustries && !industriesError && !industryFromSlug,
  };
}
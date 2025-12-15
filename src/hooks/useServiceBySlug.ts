import { useQuery } from "@tanstack/react-query";
import { fetchServices, fetchServiceById } from "@/lib/api";
import { Service } from "@/types/service";

export function useServiceBySlug(slug: string) {
  // First, fetch all services to find the one with matching slug
  const { data: servicesData, isLoading: isLoadingServices, error: servicesError } = useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
    staleTime: 1000 * 60 * 5, // 5 minutes caching
  });

  // Find the service with matching slug from results
  const serviceFromSlug = servicesData?.results?.find((service: Service) => service.slug === slug);

  // If we found a service with matching slug, fetch its full details by ID
  const { data: serviceData, isLoading: isLoadingService, error: serviceError } = useQuery({
    queryKey: ["service", serviceFromSlug?.id],
    queryFn: () => {
      if (!serviceFromSlug?.id) {
        throw new Error("Service ID not found");
      }
      return fetchServiceById(serviceFromSlug.id);
    },
    enabled: !!serviceFromSlug?.id, // Only run if we have a service ID
    staleTime: 1000 * 60 * 5, // 5 minutes caching
  });

  return {
    service: serviceData || null,
    isLoading: isLoadingServices || isLoadingService,
    error: servicesError || serviceError,
    notFound: !isLoadingServices && !servicesError && !serviceFromSlug,
  };
}
import { useQuery } from "@tanstack/react-query";
import { fetchServices } from "@/lib/api";

export function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
    staleTime: 1000 * 60 * 5, // 5 minutes caching
  });
} 
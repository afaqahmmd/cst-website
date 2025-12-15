import { useQuery } from "@tanstack/react-query";
import { fetchIndustries } from "@/lib/api";

export function useIndustries() {
  return useQuery({
    queryKey: ["industries"],
    queryFn: fetchIndustries,
    staleTime: 1000 * 60, // 1 min caching
  });
}

// SSR version for server components
export async function getIndustriesSSR() {
  const { fetchIndustriesSSR } = await import("@/lib/api-ssr");
  return fetchIndustriesSSR();
}

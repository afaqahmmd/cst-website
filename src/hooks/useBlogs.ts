import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "@/lib/api";

export function useBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    staleTime: 1000 * 60, // 1 min caching
  });
}

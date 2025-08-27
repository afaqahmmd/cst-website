import { useQuery } from "@tanstack/react-query";
import { fetchBlogs, fetchBlogById } from "@/lib/api";
import { Blog } from "@/types/blog";

export function useBlogBySlug(slug: string) {
  // First, fetch all blogs to find the one with matching slug
  const { data: blogsData, isLoading: isLoadingBlogs, error: blogsError } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    staleTime: 1000 * 60 * 5, // 5 minutes caching
  });

  // Find the blog with matching slug
  const blogFromSlug = blogsData?.data?.find((blog: Blog) => blog.slug === slug);

  // If we found a blog with matching slug, fetch its full details by ID
  const { data: blogData, isLoading: isLoadingBlog, error: blogError } = useQuery({
    queryKey: ["blog", blogFromSlug?.id],
    queryFn: () => {
      if (!blogFromSlug?.id) {
        throw new Error("Blog ID not found");
      }
      return fetchBlogById(blogFromSlug.id);
    },
    enabled: !!blogFromSlug?.id, // Only run if we have a blog ID
    staleTime: 1000 * 60 * 5, // 5 minutes caching
  });

  return {
    blog: blogData?.data || null,
    isLoading: isLoadingBlogs || isLoadingBlog,
    error: blogsError || blogError,
    notFound: !isLoadingBlogs && !blogsError && !blogFromSlug,
  };
} 
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs, fetchBlogById } from "@/lib/api";
import { Blog } from "@/types/blog";

export function useBlogBySlug(slug: string) {
  console.log('useBlogBySlug called with slug:', slug);
  
  // First, fetch all blogs to find the one with matching slug
  const { data: blogsData, isLoading: isLoadingBlogs, error: blogsError } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      console.log('Fetching blogs...');
      try {
        const data = await fetchBlogs();
        console.log('Fetched blogs data:', data);
        return data;
      } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes caching
  });
  
  console.log('Blogs query state:', { blogsData, isLoadingBlogs, blogsError });

  // Find the blog with matching slug from the results array
  const blogFromSlug = blogsData?.results?.find((blog: Blog) => {
    console.log('Checking blog:', { id: blog.id, slug: blog.slug, targetSlug: slug });
    return blog.slug === slug;
  });
  
  console.log('Found blog by slug:', blogFromSlug);

  // If we found a blog with matching slug, fetch its full details by ID
  const { data: blogData, isLoading: isLoadingBlog, error: blogError } = useQuery({
    queryKey: ["blog", blogFromSlug?.id],
    queryFn: async () => {
      if (!blogFromSlug?.id) {
        const error = new Error("Blog ID not found");
        console.error('Blog ID not found for slug:', slug);
        throw error;
      }
      console.log('Fetching full blog details for ID:', blogFromSlug.id);
      try {
        const data = await fetchBlogById(blogFromSlug.id);
        console.log('Fetched blog details:', data);
        return data;
      } catch (error) {
        console.error('Error fetching blog details:', error);
        throw error;
      }
    },
    enabled: !!blogFromSlug?.id, // Only run if we have a blog ID
    staleTime: 1000 * 60 * 5, // 5 minutes caching
  });
  
  console.log('Blog details query state:', { blogData, isLoadingBlog, blogError });

  const result = {
    blog: blogData || null, // The API returns the blog object directly
    isLoading: isLoadingBlogs || isLoadingBlog,
    error: blogsError || blogError,
    notFound: !isLoadingBlogs && !blogsError && !blogFromSlug,
  };
  
  console.log('useBlogBySlug returning:', {
    ...result,
    blog: result.blog ? { ...result.blog, content: result.blog.content ? '[content exists]' : '[no content]' } : null
  });
  
  return result;
}
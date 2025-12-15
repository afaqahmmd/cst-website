// Test file to verify Blogs SSR implementation
// This demonstrates how the SSR version works with pagination and search

import { fetchBlogsSSR, withSSRErrorHandling } from "@/lib/api-ssr";

// Example of how the SSR version works
export async function testBlogsSSR() {
  console.log("Testing SSR Blogs Section...");

  try {
    // Test the SSR API call with pagination
    const { data: blogsData, error } = await withSSRErrorHandling(() => fetchBlogsSSR(1, 10, ""));

    if (error) {
      console.error("SSR Error:", error);
      return { success: false, error };
    }

    console.log("SSR Success - Blogs data:", {
      hasData: !!blogsData?.data,
      dataLength: blogsData?.data?.length,
      pagination: blogsData?.pagination,
      firstBlog: blogsData?.data?.[0],
    });

    return {
      success: true,
      data: blogsData,
      blogsCount: blogsData?.data?.length || 0,
      pagination: blogsData?.pagination,
    };
  } catch (error) {
    console.error("SSR Test failed:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

// Test with search
export async function testBlogsSSRWithSearch(searchQuery: string) {
  console.log(`Testing SSR Blogs with search: "${searchQuery}"`);

  try {
    const { data: blogsData, error } = await withSSRErrorHandling(() =>
      fetchBlogsSSR(1, 10, searchQuery)
    );

    if (error) {
      console.error("SSR Search Error:", error);
      return { success: false, error };
    }

    console.log("SSR Search Success:", {
      searchQuery,
      hasData: !!blogsData?.data,
      dataLength: blogsData?.data?.length,
      pagination: blogsData?.pagination,
    });

    return {
      success: true,
      data: blogsData,
      blogsCount: blogsData?.data?.length || 0,
      pagination: blogsData?.pagination,
    };
  } catch (error) {
    console.error("SSR Search Test failed:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

// Example usage in a server component
export async function BlogsSSRExample() {
  const { data: blogsData, error } = await withSSRErrorHandling(() => fetchBlogsSSR(1, 10, ""));

  if (error) {
    return <div>Error: {error}</div>;
  }

  const blogs = blogsData?.data || [];
  const pagination = blogsData?.pagination;

  return (
    <div>
      <h2>Blogs (SSR)</h2>
      <p>Found {blogs.length} blogs</p>
      {pagination && (
        <p>
          Page {pagination.current_page} of {pagination.total_pages}
        </p>
      )}
      {blogs.map((blog: any) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.excerpt}</p>
        </div>
      ))}
    </div>
  );
}

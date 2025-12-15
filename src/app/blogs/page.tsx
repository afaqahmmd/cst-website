import { fetchBlogsSSR } from "@/lib/api-ssr";
import { Blog, BlogsApiResponse } from "@/types/blog";
import InfoSection from "@/components/InfoSection/InfoSection";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import Footer from "@/components/Footer/Footer";
import { BlogsHeader, BlogsSectionHeader, BlogsClientWrapper } from "@/components/blogs";
import { Metadata } from "next";

// Force dynamic rendering to always fetch fresh data from CMS
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface BlogsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function getBlogs(
  page: number = 1,
  search?: string,
  tags?: string[]
): Promise<{ blogs: Blog[]; pagination: any; tags: string[] }> {
  try {
    const response: BlogsApiResponse = await fetchBlogsSSR(page, 9, search, tags);
    console.log("blogs response", response);

    // Extract blogs and pagination info
    const blogs = response.results || [];

    // Calculate pagination from API response
    const perPage = 9;
    const totalCount = response.count || blogs.length;
    const totalPages = Math.ceil(totalCount / perPage);

    const pagination = {
      current_page: page,
      total_pages: totalPages,
      total_count: totalCount,
      per_page: perPage,
      has_next: !!response.next,
      has_previous: !!response.previous,
    };

    // Get unique tags from all blogs (we might need to fetch all blogs for tags)
    const allTags = new Set<string>();
    blogs.forEach((blog) => {
      if (blog.tags && Array.isArray(blog.tags)) {
        blog.tags.forEach((tag: string) => {
          allTags.add(tag);
        });
      }
    });

    return {
      blogs,
      pagination,
      tags: ["All", ...Array.from(allTags).sort()],
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      blogs: [],
      pagination: {
        current_page: 1,
        total_pages: 1,
        total_count: 0,
        per_page: 9,
        has_next: false,
        has_previous: false,
      },
      tags: ["All"],
    };
  }
}

export async function generateMetadata({ searchParams }: BlogsPageProps): Promise<Metadata> {
  const params = await searchParams;
  const searchQuery = typeof params.search === "string" ? params.search : "";
  const page = typeof params.page === "string" ? parseInt(params.page) : 1;

  const title = searchQuery
    ? `Search Results for "${searchQuery}" - Blogs | Cortechsols`
    : page > 1
    ? `Blogs - Page ${page} | Cortechsols`
    : "Blogs | Cortechsols";

  const description = searchQuery
    ? `Find articles and insights about "${searchQuery}" on our blog. Discover the latest trends, tips, and solutions.`
    : "Discover the latest insights, trends, and solutions in technology. Read our expert blog posts covering various topics and industries.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const params = await searchParams;
  const page = typeof params.page === "string" ? parseInt(params.page) || 1 : 1;
  const searchQuery = typeof params.search === "string" ? params.search : "";
  const selectedTag = typeof params.tag === "string" ? params.tag : "All";
  
  // Support multiple tags from URL
  const tagParam = params.tag;
  const selectedTags = Array.isArray(tagParam) 
    ? tagParam.filter(t => t && t !== "All") 
    : (tagParam && tagParam !== "All" ? [tagParam] : []);

  const { blogs, pagination, tags } = await getBlogs(page, searchQuery, selectedTags);

  return (
    <div className='w-full h-fit'>
      <BlogsHeader />

      {/* Our Blogs Section */}
      <div id='our-blog-parent' className='flex flex-col items-center relative w-full mt-24'>
        <BlogsSectionHeader />

        {/* Client-side search, filtering, and pagination */}
        <BlogsClientWrapper
          initialBlogs={blogs}
          initialPagination={pagination}
          initialTags={tags}
        />

        {/* info section */}
        <InfoSection
          title="Let's build something that matters"
          subText="Have a project or an idea? Let's turn it into a digital experience people will remember"
        />

        {/* stay in loop */}
        <StayInLoop />

        {/* footer */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

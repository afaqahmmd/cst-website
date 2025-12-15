"use client";

import Image from "next/image";
import { useBlogBySlug } from "@/hooks/useBlogBySlug";
import { useEffect, use, useState } from "react";
import InfoSection from "@/components/InfoSection/InfoSection";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import { generateJsonLd } from "@/utils/structuredData";
import { useProjects } from "@/hooks/useProjects";
import { useBlogs } from "@/hooks/useBlogs";
import { Blog } from "@/types/blog";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  console.log('BlogPostPage rendering with params:', params);
  const router = useRouter();
  const { slug } = use(params);
  console.log('Resolved slug:', slug);

  const { blog, isLoading, error, notFound } = useBlogBySlug(slug);
  console.log('Blog data from useBlogBySlug:', {
    blog: blog ? { ...blog, content: blog.content ? '[content exists]' : '[no content]' } : null,
    isLoading,
    error,
    notFound
  });
  const [structuredData, setStructuredData] = useState<any>(null);
  const { data: projectsResponse, isLoading: projectsLoading, error: projectsError } = useProjects();
  // Projects API returns paginated response with results array
  const projectsData = projectsResponse?.results || projectsResponse?.data || [];
  
  // Fetch blogs data
  const { data: blogsData } = useBlogs();
  const blogs: Blog[] = blogsData?.results || blogsData?.data || blogsData?.blogs || [];
  
  console.log('Projects data:', { projectsData, isLoading: projectsLoading, error: projectsError });
  // Update structured data when blog data changes
  useEffect(() => {
    if (blog) {
      console.log("current blog", blog);
      setStructuredData(generateJsonLd("Blog", blog));
    }
  }, [blog]);

  // Simple date formatter
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return '';
    }
  };

  // Function to get author name
  const getAuthorName = (name: string | null) => {
    if (!name) return "Anonymous";
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  // Loading state
  if (isLoading) {
    console.log('Blog is loading...');
    return <div>Loading...</div>;
  }

  if (!blog) {
    console.log('No blog data available');
    return <div>No blog data available</div>;
  }

  // Error state
  if (error) {
    console.log('Error occurred while fetching blog data:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-lg">Error: {error.message}</div>
      </div>
    );
  }

  if (notFound) {
    console.log('Blog post not found for slug:', slug);
    return <div>Blog post not found</div>;
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className='w-full bg-white'>
        <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12'>
          {/* Header */}
          <header className='mb-12'>
            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className='flex justify-start flex-wrap gap-4 mb-6'>
                {blog.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    style={{
                      color: index % 2 === 0 ? '#6941C6' : '#1D76F1'
                    }}
                    className='text-xs font-medium'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Date & Time */}
            {blog.created_at && (
              <div className='text-sm text-gray-500 mb-4 font-roboto'>
                <span className='text-[#999999] text-[14px] font-[500] leading-[150%]'>
                  {formatDate(blog.created_at)}
                </span>
                {' '}
                <span className='text-[#333333] text-[14px] font-[700] leading-[150%] ml-3'>
                  {new Date(blog.created_at).toLocaleTimeString('en-US', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    hour12: true 
                  })}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className='text-4xl md:text-5xl text-left font-bold text-gray-900 leading-tight mb-6'>
              {blog.title}
            </h1>

            {/* Excerpt */}
            {blog.excerpt && (
              <div className='prose max-w-none text-xl text-left text-gray-600 leading-relaxed mb-6'>
                {blog.excerpt}
              </div>
            )}
          </header>

          {/* Featured Image */}
          {blog.featured_image && (
            <div className='mb-16'>
              <div className='relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl'>
                <img
                  src={blog.featured_image.image}
                  alt={blog.featured_image.alt_text || blog.title}
                  className='w-full h-full object-cover'
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
              </div>
            </div>
          )}

          {/* Main Content - Render HTML content */}
          {blog.content && (
            <div className='mx-auto py-12'>
              <style jsx global>{`
                /* Heading styles h1-h6 */
                .prose h1 {
                  font-size: 2.5rem !important;
                  font-weight: 700 !important;
                  color: #111827 !important;
                  margin-top: 2rem !important;
                  margin-bottom: 1rem !important;
                  line-height: 1.2 !important;
                }
                .prose h2 {
                  font-size: 2rem !important;
                  font-weight: 700 !important;
                  color: #111827 !important;
                  margin-top: 1.75rem !important;
                  margin-bottom: 0.875rem !important;
                  line-height: 1.25 !important;
                }
                .prose h3 {
                  font-size: 1.5rem !important;
                  font-weight: 600 !important;
                  color: #1f2937 !important;
                  margin-top: 1.5rem !important;
                  margin-bottom: 0.75rem !important;
                  line-height: 1.3 !important;
                }
                .prose h4 {
                  font-size: 1.25rem !important;
                  font-weight: 600 !important;
                  color: #1f2937 !important;
                  margin-top: 1.25rem !important;
                  margin-bottom: 0.625rem !important;
                  line-height: 1.4 !important;
                }
                .prose h5 {
                  font-size: 1.125rem !important;
                  font-weight: 600 !important;
                  color: #374151 !important;
                  margin-top: 1rem !important;
                  margin-bottom: 0.5rem !important;
                  line-height: 1.5 !important;
                }
                .prose h6 {
                  font-size: 1rem !important;
                  font-weight: 600 !important;
                  color: #374151 !important;
                  margin-top: 1rem !important;
                  margin-bottom: 0.5rem !important;
                  line-height: 1.5 !important;
                }
                blockquote {
                  border-left: 4px solid #FFAB40 !important;
                  padding: 1rem 1.5rem !important;
                  margin: 2rem 1.5rem !important;
                  font-style: italic;
                  color: #4b5563;
                }
                .prose img,
                .prose figure {
                  margin-left: auto !important;
                  margin-right: auto !important;
                  display: block !important;
                }
                .prose figure {
                  text-align: center;
                }
                .prose ul {
                  list-style-type: disc !important;
                  padding-left: 2rem !important;
                  margin-top: 1rem !important;
                  margin-bottom: 1rem !important;
                }
                .prose ol {
                  list-style-type: decimal !important;
                  padding-left: 2rem !important;
                  margin-top: 1rem !important;
                  margin-bottom: 1rem !important;
                }
                .prose ul li,
                .prose ol li {
                  margin-top: 0.5rem !important;
                  margin-bottom: 0.5rem !important;
                  padding-left: 0.5rem !important;
                  line-height: 1.75 !important;
                }
                .prose ul li::marker {
                  color: #374151 !important;
                }
                .prose ol li::marker {
                  color: #374151 !important;
                  font-weight: 600 !important;
                }
              `}</style>
              <div 
                className='prose prose-lg max-w-none text-gray-700 leading-relaxed'
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          )}

          {/* related projects */}
          <div className='flex flex-col w-full max-w-8xl mx-auto mt-16'>
            {/* header title and button */}
            <div className='flex justify-between items-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Related Projects</h2>
              <Link href='/projects'>
                <button className='cursor-pointer bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-sm text-sm transition-colors duration-200'>
                  View All
                </button>
              </Link>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projectsData &&
                projectsData.slice(0, 6).map((project: any, index: number) => (
                  <Link href={`/projects/${project.slug}`} key={index} className='bg-white rounded-2xl overflow-hidden group flex flex-col h-full'>
                    {/* Project Image */}
                    <div className='relative aspect-[400/360] overflow-hidden rounded-b-2xl bg-gray-50'>
                      <Image
                        src={project.hero_image?.image || project.image || '/placeholder.svg'}
                        alt={project.hero_image?.alt_text || project.title || 'Project image'}
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        className='object-cover transition-transform duration-300 group-hover:scale-105'
                        priority={index < 3}
                      />
                    </div>

                    {/* Content */}
                    <div className='p-6 px-1 flex flex-col flex-1 w-full'>
                      {/* Tags */}
                      {project.tags?.length > 0 && (
                        <div className='flex flex-wrap gap-4 mb-4'>
                          {project.tags.slice(0, 2).map((tag: string | { id: number; name: string }, tagIndex: number) => (
                            <span
                              key={tagIndex}
                              className={`${tagIndex % 2 === 0 ? "text-[#6941C6]" : "text-[#1D76F1]"
                                } font-medium text-sm`}
                            >
                              {typeof tag === 'string' ? tag : tag.name}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Date */}
                      {project.created_at && (
                        <div className='text-sm text-gray-500 mb-4 font-roboto'>
                          <span>{formatDate(project.created_at)}</span>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className='text-xl font-semibold line-clamp-2 text-gray-900 mb-3'>
                        {project.title || project.name || 'Untitled Project'}
                      </h3>

                      {/* Description */}
                      <p className='text-gray-600 leading-relaxed mb-6 line-clamp-3 flex-1'>
                        {project.excerpt || project.description || 'No description available'}
                      </p>

                      {/* Read More Button */}
                      <button className='cursor-pointer hover:bg-gray-100 border border-[#20C5BA] text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200 inline-flex justify-center items-center self-start'>
                        Read More
                      </button>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* popular posts */}
          {blogs && blogs.length > 0 && (
            <div className="flex flex-col w-full mt-16">
              {/* Header */}
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Popular Post
                </h2>
                <Link href="/blogs">
                  <button className="cursor-pointer bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-sm text-sm transition-colors duration-200">
                    View All
                  </button>
                </Link>
              </div>

              {/* Horizontally Scrollable Posts */}
              <div className="overflow-x-auto scrollbar-hide -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
                <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
                  {blogs.slice(0, 6).map((post: Blog) => (
                    <Link
                      href={`/blogs/${post.slug}`}
                      key={post.id}
                      className="bg-white w-80 flex-shrink-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-[430px]"
                    >
                      {/* Post Image */}
                      <div className="relative w-full h-48 bg-gray-100 rounded-2xl overflow-hidden">
                        <Image
                          src={post.featured_image?.image || "/placeholder.svg"}
                          alt={post.featured_image?.alt_text || post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        {/* Categories */}
                        <div className="flex flex-wrap gap-3 mb-3">
                          {post.tags?.slice(0, 2).map((tag, index) => (
                            <span
                              key={index}
                              className={`${
                                index % 2 === 0
                                  ? "bg-[#F7F0FE] text-[#6D28D9]"
                                  : "bg-[#E0F2FE] text-[#0369A1]"
                              } font-medium text-xs px-2 py-1 rounded-full`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Date & Time */}
                        <div className="text-sm text-gray-500 mb-4 font-roboto">
                          <span className="text-[#999999] text-[14px] font-[500] leading-[150%]">
                            {post.created_at && new Date(post.created_at).toLocaleDateString("en-US", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>{" "}
                          <span className="text-[#333333] text-[14px] font-[700] leading-[150%] ml-3">
                            {post.created_at && new Date(post.created_at).toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                          {post.title}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>

                        {/* Read More Link */}
                           <div className="mt-auto pt-2">
                        <Link href={`/blogs/${post.slug}`}>
                          <button className="text-[#FFAB40] underline cursor-pointer font-medium text-sm transition-colors duration-200">
                            Read More...
                          </button>
                        </Link>
                      </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Scroll Indicator (Optional) */}
            <div className="flex justify-center mt-6 md:hidden">
              <div className="text-sm text-gray-500">
                ← Swipe to see more posts →
              </div>
            </div>
          </div>
        )}

        </div>
        
        <div className='w-full bg-amber-700'>
          <InfoSection
            title="Let's Build Something That Matters"
            subText="Have a project or an idea? Let's turn it into a digital experience people will remember."
          />
        </div>
        <StayInLoop />
        {/* <Footer /> */}
      </div>
    </>
  );
}

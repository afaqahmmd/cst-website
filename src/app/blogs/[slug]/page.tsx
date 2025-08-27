"use client";

import Image from "next/image";
import { useBlogBySlug } from "@/hooks/useBlogBySlug";
import { useBlogStore } from "@/store/blogStore";
import { useEffect, use } from "react";
import Mob1 from "@/assets/images/services/mob1.png";
import Mob2 from "@/assets/images/services/mob2.png";
import Mob3 from "@/assets/images/services/mob3.png";
import RelatedPost from "@/assets/images/services/related-post.jpg";
import InfoSection from "@/components/InfoSection/InfoSection";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import Footer from "@/components/Footer/Footer";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const { blog, isLoading, error, notFound } = useBlogBySlug(slug);
  const { setCurrentBlog } = useBlogStore();

  // Update the store when blog data changes
  useEffect(() => {
    if (blog) {
      setCurrentBlog(blog);
    }
  }, [blog, setCurrentBlog]);

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Function to format time
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Function to get author name from email
  const getAuthorName = (email: string) => {
    if (!email) return "Anonymous";
    const name = email.split("@")[0];
    return name
      .replace(/[._]/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Blog</h2>
          <p className="text-gray-600">Please try again later.</p>
          <p className="text-sm text-gray-500 mt-2">{error.message}</p>
        </div>
      </div>
    );
  }

  // Not found state
  if (notFound) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">Blog Not Found</h2>
          <p className="text-gray-500">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // If no blog data, show loading
  if (!blog) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  const featuredProjects = [
    {
      title: "FinTech Mobile App",
      description:
        "Complete redesign of a mobile banking app focusing on simplified navigation and enhanced security features.",
      image: Mob1,
      category: "Financial Services",
      categoryColor: "bg-blue-500",
      bgGradient: "from-purple-400 to-purple-600",
      tags: [
        { name: "Designing", color: "text-blue-600" },
        { name: "Web Development", color: "text-purple-600" },
        { name: "Testing", color: "text-orange-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Redesigned checkout flow and product discovery for a major e-commerce platform serving millions of users.",
      image: Mob2,
      category: "Retail",
      categoryColor: "bg-purple-500",
      bgGradient: "from-orange-400 to-orange-600",
      tags: [
        { name: "Designing", color: "text-blue-600" },
        { name: "Web Development", color: "text-purple-600" },
        { name: "Testing", color: "text-orange-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
    },
    {
      title: "SaaS Dashboard",
      description:
        "Intuitive dashboard design for a complex project management tool, focusing on data visualization and workflow optimization.",
      image: Mob3,
      category: "SaaS",
      categoryColor: "bg-green-500",
      bgGradient: "from-blue-400 to-blue-600",
      tags: [
        { name: "Designing", color: "text-blue-600" },
        { name: "Web Development", color: "text-purple-600" },
        { name: "Testing", color: "text-orange-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
    },
  ];

  const relatedPosts = [
    {
      id: 1,
      image: RelatedPost,
      categories: [
        { name: "Design", color: "text-blue-600" },
        { name: "UX Research", color: "text-purple-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
      title: "Design Thinking in Real Products: What Most Teams Miss",
      description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    },
    {
      id: 2,
      image: RelatedPost,
      categories: [
        { name: "Design", color: "text-blue-600" },
        { name: "UX Research", color: "text-purple-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
      title: "Design Thinking in Real Products: What Most Teams Miss",
      description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    },
    {
      id: 3,
      image: RelatedPost,
      categories: [
        { name: "Design", color: "text-blue-600" },
        { name: "UX Research", color: "text-purple-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
      title: "Design Thinking in Real Products: What Most Teams Miss",
      description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    },
    {
      id: 4,
      image: RelatedPost,
      categories: [
        { name: "Design", color: "text-blue-600" },
        { name: "UX Research", color: "text-purple-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
      title: "Design Thinking in Real Products: What Most Teams Miss",
      description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    },
    {
      id: 5,
      image: RelatedPost,
      categories: [
        { name: "Design", color: "text-blue-600" },
        { name: "UX Research", color: "text-purple-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
      title: "Design Thinking in Real Products: What Most Teams Miss",
      description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    },
    {
      id: 6,
      image: RelatedPost,
      categories: [
        { name: "Design", color: "text-blue-600" },
        { name: "UX Research", color: "text-purple-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
      title: "Design Thinking in Real Products: What Most Teams Miss",
      description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    },
    {
      id: 7,
      image: RelatedPost,
      categories: [
        { name: "Design", color: "text-blue-600" },
        { name: "UX Research", color: "text-purple-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
      title: "Design Thinking in Real Products: What Most Teams Miss",
      description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    },
  ];

  return (
    <div className="w-full">
      <div className="mx-auto px-6 max-w-[90%]">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
            {blog.tags.map((tag: { id: number; name: string }, index: number) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
          <div className="text-sm text-gray-500 mb-4">
            {formatDate(blog.created_at)} · {formatTime(blog.created_at)}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            {blog.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {blog.summary || blog.meta_description || "Click to read more about this blog post."}
          </p>
        </header>

        {/* Hero Image */}
        <div className="mb-12">
          <Image
            src={blog.images?.[0] || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop"}
            alt={blog.title}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[800px]"
            priority
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop";
            }}
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none font-roboto">
          <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        </article>

        {/* related projects */}
        <div className="flex flex-col w-full max-w-8xl mx-auto mt-16">
          {/* header title and button */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Related Post
            </h2>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-sm text-sm transition-colors duration-200">
              View All
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-72 bg-gray-50">
                  <Image
                    src={project.image}
                    alt={`${project.title} mobile interface`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span
                      className={`${project.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`${tag.color} font-medium text-sm`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>

                  {/* Date & Time */}
                  <div className="text-sm text-gray-500 mb-4">
                    {project.date} • {project.time}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Read More Button */}
                  <button className="bg-gray-100 hover:bg-gray-200 border border-[#20C5BA] text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* popular posts */}
        <div className="w-full flex flex-col  py-16 lg:py-24">
          <div className="max-w-full mx-auto px-0 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex mx-12 justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Popular Post
              </h2>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-sm text-sm transition-colors duration-200">
                View All
              </button>
            </div>

            {/* Horizontally Scrollable Posts */}
            <div className="overflow-x-auto scrollbar-hide sm:ml-12">
              <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
                {relatedPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group w-80 flex-shrink-0"
                  >
                    {/* Post Image */}
                    <div className="relative h-48 bg-gray-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="320px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Categories */}
                      <div className="flex flex-wrap gap-3 mb-3">
                        {post.categories.map((category, index) => (
                          <span
                            key={index}
                            className={`${category.color} font-medium text-sm`}
                          >
                            {category.name}
                          </span>
                        ))}
                      </div>

                      {/* Date & Time */}
                      <div className="text-sm text-gray-500 mb-4">
                        {post.date} • {post.time}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.description}
                      </p>

                      {/* Read More Link */}
                      <button className="text-[#FFAB40] underline font-medium text-sm transition-colors duration-200">
                        Read More...
                      </button>
                    </div>
                  </div>
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
        </div>
      </div>
      <div className="w-full bg-amber-700">
        <InfoSection
          title="Let's Build Something That Matters"
          subText="Have a project or an idea? Let's turn it into a digital experience people will remember."
        />
      </div>
      <StayInLoop />
      <Footer />
    </div>
  );
}

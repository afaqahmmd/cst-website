"use client";

import Image from "next/image";
import { useBlogBySlug } from "@/hooks/useBlogBySlug";
import { useBlogStore } from "@/store/blogStore";
import { useEffect, use, useState } from "react";
import Mob1 from "@/assets/images/services/mob1.png";
import Mob2 from "@/assets/images/services/mob2.png";
import Mob3 from "@/assets/images/services/mob3.png";
import RelatedPost from "@/assets/images/services/related-post.jpg";
import InfoSection from "@/components/InfoSection/InfoSection";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import Footer from "@/components/Footer/Footer";
import { getBlogImageUrl } from "@/utils/getBlobImageUrl";
import { generateJsonLd } from "@/utils/structuredData";
import { joinUrl } from "@/utils/joinUrl";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const { blog, isLoading, error, notFound } = useBlogBySlug(slug);
  const { setCurrentBlog } = useBlogStore();
  const [structuredData, setStructuredData] = useState<any>(null);

  // Update the store when blog data changes
  useEffect(() => {
    if (blog) {
      console.log("current blog", blog);
      setCurrentBlog(blog);
      setStructuredData(generateJsonLd("Blog", blog));
    }
  }, [blog, setCurrentBlog]);

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
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
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Error Loading Blog
          </h2>
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
          <h2 className="text-2xl font-bold text-gray-600 mb-4">
            Blog Not Found
          </h2>
          <p className="text-gray-500">
            The blog post you're looking for doesn't exist.
          </p>
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
  const parseImageUrl = (url: string) => {
    if (!url) return "";

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

    const mediaIndex = url.indexOf("/media/");
    if (mediaIndex === -1) return url;

    const path = url.substring(mediaIndex);
    console.log("Parsed image URL:", `${baseUrl}${path}`);
    return `${baseUrl}${path}`;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="w-full">
        <div className="mx-auto px-6 max-w-[90%]">
          {/* Header */}
          <header className="my-8">
            <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
              {blog.tags.map(
                (tag: { id: number; name: string }, index: number) => (
                  <span
                    className="font-robot font-[600] text-[16px] leading-[20px]"
                    key={tag.id}
                  >
                    {tag.name}
                  </span>
                )
              )}
            </div>
            <div className="text-sm text-gray-500 mb-4 font-roboto">
              <span className="text-[#999999] text-[14px] font-[500] leading-[150%]">
                {formatDate(blog.created_at)}
              </span>{" "}
              <span className="text-[#333333] text-[14px] font-[700] leading-[150%] ml-3">
                {formatTime(blog.created_at)}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              {blog.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {blog.sections.hero_section.description}
            </p>
          </header>

          {/* Hero Image */}
          <div className="mb-12">
            <Image
              src={
                joinUrl(process.env.NEXT_PUBLIC_API_BASE_URL, blog.sections.hero_section.image) || "/placeholder.svg"
              }
              // src="/placeholder.svg"
              alt={blog.title}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-[800px]"
              priority
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>
          <div className="text-[#666666] text-[16px] font-[400] leading-[150%] mb-8 space-y-6">
            <p>{blog.sections.hero_section.summary}</p>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none font-roboto">
            <div className="max-w-7xl mx-auto space-y-12">
              <p className="text-[#666666] text-[16px] font-[400] leading-[150%] mb-8 space-y-6">
                {blog.sections.quote_section.summary}
              </p>

              {blog.sections.quote_section.quotes.map(
                (quote: any, index: number) => (
                  <section className="mb-12" key={index}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      {quote.title}
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-4 mb-6">
                      <p>{quote.description}</p>
                    </div>

                    <blockquote className="sm:ml-8 md:ml-12 ml-0 border-l-4 border-[#FFAB40] pl-6 py-4 mb-8 bg-gray-50">
                      <p className="text-gray-600 italic mb-2 text-[24px]">
                        {quote.quote}
                      </p>
                    </blockquote>
                    <footer className="sm:ml-16 ml-0 text-sm text-gray-500 font-medium">
                      — {quote.quoteusername}
                    </footer>
                  </section>
                )
              )}

              {/* info section */}

              <p className="text-[#666666] text-md">
                {blog.sections.info_section.title}
              </p>

              <p className="text-[#666666] text-[16px] font-[400] leading-[150%] mb-8 space-y-6">
                {blog.sections.info_section.description}
              </p>

              <div className="mb-12 flex justify-center">
                <Image
                  src={
                    joinUrl(process.env.NEXT_PUBLIC_API_BASE_URL, blog.sections.info_section.image) || "/placeholder.svg"
                  }
                  alt="Modern office workspace with white desks and colorful chairs"
                  width={600}
                  height={200}
                  className=" rounded-lg object-cover max-w-7xl w-[90%] h-[300px] md:w-[80%] md:h-[400px]"
                  priority
                />
              </div>

              <p className="text-[#666666] text-md">
                {blog.sections.info_section.summary_2}
              </p>
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
                  className="bg-white transition-all duration-300 overflow-hidden group"
                >
                  {/* Project Image */}
                  <div className="relative h-72 bg-gray-50 rounded-xl overflow-hidden">
                    <Image
                      src={getBlogImageUrl(project.image.src)}
                      // src={project.image}
                      alt={`${project.title} mobile interface`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 px-0">
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
                    <div className="text-sm text-gray-500 mb-4 font-roboto">
                      <span className="text-[#999999] text-[14px] font-[500] leading-[150%]">
                        {formatDate(project.date)}
                      </span>{" "}
                      <span className="text-[#333333] text-[14px] font-[700] leading-[150%] ml-3">
                        {project.time}
                      </span>
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
                    <button className="bg-white hover:bg-gray-200 border border-[#20C5BA] text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* popular posts */}
          <div className="w-full flex flex-col mb-12 max-w-8xl mx-auto mt-16">
            {/* Header */}
            <div className="flex  justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Popular Post
              </h2>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-sm text-sm transition-colors duration-200">
                View All
              </button>
            </div>

            {/* Horizontally Scrollable Posts */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
                {relatedPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white  transition-all duration-300 overflow-hidden group w-80 flex-shrink-0"
                  >
                    {/* Post Image */}
                    <div className="relative h-48 bg-gray-100 rounded-xl overflow-hidden">
                      <Image
                        src={getBlogImageUrl(post.image.src)}
                        // src={post.image}
                        alt={post.title}
                        fill
                        sizes="320px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 px-0">
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
                      <div className="text-sm text-gray-500 mb-4 font-roboto">
                        <span className="text-[#999999] text-[12px] font-[500] leading-[150%]">
                          {post.date}
                        </span>{" "}
                        <span className="text-[#333333] text-[12px] font-[700] leading-[150%] ml-3">
                          {post.time}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-[24px] font-[700] leading-[32px] text-gray-900 mb-3 line-clamp-2">
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
        <div className="w-full bg-amber-700">
          <InfoSection
            title="Let's Build Something That Matters"
            subText="Have a project or an idea? Let's turn it into a digital experience people will remember."
          />
        </div>
        <StayInLoop />
        <Footer />
      </div>
    </>
  );
}

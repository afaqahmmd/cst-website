"use client";

import Image from "next/image";
import Link from "next/link";
import { useProjects } from "@/hooks/useProjects";
import UxReview2 from "@/assets/images/projects/orange-banner.svg";

const FeaturedProjectSection = () => {
  const { data: projectsData, isLoading } = useProjects();
  
  // Get the last project (most recent)
  const projects = projectsData?.results || projectsData?.data || [];
  const featuredProject = projects.length > 0 ? projects[projects.length - 1] : null;

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Format time
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Use featured project data or fall back to static content
  const displayData = featuredProject || {
    title: "Design Thinking in Real Products: What Most Teams Miss",
    excerpt: "A crash course on why wireframes aren't enough — and how to embed user empathy into scalable product design.A crash course on why wireframes aren't enough — and how to embed user empathy into...A crash course on why wireframes aren't enough — and how to embed user empathy into scalable product design.A crash course on why wireframes aren't enough — and how to embed user empathy into...",
    tags: ["Design", "UX Research"],
    created_at: "2023-03-16T12:24:00Z",
    hero_image: null,
    slug: "#"
  };

  return (
    <div className='relative flex flex-col w-full lg:max-w-[90%] max-w-7xl px-4 mx-auto lg:my-16 my-8'>
      <div className='relative aspect-[1200/550] rounded-lg overflow-hidden'>
        <Image
          src={displayData.hero_image?.image || UxReview2}
          alt={displayData.hero_image?.alt_text || 'Featured project'}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover'
          unoptimized={!!displayData.hero_image?.image}
        />
      </div>

      <div className='lg:absolute relative right-0 bottom-[-10%] rounded-lg flex flex-col gap-4 max-w-5xl bg-white'>
        <div className='p-10 flex flex-col justify-between'>
          <div className='flex flex-col gap-4 mb-12'>
            {/* Category Badge */}
            <div className='flex gap-2 items-center flex-wrap'>
              {displayData.tags && displayData.tags.length > 0 ? (
                displayData.tags.slice(0, 2).map((tag: string, index: number) => (
                  <p
                    key={index}
                    className={`${
                      index % 2 === 0 ? "text-[#6941C6]" : "text-[#1D76F1]"
                    } text-[14px] leading-[20px] tracking-[0%] rounded-full text-sm font-medium`}
                  >
                    {tag}
                  </p>
                ))
              ) : (
                <>
                  <p className='text-[#6941C6] text-[14px] leading-[20px] tracking-[0%] rounded-full text-sm font-medium'>
                    Design
                  </p>
                  <p className='text-[#1D76F1] text-[14px] leading-[20px] tracking-[0%] rounded-full text-sm font-medium'>
                    UX Research
                  </p>
                </>
              )}
            </div>

            {/* Date & Time */}
            <div className='text-sm text-gray-500'>
              {featuredProject
                ? `${formatDate(displayData.created_at)} • ${formatTime(displayData.created_at)}`
                : "16 March 2023 • 12:24 PM"}
            </div>

            {/* Title */}
            <h3 className='text-[32px] leading-[45px] tracking-[-1px] font-[600] text-gray-900'>
              {displayData.title}
            </h3>

            {/* Description */}
            <p className='text-gray-600 font-[400] text-[16px] leading-[150%] tracking-[0%] line-clamp-4'>
              {displayData.excerpt}
            </p>
          </div>

          {/* Read More Button */}
          {featuredProject ? (
            <Link href={`/projects/${displayData.slug}`}>
              <button className='bg-gray-100 max-w-[125px] hover:bg-gray-200 border border-[#20C5BA] text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200'>
                Read More
              </button>
            </Link>
          ) : (
            <button className='bg-gray-100 max-w-[125px] hover:bg-gray-200 border border-[#20C5BA] text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200'>
              Read More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectSection;

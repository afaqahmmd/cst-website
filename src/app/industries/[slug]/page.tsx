"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import InfoSection from "@/components/InfoSection/InfoSection";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import { useProjects } from "@/hooks/useProjects";
import { useBlogs } from "@/hooks/useBlogs";
import { getBlogImageUrl } from "@/utils/getBlobImageUrl";
import { useIndustryBySlug } from "@/hooks/useIndustryBySlug";
import { Blog } from "@/types/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}


const page = ({ params }: PageProps) => {
  const { slug } = React.use(params);


  
  // Fetch single industry data by slug
  const {
    industry,
    isLoading: industryLoading,
    error: industryError,
    notFound,
  } = useIndustryBySlug(slug);

  // Fetch projects data (existing)
  const {
    data: projectsResponse,
    isLoading: projectsLoading,
    error: projectsError,
  } = useProjects();

  // Projects API returns paginated response with results array
  const projectsData = projectsResponse?.results || projectsResponse?.data || [];

  // Fetch blogs data
  const { data: blogsData } = useBlogs();
  const blogs: Blog[] = blogsData?.results || blogsData?.data || blogsData?.blogs || [];
  
  // Log the industry data for debugging (you can remove this later)
  console.log("Industry data for slug:", slug, industry);
  
  const formatBlogDate = (dateString: string) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatBlogTime = (dateString: string) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
  // Handle loading state
  if (industryLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  // Handle not found state
  if (notFound) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">
            Industry Not Found
          </h2>
          <p className="text-gray-600">The industry "{slug}" could not be found.</p>
        </div>
      </div>
    );
  }

  // Handle error state
  if (industryError) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Error Loading Industry
          </h2>
          <p className="text-gray-600">Please try again later.</p>
          <p className="text-sm text-gray-500 mt-2">{industryError.message}</p>
        </div>
      </div>
    );
  }

  // New API structure - sections are directly on the industry object
  const challengeSection = industry?.challenge_section;
  const expertiseSection = industry?.expertise_section;
  const whatSetsUsApartSection = industry?.what_sets_us_apart_section;
  const weBuildSection = industry?.we_build_section;
  const projectsStatsSection = industry?.projects_stats_section;
  
  // TODO: Replace hardcoded data with API data from 'industry' object
  // Available fields: id, name, slug, description, images, is_active, etc.

  const industryStatsData = [
    {
      title: "Completed Projects",
      value: "395",
      bgColor: "bg-[#8FD8184D]",
    },
    {
      title: "New Project",
      value: "12",
      bgColor: "bg-[#7DD1FF47]",
    },
    {
      title: "Under Development",
      value: "20",
      bgColor: "bg-[#FFF4CE]",
    },
    {
      title: "Testing Phase",
      value: "3",
      bgColor: "bg-[#FCCFCF]",
    },
  ];

  const industryChallenges = [
    "Lack of engagement in online learning environments",
    "Limited scalability of traditional LMS systems",
    "Poor user experience for both educators and students",
    "Data fragmentation across systems (attendance, content, performance)",
    "Compliance with education-specific data regulations (FERPA, COPPA, etc.)",
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  };

  return (
    <main className="bg-white w-full">
      {/* hero section */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mt-12 gap-4 mx-auto flex flex-col text-start lg:px-16 md:px-12 px-4">
          <h1 className="font-roboto font-bold text-[48px] leading-[63.98px] tracking-[0]">
            {industry?.title || industry?.name}
          </h1>
          <p className="font-roboto font-normal text-[#666666] text-[24px] leading-[150%] tracking-[0]">
            {industry?.description}
          </p>
        </div>

        <div className="aspect-[308/225] mt-12 w-full max-w-7xl mx-auto relative">
          <Image
            src={industry?.hero_image?.image || industry?.images?.[0] || "/placeholder.svg"}
            alt={industry?.hero_image?.alt_text || "herosection-img"}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {projectsStatsSection?.length ? (
        <div className="max-w-5xl mt-12 gap-4 mx-auto flex flex-col items-center text-start lg:px-16 md:px-12 px-4">
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-[5px]">
            {projectsStatsSection?.map((stat: any, index: number) => (
              <div
                key={index}
                className={`${industryStatsData[index%4].bgColor} flex flex-col items-center gap-6 p-12 justify-center rounded-lg  text-center shadow-sm`}
              >
                <h2 className="font-poppins text-[#4A4343] text-center text-3xl font-semibold leading-none tracking-tight">
                  {stat.name}
                </h2>
                <p className="font-poppins  text-[#282D46] font-semibold lg:text-[80px] md:text-[72px] text-[56px] leading-[100%] tracking-[-0.03em] text-center">
                  {stat.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {(challengeSection && (challengeSection.title?.trim() || challengeSection.items?.length)) ? (
      <section className=" bg-white">
        <div className="mt-12 w-full max-w-7xl mx-auto relative md:px-[87px] px-0">
          <h2 className="font-roboto mb-6 md:ml-12 mx-auto font-semibold text-[32px] leading-[100%] tracking-[-3%] text-[#333333]">
             {challengeSection?.title}
          </h2>
          {challengeSection?.items?.map((challenge: string, index: number) => (
            <div
              key={index}
              className="flex md:items-center items-start gap-4 mb-4"
            >
              <MoveRight
                size={32}
                color="#FFAB40"
                className="shrink-0 md:mt-0 mt-2"
              />
              <p className="font-roboto text-[24px] font-[500] leading-[183%] tracking-[0%] text-[#666666]">
                {challenge}
              </p>
            </div>
          ))}
        </div>
      </section>
      ) : null}

      {(expertiseSection && (expertiseSection.title?.trim() || expertiseSection.description?.trim() || expertiseSection.sub_sections?.length)) ? (
      <section className="max-w-7xl mx-auto py-12 mt-12 bg-[#FAFBFA]">
        <div className="w-full max-w-7xl mx-auto relative px-4">
          <h2 className="font-roboto mb-6 md:ml-12 mx-auto font-semibold text-[32px] leading-[100%] tracking-[-3%] text-[#333333]">
             {expertiseSection?.title }
          </h2>
          <p className="md:ml-12 break-words overflow-hidden text-ellipsis mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
            {expertiseSection?.description}
          </p>
          <div className="max-w-7xl mx-auto mt-12">
            {/* Grid Layout */}
            <div className="flex flex-wrap gap-6 justify-center">
              {expertiseSection?.sub_sections?.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 w-full max-w-sm border border-[#E0E0E0] hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[283/166] mb-6 rounded-2xl overflow-hidden ">
                    <Image
                      src={item.image || '/placeholder.svg'}
                      alt={item.image_alt_text || ''}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col text-center">
                    <h2 className="text-[24px] font-bold mb-3 leading-[100%] font-roboto text-[#2B2B2B]">
                      {item.title}
                    </h2>
                    <p className="text-[16px] font-[400] leading-[22px] tracking-[0%] font-roboto text-[#868282]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      ) : null}

      {/* what sets us apart */}
      {(whatSetsUsApartSection && (whatSetsUsApartSection.title?.trim() || whatSetsUsApartSection.description?.trim() || whatSetsUsApartSection.sub_sections?.length)) ? (
      <section className="max-w-7xl mx-auto py-12 mt-12 bg-white">
        <div className="w-full max-w-7xl mx-auto relative px-4">
          <h2 className="font-roboto mb-6 md:ml-12 mx-auto font-semibold text-[32px] leading-[100%] tracking-[-3%] text-[#333333]">
             {whatSetsUsApartSection?.title}
          </h2>
          <p className="md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
            {whatSetsUsApartSection?.description}
          </p>
          <div className="max-w-7xl mx-auto mt-12">
            {/* Grid Layout */}
            <div className="flex flex-wrap gap-6 justify-center">
              {whatSetsUsApartSection?.sub_sections?.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white rounded-3xl p-8 w-full max-w-sm border border-[#E0E0E0] hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image Container */}
                  <div className="relative h-[61px] aspect-[64/61] mb-6 ">
                    <Image
                      src={item.image || '/placeholder.svg'}
                      alt={item.image_alt_text || ''}
                      fill
                      className="object-container"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col text-center">
                    <h2 className="text-[24px] font-bold mb-3 leading-[100%] font-roboto text-[#2B2B2B]">
                      {item.title}
                    </h2>
                    <p className="text-[16px] font-[400]  leading-[22px] tracking-[0%] font-roboto text-[#868282]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      ) : null}

      {(weBuildSection && (weBuildSection.title?.trim() || weBuildSection.description?.trim() || weBuildSection?.sub_sections?.length)) ? (
      <section className="max-w-7xl mx-auto py-12 mt-12 bg-white">
        <div className="w-full max-w-7xl mx-auto relative px-4">
          <h2 className="font-roboto mb-6 md:ml-12 mx-auto font-semibold text-[32px] leading-[100%] tracking-[-3%] text-[#333333]">
             {weBuildSection?.title}
          </h2>
          <p className="md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
            {weBuildSection?.description}
          </p>
          <div className="max-w-7xl mx-auto mt-12">
            {/* Grid Layout */}
            <div className=" bg-[#8FD8184D] rounded-[16px] lg:h-fit h-auto py-6 flex items-center justify-start px-5">
              <ul className="flex flex-col lg:px-12 md:px-8 px-4 gap-[10px] list-disc list-inside pl-2 text-[#3C5612] font-[500] text-[22px] leading-[173%] tracking-[0%]">
                {weBuildSection?.sub_sections?.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      ) : null}

      {/* related projects */}
      <div className="flex flex-col w-full lg:max-w-[90%] max-w-7xl px-[25px] mx-auto mt-16">
        {/* header title and button */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Related Projects
          </h2>
          <Link href="/projects">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-sm text-sm transition-colors duration-200">
              View All
            </button>
          </Link>
        </div>

        {/* cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-[25px]">
          {projectsData &&
            projectsData.slice(0, 6).map((project: any, index: number) => (
              <Link
                href={`/projects/${project.slug}`}
                key={index}
                className="bg-white rounded-2xl overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative aspect-[400/360] overflow-hidden rounded-b-2xl bg-gray-50">
                  <Image
                    src={project.hero_image?.image || project.image || '/placeholder.svg'}
                    alt={project.hero_image?.alt_text || project.title || "project"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>

                {/* Content */}
                <div className="p-6 px-1">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    {project.tags?.map(
                      (tag: string | { id: number; name: string }, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className={`${
                            tagIndex % 2 === 0
                              ? "text-[#6941C6]"
                              : "text-[#1D76F1]"
                          } font-medium text-sm`}
                        >
                          {typeof tag === 'string' ? tag : tag.name}
                        </span>
                      )
                    )}
                  </div>

                  {/* Date & Time */}
                  <div className="text-sm text-gray-500 mb-4 font-roboto">
                    <span className="text-[#999999] text-[14px] font-[500] leading-[150%]">
                      {formatDate(project.created_at)}
                    </span>{" "}
                    <span className="text-[#333333] text-[14px] font-[700] leading-[150%] ml-3">
                      {formatTime(project.created_at)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title || project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {project.excerpt}
                  </p>

                  {/* Read More Button */}
                  <button className="hover:bg-gray-100 border border-[#20C5BA] text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                    Read More
                  </button>
                </div>
              </Link>
            ))}
        </div>
      </div>

     
      {/* popular posts */}
      <div className="w-full max-w-[90%] mx-auto flex flex-col py-16 lg:py-24 lg:pt-0">
        <div className="px-0 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Popular Post
            </h2>
            <Link href={`/blogs`}>
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
                        {formatBlogDate(post.created_at as string)}
                      </span>{" "}
                      <span className="text-[#333333] text-[14px] font-[700] leading-[150%] ml-3">
                        {formatBlogTime(post.created_at as string)}
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
                      <button className="text-[#FFAB40] underline cursor-pointer font-medium text-sm transition-colors duration-200">
                        Read More...
                      </button>
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
      </div>

      <InfoSection />
      <StayInLoop />
      {/* <Footer /> */}
    </main>
  );
};

export default page;

import Image from "next/image";
import Link from "next/link";
import { formatDate, formatTime } from "@/utils/dateUtils";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";

interface RecentProjectsSectionProps {
  projects: Project[];
}

const RecentProjectsSection = ({ projects }: RecentProjectsSectionProps) => {
  const firstProject = projects[0];
  const remainingProjects = projects.slice(1, 4);

  return (
    <div className='flex flex-col w-full lg:max-w-[90%] max-w-7xl px-4 mx-auto mt-16'>
      {/* header title and button */}
      <div className='flex justify-between items-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Our Recent Post</h2>
        {/* <button className='bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-sm text-sm transition-colors duration-200'>
          View All
        </button> */}
      </div>

      {/* first container */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:mb-12 mb-8'>
        {/* left side */}
        <div className='relative rounded-lg overflow-hidden'>
          <div className='aspect-[720/455] pointer-events-none'>
            <Image
              src={firstProject?.hero_image?.image || "/placeholder.svg"}
              alt={firstProject?.hero_image?.alt_text || firstProject?.title || "Project image"}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover'
            />
          </div>
        </div>

        {/* right side */}
        <div className='p-6 py-2 flex flex-col justify-between'>
          <div className='flex flex-col gap-4 max-w-2xl'>
            {/* Category Badge */}
            <div className='flex gap-2 items-center'>
              {firstProject?.tags?.map((tag, index) => (
                <p
                  key={index}
                  className={`${
                    index % 2 === 0 ? "text-[#6941C6]" : "text-[#1D76F1]"
                  } text-[14px] leading-[20px] tracking-[0%] rounded-full text-sm font-medium`}
                >
                  {tag}
                </p>
              ))}
            </div>

            {/* Date & Time */}
            <div className='font-roboto flex items-center gap-3'>
              <p className='text-[#999999] text-[14px] font-[500] leading-[150%]'>
                {formatDate(firstProject?.created_at)}
              </p>
              <p className='text-[#333333] text-[14px] font-[700] leading-[150%]'>
                {formatTime(firstProject?.created_at)}
              </p>
            </div>

            {/* Title */}
            <h3 className='text-[32px] leading-[45px] tracking-[-1px] font-[600] text-gray-900'>
              {firstProject?.title}
            </h3>

            {/* Description */}
            <p className='text-gray-600 font-[400] text-[16px] leading-[150%] tracking-[0%]'>
              {firstProject?.excerpt}
            </p>
          </div>

          {/* Read More Button */}
          <Link href={`/projects/${firstProject?.slug}`}>
            <button className='bg-gray-100 cursor-pointer max-w-[125px] hover:bg-gray-200 border border-[#20C5BA] text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200'>
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/* remaining projects grid */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch'>
        {remainingProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default RecentProjectsSection;

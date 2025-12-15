import Image from "next/image";
import Link from "next/link";
import { formatDate, formatTime } from "@/utils/dateUtils";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div className='bg-white rounded-2xl overflow-hidden group h-full flex flex-col'>
      {/* Project Image */}
      <div className='relative aspect-[400/360] overflow-hidden rounded-b-2xl bg-gray-50 flex-shrink-0'>
        <Image
          src={project.hero_image?.image || "/placeholder.svg"}
          alt={project.hero_image?.alt_text || project.title}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover'
          priority={index === 0}
        />
      </div>

      {/* Content */}
      <div className='p-6 px-1 flex flex-col flex-grow'>
        {/* Tags */}
        <div className='flex flex-wrap gap-4 mb-4'>
          {project.tags?.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className={`${
                tagIndex % 2 === 0 ? "text-[#6941C6]" : "text-[#1D76F1]"
              } font-medium text-sm`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Date & Time */}
        <div className='text-sm text-gray-500 mb-4 font-roboto'>
          <span className='text-[#999999] text-[14px] font-[500] leading-[150%]'>
            {formatDate(project.created_at)}
          </span>{" "}
          <span className='text-[#333333] text-[14px] font-[700] leading-[150%] ml-3'>
            {formatTime(project.created_at)}
          </span>
        </div>

        {/* Title */}
        <h3 className='text-xl font-semibold text-gray-900 mb-3 line-clamp-2'>
          {project.title}
        </h3>

        {/* Description */}
        <p className='text-gray-600 leading-relaxed mb-6 line-clamp-3 flex-grow'>
          {project.excerpt}
        </p>

        {/* Read More Button */}
        <div className='mt-auto'>
          <Link href={`/projects/${project.slug}`}>
            <button className='hover:bg-gray-100 cursor-pointer border border-[#20C5BA] text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200'>
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { formatDate, formatTime } from "@/utils/dateUtils";

interface PopularProjectsSectionProps {
  blogs: Blog[];
}

const PopularProjectsSection = ({ blogs }: PopularProjectsSectionProps) => {
  const popularBlogs = blogs.slice(0, 6);

  return (
    <div className='flex flex-col w-full lg:max-w-[90%] max-w-7xl px-4 mx-auto lg:my-16 my-8'>
      {/* header title and button */}
      <div className='flex justify-between items-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Popular Post</h2>
        <Link href={`/blogs`}>
          <button className='cursor-pointer bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-sm text-sm transition-colors duration-200'>
            View All
          </button>
        </Link>
      </div>

      {/* cards grid */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {popularBlogs.map((blog, index) => (
          <div key={blog.id} className='bg-white rounded-2xl overflow-hidden group h-full flex flex-col'>
            {/* Blog Image */}
            <div className='relative aspect-[400/360] overflow-hidden rounded-b-2xl bg-gray-50 flex-shrink-0'>
              <Image
                src={blog.featured_image?.image || "/placeholder.svg"}
                alt={blog.featured_image?.alt_text || blog.title}
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
                {blog.tags?.map((tag, tagIndex) => (
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
                  {formatDate(blog.created_at)}
                </span>{" "}
                <span className='text-[#333333] text-[14px] font-[700] leading-[150%] ml-3'>
                  {formatTime(blog.created_at)}
                </span>
              </div>

              {/* Title */}
              <h3 className='text-xl font-semibold text-gray-900 mb-3 line-clamp-2'>
                {blog.title}
              </h3>

              {/* Description */}
              <p className='text-gray-600 leading-relaxed mb-6 line-clamp-3 flex-grow'>
                {blog.excerpt}
              </p>

              {/* Read More Button */}
              <div className='mt-auto'>
                <Link href={`/blogs/${blog.slug}`}>
                  <button className='hover:bg-gray-100 cursor-pointer border border-[#20C5BA] text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200'>
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProjectsSection;

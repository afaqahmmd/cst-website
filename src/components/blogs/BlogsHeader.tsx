import Image from "next/image";
import blogImage from "@/assets/images/blogs/blog-header.png";

export default function BlogsHeader() {
  return (
    <div
      id='header'
      className='relative h-[350px] gap-4 flex flex-col items-center justify-center bg-center bg-cover'
      style={{ backgroundImage: `url(${blogImage.src})` }}
    >
      {/* Black overlay */}
      <div className='absolute inset-0 bg-black/50'></div>

      {/* Content */}
      <div className='relative z-10 text-center px-4'>
        <h2 className='font-bold font-roboto leading-[40px] md:leading-[150%] text-[42px] md:text-[56px] capitalize text-white'>
          Ideas that build better tech
        </h2>
        <p className='text-balance w-full text-[18px] md:text-[24px] leading-[26px] md:leading-[36px] text-white'>
          Explore expert insights, product strategies, design thinking, and development tips —
          straight from the minds shaping real-world digital solutions at CorTechSols.
        </p>
      </div>
    </div>
  );
}

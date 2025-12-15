import React from "react";
import Message from "@/components/svgs/icons/Message";
import Phone from "@/components/svgs/icons/Phone";
import Location from "@/components/svgs/icons/Location";
import ArrowUpRight from "@/components/svgs/icons/ArrowUpRight";

const InfoSection = ({
  title = "Let's Build Something That Matters",
  subText = "Have a project or an idea? Let's turn it into a digital experience people will remember.",
  buttonText = "Get in Touch",
}: {
  title?: string;
  subText?: string;
  buttonText?: string;
}) => {
  return (
    <div className='w-full text-white min- py-12 min-h-[400px] flex flex-col items-center justify-center gap-1 bg-[#2B2B2B]'>
      <div className='flex flex-col gap-4 text-center'>
        {/* plus/cross sign */}
        <div className='flex flex-col self-start -ml-2'>
          <div className='w-8 h-0.5 bg-white' />
          <div className='w-8 h-0.5 transform rotate-90 bg-white mb-2' />
        </div>
        {/* heading */}
        <div className='relative w-fit mb-5 flex items-center justify-center'>
          <p className='absolute uppercase z-0 font-extrabold text-[112px] text-transparent [-webkit-text-stroke:2px_#545050]'>
            Look
          </p>
          <p className='relative md:leading-[52px] leading-[40px] font-roboto z-10 text-[24px] sm:text-[36px] md:text-[45px] text-white font-semibold uppercase'>
            {title}
          </p>
        </div>
      </div>
      <p className='font-roboto text-center font-[300] text-[18px] sm:text-[22px] text-[#c4c4c4]'>
        {subText}
      </p>

      {/* links and getintouch button  */}
      <div className='flex flex-col gap-12 mt-12 justify-between items-center'>
        <div className='flex md:flex-row flex-col items-center justify-between gap-5'>
          <a
            href='mailto:CortechsolsSuport@gmail.com'
            className='flex items-center gap-3 underline cursor-pointer'
          >
            <Message />
            <p>CortechsolsSuport@gmail.com</p>
          </a>
          <div className='flex items-center gap-3'>
            <Phone />
            <p>+92 3XX-XXXXXXX</p>
          </div>
          <div className='flex items-center gap-3'>
            <Location />
            <p>Islamabad, Pakistan</p>
          </div>
        </div>
        {/* <div className='hover:opacity-80 transform duration-100'>
          <button className='flex hover:cursor-pointer items-center border border-[#FFAB40] rounded-md overflow-hidden'>
            <span className='uppercase px-7 py-2 text-[14px] text-[#FFAB40] font-semibold tracking-[1.3px]'>
              {buttonText}
            </span>
            <span className='flex rounded-sm items-center justify-center px-2 py-2 border-l border-[#FFAB40] text-[#FFAB40]'>
              <ArrowUpRight />
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default InfoSection;

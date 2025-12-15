import React from "react";
import ButtonComponent from "@/components/Button/Button";

interface HeroCTAProps {
  className?: string;
}

const HeroCTA: React.FC<HeroCTAProps> = ({ className = "" }) => {
  return (
    <div className={`flex -mt-3 flex-col sm:flex-row gap-4 ${className}`}>
      <a href='#contact-section'>
        <ButtonComponent name='Get In Touch' buttonHeight='55px' />
      </a>
      <div className='flex items-center gap-2'>
        <button
          className='relative w-14 h-14 shadow-lg rounded-full bg-[#2B2B2B1A] flex items-center justify-center'
          aria-label='Play video to learn more about Cortechsols services'
          type='button'
        >
          {/* Left semi-circle border */}
          <span className='absolute inset-0 rounded-full border-4 border-black [clip-path:polygon(0_0,50%_0,50%_100%,0_100%)]'></span>

          {/* Button content */}
          <span className='z-10 text-black font-bold' aria-hidden='true'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='black'
            >
              <path d='M8 5v14l11-7z' />
            </svg>
          </span>
        </button>
        <p className='font-[600] capitalize text-[16px] hover:underline cursor-pointer'>
          {" "}
          Learn More
        </p>
      </div>
    </div>
  );
};

export default HeroCTA;

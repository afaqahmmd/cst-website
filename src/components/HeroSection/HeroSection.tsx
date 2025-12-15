import React from "react";
import { StaticImageData } from "next/image";

interface Props {
  HeroImg: StaticImageData;
  title: string;
  subText: string;
}

const HeroSection = ({ HeroImg, title, subText }: Props) => {
  return (
    <div
      id='header'
      className='relative lg:h-[350px] h-[420px] gap-4 flex flex-col items-center justify-center bg-center bg-cover'
      style={{ backgroundImage: `url(${HeroImg.src})` }}
    >
      {/* Black overlay */}
      <div className='absolute inset-0 bg-black/50'></div>

      {/* Content */}
      <div className='relative z-10 text-center px-4'>
        <h2 className='font-bold font-roboto lg:text-[56px] text-[40px] leading-[50px] lg:leading-[100px] capitalize text-white'>
          {title}
        </h2>
        <p className='lg:px-16 px-4 text-center w-full lg:text-[24px] text-[18px] lg:leading-[36px] leading-[28px] lg:mt-0 mt-4 text-white'>
          {subText}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

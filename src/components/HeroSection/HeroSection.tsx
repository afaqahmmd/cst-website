import React from "react";
import { StaticImageData } from "next/image";

interface Props {
  HeroImg: StaticImageData;
  title: string;
  subText: string;
}

const HeroSection = ({HeroImg,title,subText}:Props) => {
  return (
    <div
      id="header"
      className="relative h-[350px] gap-4 flex flex-col items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: `url(${HeroImg.src})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="font-bold font-roboto text-[56px] capitalize text-white">
          {title}
        </h2>
        <p className="text-balance w-full text-[24px] leading-[36px] text-white">
          {subText}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

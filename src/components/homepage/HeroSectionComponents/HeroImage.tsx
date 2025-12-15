import React from "react";
import Image from "next/image";
import HerosectionImg from "@/assets/images/homepage/herosection-cropped.svg";

interface HeroImageProps {
  className?: string;
  alt?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

const HeroImage: React.FC<HeroImageProps> = ({
  className = "",
  alt = "Cortechsols digital transformation and web development services illustration showing modern technology solutions",
  priority = true,
  width = 600,
  height = 400,
}) => {
  return (
    <div className={`relative flex w-full justify-center items-center px-2 ${className}`}>
      <div className='relative w-full flex justify-center items-center'>
        <Image src={HerosectionImg} alt={alt} priority={priority} width={width} height={height} />
      </div>
    </div>
  );
};

export default HeroImage;

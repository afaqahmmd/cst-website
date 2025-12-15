import React from "react";
import Image from "next/image";
import EllipseDown from "@/components/svgs/hero/EllipseDown";
import EllipseUp from "@/components/svgs/hero/EllipseUp";
import HeroImg from "@/assets/images/industries/hero-img.png";

const IndustriesHeroSection: React.FC = () => {
  return (
    <section className='flex w-full max-w-[1920px] mx-auto items-center relative overflow-hidden'>
      <div className='w-full lg:min-h-[580px] grid grid-cols-1 items-start self-center gap-10 py-10 md:py-16 md:pb-0 pb-0 lg:grid-cols-2 lg:gap-12'>
        {/* LEFT CONTENT */}
        <div className='relative h-full z-10 flex flex-col lg:pt-18 pt-2 justify-start gap-[20%]'>
          <div className='flex flex-col sm:pl-8 pl-4 md:pl-20'>
            <h1 className='font-bold tracking-tight font-roboto text-[#0F172A] text-[34px] md:text-[40px] lg:text-[54px]'>
              Our Target Industries
            </h1>

            <p className='mt-6 max-w-xl text-slate-600 md:text-lg'>
              From startups to enterprises, logistics to legal tech — we create purpose-driven
              digital solutions tailored to the rhythm of your industry.
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className='relative z-20 flex items-start justify-start w-full'>
          <div className='relative flex items-center justify-center w-full px-4 md:px-8 lg:px-12'>
            <div className='w-full max-w-4xl flex items-center justify-center'>
              <div className='w-full flex items-center justify-center'>
                <Image src={HeroImg} alt='hero-img' />
              </div>
            </div>
          </div>
        </div>

        {/* EllipseUp (background) */}
        <div className='absolute hidden md:block top-0 lg:right-[25%] -right-[50px] z-0'>
          <EllipseUp className='w-[250px] h-[250px] md:w-[400px] md:h-[400px]' />
        </div>

        {/* EllipseDown (background) */}
        <div className='absolute hidden md:block bottom-0 md:-left-[50px] -left-[50px] z-0'>
          <EllipseDown className='w-[350px] h-[174px] md:w-[400px] md:h-[240px]' />
        </div>
      </div>
    </section>
  );
};

export default IndustriesHeroSection;

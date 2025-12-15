import React from "react";
import HeroImgLeft from "@/components/svgs/hero/heroLeftBottom";
import HeroTitle from "./HeroSectionComponents/HeroTitle";
import HeroCTA from "./HeroSectionComponents/HeroCTA";
import HeroTrustSection from "./HeroSectionComponents/HeroTrustSection";
import HeroImage from "./HeroSectionComponents/HeroImage";

const HeroSection = () => {
  return (
    <section
      id='hero-section'
      className='flex w-full max-w-[1920px] mx-auto items-center justify-center relative overflow-hidden'
    >
      <div className='w-full px-0 grid grid-cols-1 self-center gap-10 py-8 md:py-12 md:pb-0 pb-12 lg:grid-cols-2 lg:gap-12'>
        {/* LEFT CONTENT */}
        <div className='relative flex flex-col w-full'>
          <div className='flex flex-col px-8 md:px-12'>
            <HeroTitle />

            <p className='font-roboto text-[24px] leading-[160%] font-[400] text-[#0F172A] lg:my-12 my-8'>
              Smart design + strategy that unlocks the hidden gaps in your funnel.
            </p>

            <HeroCTA />
            <HeroTrustSection />
          </div>

          <div className='hidden lg:block mt-12'>
            <HeroImgLeft />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <HeroImage />
      </div>
    </section>
  );
};

export default HeroSection;

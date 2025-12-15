import React from "react";
import Image from "next/image";
import GameController from "@/components/svgs/icons/GameController";
import DecisionMakers from "@/assets/images/homepage/decision-makers.png";

const TeamSection = () => {
  return (
    <section id='team-section' className='bg-[#F6F6F6] py-16 px-6 w-full max-w-[1920px] mx-auto'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12'>
        {/* Left Content - Single Image */}
        <div className='lg:w-1/2 w-full'>
          <div className='relative w-full aspect-[4/5] max-w-lg mx-auto'>
            <Image
              src={DecisionMakers}
              alt='Team collage showcase'
              width={600}
              height={750}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </div>

        {/* Right Content */}
        <div className='lg:w-1/2 w-full lg:pl-8'>
          {/* Badge */}

          <div className='mb-6'>
            <div className='w-full md:w-[70%] -mb-6 h-24 items-center md:justify-end justify-center flex'>
              <GameController />
            </div>
            <h2 className='text-[#FFAB40] text-[20px] font-[500] capitalize tracking-wide mb-2'>
              Decision Makers
            </h2>
            <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
              Built by People! Backed by Purpose.
            </h1>
          </div>

          <div className='space-y-4 text-gray-600 text-base leading-relaxed'>
            <p>
              We're not just a team — we're a tight-knit crew of designers, developers, marketers,
              and strategists driven by one goal: crafting digital experiences that actually make
              sense.
            </p>

            <p>
              From our first sketch to your final results, we obsess over the little details — the
              code you don't see, the pixel you don't notice, and the moment your users feel at
              home.
            </p>

            <p>
              We believe great work comes from great culture — and it shows in everything we build.
            </p>
          </div>

          <button className='mt-8 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-sm flex items-center gap-2 transition-colors duration-200'>
            Explore Our Team
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

import React from "react";
import Image from "next/image";
import Bolt from "@/components/svgs/icons/Bolt";
import Refresh from "@/components/svgs/icons/Refresh";
import HeroSnakeSvg from "@/components/svgs/hero/HeroSnakeSvg";
import PillContainer from "@/assets/images/homepage/pill-container.svg";

const SummaryStatsSection = () => {
  return (
    <>
      <section
        id='summary-section'
        className='flex bg-[#F6F6F6] mx-auto lg:flex-row flex-col relative pb-0 w-full max-w-[1920px] h-fit items-start justify-center '
        aria-labelledby='summary-stats-heading'
      >
        <div className='relative h-fit flex lg:-mb-32 mb-12 md:pt-20 pt-8'>
          <div className='relative '>
            <Image
              src={PillContainer}
              alt='Performance statistics visualization showing website load times and client retention metrics'
              className='md:w-[700px] md:h-[900px] w-[500px] h-[800px]'
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className='p-8 pr-0 flex flex-col'>
          <div className='w-full md:mt-12 mt-6 pr-8'>
            <p className='text-[20px] font-[400] text-[#FFAB40]'>Summary Stats</p>
            <h2
              id='summary-stats-heading'
              className='font-roboto leading-[110%] text-[56px] font-[800] text-[#0F172A]'
            >
              Living Stats Wall
            </h2>
            <p className='text-[20px] font-[400] leading-[180%] text-[#0F172A]'>
              We don't just say it — our stats show it
            </p>

            <div
              className='flex flex-col md:flex-row gap-4 mt-12'
              role='region'
              aria-label='Performance Statistics'
            >
              <article className='flex flex-col gap-4' aria-labelledby='load-time-stat'>
                <Bolt />
                <h3 id='load-time-stat' className='text-[24px] font-[700] text-[#0F172A]'>
                  Avg. Load Time
                </h3>
                <p className='max-w-2xl text-[18px] font-[400] text-[#0F172A]'>
                  Our websites load in an average of just 1.4 seconds — faster than 90% of the
                  internet. Why does that matter? Because every extra second your site takes to load
                  can cost you conversions, trust, and revenue.
                </p>
              </article>
              <article className='flex flex-col gap-4' aria-labelledby='retention-stat'>
                <Refresh />
                <h3 id='retention-stat' className='text-[24px] font-[700] text-[#0F172A]'>
                  Client Retention
                </h3>
                <p className='max-w-2xl text-[18px] font-[400] text-[#0F172A]'>
                  With a client retention rate of over 92%, our partners don't just launch with us —
                  they grow with us. From first project to ongoing success, we focus on building
                  long-term value through transparency, performance, and support that scales.
                </p>
              </article>
            </div>
          </div>
          <div className='w-full flex justify-end mt-12'>
            <div className='w-full self-end '>
              <HeroSnakeSvg
                width='100%'
                height='auto'
                className='w-full  h-auto max-w-full object-contain '
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SummaryStatsSection;

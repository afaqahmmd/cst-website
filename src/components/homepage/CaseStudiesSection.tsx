import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import PeakPixels from "@/assets/images/homepage/peak-pixels.svg";

const CaseStudiesSection = () => {
  return (
    <section id='case-studies-section' className='bg-white py-16 px-6 lg:pr-0'>
      <div className='w-full max-w-[1920px] mx-auto md:pl-12 pl-0 flex flex-col lg:flex-row items-center justify-center gap-12'>
        {/* Left Content */}
        <div className='lg:w-1/3 w-full'>
          <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight'>
            <span className='relative inline-block font-roboto'>
              <span className='relative z-10'>Peek Behind</span>
              {/* orange underline - positioned under "Peek Behind" only */}
              <span
                aria-hidden='true'
                className='absolute -bottom-1 left-[10%] right-[10%] h-2 bg-orange-400'
                style={{
                  borderRadius: "50%/100% 100% 0 0",
                  height: "10px",
                  transform: "translateY(2px)",
                }}
              />
              <span
                aria-hidden='true'
                className='absolute w-[60%] -bottom-1 -rotate-2 left-[10%] h-2 bg-orange-400'
                style={{
                  borderRadius: "50%/100% 100% 0 0",
                  height: "8px",
                  transform: "translateY(4px)",
                }}
              />
            </span>{" "}
            <span className='relative z-10'>the</span> <br className='hidden lg:block' />
            <span className='relative'>Pixels</span>
          </h1>

          <div className='space-y-4 mb-8'>
            <div className='flex items-center gap-3'>
              <Check className='w-4 h-4 text-gray-900' size={16} />
              <span className='text-lg text-gray-700 font-medium'>
                Real challenges, real results
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <Check className='w-4 h-4 text-gray-900' size={16} />
              <span className='text-lg text-gray-700 font-medium'>
                Tools, timelines, and impact
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <Check className='w-4 h-4 text-gray-900' size={16} />
              <span className='text-lg text-gray-700 font-medium'>
                Design that performs and converts
              </span>
            </div>
          </div>

          <button className='bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-sm flex items-center gap-2 transition-colors duration-200'>
            Explore Case Studies
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

        {/* Right Content - Single Image */}
        <div className='lg:w-2/3 w-full aspect-[1920/1280]'>
          <div className='relative w-full h-full'>
            <Dialog>
              <DialogTitle className='hidden'></DialogTitle>
              <DialogTrigger asChild>
                <Image
                  src={PeakPixels}
                  alt='Design interface showcase'
                  width={800}
                  height={600}
                  className='w-full h-full object-cover object-center rounded-lg cursor-pointer'
                />
              </DialogTrigger>

              {/* Popup modal */}
              <DialogContent className='w-full p-0 overflow-hidden bg-black'>
                <div className='relative w-full h-0' style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    width='560'
                    height='315'
                    src='https://www.youtube.com/embed/ZK-rNEhJIDs?si=eo9m2R-s2kIOkOaY'
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                    className='absolute top-0 left-0 w-full h-full'
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

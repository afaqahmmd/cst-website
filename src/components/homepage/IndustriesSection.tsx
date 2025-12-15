import React from "react";
import ButtonComponent from "@/components/Button/Button";
import Bun from "@/components/svgs/icons/Bun";
import { Industry } from "@/data/industries";

interface IndustriesSectionProps {
  industries: Industry[];
}

const IndustriesSection: React.FC<IndustriesSectionProps> = ({ industries }) => {
  return (
    <div id='industries-section' className='mt-16 text-center w-full max-w-[1920px] mx-auto'>
      <div className=' bg-[#F6F6F6] py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12'>
            <p className='text-[#FFAB40] font-roboto font-medium text-sm sm:text-base mb-2 tracking-wide'>
              Target Industries
            </p>
            <h1 className='text-3xl font-roboto sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
              Tailored for Every Industry
            </h1>
            <p className='text-lg font-roboto text-gray-600 max-w-4xl mx-auto leading-relaxed'>
              From eCommerce to EdTech, Healthcare to SaaS — we craft solutions that adapt to your
              industry's DNA. No templates, just tailored ecosystems built around your users and
              goals.
            </p>
          </div>

          {/* Industries Grid */}
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 font-roboto'>
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`${industry.bgColor} flex flex-col justify-between rounded-3xl p-4  shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className='text-white flex items-center justify-center'>
                    <Bun />
                  </div>
                  <div className='bg-white min-h-[300px] rounded-3xl p-6 flex flex-col'>
                    {/* Title */}
                    <h3 className='text-xl font-bold text-gray-900 text-center mb-4'>
                      {industry.title}
                    </h3>
                    {/* Icon Circle */}
                    <div className={`flex mx-auto `}>{industry.icon}</div>

                    {/* Description */}
                    <p className='mt-3 text-[#475569] text-[16px] leading-[24px] text-center flex-grow font-[400]'>
                      {industry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* bottom navigation buttons */}
            <div className='flex mt-12 flex-col sm:flex-row gap-4 justify-center items-center'>
              <a href='#contact-section'>
                <ButtonComponent name='Get In Touch' buttonHeight='55px' />
              </a>
              <div className='flex items-center gap-2'>
                <button className='relative w-14 h-14 shadow-lg rounded-full bg-white flex items-center justify-center'>
                  {/* Left semi-circle border */}
                  <span className='absolute inset-0 rounded-full border-4 border-black [clip-path:polygon(0_0,50%_0,50%_100%,0_100%)]'></span>

                  {/* Button content */}
                  <span className='z-10 text-black font-bold'>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;

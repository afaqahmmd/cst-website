import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import Domain1 from "@/assets/images/industries/domain1.png";
import Domain2 from "@/assets/images/industries/domain2.png";
import Domain3 from "@/assets/images/industries/domain3.png";
import Domain4 from "@/assets/images/industries/domain4.png";
import Domain5 from "@/assets/images/industries/domain5.png";
import Domain6 from "@/assets/images/industries/domain6.png";
import Domain7 from "@/assets/images/industries/domain7.png";

const DomainExpertsSection: React.FC = () => {
  const domainExperts = [
    "Human-centered design",
    "Scalable, clean code",
    "Deep industry understanding",
    "Transparent collaboration",
    "On-time, on-point delivery",
  ];

  const domainImages = [Domain1, Domain2, Domain3, Domain4, Domain5, Domain6, Domain7];

  return (
    <div className='flex flex-col bg-[#FAFBFA] text-center gap-2 leading-[50px] items-center border-none lg:py-16 py-8 p-6'>
      <div className='md:max-w-[80%] gap-3 max-w-7xl mx-auto'>
        <p className='text-[20px] font-[500] text-[#FFAB40]'>Domain Experts</p>
        <h1 className='md:text-[40px] lg:text-[56px] font-extrabold tracking-tight font-roboto text-[#0F172A] text-[34px]'>
          Why CorTechSols for Your <br className='hidden ld:block' />
          Industry?
        </h1>
        <p className='text-[20px] mt-3 font-roboto text-[#0F172A] leading-[180%] mb-8'>
          We don't just build digital solutions — we solve real business challenges. From design
          thinking to scalable development, we work as your strategic tech partner.
        </p>
      </div>

      {/* Domain Experts List - Outside parent container for full width */}
      <div className='w-full max-w-[1920px] mx-auto px-4 mb-8'>
        <div className='flex items-center justify-between gap-3 overflow-x-auto scrollbar-hide pb-2'>
          {domainExperts.map((expert, index) => (
            <div className='flex items-center gap-2 flex-shrink-0 whitespace-nowrap' key={index}>
              <div className='flex-shrink-0 bg-teal-500 h-6 w-6 flex items-center justify-center rounded-full'>
                <Check className='w-4 h-4 text-white' size={16} />
              </div>
              <p className='text-sm md:text-base'>{expert}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='md:max-w-[80%] max-w-7xl mx-auto'>
        {/* Old layout - hidden */}
      </div>
      
      <div className='w-full md:mt-12 mt-6 max-w-[1920px] mx-auto'>
        <div
          className='flex overflow-x-auto items-center pb-2 scrollbar-hide w-full justify-between gap-8'
          style={{ scrollbarWidth: "auto" }}
        >
          {domainImages.map((image, index) => (
            <div key={index} className='flex-shrink-0'>
              <Image src={image} alt={`domain-${index}`} width={200} height={200} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomainExpertsSection;

import React from "react";
import Image, { StaticImageData } from "next/image";
import BulbImg from "@/assets/images/about/bulb.png";
import RocketImg from "@/assets/images/about/rocket.png";
import SearchImg from "@/assets/images/about/search.png";
import TargetImg from "@/assets/images/about/target.png";
import Heart from "@/components/svgs/icons/Heart";
import Lock from "@/components/svgs/icons/Lock";

const OurValuesSection = () => {
  const features = [
    {
      icon: BulbImg,
      title: "Proven Track Record",
      description:
        "Over 200 successful projects with measurable improvements in user engagement and conversion rates.",
    },
    {
      icon: Heart,
      title: "Cross-Industry Expertise",
      description:
        "Experience across fintech, healthcare, e-commerce, SaaS, and emerging technologies.",
    },
    {
      icon: TargetImg,
      title: "End-to-End Service",
      description:
        "From initial research to final implementation, we handle every aspect of the design process.",
    },
    {
      icon: SearchImg,
      title: "Agile Methodology",
      description:
        "Fast iterations, continuous feedback, and flexible approach to meet changing requirements.",
    },
    {
      icon: RocketImg,
      title: "Latest Design Trends",
      description:
        "Stay ahead with cutting-edge design patterns, accessibility standards, & emerging technologies.",
    },
    {
      icon: Lock,
      title: "Post-Launch Support",
      description:
        "Ongoing optimization and support to ensure your design continues to perform at its best.",
    },
  ];

  return (
    <div className='bg-gray-50 py-16 lg:py-24 font-roboto'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <p className='text-[#FFAB40] text-[20px] font-[500] mb-2'>Our Values</p>

          <h2 className='text-3xl md:text-5xl font-[800] text-[#0F172A] leading-[110%] mb-6'>
            The Heart of CorTechSols
          </h2>
          <p className='text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed'>
            We don't just create beautiful interfaces – we craft experiences that drive engagement,
            conversion, and long-term success for your business.
          </p>
        </div>

        {/* Feature Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {features.map((feature, index) => {
            const Icon = feature.icon;

            const isImage = typeof Icon !== "function"; // detect if it's an imported image

            return (
              <div
                key={index}
                className='flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group'
              >
                <div className=' h-16'>
                  {isImage ? (
                    <Image
                      src={Icon as StaticImageData}
                      alt={feature.title}
                      className={`w-auto h-12 ${index === 0 && "h-14"}`}
                    />
                  ) : (
                    <Icon className=' text-gray-700' />
                  )}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>{feature.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurValuesSection;

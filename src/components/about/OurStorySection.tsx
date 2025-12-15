import React from "react";
import { Target, Eye } from "lucide-react";

const OurStorySection = () => {
  return (
    <section className='w-full py-16 px-4 md:px-8 lg:px-20 font-roboto'>
      {/* Title */}
      <div className='text-center max-w-3xl mx-auto'>
        <h2 className='text-3xl md:text-5xl font-[800] leading-[56px] tracking-[-1.5%] text-[#0F172A] mb-4'>
          Our Story
        </h2>
        <p className='text-gray-600 leading-relaxed'>
          CorTechSols started as a passion project by a small team of creators who believed software
          should be human-first. From coding in tight corners over countless chai breaks to building
          products for industries like fintech, logistics, and healthcare — our mission has stayed
          the same: craft meaningful digital solutions with clarity, purpose, and real-world impact.
        </p>
      </div>

      {/* Cards Section */}
      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto'>
        {/* Mission Card */}
        <div className='bg-white shadow-md rounded-xl p-6 border border-gray-100 text-center hover:shadow-lg transition'>
          <div className='flex justify-center items-center w-12 h-12 rounded-full bg-orange-100 mx-auto mb-4'>
            <Target className='text-orange-500' size={28} />
          </div>
          <h3 className='text-xl font-semibold text-gray-900 mb-2'>Our Mission</h3>
          <p className='text-gray-600 leading-relaxed'>
            To empower businesses through intuitive design, scalable development, and impactful
            digital strategy — helping them solve real problems and grow with confidence in a
            fast-evolving digital world.
          </p>
        </div>

        {/* Vision Card */}
        <div className='bg-white shadow-md rounded-xl p-6 border border-gray-100 text-center hover:shadow-lg transition'>
          <div className='flex justify-center items-center w-12 h-12 rounded-full bg-blue-100 mx-auto mb-4'>
            <Eye className='text-blue-500' size={28} />
          </div>
          <h3 className='text-xl font-semibold text-gray-900 mb-2'>Our Vision</h3>
          <p className='text-gray-600 leading-relaxed'>
            To become a globally recognized innovation partner — where creativity meets code, and
            every digital product we craft shapes a smarter, more connected future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;

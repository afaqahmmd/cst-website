import React from "react";

const FAQsHeader: React.FC = () => {
  return (
    <header className='text-center mb-12'>
      <p className='text-[#FFAB40] text-[20px] font-[500] leading-[110%] mb-4'>FAQs</p>
      <h2 id='faqs-heading' className='text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6'>
        Frequently Asked Questions
      </h2>
      <p className='text-[#0F172A] text-[20px] font-[500] leading-[33px] tracking-[-1.5%] mx-auto'>
        Got questions about CorTechSols? Explore helpful answers that make your blurry mind clear.
      </p>
    </header>
  );
};

export default FAQsHeader;

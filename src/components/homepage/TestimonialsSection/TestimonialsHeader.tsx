import React from "react";

const TestimonialsHeader: React.FC = () => {
  return (
    <header className='mb-16'>
      <p className='text-[#FFAB40] text-[20px] font-[500] capitalize tracking-wide mb-4'>
        Happy Clients
      </p>
      <h2 id='testimonials-heading' className='text-4xl lg:text-5xl font-bold text-white mb-6'>
        What Our Clients Told the Bots
      </h2>
      <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
        From live feedback to saved chat responses, here's what real people are saying
      </p>
    </header>
  );
};

export default TestimonialsHeader;

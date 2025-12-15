import React from "react";
import QA from "@/components/svgs/icons/QA";

const FAQsChatWidget: React.FC = () => {
  return (
    <div className='lg:w-1/2  w-full'>
      <div className='flex  flex-col py-8 items-center bg-white rounded-2xl border border-gray-200 p-6 max-w-md mx-auto'>
        {/* Chat Header */}
        <div className='flex items-center justify-center mb-6'>
          <QA />
        </div>

        {/* Question */}
        <div className='mb-6 text-center'>
          <h3 className='font-semibold text-gray-900 mb-3'>Do you have more questions?</h3>
          <p className='text-gray-600 text-sm leading-relaxed'>
            Complete workforce management and time tracking in one solution. Meet the platform
            designed to streamline your team's productivity and performance.
          </p>
        </div>

        {/* CTA Button */}
        <button className='mt-12 w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-sm transition-colors duration-200'>
          Start a Direct Chat
        </button>
      </div>
    </div>
  );
};

export default FAQsChatWidget;

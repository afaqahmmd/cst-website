"use client";

import React, { useState } from "react";
import Image from "next/image";
import PhoneNumberInput from "@/components/PhoneNumberInput/PhoneNumberInput";
import VirtualAssistant from "@/assets/images/homepage/virtual-assistant.svg";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const getCode = () => {
    // Handle get code logic here
    console.log("Get code clicked");
  };

  return (
    <div
      id='contact-section'
      className='font-roboto bg-[#F6F6F6] py-12 px-4 sm:px-6 lg:px-8 w-full max-w-[1920px] mx-auto'
    >
      <div className='md:max-w-[90%] max-w-[100%] mx-auto'>
        <div className='overflow-hidden'>
          <div className='grid grid-cols-1 lg:grid-cols-2 w-full'>
            {/* Form Section */}
            <div className='col-span-1 md:p-8 p-2 lg:p-12 lg:pr-6'>
              <div onSubmit={handleSubmit} className='space-y-6'>
                {/* Name and Email Row */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <input
                      type='text'
                      name='name'
                      placeholder='Name'
                      value={formData.name}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border bg-white border-gray-200 max-h-[60px] focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200'
                    />
                  </div>
                  <div>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email'
                      value={formData.email}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border bg-white border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200'
                    />
                  </div>
                </div>

                {/* Phone Number with Country Code */}
                <div className='flex md:flex-row flex-col gap-0 md:max-h-[60px] max-h-[100px] bg-white'>
                  <PhoneNumberInput />
                  <button
                    type='button'
                    onClick={getCode}
                    className='px-6 py-3 min-w-[120px] bg-[#2B2B2B] text-white rounded-none hover:bg-gray-900 transition-colors duration-200 font-medium'
                  >
                    Get Code
                  </button>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name='message'
                    placeholder='Message'
                    rows={12}
                    value={formData.message}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border bg-white border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200 resize-none'
                  />
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  onClick={handleSubmit}
                  className='w-full bg-teal-500 text-white py-4 rounded-[5px] hover:bg-teal-600 transition-colors duration-200 font-semibold text-lg'
                >
                  Send
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className='col-span-1 md:p-8 p-2 lg:p-12 w-full  flex flex-col justify-center'>
              <div className='w-full'>
                <div className='w-full flex justify-center '>
                  {/* image  */}
                  <Image src={VirtualAssistant} alt='image' width={500} height={500} />
                </div>
                <p className='text-[20px] font-[500] text-[#FFAB40] leading-[110%] my-3'>
                  Contact Us
                </p>
                <h1 className='font-roboto leading-[110%] lg:text-[56px] text-[44px] font-[800] text-[#0F172A] mb-6'>
                  Let's Build Something Brilliant Together
                </h1>

                <div className='leading-[180%] text-[20px] font-[400] text-[#0F172A]'>
                  <p>
                    Got an idea? A project in mind? Or just want to see if we're the right fit? Drop
                    us a message — we usually reply within a few hours. Whether it's design, code,
                    strategy, or scaling — we're all ears (and keyboards).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

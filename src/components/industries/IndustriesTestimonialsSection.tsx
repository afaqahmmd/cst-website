import React from "react";
import Image from "next/image";
import Apostrophe from "@/components/svgs/icons/Apostrophe";
import Client1 from "@/assets/images/industries/client1.jpg";
import Client2 from "@/assets/images/industries/client2.jpg";

const IndustriesTestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Marketing Manager",
      company: "HealthTech",
      testimonial:
        "The platform is user-friendly and efficient, improving our workflow and boosting productivity by 40% for our team!",
      avatar: Client1,
      quoteColor: "#A4AAFA",
    },
    {
      id: 2,
      name: "Emily Smith",
      role: "Project Manager",
      company: "Logistics",
      testimonial:
        "Quick and flexible! The team transformed our operations, making tasks seamless and efficient. Highly recommended for professionals!",
      avatar: Client2,
      quoteColor: "#A0D7B2 ",
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Sales Head",
      company: "LegalTech",
      testimonial:
        "Amazing experience with the team! Easy to use, reliable, and packed with great features that enhance efficiency and collaboration.",
      avatar: Client1,
      quoteColor: "#F5EC8D",
    },
    {
      id: 4,
      name: "Emily Smith",
      role: "Project Manager",
      company: "Logistics",
      testimonial:
        "Amazing experience with the team! Easy to use, reliable, and packed with great features that enhance efficiency and collaboration.",
      avatar: Client2,
      quoteColor: "#F5EC8D",
    },
    {
      id: 5,
      name: "Michael Johnson",
      role: "Sales Head",
      company: "LegalTech",
      testimonial:
        "Amazing experience with the team! Easy to use, reliable, and packed with great features that enhance efficiency and collaboration.",
      avatar: Client2,
      quoteColor: "#F5EC8D",
    },
  ];

  return (
    <div className='flex flex-col bg-[#FAFBFA] text-center gap-2 leading-[50px] items-center border-none p-6'>
      <div className='md:max-w-[80%] gap-3 max-w-7xl mx-auto'>
        <p className='text-[20px] font-[500] text-[#FFAB40]'>Happy Clients</p>
        <h1 className='md:text-[40px] lg:text-[56px] font-extrabold tracking-tight font-roboto text-[#0F172A] text-[34px]'>
          What Our Clients Say
        </h1>
        <p className='text-[20px] mt-3 font-roboto text-[#0F172A] leading-[180%] mb-8'>
          Our work speaks for itself, but our clients say it even better. Explore their stories of
          success, growth, and transformation
        </p>
      </div>
      <div className='w-full max-w-[1920px] mx-auto'>
        <div
          className='flex overflow-x-auto gap-3 items-center pb-12 scrollbar-hide w-full justify-between'
          style={{ scrollbarWidth: "auto" }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className='bg-white min-h-[223px] rounded-lg border border-gray-100 shadow-lg relative flex-shrink-0 max-w-96 min-w-72 p-4'
            >
              {/* Client Info */}
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <div className='w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0'>
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.name} profile picture`}
                      width={48}
                      height={48}
                      className='object-cover w-full h-full'
                    />
                  </div>
                  <div className='flex flex-col items-start'>
                    <h4 className='font-semibold font-roboto text-gray-900 text-sm'>
                      {testimonial.name}
                    </h4>
                    <p className='text-gray-500 font-roboto text-xs'>{testimonial.role}</p>
                  </div>
                </div>
                {/* Quote Icon */}
                <div className={`text-6xl mb-4 leading-none`}>
                  <Apostrophe currentColor={testimonial.quoteColor} />
                </div>
              </div>

              {/* Testimonial Text */}
              <p className='text-start text-[#6B6B6B] tracking-[0px] font-light text-[14px] leading-4 my-4'>
                {testimonial.testimonial}
              </p>

              {/* Company Badge */}
              <div className='flex justify-end w-full'>
                <span className='text-[16px] font-roboto font-bold text-[#343434]'>
                  {testimonial.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesTestimonialsSection;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Minus, User } from "lucide-react";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  columnType: "left" | "right";
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index, columnType }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate positioning and rotation based on column type and index
  const getCardStyles = () => {
    const isLeft = columnType === "left";

    // Base rotation values
    let baseRotation = 0;
    let baseTranslateX = 0;
    let baseTranslateY = index * -30;
    let transformOrigin = isLeft ? "bottom left" : "bottom right";

    if (isLeft) {
      switch (index) {
        case 0:
          baseRotation = 12;
          break;
        case 1:
          baseRotation = 2;
          break;
        case 2:
          baseRotation = -8;
          break;
        case 3:
          baseRotation = -17;
          break;
      }
      baseTranslateX = (index - 2) * -4;
    } else {
      switch (index) {
        case 0:
          baseRotation = -10;
          break;
        case 1:
          baseRotation = -2;
          break;
        case 2:
          baseRotation = 6;
          break;
        case 3:
          baseRotation = 13;
          break;
      }
      switch (index) {
        case 0:
          baseTranslateX = 100;
          break;
        case 1:
          baseTranslateX = 90;
          break;
        case 2:
          baseTranslateX = 70;
          break;
      }
    }

    return {
      transform: isHovered
        ? "translateX(0px) translateY(0px) rotate(0deg)"
        : `translateX(${baseTranslateX}px) translateY(${baseTranslateY}px) rotate(${baseRotation}deg)`,
      transformOrigin,
      zIndex: isHovered ? 1000 : 4 - index,
      // Instant transform on hover; animate transform when not hovered.
      transition: isHovered ? "transform 0ms ease, box-shadow 200ms ease, filter 200ms ease" : "transform 500ms ease-out, box-shadow 200ms ease, filter 200ms ease",
    };
  };

  return (
    <article
      className={`absolute lg:w-[500px] md:w-[400px] w-[300px] font-roboto text-start lg:h-[221px] h-fit bg-white rounded-[24px] rounded-bl-none shadow-lg border cursor-pointer hover:shadow-xl will-change-transform ${
        isHovered ? "shadow-2xl scale-105" : ""
      }`}
      style={getCardStyles()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role='article'
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      {/* Bubble triangle */}
      <div
        className='absolute -bottom-[49px] -left-[1px] w-0 h-0 
             border-r-[90px] border-t-[50px] 
            border-l-transparent border-r-transparent border-t-white'
        aria-hidden='true'
      />

      <div className='p-6'>
        {/* Header */}
        <header className='flex items-start justify-between mb-4'>
          <div className='flex items-center space-x-3'>
            <div className='w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0'>
              {testimonial.avatar ? (
                <Image
                  src={testimonial.avatar.src}
                  alt={`${testimonial.name}, ${testimonial.role} at ${testimonial.company}`}
                  className='w-full h-full object-cover'
                  width={60}
                  height={60}
                />
              ) : (
                <div className='w-full h-full flex items-center justify-center'>
                  <User className='w-6 h-6 text-gray-400' />
                </div>
              )}
            </div>
            <div>
              <h3 className='font-[600] font-roboto text-[20px] text-[#000000]'>
                {testimonial.name}
              </h3>
              <p className='text-sm text-gray-600'>
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </div>

          <div className='flex gap-2 py-3 p-2 rounded-[14px] bg-black transition-all duration-200'>
            <Heart color='white' className='w-4 h-4 transition-all duration-200' />
            <Minus color='white' className='w-4 h-4 transition-all duration-200' />
          </div>
        </header>

        {/* Content */}
        <blockquote className='mb-4'>
          <p className='text-[#475569] font-roboto font-[400] text-[16px] leading-[150%] tracking-[-1.5%]'>
            "{testimonial.content}"
          </p>
        </blockquote>

        {/* Timestamp */}
        <footer className='flex justify-between items-center font-[500] text-[#475569] leading-[150%] tracking-[-1.5%]'>
          <p className='font-[400]'>🧠 Auto-tagged: UX Brilliance</p>
          <time dateTime='2025-05-13T14:11:00'>13 May, 2025 | 2:11 PM</time>
        </footer>
      </div>
    </article>
  );
};

export default TestimonialCard;

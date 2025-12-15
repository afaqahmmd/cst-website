import React from "react";
import { Testimonial } from "@/data/testimonials";
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsGrid from "./TestimonialsGrid";
import { generateTestimonialsStructuredData } from "@/utils/structuredData";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  testimonials2: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  testimonials2,
}) => {
  // Generate structured data for SEO
  const structuredData = generateTestimonialsStructuredData([...testimonials, ...testimonials2]);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section
        id='clients-section'
        className='relative bg-[#2B2B2B] py-16 px-6 w-full max-w-[1920px] mx-auto'
        aria-labelledby='testimonials-heading'
      >
        <div className='relative mx-auto text-center'>
          <TestimonialsHeader />
          <TestimonialsGrid testimonials={testimonials} testimonials2={testimonials2} />
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;

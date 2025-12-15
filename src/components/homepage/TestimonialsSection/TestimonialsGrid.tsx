import React from "react";
import { Testimonial } from "@/data/testimonials";
import TestimonialsColumn from "./TestimonialsColumn";

interface TestimonialsGridProps {
  testimonials: Testimonial[];
  testimonials2: Testimonial[];
}

const TestimonialsGrid: React.FC<TestimonialsGridProps> = ({ testimonials, testimonials2 }) => {
  return (
    <div className='relative flex xl:flex-row flex-col w-full justify-evenly gap-12'>
      {/* <TestimonialsColumn
        testimonials={testimonials}
        columnType='left'
        aria-label='Client testimonials - left column'
      /> */}
      <TestimonialsColumn
        testimonials={testimonials2}
        columnType='right'
        aria-label='Client testimonials - right column'
      />
    </div>
  );
};

export default TestimonialsGrid;

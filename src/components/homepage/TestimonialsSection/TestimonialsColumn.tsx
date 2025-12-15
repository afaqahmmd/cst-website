import React from "react";
import { Testimonial } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

interface TestimonialsColumnProps {
  testimonials: Testimonial[];
  columnType: "left" | "right";
  "aria-label": string;
}

const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({
  testimonials,
  columnType,
  "aria-label": ariaLabel,
}) => {
  return (
    <div
      className='relative flex justify-center items-center h-[500px]'
      role='group'
      aria-label={ariaLabel}
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={`${columnType}-${testimonial.id}`}
          testimonial={testimonial}
          index={index}
          columnType={columnType}
        />
      ))}
    </div>
  );
};

export default TestimonialsColumn;

import React from "react";

interface HeroTitleProps {
  className?: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ className = "" }) => {
  return (
    <h1
      className={`text-5xl font-bold tracking-tight font-roboto text-[#0F172A] sm:text-4xl md:text-[60px] lg:text-[72px] ${className}`}
    >
      <span className='relative inline-block font-roboto'>
        <span className='relative z-10'>Fixing</span>
        {/* orange underline */}
        <span
          aria-hidden='true'
          className='absolute -bottom-1 left-0 right-0 h-2 bg-orange-400'
          style={{
            borderRadius: "50%/100% 100% 0 0",
            height: "10px",
            transform: "translateY(2px)",
          }}
        />
        <span
          aria-hidden='true'
          className='absolute w-[70%] -bottom-2 -rotate-2 right-0 h-2 bg-orange-400'
          style={{
            borderRadius: "50%/100% 100% 0 0",
            height: "8px",
            transform: "translateY(4px)",
          }}
        />
      </span>{" "}
      What
      <br />
      Others Miss
    </h1>
  );
};

export default HeroTitle;

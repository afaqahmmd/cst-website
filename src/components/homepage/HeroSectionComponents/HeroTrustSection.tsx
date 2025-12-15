import React from "react";
import Blocks from "@/components/svgs/icons/Blocks";
import Blocks2 from "@/components/svgs/icons/Blocks2";
import ChartSpline from "@/components/svgs/icons/ChartSpline";
import BlocksPolygon from "@/components/svgs/icons/BlocksPolygon";
import ShieldCircle from "@/components/svgs/icons/ShieldCircle";

interface HeroTrustSectionProps {
  className?: string;
  title?: string;
  showTitle?: boolean;
}

const HeroTrustSection: React.FC<HeroTrustSectionProps> = ({
  className = "",
  title = "Trusted by leading companies",
  showTitle = true,
}) => {
  return (
    <div className={`flex sm:flex-row flex-col gap-12 mt-10 ${className}`}>
      {showTitle && (
        <p className='mb-3 text-[16px] text-nowrap leading-[140%] font-roboto font-[400] tracking-wide text-[#475569]'>
          {title.split("Trusted by ").map((part, index, array) => (
            <React.Fragment key={index}>
              {index === 0 ? "Trusted By" : part}
              {index < array.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      )}
      <div
        className='flex items-center lg:gap-12 md:gap-8 gap-4 text-slate-500'
        role='img'
        aria-label='Trusted by leading technology companies'
      >
        <ShieldCircle aria-label='Security and compliance solutions' />
        <ChartSpline aria-label='Analytics and data visualization' />
        <Blocks aria-label='Blockchain and decentralized solutions' />
        <Blocks2 aria-label='Enterprise software solutions' />
        <BlocksPolygon aria-label='Advanced technology platforms' />
      </div>
    </div>
  );
};

export default HeroTrustSection;

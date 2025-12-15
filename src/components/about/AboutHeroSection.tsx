import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutImage from "@/assets/images/about/hero-image.png";

const AboutHeroSection = () => {
  return (
    <HeroSection
      HeroImg={AboutImage}
      title={"Ideas that build better tech"}
      subText={`Explore expert insights, product strategies, design thinking, and
        development tips — straight from the minds shaping real-world digital
        solutions at CorTechSols.`}
    />
  );
};

export default AboutHeroSection;

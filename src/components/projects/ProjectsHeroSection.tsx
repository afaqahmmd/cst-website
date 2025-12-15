import HeroSection from "@/components/HeroSection/HeroSection";
import HeroImg from "@/assets/images/projects/hero-img.webp";

const ProjectsHeroSection = () => {
  return (
    <HeroSection
      HeroImg={HeroImg}
      title='Turning Ideas into Impactful Products'
      subText='Explore how we help startups and enterprises turn bold ideas into purposeful, scalable digital products — from MVPs to full platforms.'
    />
  );
};

export default ProjectsHeroSection;

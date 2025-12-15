import React from "react";
import InfoSection from "@/components/InfoSection/InfoSection";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import Footer from "@/components/Footer/Footer";
import {
  AboutHeroSection,
  OurStorySection,
  OurValuesSection,
  OurPartnersSection,
  MeetOurTeamSection,
  OurCultureSection,
  OurProcessSection,
} from "@/components/about";

const page = () => {
  return (
    <div>
      <AboutHeroSection />
      <OurStorySection />
      <OurValuesSection />
      <OurPartnersSection />
      <MeetOurTeamSection />
      <OurCultureSection />
      <OurProcessSection />
      <InfoSection />
      <StayInLoop />
      {/* <Footer /> */}
    </div>
  );
};

export default page;

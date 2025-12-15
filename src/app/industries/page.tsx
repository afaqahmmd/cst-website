import React from "react";
import { fetchIndustriesSSR } from "@/lib/api-ssr";
import {
  IndustriesHeroSection,
  IndustriesTabsSection,
  DomainExpertsSection,
  ComplianceSection,
  IndustriesTestimonialsSection,
} from "@/components/industries";
import InfoSection from "@/components/InfoSection/InfoSection";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import Footer from "@/components/Footer/Footer";

// Force dynamic rendering to always fetch fresh data from CMS
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// This is now a server component that fetches data at build time
const page = async () => {
  // Fetch industries data on the server
  let industries = [];
  let error = null;

  try {
    const response = await fetchIndustriesSSR();
    // New API returns paginated response with results array
    industries = response?.results || response?.data || [];
    console.log(industries,"industries")
  } catch (err) {
    console.error("Failed to fetch industries:", err);
    error = err instanceof Error ? err.message : "Failed to fetch industries";
  }

  return (
    <main className=' relative bg-white font-roboto'>
      <IndustriesHeroSection />
      {/* Client Component */}
      <IndustriesTabsSection industries={industries} />

      <DomainExpertsSection />

      <ComplianceSection />

      <IndustriesTestimonialsSection />

      <InfoSection
        title="Still Curious? Let's Talk"
        subText="Let's Build Something That Moves Your Industry Forward."
        buttonText='Get in Touch'
      />

      <StayInLoop
        title='Stay Inspired, Stay Ahead'
        subText='Get monthly tips, design trends, and behind-the-scenes from our team.'
        buttonText='Subscribe'
      />

      {/* <Footer /> */}
    </main>
  );
};

export default page;

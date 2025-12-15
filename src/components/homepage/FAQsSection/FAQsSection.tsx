import React from "react";
import { faqs } from "@/data/mockFaqs";
import FAQsHeader from "./FAQsHeader";
import FAQsAccordion from "./FAQsAccordion";
import FAQsChatWidget from "./FAQsChatWidget";
import { generateFAQsStructuredData } from "@/utils/structuredData";

interface FAQsSectionProps {
  faqs: any[];
}

const FAQsSection: React.FC<FAQsSectionProps> = ({ faqs }) => {
  // Generate structured data for SEO
  const structuredData = generateFAQsStructuredData(faqs);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section
        id='faqs-section'
        className='bg-white py-16 px-6 w-full max-w-[1920px] mx-auto'
        aria-labelledby='faqs-heading'
      >
        <div className='max-w-7xl mx-auto'>
          <FAQsHeader />

          <div className='flex flex-col lg:flex-row gap-2 lg:gap-0'>
            <FAQsAccordion faqs={faqs} />
            <FAQsChatWidget />
            {/* <div className='bred'>
            </div>
            <div className='bred'>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQsSection;

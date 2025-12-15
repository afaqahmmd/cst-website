import React from "react";
import Image from "next/image";
import books from "@/assets/images/industries/books.png";
import ferpa from "@/assets/images/industries/ferpa.png";
import gdpr from "@/assets/images/industries/gdpr.png";
import hipaa from "@/assets/images/industries/hipaa.png";
import pci from "@/assets/images/industries/pci.png";
import iso from "@/assets/images/industries/iso.png";

const ComplianceSection: React.FC = () => {
  const certifications = [
    {
      id: 1,
      title: "HIPAA",
      description:
        "We design platforms that ensure the confidentiality, integrity, and security of protected health information (PHI). HIPAA compliance helps protect patient data from breaches, unauthorized access, and misuse.",
      image: hipaa,
      alt: "HIPAA Certification Logo",
    },
    {
      id: 2,
      title: "GDPR & CCP",
      description:
        "We help businesses comply with GDPR and CCPA (California) to ensure user data rights, transparent data usage policies, and secure handling of personal information — from opt-ins to data deletion.",
      image: gdpr,
      alt: "GDPR & CCP Certification Logo",
    },
    {
      id: 3,
      title: "PCI-DSS",
      description:
        "For platforms that process payments, we follow PCI-DSS principles to protect cardholder data. This includes secure encryption, safe payment gateways, and protection from fraud and identity theft.",
      image: pci,
      alt: "PCI-DSS Certification Logo",
    },
    {
      id: 4,
      title: "FERPA",
      description:
        "We build systems that respect student privacy by adhering to FERPA guidelines, ensuring educational institutions can store, manage, and protect student records responsibly.",
      image: ferpa,
      alt: "FERPA Certification Logo",
    },
    {
      id: 5,
      title: "Special Card",
      image: books,
      description:
        "This is the special middle card with colorful folder design that appears different from all other certification cards.",
      isSpecial: true,
    },
    {
      id: 6,
      title: "ISO/IEC 27001",
      description:
        "We follow ISO/IEC 27001 principles to create secure and resilient systems. From risk assessment to incident response planning, we take information security into every stage of development.",
      image: iso,
      alt: "ISO/IEC 27001 Certification Logo",
    },
  ];

  return (
    <div className='flex flex-col text-center gap-2 leading-[50px] items-center border-none p-6'>
      <div className='md:max-w-[80%] gap-3 flex flex-col max-w-7xl mx-auto'>
        <p className='text-[20px] font-[500] text-[#FFAB40]'>
          Built with Security & Compliance in Mind
        </p>
        <h1 className='md:text-[40px] lg:text-[56px] font-extrabold tracking-tight font-roboto text-[#0F172A] text-[34px]'>
          Industry-Specific Compliance
        </h1>
        <p className='text-[20px] mt-3 font-roboto text-[#0F172A] leading-[180%] mb-8'>
          Whether it's patient data in healthcare, financial transactions in fintech, or student
          records in EdTech — we understand that compliance isn't optional, it's essential.
        </p>
      </div>
      <div className='w-full'>
        <div className='max-w-7xl mx-auto px-4 py-12'>
          <div className='flex flex-col gap-6'>
            {/* First row: first 3 certifications */}
            <div className='flex lg:flex-row flex-col items-center justify-center gap-6'>
              {certifications.slice(0, 3).map((cert) => (
                <div key={cert.id} className='relative flex-1 flex justify-center'>
                  {cert.isSpecial ? (
                    // Special card design for the 5th card (middle card with colorful icons)
                    <div className='h-full w-full aspect-square flex items-center justify-center'>
                      <Image src={books} alt='books' fill priority />
                    </div>
                  ) : (
                    // Regular card design for other certifications
                    <div className='bg-white rounded-lg border border-gray-200 p-6 h-fit flex flex-col'>
                      <div className='flex justify-center mb-6'>
                        <div className='min-h-[200px] min-w-[300px] relative flex items-center justify-center'>
                          <Image
                            src={cert.image}
                            alt={cert.alt || cert.title}
                            fill
                            className='object-contain h-full w-full'
                          />
                        </div>
                      </div>
                      <div className='text-center mb-4'>
                        <h3 className='text-[24px] font-bold text-[#2B2B2B]'>{cert.title}</h3>
                      </div>
                      <div className='flex-grow'>
                        <p className='text-[#868282] text-[16px] font-[400] leading-[32px] text-center'>
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Second row: next 3 certifications */}
            <div className='flex lg:flex-row flex-col items-center justify-center gap-6'>
              {certifications.slice(3, 6).map((cert) => (
                <div key={cert.id} className='relative flex-1 flex justify-center'>
                  {cert.isSpecial ? (
                    // Special card design for the 5th card (middle card with colorful icons)
                    <div className='h-full w-full aspect-square flex items-center justify-center'>
                      <Image src={books} alt='books' fill priority />
                    </div>
                  ) : (
                    // Regular card design for other certifications
                    <div className='bg-white rounded-lg  border border-gray-200 p-6 h-fit flex flex-col'>
                      <div className='flex justify-center mb-6'>
                        <div className='min-h-[200px] min-w-[300px] relative'>
                          <Image
                            src={cert.image}
                            alt={cert.alt || cert.title}
                            fill
                            className='object-contain'
                          />
                        </div>
                      </div>
                      <div className='text-center mb-4'>
                        <h3 className='text-xl font-bold text-gray-900'>{cert.title}</h3>
                      </div>
                      <div className='flex-grow'>
                        <p className='text-gray-600 text-sm leading-relaxed text-center'>
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceSection;

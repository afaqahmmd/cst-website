"use client";
import React, { useState, useEffect } from "react";
import EllipseDown from "@/components/svgs/hero/EllipseDown";
import EllipseUp from "@/components/svgs/hero/EllipseUp";
import HeroImg from "@/assets/images/industries/hero-img.png";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import Building from "@/components/svgs/icons/Building";
import Bank from "@/components/svgs/icons/Bank";
import Store from "@/components/svgs/icons/Store";
import HeartPlus from "@/components/svgs/icons/HeartPlus";
import Truck from "@/components/svgs/icons/Truck";
import Laptop from "@/components/svgs/icons/Laptop";
import TabsPic from "@/assets/images/industries/tabs-pic.png";
import Domain1 from "@/assets/images/industries/domain1.png";
import Domain2 from "@/assets/images/industries/domain2.png";
import Domain3 from "@/assets/images/industries/domain3.png";
import Domain4 from "@/assets/images/industries/domain4.png";
import Domain5 from "@/assets/images/industries/domain5.png";
import Domain6 from "@/assets/images/industries/domain6.png";
import Domain7 from "@/assets/images/industries/domain7.png";
import books from "@/assets/images/industries/books.png";
import ferpa from "@/assets/images/industries/ferpa.png";
import gdpr from "@/assets/images/industries/gdpr.png";
import hipaa from "@/assets/images/industries/hipaa.png";
import pci from "@/assets/images/industries/pci.png";
import iso from "@/assets/images/industries/iso.png";
import InfoSection from "@/components/InfoSection/InfoSection";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import Footer from "@/components/Footer/Footer";
import Client1 from "@/assets/images/industries/client1.jpg";
import Client2 from "@/assets/images/industries/client2.jpg";
import Apostrophe from "@/components/svgs/icons/Apostrophe";
import Link from "next/link";
import { useIndustries } from "@/hooks/useIndustries";

interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<{
    className?: string;
    fill?: string;
    stroke?: string;
  }>;
}

interface IndustryStats {
  projects: string;
  reviews: string;
  industries: string;
}

interface IndustryInfo {
  title: string;
  description: string;
  stats: IndustryStats;
  image: string;
}

type IndustryData = {
  [key: string]: IndustryInfo;
};

const page = () => {
  const { data: industriesList, isLoading: industriesLoading, error: industriesError } = useIndustries();

  const industries = industriesList?.data || [];
  console.log("industries api data:", industries);

  // Set activeTab to first industry slug if industries are loaded
  const [activeTab, setActiveTab] = useState<string>("");

  // Update activeTab when industries are loaded
  useEffect(() => {
    if (industries.length > 0 && !activeTab) {
      setActiveTab(industries[0].slug);
    }
  }, [industries, activeTab]);

  if(industriesLoading) {
    return <div>Loading...</div>;
  }

  if(industriesError) {
    return <div>Error: {industriesError.message}</div>;
  }

  const icons = [Laptop, Building, Store, Bank, HeartPlus, Truck, Store];

  const tabs: Tab[] = industries.map((industry: any, index: number) => ({
    id: industry.slug,
    label: industry.name,
    icon: icons[index % icons.length], // cycles through icons
  }));

  const domainImages = [
    Domain1,
    Domain2,
    Domain3,
    Domain4,
    Domain5,
    Domain6,
    Domain7,
  ];

  const industryData: IndustryData = {
    EdTech: {
      title: "EdTech",
      description:
        "We craft interactive, distraction-free learning tools designed to engage students, empower educators, and drive real academic outcomes – all with usability and accessibility at the core of every experience.",
      stats: {
        projects: "30+",
        reviews: "130+",
        industries: "15+",
      },
      image: "/api/placeholder/400/300",
    },
    RealEstate: {
      title: "Real Estate",
      description:
        "Transform property experiences with cutting-edge digital solutions that connect buyers, sellers, and agents through intuitive platforms designed for the modern real estate market.",
      stats: {
        projects: "25+",
        reviews: "95+",
        industries: "8+",
      },
      image: "/api/placeholder/400/300",
    },
    ECommerce: {
      title: "E-Commerce",
      description:
        "Build powerful online retail experiences that convert visitors into customers with seamless shopping flows, advanced analytics, and mobile-first design principles.",
      stats: {
        projects: "45+",
        reviews: "200+",
        industries: "12+",
      },
      image: "/api/placeholder/400/300",
    },
    Fintech: {
      title: "Fintech",
      description:
        "Develop secure, compliant financial technology solutions that simplify complex transactions and provide users with transparent, accessible financial services.",
      stats: {
        projects: "20+",
        reviews: "85+",
        industries: "6+",
      },
      image: "/api/placeholder/400/300",
    },
    HealthTech: {
      title: "HealthTech",
      description:
        "Create healthcare solutions that prioritize patient outcomes through user-centered design, ensuring medical technology is both powerful and accessible to all users.",
      stats: {
        projects: "35+",
        reviews: "150+",
        industries: "10+",
      },
      image: "/api/placeholder/400/300",
    },
    Logistics: {
      title: "Logistics",
      description:
        "Optimize supply chain operations with intelligent tracking systems and automated workflows that increase efficiency while reducing operational complexity.",
      stats: {
        projects: "28+",
        reviews: "110+",
        industries: "9+",
      },
      image: "/api/placeholder/400/300",
    },
    LegalTech: {
      title: "Legal Tech",
      description:
        "Streamline legal processes with intelligent document management, case tracking, and client communication platforms designed for modern law practices.",
      stats: {
        projects: "18+",
        reviews: "75+",
        industries: "6+",
      },
      image: "/api/placeholder/400/300",
    },
    Construction: {
      title: "Construction",
      description:
        "Enhance project management with real-time collaboration tools, safety monitoring systems, and resource optimization platforms for construction teams.",
      stats: {
        projects: "22+",
        reviews: "85+",
        industries: "7+",
      },
      image: "/api/placeholder/400/300",
    },
    Manufacturing: {
      title: "Manufacturing",
      description:
        "Optimize production processes with IoT integration, quality control systems, and predictive maintenance solutions for manufacturing excellence.",
      stats: {
        projects: "35+",
        reviews: "140+",
        industries: "11+",
      },
      image: "/api/placeholder/400/300",
    },
    Retail: {
      title: "Retail",
      description:
        "Transform customer experiences with omnichannel solutions, inventory management systems, and personalized shopping experiences for modern retail.",
      stats: {
        projects: "40+",
        reviews: "180+",
        industries: "13+",
      },
      image: "/api/placeholder/400/300",
    },
  };

  // Find current industry from API data
  const currentIndustry = industries.find((industry: any) => industry.slug === activeTab);
  
  // Fallback data structure for the current industry
  const currentData = currentIndustry ? {
    title: currentIndustry.name,
    description: currentIndustry.description,
    stats: {
      projects: "30+", // Default stats - you can modify these or make them dynamic
      reviews: "130+",
      industries: "15+",
    },
    image: currentIndustry.images?.[0] || "/api/placeholder/400/300",
  } : null;

  const domainExperts = [
    "Human-centered design",
    "Scalable, clean code",
    "Deep industry understanding",
    "Transparent collaboration",
    "On-time, on-point delivery",
  ];
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

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Marketing Manager",
      company: "HealthTech",
      testimonial:
        "The platform is user-friendly and efficient, improving our workflow and boosting productivity by 40% for our team!",
      avatar: Client1, // You'll need to add these images to your public folder
      quoteColor: "#A4AAFA",
    },
    {
      id: 2,
      name: "Emily Smith",
      role: "Project Manager",
      company: "Logistics",
      testimonial:
        "Quick and flexible! The team transformed our operations, making tasks seamless and efficient. Highly recommended for professionals!",
      avatar: Client2,
      quoteColor: "#A0D7B2 ",
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Sales Head",
      company: "LegalTech",
      testimonial:
        "Amazing experience with the team! Easy to use, reliable, and packed with great features that enhance efficiency and collaboration.",
      avatar: Client1,
      quoteColor: "#F5EC8D",
    },
    {
      id: 4,
      name: "Emily Smith",
      role: "Project Manager",
      company: "Logistics",
      testimonial:
        "Amazing experience with the team! Easy to use, reliable, and packed with great features that enhance efficiency and collaboration.",
      avatar: Client2,
      quoteColor: "#F5EC8D",
    },
    {
      id: 5,
      name: "Michael Johnson",
      role: "Sales Head",
      company: "LegalTech",
      testimonial:
        "Amazing experience with the team! Easy to use, reliable, and packed with great features that enhance efficiency and collaboration.",
      avatar: Client2,
      quoteColor: "#F5EC8D",
    },
  ];

  return (
    <main className="min-h-screen relative bg-white font-roboto">
      {/* homepage hero section */}
      <section className="flex w-full max-w-[1920px] mx-auto items-center relative overflow-hidden">
        <div className="w-full lg:min-h-[700px] grid grid-cols-1 items-start self-center gap-10 py-10 md:py-16 md:pb-0 pb-0 lg:grid-cols-2 lg:gap-12">
          {/* LEFT CONTENT */}
          <div className="relative h-full z-10 flex flex-col lg:pt-18 pt-2  justify-start gap-[20%]">
            <div className="flex flex-col sm:pl-8 pl-4 md:pl-20">
              <h1 className="font-bold tracking-tight font-roboto text-[#0F172A] text-[34px] md:text-[40px] lg:text-[54px]">
                Our Target Industries
              </h1>

              <p className="mt-6 max-w-xl text-slate-600 md:text-lg">
                From startups to enterprises, logistics to legal tech — we
                create purpose-driven digital solutions tailored to the rhythm
                of your industry.
              </p>
            </div>
          </div>
          {/*  RIGHT CONTENT */}
          <div className="relative z-20 flex items-start justify-start w-full">
            <div className="relative flex items-center justify-center w-full px-4 md:px-8 lg:px-12">
              <div className="w-full max-w-4xl flex items-center justify-center">
                <div className="w-full flex items-center justify-center">
                  <Image src={HeroImg} alt="hero-img" />
                </div>
              </div>
            </div>
          </div>

          {/* EllipseUp (background) */}
          <div className="absolute hidden md:block top-0 lg:right-[25%] -right-[50px] z-0">
            <EllipseUp className="w-[250px] h-[250px] md:w-[400px] md:h-[400px]" />
          </div>

          {/* EllipseDown (background) */}
          <div className="absolute hidden md:block bottom-0 md:-left-[50px] -left-[50px] z-0">
            <EllipseDown className="w-[350px] h-[174px] md:w-[400px] md:h-[240px]" />
          </div>
        </div>
      </section>

      {/* tabs  container */}
      <div className="relative flex flex-col items-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 -mt-2 z-30">
        {/* Tab Navigation */}
        <div className="relative w-full z-40 bg-white rounded-t-lg overflow-hidden shadow-sm border">
          {/* Desktop Tabs */}
          <div className="hidden sm:flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-[#20C5BA] text-white"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                <span className="transition-colors duration-200">
                  <tab.icon
                    fill={activeTab === tab.id ? "#ffffff" : "#2B2B2B"}
                    stroke={activeTab === tab.id ? "#ffffff" : "#2B2B2B"}
                  />
                </span>
                <p className="text-lg font-medium m-0">{tab.label}</p>
              </button>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <div className="sm:hidden p-2">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-gray-700 focus:ring-2 focus:ring-[#20C5BA] focus:outline-none"
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-[#579DFF] w-full rounded-b-2xl overflow-hidden shadow-md">
          {currentData ? (
            <div className="flex flex-col lg:flex-row lg:min-h-[600px]">
              {/* Left Image Section */}
              <div className="lg:w-1/2 relative h-64 sm:h-80 lg:h-auto">
                <Image
                  src={currentData.image || TabsPic.src}
                  alt={`${currentData.title} showcase`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right Content Section */}
              <div className="lg:w-1/2 p-6 sm:p-8 lg:p-12 text-white flex flex-col justify-between">
               <div className="flex flex-col gap-4">
               <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  {currentData.title}
                </h2>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-roboto text-[#e6eaef] leading-relaxed mb-6 sm:mb-8">
                  {currentData.description}
                </p>
               </div>
               

                <div>
                  {/* Stats */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex gap-2 items-center text-base sm:text-xl md:text-2xl font-normal text-white">
                      {currentData.stats.projects}
                      <p>Projects</p>
                    </div>
                    <div className="hidden sm:block border-l h-5 border-white" />
                    <div className="flex gap-2 items-center text-base sm:text-xl md:text-2xl font-normal text-white">
                      {currentData.stats.reviews}
                      <p>Reviews</p>
                    </div>
                    <div className="hidden sm:block border-l h-5 border-white" />
                    <div className="flex gap-2 items-center text-base sm:text-xl md:text-2xl font-normal text-white">
                      {currentData.stats.industries}
                      <p>Industries</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href={`/industries/${activeTab}`}>
                    <button className="bg-white text-[#579DFF] px-4 sm:px-6 py-2 sm:py-3 rounded-[5px] font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2 group">
                      <p>Explore More</p>
                    <ArrowRight
                      color="#579DFF"
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          ) : (
            <div className="flex items-center justify-center min-h-[400px] text-white">
              <p className="text-xl">No industry data available</p>
            </div>
          )}
        </div>

        {/* Bottom Button */}
        <button className="bg-[#20C5BA] hover:bg-[#17a398] mt-8 sm:mt-12 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-[5px] font-roboto font-medium text-base sm:text-lg md:text-xl">
          Let's Build Something Great
        </button>
      </div>

      {/* domain experts */}
      <div className="flex flex-col bg-[#FAFBFA] text-center gap-2 leading-[50px] items-center border-none lg:py-16 py-8  p-6">
        <div className="md:max-w-[80%] gap-3 max-w-7xl mx-auto">
          <p className="text-[20px] font-[500] text-[#FFAB40] ">
            Domain Experts
          </p>
          <h1 className=" md:text-[40px] lg:text-[56px] font-extrabold tracking-tight font-roboto text-[#0F172A] text-[34px]">
            Why CorTechSols for Your <br className="hidden ld:block"/>
            Industry?
          </h1>
          <p className="text-[20px] mt-3 font-roboto text-[#0F172A] leading-[180%] mb-8">
            We don't just build digital solutions — we solve real business
            challenges. From design thinking to scalable development, we work as
            your strategic tech partner.
          </p>

          <div className="flex flex-wrap items-center justify-between pl-4 md:pl-0 w-full gap-3 max-w-[1920px]">
            {domainExperts.map((expert, index) => (
              <div className="flex items-center gap-2" key={index}>
                <div className="flex-shrink-0  bg-teal-500 h-6 w-6  flex items-center justify-center rounded-full">
                  <Check className="w-4 h-4 text-white" size={16} />
                </div>
                <p>{expert}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:mt-12 mt-6 max-w-[1920px] mx-auto">
          <div
            className="flex overflow-x-auto items-center  pb-2 scrollbar-hide w-full justify-between"
            style={{ scrollbarWidth: "auto" }}
          >
            {domainImages.map((image, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={image}
                  alt={`domain-${index}`}
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Compliance */}
      <div className="flex flex-col text-center gap-2 leading-[50px] items-center border-none  p-6">
        <div className="md:max-w-[80%] gap-3 flex flex-col max-w-7xl mx-auto">
          <p className="text-[20px] font-[500] text-[#FFAB40] ">
            Built with Security & Compliance in Mind
          </p>
          <h1 className=" md:text-[40px] lg:text-[56px] font-extrabold tracking-tight font-roboto text-[#0F172A] text-[34px]">
            Industry-Specific Compliance
          </h1>
          <p className="text-[20px] mt-3 font-roboto text-[#0F172A] leading-[180%] mb-8">
            Whether it's patient data in healthcare, financial transactions in
            fintech, or student records in EdTech — we understand that
            compliance isn't optional, it's essential.
          </p>

        
        </div>
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col gap-6">
              {/* First row: first 3 certifications */}
              <div className="flex lg:flex-row flex-col items-center justify-center gap-6">
                {certifications.slice(0, 3).map((cert) => (
                  <div
                    key={cert.id}
                    className="relative flex-1 flex justify-center"
                  >
                    {cert.isSpecial ? (
                      // Special card design for the 5th card (middle card with colorful icons)
                      <div className="h-full w-full aspect-square flex items-center justify-center">
                        <Image src={books} alt="books" fill priority />
                      </div>
                    ) : (
                      // Regular card design for other certifications
                      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 h-fit flex flex-col">
                        <div className="flex justify-center mb-6">
                          <div className="min-h-[200px] min-w-[300px] relative flex items-center justify-center">
                            <Image
                              src={cert.image}
                              alt={cert.alt || cert.title}
                              fill
                              className="object-contain h-full w-full"
                            />
                          </div>
                        </div>
                        <div className="text-center mb-4">
                          <h3 className="text-[24px] font-bold text-[#2B2B2B]">
                            {cert.title}
                          </h3>
                        </div>
                        <div className="flex-grow">
                          <p className="text-[#868282] text-[16px] font-[400] leading-[32px] text-center">
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Second row: next 3 certifications */}
              <div className="flex lg:flex-row flex-col items-center justify-center gap-6">
                {certifications.slice(3, 6).map((cert) => (
                  <div
                    key={cert.id}
                    className="relative flex-1 flex justify-center"
                  >
                    {cert.isSpecial ? (
                      // Special card design for the 5th card (middle card with colorful icons)
                      <div className="h-full w-full aspect-square flex items-center justify-center">
                        <Image src={books} alt="books" fill priority />
                      </div>
                    ) : (
                      // Regular card design for other certifications
                      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 h-fit flex flex-col">
                        <div className="flex justify-center mb-6">
                          <div className="min-h-[200px] min-w-[300px] relative">
                            <Image
                              src={cert.image}
                              alt={cert.alt || cert.title}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <div className="text-center mb-4">
                          <h3 className="text-xl font-bold text-gray-900">
                            {cert.title}
                          </h3>
                        </div>
                        <div className="flex-grow">
                          <p className="text-gray-600 text-sm leading-relaxed text-center">
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

      {/* Happy Clients */}
      <div className="flex flex-col bg-[#FAFBFA] text-center gap-2 leading-[50px] items-center border-none  p-6">
        <div className="md:max-w-[80%] gap-3 max-w-7xl mx-auto">
          <p className="text-[20px] font-[500] text-[#FFAB40] ">
            Happy Clients
          </p>
          <h1 className=" md:text-[40px] lg:text-[56px] font-extrabold tracking-tight font-roboto text-[#0F172A] text-[34px]">
            What Our Clients Say
          </h1>
          <p className="text-[20px] mt-3 font-roboto text-[#0F172A] leading-[180%] mb-8">
            Our work speaks for itself, but our clients say it even better.
            Explore their stories of success, growth, and transformation
          </p>
        </div>
        <div className="w-full max-w-[1920px] mx-auto">
          <div
            className="flex overflow-x-auto gap-3 items-center pb-12 scrollbar-hide w-full justify-between"
            style={{ scrollbarWidth: "auto" }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white min-h-[223px] rounded-lg border border-gray-100 shadow-lg relative flex-shrink-0 max-w-96 min-w-72 p-4"
              >
                {/* Client Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={`${testimonial.name} profile picture`}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h4 className="font-semibold font-roboto text-gray-900 text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 font-roboto text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  {/* Quote Icon */}
                  <div className={`text-6xl mb-4 leading-none`}>
                    <Apostrophe currentColor={testimonial.quoteColor} />
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-start  text-[#6B6B6B] tracking-[0px] font-light text-[14px] leading-4 my-4">
                  {testimonial.testimonial}
                </p>

                {/* Company Badge */}
                <div className="flex justify-end w-full">
                  <span className="text-[16px] font-roboto font-bold text-[#343434]">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <InfoSection
        title="Still Curious? Let's Talk"
        subText="Let's Build Something That Moves Your Industry Forward."
        buttonText="Get in Touch"
      />

      <StayInLoop
        title="Stay Inspired, Stay Ahead"
        subText="Get monthly tips, design trends, and behind-the-scenes from our team."
        buttonText="Subscribe"
      />

      <Footer />
    </main>
  );
};

export default page;

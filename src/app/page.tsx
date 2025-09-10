"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ButtonComponent from "@/components/Button/Button";
import HeroImgLeft from "@/components/svgs/hero/heroLeftBottom";
import HeroIcons from "@/components/svgs/hero/heroIcons";
import { useServices } from "@/hooks/useServices";
import { useEffect } from "react";
import ServiceIcon1 from "@/assets/images/homepage/service1.png";
import ServiceIcon2 from "@/assets/images/homepage/service2.png";
import ServiceIcon3 from "@/assets/images/homepage/service3.png";
import ServiceIcon4 from "@/assets/images/homepage/service4.png";
import ServiceIcon5 from "@/assets/images/homepage/service5.png";
import ServiceIcon6 from "@/assets/images/homepage/service6.png";
import ServiceIcon7 from "@/assets/images/homepage/service7.png";
import ServiceIcon8 from "@/assets/images/homepage/service8.png";
import ServiceIcon9 from "@/assets/images/homepage/service9.png";

import { Service } from "@/types/service";
import Loop from "@/components/svgs/icons/Loop";
import QA from "@/components/svgs/icons/QA";
import VirtualAssistant from "@/assets/images/homepage/virtual-assistant.svg";
import {
  ChartSpline,
  Code2,
  Puzzle,
  Rocket,
  ShieldCheck,
  Palette,
  Globe,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  Settings,
  Mail,
  Cloud,
  Check,
} from "lucide-react";
import PeakPixels from "@/assets/images/homepage/peak-pixels.svg";
import DecisionMakers from "@/assets/images/homepage/decision-makers.png";
import Bun from "@/components/svgs/icons/Bun";
import GameController from "@/components/svgs/icons/GameController";
import HappyClients from "@/assets/images/homepage/happy-clients.svg";
import Footer from "@/components/Footer/Footer";
import Bolt from "@/components/svgs/icons/Bolt";
import Refresh from "@/components/svgs/icons/Refresh";
import HeroSnakeSvg from "@/components/svgs/hero/HeroSnakeSvg";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import BuildIcon from "@/components/svgs/icons/BulidingBig";
import LaptopIcon from "@/components/svgs/icons/LaptopBig";
import ShoppingCartIcon from "@/components/svgs/icons/ShoppingCart";
import BankIcon from "@/components/svgs/icons/BankIcon";
import HeartIcon from "@/components/svgs/icons/HeartIcon";
import LogisticsIcon from "@/components/svgs/icons/LogisticsIcon";
import ConstructionIcon from "@/components/svgs/icons/Construction";
import LegalIcon from "@/components/svgs/icons/LegalIcon";
import HerosectionImg from "@/assets/images/homepage/herosection-cropped.svg";
import PillContainer from "@/assets/images/homepage/pill-container.svg";
import PhoneNumberInput from "@/components/PhoneNumberInput/PhoneNumberInput";
export default function Home() {
  const { data: servicesData, isLoading, error } = useServices();
  const [isHomePageV2, setIsHomePageV2] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Function to get icon based on service title
  const getServiceIcon = (title: string) => {
    const iconMap: { [key: string]: React.ReactElement } = {
      "UI/UX Design Solutions": <Palette className="w-8 h-8 text-blue-600" />,
      "Web Development": <Globe className="w-8 h-8 text-purple-600" />,
      "Mobile Application": (
        <Smartphone className="w-8 h-8 text-pink-600" />
      ),
      "E-commerce Development": (
        <ShoppingCart className="w-8 h-8 text-blue-600" />
      ),
      "Digital Marketing Services": (
        <TrendingUp className="w-8 h-8 text-green-600" />
      ),
      "Custom Software Development": (
        <Code2 className="w-8 h-8 text-orange-600" />
      ),
      "Cloud Solutions & Hosting": <Cloud className="w-8 h-8 text-sky-600" />,
      "IT Consulting & Support": <Settings className="w-8 h-8 text-gray-600" />,
    };

    return iconMap[title] || <Settings className="w-8 h-8 text-gray-600" />;
  };

  // Function to generate features from description
  const generateFeatures = (description: string) => {
    // Split description into sentences and take first 4-5 as features
    const sentences = description
      .split(/[.!?]+/)
      .filter((s) => s.trim().length > 10);
    return sentences.slice(0, 4).map((sentence) => sentence.trim());
  };

  // Use API data if available, otherwise use fallback
  // Show all services if no active ones, or if all are inactive

  const allServices = servicesData?.data || [];
  const activeServices = allServices.filter(
    (service: Service) => service.is_active
  );
  const services = activeServices.length > 0 ? activeServices : allServices;

  const industries = [
    {
      title: "EdTech",
      icon: <LaptopIcon width={62} height={42} />,
      description:
        "Interactive, distraction-free learning tools that put students, educators, and outcomes at the center.",
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
      cardBg: "bg-blue-500",
    },
    {
      title: "Real Estate",
      icon: <BuildIcon width={62} height={64} />,
      description:
        "Interactive agent networks. Search filters with smart algorithms designed to help users discover, explore, and decide with confidence.",
      bgColor: "bg-gradient-to-br from-teal-400 to-teal-600",
      cardBg: "bg-teal-500",
    },
    {
      title: "E-Commerce",
      icon: <ShoppingCartIcon width={70} height={62} />,
      description:
        "Optimize product catalogs and UI flows that boost conversion, retention, and brand loyalty.",
      bgColor: "bg-gradient-to-br from-purple-400 to-purple-600",
      cardBg: "bg-purple-500",
    },
    {
      title: "Fintech",
      icon: <BankIcon width={62} height={64} />,
      description:
        "Data-secure, fast-loading platforms with smart UX — built for user trust and financial clarity.",
      bgColor: "bg-gradient-to-br from-sky-400 to-sky-600",
      cardBg: "bg-sky-500",
    },
    {
      title: "HealthTech",
      icon: <HeartIcon width={62} height={64} />,
      description:
        "Secure, accessible, and human-first experiences — built for trust, compliance, and care.",
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-600",
      cardBg: "bg-orange-500",
    },
    {
      title: "Logistics",
      icon: <LogisticsIcon width={62} height={64} />,
      description:
        "Streamlined dashboards, real-time tracking, and data-driven systems that move with your supply chain.",
      bgColor: "bg-gradient-to-br from-red-400 to-red-600",
      cardBg: "bg-red-500",
    },
    {
      title: "Construction",
      icon: <ConstructionIcon width={62} height={64} />,
      description:
        "From on-site reporting to project management — streamlined workflows and built intuitive tools for the field and the office.",
      bgColor: "bg-gradient-to-br from-pink-400 to-pink-600",
      cardBg: "bg-pink-500",
    },
    {
      title: "LegalTech",
      icon: <LegalIcon width={62} height={64} />,
      description:
        "Secure, compliant platforms with streamlined UX — empowering legal teams with automation and clarity.",
      bgColor: "bg-gradient-to-br from-lime-400 to-lime-600",
      cardBg: "bg-lime-500",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What industries do you work with?",
      answer:
        "We work with startups, SaaS platforms, eCommerce brands, healthcare, education, fintech, and more. If it needs great UX and results — we're in.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A typical website redesign takes 4-6 weeks, while a full web application can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Can I hire your team for just design or development only?",
      answer:
        "Absolutely! We offer flexible engagement models. You can hire us for design-only, development-only, or full-service projects. We adapt to your specific needs and budget.",
    },
    {
      question: "Do you offer SEO or digital marketing after launch?",
      answer:
        "Yes, we provide ongoing SEO optimization and digital marketing services. Our team can help with content strategy, technical SEO, and performance marketing to ensure your project continues to grow.",
    },
    {
      question: "Will I own the final design/code?",
      answer:
        "Yes, you will own all the final deliverables including designs, code, and assets. We provide full ownership transfer upon project completion and payment.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A typical website redesign takes 4-6 weeks, while a full web application can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Can I hire your team for just design or development only?",
      answer:
        "Absolutely! We offer flexible engagement models. You can hire us for design-only, development-only, or full-service projects. We adapt to your specific needs and budget.",
    },
    {
      question: "Do you offer SEO or digital marketing after launch?",
      answer:
        "Yes, we provide ongoing SEO optimization and digital marketing services. Our team can help with content strategy, technical SEO, and performance marketing to ensure your project continues to grow.",
    },
    {
      question: "Will I own the final design/code?",
      answer:
        "Yes, you will own all the final deliverables including designs, code, and assets. We provide full ownership transfer upon project completion and payment.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A typical website redesign takes 4-6 weeks, while a full web application can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Can I hire your team for just design or development only?",
      answer:
        "Absolutely! We offer flexible engagement models. You can hire us for design-only, development-only, or full-service projects. We adapt to your specific needs and budget.",
    },
    {
      question: "Do you offer SEO or digital marketing after launch?",
      answer:
        "Yes, we provide ongoing SEO optimization and digital marketing services. Our team can help with content strategy, technical SEO, and performance marketing to ensure your project continues to grow.",
    },
    {
      question: "Will I own the final design/code?",
      answer:
        "Yes, you will own all the final deliverables including designs, code, and assets. We provide full ownership transfer upon project completion and payment.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A typical website redesign takes 4-6 weeks, while a full web application can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Can I hire your team for just design or development only?",
      answer:
        "Absolutely! We offer flexible engagement models. You can hire us for design-only, development-only, or full-service projects. We adapt to your specific needs and budget.",
    },
    {
      question: "Do you offer SEO or digital marketing after launch?",
      answer:
        "Yes, we provide ongoing SEO optimization and digital marketing services. Our team can help with content strategy, technical SEO, and performance marketing to ensure your project continues to grow.",
    },
    {
      question: "Will I own the final design/code?",
      answer:
        "Yes, you will own all the final deliverables including designs, code, and assets. We provide full ownership transfer upon project completion and payment.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A typical website redesign takes 4-6 weeks, while a full web application can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Can I hire your team for just design or development only?",
      answer:
        "Absolutely! We offer flexible engagement models. You can hire us for design-only, development-only, or full-service projects. We adapt to your specific needs and budget.",
    },
    {
      question: "Do you offer SEO or digital marketing after launch?",
      answer:
        "Yes, we provide ongoing SEO optimization and digital marketing services. Our team can help with content strategy, technical SEO, and performance marketing to ensure your project continues to grow.",
    },
    {
      question: "Will I own the final design/code?",
      answer:
        "Yes, you will own all the final deliverables including designs, code, and assets. We provide full ownership transfer upon project completion and payment.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A typical website redesign takes 4-6 weeks, while a full web application can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Can I hire your team for just design or development only?",
      answer:
        "Absolutely! We offer flexible engagement models. You can hire us for design-only, development-only, or full-service projects. We adapt to your specific needs and budget.",
    },
    {
      question: "Do you offer SEO or digital marketing after launch?",
      answer:
        "Yes, we provide ongoing SEO optimization and digital marketing services. Our team can help with content strategy, technical SEO, and performance marketing to ensure your project continues to grow.",
    },
    {
      question: "Will I own the final design/code?",
      answer:
        "Yes, you will own all the final deliverables including designs, code, and assets. We provide full ownership transfer upon project completion and payment.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A typical website redesign takes 4-6 weeks, while a full web application can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Can I hire your team for just design or development only?",
      answer:
        "Absolutely! We offer flexible engagement models. You can hire us for design-only, development-only, or full-service projects. We adapt to your specific needs and budget.",
    },
    {
      question: "Do you offer SEO or digital marketing after launch?",
      answer:
        "Yes, we provide ongoing SEO optimization and digital marketing services. Our team can help with content strategy, technical SEO, and performance marketing to ensure your project continues to grow.",
    },
    {
      question: "Will I own the final design/code?",
      answer:
        "Yes, you will own all the final deliverables including designs, code, and assets. We provide full ownership transfer upon project completion and payment.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A typical website redesign takes 4-6 weeks, while a full web application can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Can I hire your team for just design or development only?",
      answer:
        "Absolutely! We offer flexible engagement models. You can hire us for design-only, development-only, or full-service projects. We adapt to your specific needs and budget.",
    },
    {
      question: "Do you offer SEO or digital marketing after launch?",
      answer:
        "Yes, we provide ongoing SEO optimization and digital marketing services. Our team can help with content strategy, technical SEO, and performance marketing to ensure your project continues to grow.",
    },
    {
      question: "Will I own the final design/code?",
      answer:
        "Yes, you will own all the final deliverables including designs, code, and assets. We provide full ownership transfer upon project completion and payment.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A typical website redesign takes 4-6 weeks, while a full web application can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Can I hire your team for just design or development only?",
      answer:
        "Absolutely! We offer flexible engagement models. You can hire us for design-only, development-only, or full-service projects. We adapt to your specific needs and budget.",
    },
    {
      question: "Do you offer SEO or digital marketing after launch?",
      answer:
        "Yes, we provide ongoing SEO optimization and digital marketing services. Our team can help with content strategy, technical SEO, and performance marketing to ensure your project continues to grow.",
    },
    {
      question: "Will I own the final design/code?",
      answer:
        "Yes, you will own all the final deliverables including designs, code, and assets. We provide full ownership transfer upon project completion and payment.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A typical website redesign takes 4-6 weeks, while a full web application can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Can I hire your team for just design or development only?",
      answer:
        "Absolutely! We offer flexible engagement models. You can hire us for design-only, development-only, or full-service projects. We adapt to your specific needs and budget.",
    },
    {
      question: "Do you offer SEO or digital marketing after launch?",
      answer:
        "Yes, we provide ongoing SEO optimization and digital marketing services. Our team can help with content strategy, technical SEO, and performance marketing to ensure your project continues to grow.",
    },
    {
      question: "Will I own the final design/code?",
      answer:
        "Yes, you will own all the final deliverables including designs, code, and assets. We provide full ownership transfer upon project completion and payment.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A typical website redesign takes 4-6 weeks, while a full web application can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Can I hire your team for just design or development only?",
      answer:
        "Absolutely! We offer flexible engagement models. You can hire us for design-only, development-only, or full-service projects. We adapt to your specific needs and budget.",
    },
    {
      question: "Do you offer SEO or digital marketing after launch?",
      answer:
        "Yes, we provide ongoing SEO optimization and digital marketing services. Our team can help with content strategy, technical SEO, and performance marketing to ensure your project continues to grow.",
    },
    {
      question: "Will I own the final design/code?",
      answer:
        "Yes, you will own all the final deliverables including designs, code, and assets. We provide full ownership transfer upon project completion and payment.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };
  const getCode = () => {
    // Generate a simple verification code
    const code = Math.floor(100000 + Math.random() * 900000);
    alert(`Verification code sent: ${code}`);
  };

  const mockServices = [
    {
      id: 1,
      title: "UI/UX Design",
      slug: "ui-ux-design",
      icon: ServiceIcon1,
      description:
        "Empowering products with user-first design and modern aesthetics.",
      features: [
        "UX Research & Strategy",
        "Wireframing & Information Architecture",
        "Prototyping & User Testing",
        "UX Audit & Heuristic Review",
        "Microinteractions & Animation Design",
      ],
    },
    {
      id: 2,
      title: "Website Development",
      slug: "web-development",
      icon: ServiceIcon2,
      description: "Designed to sell — stores that convert and scale.",
      features: [
        "Cross-Platform App Development (Flutter/React Native) ",
        "Native iOS/Android Apps",
        "App UI/UX Design",
        "API Integration",
        "App Store Optimization",
      ],
    },
    {
      id: 3,
      title: "Mobile Application",
      slug: "mobile-app-development",
      icon: ServiceIcon3,
      description: "Designed to sell — stores that convert and scale.",
      features: [
        "Cross-Platform App Development (Flutter/React Native) ",
        "Native iOS/Android Apps",
        "App UI/UX Design",
        "API Integration",
        "App Store Optimization",
      ],
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      slug: "e-commerce-development",
      icon: ServiceIcon4,
      description: "Designed to sell — stores that convert and scale.",
      features: [
        "Shopify/WooCommerce Development",
        "Custom eCommerce Platforms",
        "E-commerce API Integration",
        "E-commerce App Store Optimization",
        "E-commerce Performance Optimization",
        "E-commerce Analytics & Reporting",
      ],
    },
    {
      id: 5,
      title: "Digital Marketing",
      slug: "digital-marketing-services",
      icon: ServiceIcon5,
      description: "Designed to sell — stores that convert and scale.",
      features: [
        "SEO & Content Marketing",
        "Social Media Marketing",
        "Email Marketing",
        "Paid Advertising",
        "Analytics & Reporting",
      ],
    },
    {
      id: 6,
      title: "SEO & Content Strategy  ",
      slug: "seo-content-strategy",
      icon: ServiceIcon6,
      description: "Designed to sell — stores that convert and scale.",
      features: [
        "SEO Audit & Optimization",
        "Content Strategy & Creation",
        "Keyword Research & Analysis",
        "Technical SEO Implementation",
        "Content Marketing & Distribution",
        "Analytics & Reporting",
      ],
    },
    {
      id: 7,
      title: "Google Ads and Paid Campaigns",
      slug: "google-ads-and-paid-campaigns",
      icon: ServiceIcon7,
      description: "Designed to sell — stores that convert and scale.",
      features: [
        "Google Search and Display Ads",
        "Youtube Video Ads",
        "Google Display Network Ads",
        "Google Shopping Ads",
        "Google Ads Automation",
      ],
    },
    {
      id: 8,
      title: "Branding and Identity Design",
      slug: "branding-and-identity-design",
      icon: ServiceIcon8,
      description: "Designed to sell — stores that convert and scale.",
      features: [
        "Brand Strategy & Positioning",
        "Logo Design & Branding",
        "Stationary Design",
        "Brand Guidelines & Visual Identity",
        "Branding & Identity Design",
      ],
    },
    {
      id: 9,
      title: "Maintenance and Support",
      slug: "maintenance-and-support",
      icon: ServiceIcon9,
      description: "Designed to sell — stores that convert and scale.",
      features: [
        "Website & App Maintenance",
        "Speed and Security Checks",
        "CMS Content Updates",
        "Database Maintenance & Updates",
        "Security & Compliance",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white font-roboto flex justify-center flex-col">
      {/* homepage hero section */}
      <section
        id="hero-section"
        className="flex w-full max-w-[1920px] mx-auto items-center justify-center relative overflow-hidden"
      >
        <div className="w-full px-0 grid grid-cols-1 self-center gap-10 py-8 md:py-12 md:pb-0 pb-12 lg:grid-cols-2 lg:gap-12">
          {/* LEFT CONTENT */}
          <div className="relative z-10 flex flex-col md:pt-8 justify-center gap-[20%]">
            <div className="flex flex-col px-8 md:px-12">
              <h1 className="text-5xl font-bold tracking-tight font-roboto text-[#0F172A] sm:text-5xl md:text-[60px] lg:text-[72px]">
                <span className="relative inline-block font-roboto">
                  <span className="relative z-10">Fixing</span>
                  {/* orange underline */}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 right-0 h-2 bg-orange-400"
                    style={{
                      borderRadius: "50%/100% 100% 0 0",
                      height: "10px",
                      transform: "translateY(2px)",
                    }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute w-[70%] -bottom-2 -rotate-2 right-0 h-2 bg-orange-400"
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

              <p className="font-roboto text-[24px] leading-[160%] font-[400] text-[#0F172A] lg:my-12 my-8">
                Smart design + strategy that unlocks the hidden gaps in your
                funnel.
              </p>

              {/* bottom navigation buttons */}
              <div className="flex -mt-3 flex-col sm:flex-row gap-4 ">
                <a href="#contact-section">
                  <ButtonComponent name="Get In Touch" buttonHeight="55px" />
                </a>
                <div className="flex items-center gap-2">
                  <button className="relative w-14 h-14 shadow-lg rounded-full bg-[#2B2B2B1A] flex items-center justify-center">
                    {/* Left semi-circle border */}
                    <span className="absolute inset-0 rounded-full border-4 border-black [clip-path:polygon(0_0,50%_0,50%_100%,0_100%)]"></span>

                    {/* Button content */}
                    <span className="z-10 text-black font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="black"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </button>
                  <p className="font-[600] capitalize text-[16px] hover:underline cursor-pointer">
                    {" "}
                    Learn More
                  </p>
                </div>
              </div>
              {/* Trusted by */}
              <div className="flex gap-12 mt-10">
                <p className="mb-3 text-xs uppercase tracking-wide text-slate-500 text-balance">
                  Trusted by <br />
                  leading companies
                </p>
                <div className="flex max-w-md items-center justify-between gap-4 text-slate-500">
                  <ShieldCheck className="h-5 w-5" aria-label="Security" />
                  <ChartSpline className="h-5 w-5" aria-label="Analytics" />
                  <Code2 className="h-5 w-5" aria-label="Development" />
                  <Puzzle className="h-5 w-5" aria-label="Integrations" />
                  <Rocket className="h-5 w-5" aria-label="Growth" />
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <HeroImgLeft />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex w-full justify-center items-center  px-2">
            <div className="relative w-full flex justify-center items-center">
              <Image src={HerosectionImg} alt="Logo" className="" />
            </div>
          </div>
        </div>
      </section>

      {/* summary stats section */}
      <div
        id="summary-section"
        className="flex bg-[#F6F6F6] mx-auto lg:flex-row flex-col relative pb-0 w-full max-w-[1920px] h-fit items-start justify-center "
      >
        <div className="relative h-fit flex lg:-mb-32 mb-12 md:pt-20 pt-8">
          <div className="relative ">
            <Image
              src={PillContainer}
              alt="Logo"
              className="md:w-[700px] md:h-[900px] w-[500px] h-[800px]"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-8 pr-0 flex flex-col">
          <div className="w-full md:mt-12 mt-6 pr-8">
            <p className="text-[20px] font-[400] text-[#FFAB40]">
              Summary Stats
            </p>
            <h1 className="font-roboto leading-[110%] text-[56px] font-[800] text-[#0F172A]">
              Living Stats Wall
            </h1>
            <p className="text-[20px] font-[400] leading-[180%] text-[#0F172A]">
              We don't just say it — our stats show it
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-12">
              <div className="flex flex-col gap-4">
                <Bolt />
                <p className="text-[24px] font-[700] text-[#0F172A]">
                  Avg. Load Time
                </p>
                <p className="max-w-2xl text-[18px] font-[400] text-[#0F172A]">
                  Our websites load in an average of just 1.4 seconds — faster
                  than 90% of the internet. Why does that matter? Because every
                  extra second your site takes to load can cost you conversions,
                  trust, and revenue.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Refresh />
                <p className="text-[24px] font-[700] text-[#0F172A]">
                  Client Retention
                </p>
                <p className="max-w-2xl text-[18px] font-[400] text-[#0F172A]">
                  With a client retention rate of over 92%, our partners don’t
                  just launch with us — they grow with us. From first project to
                  ongoing success, we focus on building long-term value through
                  transparency, performance, and support that scales.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end mt-12">
            <div className="w-full self-end ">
              <HeroSnakeSvg
                width="100%"
                height="auto"
                className="w-full  h-auto max-w-full object-contain "
              />
            </div>
          </div>
        </div>
      </div>

      {/* services from api */}
      {/* our services */}
      <div
        id="services-section"
        className="w-full max-w-[1920px] mx-auto bg-white py-12 px-4 sm:px-6 lg:px-8 font-roboto"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[20px] font-[500] text-[#FFAB40] mb-4">
              Our Services
            </p>
            <h1 className="font-roboto leading-[60px] tracking-[-1.5%] text-[56px] font-[800] text-[#0F172A]">
              Powering Ideas with Design, Code & Growth
            </h1>
            <p className="text-[20px] text-[#0F172A] font-[500] leading-[33px] tracking-[-1.5%] my-6">
              From UX to full-stack and marketing - our services connect like a
              smart system to elevate your digital journey.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {mockServices.map((service) => (
                <Link
                  href={`/services/${service.slug}`}
                  key={service.id}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 cursor-pointer"
                >
                  {/* Icon and Title */}
                  <div className="flex flex-col items-start gap-4 mb-4">
                    <div className="flex items-center gap-4 flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                      <Image
                        src={service.icon || ""}
                        alt={service.title || ""}
                        width={50}
                        height={50}
                      />
                      <h3 className="relative inline-block text-xl font-semibold text-gray-900 mb-2">
                        {/* Circle at start of title */}
                        <span className="absolute left-0 h-4 w-4 rounded-full bg-[#20C5BA80] z-0"></span>
                        {/* Line at center bottom */}
                        <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 h-1 w-8 bg-[#20C5BA80] z-0"></span>

                        <span className={`font-[700] font-roboto text-[24px]  text-[#2B2B2B] relative z-10 ${service.title.includes("\n") ? "line-clamp-2" : ""}`}>
                          {service.title}
                        </span>
                      </h3>
                    </div>

                    <div className="flex-1 min-w-0 pl-3 border-b border-[#E2E8F0] pb-4">
                      <p className="text-[#868282] text-[16px] leading-[22px] font-[400]">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features?.map(
                      (feature: string, featureIndex: number) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <div className="flex-shrink-0 bg-teal-500 h-6 w-6 p-1 flex items-center justify-center rounded-full">
                            <Check className="w-4 h-4 text-white" size={16} />
                          </div>
                          <span className="text-[14.8px] text-[#101828] font-[400] leading-[22px]">
                            {feature}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* bottom navigation buttons */}
          <div className="flex mt-12 flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className={`bg-[#20C5BA] hover:bg-[#20C5BA]/80 h-[55px] px-[40px] py-[15px] capitalize rounded-[5px] text-[18px] font-[500] leading-[32px] font-roboto`}
            >
              View All
            </Button>
            <div className="flex items-center gap-2">
              <button className="relative w-14 h-14 shadow-lg rounded-full bg-white flex items-center justify-center">
                {/* Left semi-circle border */}
                <span className="absolute inset-0 rounded-full border-4 border-black [clip-path:polygon(0_0,50%_0,50%_100%,0_100%)]"></span>

                {/* Button content */}
                <Mail />
              </button>
              <a
                href="#contact-section"
                className="font-[600] capitalize text-[16px] hover:underline cursor-pointer"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Target industries */}
      <div
        id="industries-section"
        className="mt-16 text-center w-full max-w-[1920px] mx-auto"
      >
        <div className=" bg-[#F6F6F6] py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-[#FFAB40] font-roboto font-medium text-sm sm:text-base mb-2 tracking-wide">
                Target Industries
              </p>
              <h1 className="text-3xl font-roboto sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Tailored for Every Industry
              </h1>
              <p className="text-lg font-roboto text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From eCommerce to EdTech, Healthcare to SaaS — we craft
                solutions that adapt to your industry's DNA. No templates, just
                tailored ecosystems built around your users and goals.
              </p>
            </div>

            {/* Industries Grid */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 font-roboto">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className={`${industry.bgColor} flex flex-col justify-between rounded-3xl p-4  shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    <div className="text-white flex items-center justify-center">
                      <Bun />
                    </div>
                    <div className="bg-white min-h-[300px] rounded-3xl p-6 flex flex-col">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                        {industry.title}
                      </h3>
                      {/* Icon Circle */}
                      <div className={`flex mx-auto `}>{industry.icon}</div>

                      {/* Description */}
                      <p className="mt-3 text-[#475569] text-[16px] leading-[24px] text-center flex-grow font-[400]">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* bottom navigation buttons */}
              <div className="flex mt-12 flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#contact-section">
                  <ButtonComponent name="Get In Touch" buttonHeight="55px" />
                </a>
                <div className="flex items-center gap-2">
                  <button className="relative w-14 h-14 shadow-lg rounded-full bg-white flex items-center justify-center">
                    {/* Left semi-circle border */}
                    <span className="absolute inset-0 rounded-full border-4 border-black [clip-path:polygon(0_0,50%_0,50%_100%,0_100%)]"></span>

                    {/* Button content */}
                    <span className="z-10 text-black font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="black"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </button>
                  <p className="font-[600] capitalize text-[16px] hover:underline cursor-pointer">
                    {" "}
                    Learn More
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Peak behind the pixels section */}
      <section
        id="case-studies-section"
        className="bg-white py-16 px-6 lg:pr-0"
      >
        <div className="w-full max-w-[1920px] mx-auto md:pl-12 pl-0 flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/3 w-full">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="relative inline-block font-roboto">
                <span className="relative z-10">Peek Behind</span>
                {/* orange underline - positioned under "Peek Behind" only */}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-[10%] right-[10%] h-2 bg-orange-400"
                  style={{
                    borderRadius: "50%/100% 100% 0 0",
                    height: "10px",
                    transform: "translateY(2px)",
                  }}
                />
                <span
                  aria-hidden="true"
                  className="absolute w-[60%] -bottom-1 -rotate-2 left-[10%] h-2 bg-orange-400"
                  style={{
                    borderRadius: "50%/100% 100% 0 0",
                    height: "8px",
                    transform: "translateY(4px)",
                  }}
                />
              </span>{" "}
              <span className="relative z-10">the</span>{" "}
              <br className="hidden lg:block" />
              <span className="relative">Pixels</span>
            </h1>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-gray-900" size={16} />
                <span className="text-lg text-gray-700 font-medium">
                  Real challenges, real results
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-gray-900" size={16} />
                <span className="text-lg text-gray-700 font-medium">
                  Tools, timelines, and impact
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-gray-900" size={16} />
                <span className="text-lg text-gray-700 font-medium">
                  Design that performs and converts
                </span>
              </div>
            </div>

            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-sm flex items-center gap-2 transition-colors duration-200">
              Explore Case Studies
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Right Content - Single Image */}
          <div className="lg:w-2/3 w-full aspect-[1920/1280]">
            <div className="relative w-full h-full">
              <Image
                src={PeakPixels}
                alt="Design interface showcase"
                width={800}
                height={600}
                className="w-full h-full object-cover object-center rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* decision makers */}
      <section
        id="team-section"
        className="bg-[#F6F6F6] py-16 px-6 w-full max-w-[1920px] mx-auto"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content - Single Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full aspect-[4/5] max-w-lg mx-auto">
              <Image
                src={DecisionMakers}
                alt="Team collage showcase"
                width={600}
                height={750}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 w-full lg:pl-8">
            {/* Badge */}

            <div className="mb-6">
              <div className="w-full md:w-[70%] -mb-6 h-24 items-center md:justify-end justify-center flex">
                <GameController />
              </div>
              <h2 className="text-[#FFAB40] text-[20px] font-[500] capitalize tracking-wide mb-2">
                Decision Makers
              </h2>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Built by People! Backed by Purpose.
              </h1>
            </div>

            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                We're not just a team — we're a tight-knit crew of designers,
                developers, marketers, and strategists driven by one goal:
                crafting digital experiences that actually make sense.
              </p>

              <p>
                From our first sketch to your final results, we obsess over the
                little details — the code you don't see, the pixel you don't
                notice, and the moment your users feel at home.
              </p>

              <p>
                We believe great work comes from great culture — and it shows in
                everything we build.
              </p>
            </div>

            <button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-sm flex items-center gap-2 transition-colors duration-200">
              Explore Our Team
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* happy clients section */}
      <section
        id="clients-section"
        className="bg-[#2B2B2B] py-16 px-6 w-full max-w-[1920px] mx-auto"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <p className="text-[#FFAB40] text-[20px] font-[500] capitalize tracking-wide mb-4">
              Happy Clients
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our Clients Told the Bots
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From live feedback to saved chat responses, here's what real
              people are saying
            </p>
          </div>

          {/* Testimonials Image */}
          <div className="relative w-full max-w-7xl mx-auto">
            <Image
              src={HappyClients}
              alt="Client testimonials chat interface"
              width={1000}
              height={1000}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* faqs section */}
      <section
        id="faqs-section"
        className="bg-white py-16 px-6 w-full max-w-[1920px] mx-auto"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[#FFAB40] text-[20px] font-[500] leading-[110%] mb-4">
              FAQs
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-[#0F172A] text-[20px] font-[500] leading-[33px] tracking-[-1.5%] mx-auto">
              Got questions about CorTechSols? Explore helpful answers that make
              your blurry mind clear.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
            {/* Left Side - FAQ List */}
            <div className="lg:w-1/2 w-full flex gap-3 items-center">
              {/* Decorative Element */}
              <div>
                <Loop />
              </div>

              {/* FAQ Items with Scrollbar */}
              <div className="space-y-4 max-h-80 overflow-y-auto pr-2 scrollbar-custom">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg transition-all duration-200 ${
                      activeIndex === index
                        ? "border-orange-400 bg-white shadow-sm"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                    >
                      <span className="font-semibold text-gray-900 text-sm lg:text-base">
                        {faq.question}
                      </span>
                      <div className="ml-4 flex-shrink-0">
                        {activeIndex === index ? (
                          <svg
                            className="w-5 h-5 text-orange-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        )}
                      </div>
                    </button>

                    {activeIndex === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Chat Interface */}
            <div className="lg:w-1/2 w-full">
              <div className="flex flex-col py-8  items-center bg-white rounded-2xl border border-gray-200 p-6 max-w-md mx-auto">
                {/* Chat Header */}
                <div className="flex items-center justify-center mb-6">
                  <QA />
                </div>

                {/* Question */}
                <div className="mb-6 text-center">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Do you have more questions?
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Complete workforce management and time tracking in one
                    solution. Meet the platform designed to streamline your
                    team's productivity and performance.
                  </p>
                </div>

                {/* CTA Button */}
                <button className="mt-12 w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-sm transition-colors duration-200">
                  Start a Direct Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact section */}
      <div
        id="contact-section"
        className="font-roboto bg-[#F6F6F6] py-12 px-4 sm:px-6 lg:px-8 w-full max-w-[1920px] mx-auto"
      >
        <div className="md:max-w-[90%] max-w-[100%] mx-auto">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
              {/* Form Section */}
              <div className="col-span-1 md:p-8 p-2 lg:p-12 lg:pr-6">
                <div onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border bg-white border-gray-200 max-h-[60px] focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border bg-white border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Phone Number with Country Code */}
                  <div className="flex md:flex-row flex-col gap-0 md:max-h-[60px] max-h-[100px] bg-white">
                    <PhoneNumberInput />
                    <button
                      type="button"
                      onClick={getCode}
                      className="px-6 py-3 min-w-[120px] bg-[#2B2B2B] text-white rounded-none hover:bg-gray-900 transition-colors duration-200 font-medium"
                    >
                      Get Code
                    </button>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={12}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border bg-white border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-teal-500 text-white py-4 rounded-[5px] hover:bg-teal-600 transition-colors duration-200 font-semibold text-lg"
                  >
                    Send
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="col-span-1 md:p-8 p-2 lg:p-12 w-full  flex flex-col justify-center">
                <div className="w-full">
                  <div className="w-full flex justify-center ">
                    {/* image  */}
                    <Image
                      src={VirtualAssistant}
                      alt="image"
                      width={500}
                      height={500}
                    />
                  </div>
                  <p className="text-[20px] font-[500] text-[#FFAB40] leading-[110%] my-3">
                    Contact Us
                  </p>
                  <h1 className="font-roboto leading-[110%] lg:text-[56px] text-[44px] font-[800] text-[#0F172A] mb-6">
                    Let's Build Something Brilliant Together
                  </h1>

                  <div className="leading-[180%] text-[20px] font-[400] text-[#0F172A]">
                    <p>
                      Got an idea? A project in mind? Or just want to see if
                      we're the right fit? Drop us a message — we usually reply
                      within a few hours. Whether it's design, code, strategy,
                      or scaling — we're all ears (and keyboards).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

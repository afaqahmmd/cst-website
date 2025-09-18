"use client";

import React, { use } from "react";
import Image from "next/image";
import { Check, MoveRight, Smartphone } from "lucide-react";

import RelatedPost from "@/assets/images/services/related-post.jpg";
import InfoSection from "@/components/InfoSection/InfoSection";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import Footer from "@/components/Footer/Footer";
import Miro from "@/components/svgs/icons/Miro";
import Excel from "@/assets/images/projects/excel.png";
import Sheets from "@/assets/images/projects/sheets.png";
import FigmaIcon from "@/components/svgs/icons/FigmaIcon";
import AdobeIllustrator from "@/components/svgs/icons/AdobeIllustrator";
import Canva from "@/components/svgs/icons/Canva";
import MongoDB from "@/components/svgs/icons/MongoDb";
import AWS from "@/components/svgs/icons/AWS";
import Docker from "@/components/svgs/icons/Docker";
import Twilio from "@/components/svgs/icons/Twilio";
import PivotalTracker from "@/components/svgs/icons/PivotalTracker";
import GoogleMaps from "@/components/svgs/icons/GoogleMaps";
import ReactIcon from "@/components/svgs/icons/ReactIcon";
import TailwindCss from "@/components/svgs/icons/TailwindCss";
import ExpressJs from "@/components/svgs/icons/ExpressJs";
import NodeJs from "@/components/svgs/icons/NodeJs";
import ServiceIcon1 from "@/assets/images/projects/serviceIcon1.webp";
import ServiceIcon2 from "@/assets/images/projects/serviceIcon2.webp";
import Industry from "@/assets/images/projects/industry.webp";
import Link from "next/link";
import { getBlogImageUrl } from "@/utils/getBlobImageUrl";
import { useServices } from "@/hooks/useServices";
import { Service } from "@/types/service";
import { useIndustries } from "@/hooks/useIndustries";
import { useProjectBySlug } from "@/hooks/useProjectBySlug";

// Helper function to generate features from description
const generateFeatures = (description: string) => {
  const features = [
    "Custom development solutions",
    "Responsive design",
    "Performance optimization",
    "Security best practices",
  ];
  return features.slice(0, 3); // Return first 3 features
};

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

const page = ({ params }: ProjectPageProps) => {
  const { slug } = use(params);
  const { project, isLoading, error, notFound } = useProjectBySlug(slug);
  console.log("single project fetched:", project);
  const {
    data: servicesData,
    isLoading: isServicesLoading,
    error: servicesError,
  } = useServices();

  const allServices = servicesData?.data || [];
  const activeServices = allServices.filter(
    (service: Service) => service.is_active
  );
  const services = activeServices.length > 0 ? activeServices : allServices;
  const {
    data: industriesList,
    isLoading: industriesLoading,
    error: industriesError,
  } = useIndustries();

  const industries = industriesList?.data || [];

  // Handle loading state
  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Error Loading Industry
          </h2>
          <p className="text-gray-600">Please try again later.</p>
          <p className="text-sm text-gray-500 mt-2">
            {industriesError?.message}
          </p>
        </div>
      </div>
    );
  }

  // const project = {
  //   id: 4,
  //   name: "Design Thinking in Real Products: What Most Teams Miss",
  //   slug: "design-thinking-real-projects",
  //   description:
  //     "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
  //   image:
  //     "http://localhost:7000/media/projects/821fad0b-e91a-45c6-a692-06140069646d.png",
  //   published: false,
  //   created_at: "2025-09-10T07:14:38.748485Z",
  //   updated_at: "2025-09-10T07:14:38.762960Z",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "Python v2",
  //     },
  //     {
  //       id: 5,
  //       name: "Saas",
  //     },
  //   ],
  //   author_email: "mh4353662@gmail.com",
  //   sections: {
  //     hero_section: {
  //       title: "FleetTrackPro – Revolutionizing Logistics Visibility",
  //       description:
  //         "How skipping the empathy and iteration phase can silently kill your product experience.",
  //       sub_sections: [
  //         {
  //           image:
  //             "http://localhost:7000/media/projects/sections/512fd9ea-42b4-494b-be6a-eac86eb910bf.png",
  //           image_alt_text: "Figma",
  //         },
  //       ],
  //       hero_main_image:
  //         "http://localhost:7000/media/projects/821fad0b-e91a-45c6-a692-06140069646d.png",
  //     },
  //     about_section: {
  //       title: "The Challenge",
  //       description:
  //         "Fleet logistics companies often struggle with real-time visibility, inefficient manual processes, and lack of data-driven insights. Our client, a mid-sized logistics firm expanding regionally, needed a scalable digital platform that could streamline fleet tracking, reduce communication gaps, and provide actionable analytics — all while remaining user-friendly for on-ground staff and admin teams.",
  //       sub_sections: [],
  //     },
  //     project_goals_section: {
  //       title: "Project Goals",
  //       description: "",
  //       sub_sections: [
  //         {
  //           image:
  //             "http://localhost:7000/media/projects/sections/8a2d40d6-9a2b-4de5-856b-44f8dd921f83.png",
  //           title: "To create real time fleet visibility",
  //         },
  //         {
  //           image:
  //             "http://localhost:7000/media/projects/sections/e5293b16-bca4-4c77-8b7f-13617094421a.png",
  //           title: "operational efficiency",
  //         },
  //         {
  //           image:
  //             "http://localhost:7000/media/projects/sections/33fa350a-cb3f-4ff5-b233-f0b160ac58a9.png",
  //           title: "Actionable insights throug data",
  //         },
  //       ],
  //       approaches: [
  //         {
  //           title: "🔍 Our Approach 01",
  //           description:
  //             "We kicked off with stakeholder interviews and on-site workflow audits to understand the bottlenecks. Our UX team mapped key journeys — from delivery planning to fleet performance reporting — and identified opportunities to automate and simplify.",
  //           additional_info: [
  //             "A responsive web app for admin teams to manage and monitor logistics operations.",
  //             "A responsive web app for admin teams to manage and monitor logistics operations.",
  //             "A responsive web app for admin teams to manage and monitor logistics operations.",
  //           ],
  //         },
  //         {
  //           title: "🎨 Design & User Experience 02",
  //           description:
  //             "The design focused on clarity, accessibility, and speed. We created a custom design system to ensure consistency across modules. Every component was tested for usability, especially for users in low-light or on-the-move environments. Key features included:",
  //           additional_info: [
  //             "Interactive fleet maps with real-time geolocation",
  //             "Interactive fleet maps with real-time geolocation",
  //             "Interactive fleet maps with real-time geolocation",
  //             "Interactive fleet maps with real-time geolocation",
  //           ],
  //         },
  //         {
  //           title: "💻 Development Process 03",
  //           description: "Our full-stack team built the platform using:",
  //           additional_info: [
  //             "React for a fast, modular frontend",
  //             "Node.js + Express for scalable backend services",
  //             "MongoDB for flexible and high-speed data storage",
  //           ],
  //         },
  //         {
  //           title: "📊 Results & Impact 04",
  //           description: "Since launch, FleetTrackPro has:",
  //           additional_info: [
  //             "Reduced manual planning time by 70%",
  //             "Reduced manual planning time by 70%",
  //             "Reduced manual planning time by 70%",
  //             "Reduced manual planning time by 70%",
  //           ],
  //         },
  //         {
  //           title: "🧭 Why This Project Stands Out 05",
  //           description: "",
  //           additional_info: [
  //             "Solved a real operational problem at scale",
  //             "Solved a real operational problem at scale",
  //             "Solved a real operational problem at scale",
  //           ],
  //         },
  //       ],
  //     },
  //     technologies_used_section: {
  //       title: "🔧 Technologies & Tools Used",
  //       description: "Since launch, FleetTrackPro has:",
  //       sub_sections: [
  //         {
  //           title: "Design",
  //           images: [
  //             "http://localhost:7000/media/projects/sections/2284f90b-22e4-4037-9384-9fd4c5bec73d.png",
  //             "http://localhost:7000/media/projects/sections/82bd8d8d-2654-4ec3-a838-0186d8be6b97.png",
  //           ],
  //           description: "",
  //           image_alt_text: "Design",
  //         },
  //         {
  //           title: "Backend",
  //           images: [
  //             "http://localhost:7000/media/projects/sections/9cb1d454-9f2e-43b5-827c-30bf50d8e784.png",
  //             "http://localhost:7000/media/projects/sections/77380ffb-2bd8-4241-956f-6821c2921ddf.png",
  //           ],
  //           description: "",
  //           image_alt_text: "Backend",
  //         },
  //       ],
  //     },
  //     services_provided_section: {
  //       title: "Services provided",
  //       description: "Looking to build something similar?",
  //       sub_sections: [
  //         {
  //           title: "UI/UX Design",
  //           description:
  //             "Empowering products with user-first design and modern aesthetics.",
  //           additional_info: [
  //             "UX Research & Strategy",
  //             "UX Research & Strategy",
  //             "UX Research & Strategy",
  //             "UX Research & Strategy",
  //           ],
  //         },
  //       ],
  //     },
  //   },
  // };

  const industryChallenges = [
    "Lack of engagement in online learning environments",
    "Limited scalability of traditional LMS systems",
    "Poor user experience for both educators and students",
    "Data fragmentation across systems (attendance, content, performance)",
    "Compliance with education-specific data regulations (FERPA, COPPA, etc.)",
  ];

  const relatedPosts = [
    {
      id: 1,
      image: RelatedPost,
      categories: [
        { name: "Design", color: "text-blue-600" },
        { name: "UX Research", color: "text-purple-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
      title: "Design Thinking in Real Products: What Most Teams Miss",
      description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    },
    {
      id: 2,
      image: RelatedPost,
      categories: [
        { name: "Design", color: "text-blue-600" },
        { name: "UX Research", color: "text-purple-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
      title: "Design Thinking in Real Products: What Most Teams Miss",
      description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    },
    {
      id: 3,
      image: RelatedPost,
      categories: [
        { name: "Design", color: "text-blue-600" },
        { name: "UX Research", color: "text-purple-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
      title: "Design Thinking in Real Products: What Most Teams Miss",
      description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    },
    {
      id: 4,
      image: RelatedPost,
      categories: [
        { name: "Design", color: "text-blue-600" },
        { name: "UX Research", color: "text-purple-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
      title: "Design Thinking in Real Products: What Most Teams Miss",
      description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    },
    {
      id: 5,
      image: RelatedPost,
      categories: [
        { name: "Design", color: "text-blue-600" },
        { name: "UX Research", color: "text-purple-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
      title: "Design Thinking in Real Products: What Most Teams Miss",
      description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    },
    {
      id: 6,
      image: RelatedPost,
      categories: [
        { name: "Design", color: "text-blue-600" },
        { name: "UX Research", color: "text-purple-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
      title: "Design Thinking in Real Products: What Most Teams Miss",
      description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    },
    {
      id: 7,
      image: RelatedPost,
      categories: [
        { name: "Design", color: "text-blue-600" },
        { name: "UX Research", color: "text-purple-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
      title: "Design Thinking in Real Products: What Most Teams Miss",
      description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    },
  ];

  const technologiesAndToolsUsed = [
    {
      name: "Design",
      icons: [
        {
          IconComponent: FigmaIcon,
          iconSize: "w-[86px] h-auto",
        },
        {
          IconComponent: AdobeIllustrator,
          iconSize: "w-[86px] h-auto",
        },
        {
          IconComponent: Canva,
          iconSize: "w-[86px] h-auto",
        },
      ],
      bgColor: "bg-[#8FD8184D]",
    },
    {
      name: "Backend",
      icons: [
        {
          IconComponent: NodeJs,
          iconSize: "w-[86px] h-auto",
        },
        {
          IconComponent: ExpressJs,
          iconSize: "w-[86px] h-auto",
        },
      ],
      bgColor: "bg-[#7DD1FF47]",
    },
    {
      name: "Frontend",
      icons: [
        {
          IconComponent: ReactIcon,
          iconSize: "w-[86px] h-auto",
        },
        {
          IconComponent: TailwindCss,
          iconSize: "w-[86px] h-auto",
        },
      ],
      bgColor: "bg-[#FFF4CE]",
    },
    {
      name: "Database",
      icons: [
        {
          IconComponent: MongoDB,
          iconSize: "w-[86px] h-auto",
        },
      ],
      bgColor: "bg-[#FCCFCF]",
    },
    {
      name: "Infra & Devops:",
      icons: [
        {
          IconComponent: AWS,
          iconSize: "w-[132px] h-auto",
        },
        {
          IconComponent: Docker,
          iconSize: "w-[86px] h-auto",
        },
      ],
      bgColor: "bg-[#FFDBCE]",
    },
    {
      name: "Integrations:",
      icons: [
        {
          IconComponent: GoogleMaps,
          iconSize: "w-[61px] h-auto",
        },
        {
          IconComponent: Twilio,
          iconSize: "w-[86px] h-auto",
        },
        {
          IconComponent: PivotalTracker,
          iconSize: "w-[86px] h-auto",
        },
      ],
      bgColor: "bg-[#D3FCCF]",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  };
  return (
    <main className="bg-white w-full font-roboto">
      {/* hero section */}
      <section className="w-full bg-white lg:px-6 px-4">
        <div className="max-w-7xl mt-12 gap-4 mx-auto flex flex-col items-start text-start lg:px-16 md:px-12 px-4">
          {/* date and time */}
          <div className="flex gap-3 items-center">
            <p className="text-[#999999] text-[14px] leading-[150%] tracking-[0] font-[700]">
              {formatDate(project?.created_at)}
            </p>
            <p className="text-[#333333] text-[14px] leading-[150%] tracking-[0] font-[700]">
              {formatTime(project?.created_at)}
            </p>
          </div>

          <div className="flex gap-4 items-center ">
            <p className="text-[#333333] text-[16px] leading-[20px] tracking-[0%] font-[600]">
              🏷️ Industry:
            </p>
            <a className="text-[#1D76F1] cursor-pointer underline text-[16px] leading-[20px] tracking-[0%] font-[600]">
              Logistics & Transportation
            </a>
          </div>

          <h2 className=" font-roboto font-bold lg:text-[48px] text-[36px] lg:leading-[63.98px] leading-[50px] tracking-[0]">
            {project?.sections?.hero_section?.title}
          </h2>
          <p className="font-roboto font-normal text-[#666666] text-[24px] leading-[150%] tracking-[0]">
            {project?.sections?.hero_section?.description}
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            {project?.sections?.hero_section?.sub_sections.map(
              (subSection: any, index: number) => (
                <div key={index}>
                  <Image
                    src={getBlogImageUrl(subSection.image)}
                    alt={subSection.image_alt_text || ""}
                    width={47}
                    height={47}
                  />
                </div>
              )
            )}

            <div className="h-20 w-20 flex items-center justify-center bg-[#FFFAE9] rounded-full overflow-hidden p-2">
              <Miro />
            </div>
            <div className="h-20 w-20 flex items-center justify-center bg-[#F7F0FE] rounded-full overflow-hidden p-2">
              <Image src={Sheets} alt="Sheets" width={34} height={42} />
            </div>
            <div className="h-20 w-20 flex items-center justify-center bg-[#E9FFEF] rounded-full overflow-hidden p-2">
              <Image
                src={Excel}
                alt="Excel"
                width={47}
                height={47}
                className="rounded-lg overflow-hidden"
              />
            </div>
          </div>
        </div>

        <div className="relative aspect-[308/225] mt-12 w-full max-w-7xl mx-auto">
          <Image
            src={getBlogImageUrl(
              project?.sections?.hero_section?.sub_sections[0]?.image
            )}
            alt="Sample"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* the challenge section */}
      <section className="w-full bg-white lg:px-12 px-8 md:mt-12 lg:mt-18">
        <div className="lg:max-w-[70%] relative border-[#188AEC] border-[2px] p-12 gap-4 mx-auto flex flex-col  text-center lg:px-16 md:px-12 px-4">
          <div className="absolute -top-[16px] left-0 -translate-x-1/2 w-[22px] h-[32px] border-[1.5px] bg-white border-[#188AEC]" />
          <div className="absolute -bottom-[16px] left-0 -translate-x-1/2 w-[22px] h-[32px] border-[1.5px] bg-white border-[#188AEC]" />
          <div className="absolute -top-[16px] right-[15%] -translate-x-1/2 w-[22px] h-[32px] border-[1.5px] bg-white border-[#188AEC]" />
          <div className="absolute -bottom-[16px] right-[15%] -translate-x-1/2 w-[22px] h-[32px] border-[1.5px] bg-white border-[#188AEC]" />

          <h2 className=" font-roboto text-[#2B2B2B] font-[600] text-[48px] leading-[100%] tracking-[-3%]">
            🧠 {project?.sections?.about_section?.title}
          </h2>
          <p className="font-roboto font-normal text-[#666666] text-[24px] leading-[150%] tracking-[0] mt-5">
            {project?.sections?.about_section?.description}
          </p>
        </div>
      </section>

      {/* project goals section */}
      <section className="w-full bg-white px-12 ">
        <div className="lg:max-w-[70%] relative rounded-[28px] p-12 mx-auto mt-12 flex flex-col bg-[#FAFBFA] text-center lg:px-8 md:px-6 px-4">
          <h2 className=" font-roboto text-[#2B2B2B] font-[600] text-[48px] leading-[100%] tracking-[-3%]">
            {project?.sections?.project_goals_section?.title}
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mt-12 mt-8">
            {project?.sections?.project_goals_section?.sub_sections.map(
              (subSection: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-col items-center lg:gap-5 gap-4"
                >
                  <Image
                    src={getBlogImageUrl(subSection.image)}
                    alt="Flow"
                    width={80}
                    height={80}
                  />
                  <p className="text-[#22222A] text-[22px] leading-[150%] tracking-[0%] font-[500]">
                    {subSection.title}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 🔍 Our Approach */}
      <section className="w-full mt-12 bg-white px-12">
        <div className="lg:max-w-[70%] relative p-12 mx-auto flex flex-col  text-start lg:px-16 md:px-12 px-4">
          <h2 className="font-roboto mb-6 md:ml-12 mx-auto font-semibold text-[32px] leading-[100%] tracking-[-3%] text-[#333333]">
            {project?.sections?.project_goals_section?.approaches[0]?.title}
          </h2>
          <p className="lg:mt-8 md:ml-12 mx-auto mt-4 font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
            {
              project?.sections?.project_goals_section?.approaches[0]
                ?.description
            }
          </p>

          <div className="font-roboto mb-6 md:ml-16 mx-auto border-l-[5px] pl-12 mt-12 border-[#FFAB40]">
            <ul className="list-disc">
              {project?.sections?.project_goals_section?.approaches[0]?.additional_info.map(
                (info: any, index: number) => (
                  <li key={index}>
                    <p className="font-[400] text-[24px] leading-[40px] text-[#666666]">
                      {info}
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* design and process section */}
      {project?.sections?.project_goals_section?.approaches[1]?.title && (
        <section className="w-full px-12">
          <div className="lg:max-w-[70%] relative p-12 mx-auto flex flex-col  text-start lg:px-16 md:px-12 px-4">
            <h2 className="font-roboto mb-6 md:ml-12 mx-auto font-semibold text-[32px] leading-[100%] tracking-[-3%] text-[#333333]">
              {project?.sections?.project_goals_section?.approaches[1]?.title}
            </h2>
            <p className="lg:mt-8 mt-4 md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
              {
                project?.sections?.project_goals_section?.approaches[1]
                  ?.description
              }
            </p>

            <div className="font-roboto mb-6 md:ml-16 mx-auto border-l-[5px] pl-12 mt-12 border-[#FFAB40]">
              <ul className="list-disc">
                {project?.sections?.project_goals_section?.approaches[1]?.additional_info.map(
                  (info: any, index: number) => (
                    <li key={index}>
                      <p className="font-[400] text-[24px] leading-[40px] text-[#666666]">
                        {info}
                      </p>
                    </li>
                  )
                )}
              </ul>
            </div>
            <p className="lg:mt-8 mt-4 md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
              We ran multiple clickable prototypes and refined based on user
              feedback before development.
            </p>
          </div>
        </section>
      )}

      {/* 💻 Development Process */}
      {project?.sections?.project_goals_section?.approaches[2] && (
        <section className="w-full bg-white px-12">
          <div className="lg:max-w-[70%] relative p-12 mt-12  mx-auto flex flex-col  text-start lg:px-16 md:px-12 px-4">
            <h2 className="font-roboto mb-6 md:ml-12 mx-auto font-semibold text-[32px] leading-[100%] tracking-[-3%] text-[#333333]">
              {project?.sections?.project_goals_section?.approaches[2]?.title}
            </h2>
            <p className="lg:my-8 my-4 md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
              {
                project?.sections?.project_goals_section?.approaches[2]
                  ?.description
              }
            </p>

            {project?.sections?.project_goals_section?.approaches[2]?.additional_info.map(
              (challenge: any, index: number) => (
                <div
                  key={index}
                  className="flex md:items-center items-start gap-4 mb-4"
                >
                  <MoveRight
                    size={32}
                    color="#FFAB40"
                    className="shrink-0 md:mt-0 mt-2"
                  />
                  <p className="font-roboto text-[24px] font-[500] leading-[183%] tracking-[0%] text-[#666666]">
                    {challenge}
                  </p>
                </div>
              )
            )}
          </div>
        </section>
      )}

      {/* 💻 Results and Impacts */}
      {project?.secitons?.project_goals_section?.approaches[3] && (
        <section className="w-full bg-white px-12">
          <div className="lg:max-w-[70%] relative p-12 mt-12  mx-auto flex flex-col  text-start lg:px-16 md:px-12 px-4">
            <h2 className="font-roboto mb-6 md:ml-12 mx-auto font-semibold text-[32px] leading-[100%] tracking-[-3%] text-[#333333]">
              {project?.sections?.project_goals_section?.approaches[3]?.title}
            </h2>
            <p className="lg:my-8 my-4 md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
              {
                project?.sections?.project_goals_section?.approaches[3]
                  ?.description
              }
            </p>

            <div className="md:ml-12 mx-auto w-full ">
              {/* Grid Layout */}
              <div className=" bg-[#8FD8184D] rounded-xl p-8">
                <ul className="flex flex-col md:px-8 px-4 gap-[10px] list-disc text-[#3C5612] font-[500] text-[22px] leading-[173%] tracking-[0%]">
                  {project?.sections?.project_goals_section?.approaches[3]?.additional_info.map(
                    (info: any, index: number) => (
                      <li key={index}>{info}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <p className="lg:my-8 my-4 md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
              {project?.sections?.hero_section?.description}
            </p>
          </div>
        </section>
      )}

      {/* why this project stands out */}
      <section className="w-full bg-white px-12">
        <div className="lg:max-w-[70%] relative lg:p-18 p-12 mt-12  mx-auto flex flex-col items-start bg-[#F6FAFE] text-start lg:px-16 md:px-12 px-4">
          <h2 className=" font-roboto md:ml-12 mt-6 mx-auto text-[#2B2B2B] font-[600] text-[32px] leading-[100%] tracking-[-3%]">
            🧭 Why This Project Stands Out
          </h2>
          <div className="flex flex-col gap-4 md:ml-12 mx-auto lg:mt-12 mt-8 mb-6">
            <div className="flex items-center lg:gap-5 gap-4">
              <p className="font-poppins text-[40px] leading-[183%] tracking-[0%] font-[500]">
                ✅
              </p>
              <p className="font-poppins text-[#22222A] text-[26px] leading-[183%] tracking-[0%] font-[500]">
                Solved a real operational problem at scale
              </p>
            </div>
            <div className="flex items-center lg:gap-5 gap-4">
              <p className="font-poppins text-[40px] leading-[183%] tracking-[0%] font-[500]">
                ✅
              </p>
              <p className="font-poppins text-[#22222A] text-[26px] leading-[183%] tracking-[0%] font-[500]">
                Balanced usability with robust tech infrastructure
              </p>
            </div>
            <div className="flex items-center lg:gap-5 gap-4">
              <p className="font-poppins text-[40px] leading-[183%] tracking-[0%] font-[500]">
                ✅
              </p>
              <p className="font-poppins text-[#22222A] text-[26px] leading-[183%] tracking-[0%] font-[500]">
                Laid foundation for future analytics and automation layers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* technologies and tools used */}
      <section className="w-full bg-white px-12">
        <div className="lg:max-w-[70%] relative lg:p-18 p-12 mt-12 mx-auto flex flex-col items-start text-start lg:px-16 md:px-12 px-4">
          <h2 className="font-roboto md:ml-12 mt-6 mx-auto text-[#2B2B2B] font-[600] text-[32px] leading-[100%] tracking-[-3%]">
            {project?.sections?.technologies_used_section?.title}
          </h2>
          <p className="lg:my-8 my-4 md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
            {project?.sections?.technologies_used_section?.description}
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-12 w-full md:ml-12 mx-auto lg:mt-12 mt-8 mb-6">
            {project?.sections?.technologies_used_section?.sub_sections.map(
              (tool: any, index: number) => (
                <div className="flex flex-col gap-8" key={index}>
                  <h2 className="font-poppins text-[#282D46] font-[600] md:text-[32px] text-[24px] leading-[100%] tracking-[-3%]">
                    {tool.title}
                  </h2>
                  <div
                    key={index}
                    className={`${technologiesAndToolsUsed[index].bgColor} flex flex-col items-center rounded-xl`}
                  >
                    <div className="flex flex-wrap gap-5 items-center justify-center p-12">
                      {tool.images?.map((image: any, index: number) => (
                        <Image
                          key={index}
                          src={getBlogImageUrl(image)}
                          alt={tool.image_alt_text || ""}
                          width={100}
                          height={100}
                          className="object-contain"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <div className="w-full max-w-[90%] mx-auto flex flex-col py-16 lg:py-24">
        <div className=" px-0 sm:px-6 lg:px-8">
          {/* Header */}
          <h2 className="text-3xl md:text-[46px] font-[700] text-[#333333] font-roboto">
            {project?.sections?.services_provided_section?.title}
          </h2>
          <p className="lg:my-8 ml-2 my-4 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
            {project?.sections?.services_provided_section?.description}
          </p>
          {/* Services Grid */}

          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.slice(0, 2).map((service: Service, index: number) => (
                <Link
                  href={`/services/${service.slug}`}
                  key={service.id}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 cursor-pointer"
                >
                  <div className="flex flex-col items-start gap-4 mb-4  border-b-1 border-[#D1D3D9] pb-4">
                    <div className="flex items-start gap-4 flex-shrink-0 p-0 bg-white rounded-lg">
                      {/* {getServiceIcon(service.title)} */}
                      <Image
                        src={service.images[0]}
                        alt={"service icon"}
                        width={40}
                        height={40}
                        className="w-10 h-10"
                      />
                      <h2 className="relative inline-block text-xl font-semibold text-gray-900 mb-2">
                        <span className="absolute left-0 h-4 w-4 rounded-full bg-[#20C5BA80] z-0"></span>
                        <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 h-1 w-8 bg-[#20C5BA80] z-0"></span>
                        <span className="relative z-10">{service.title}</span>
                      </h2>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-[#868282] text-[16px] leading-[22px] font-[400]">
                        {service.description.slice(0, 100)}...
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mt-5">
                    {generateFeatures(service.description).map(
                      (feature: string, featureIndex: number) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <div className="flex-shrink-0 bg-teal-500 h-6 w-6 p-1 flex items-center justify-center rounded-full">
                            <Check className="w-4 h-4 text-white" size={16} />
                          </div>
                          <span className="text-sm text-gray-700">
                            {feature.slice(0, 100)}...
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Industry */}
      <div className="w-full max-w-[90%] mx-auto flex flex-col py-16 lg:py-24 lg:pt-0">
        <div className=" px-0 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl md:text-[46px] font-[700] text-[#333333] font-roboto">
            🏷️ Industry:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* industry card */}
            {industries.length > 0 && (
              <div className="flex flex-col max-w-[500px] overflow-hidden gap-4 bg-white border border-gray-200 rounded-[24px] ">
                <div className="w-full aspect-[400/280] relative">
                  <Image
                    src={getBlogImageUrl(industries[0]?.images[0])}
                    alt={industries[0]?.image_alt_texts[0] || "industry"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <h2 className="font-Roboto text-[#2B2B2B] font-[700] text-[20px] leading-[100%] tracking-[-3%]">
                    {industries[0]?.name}
                  </h2>
                  <p className="font-roboto text-[#475569] text-[16px] tracking-[0%] font-[400] leading-[24px]">
                    {industries[0]?.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* popular posts */}
      <div className="w-full flex flex-col pb-16 lg:pb-24">
        <div className="max-w-full mx-auto px-0 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex mx-12 justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Popular Post
            </h2>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-sm text-sm transition-colors duration-200">
              View All
            </button>
          </div>

          {/* Horizontally Scrollable Posts */}
          <div className="overflow-x-auto scrollbar-hide sm:ml-12">
            <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
              {relatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group w-80 flex-shrink-0"
                >
                  {/* Post Image */}
                  <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-[400/360]">
                    <Image
                      src={post.image}
                      alt={post.title || ""}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-3 mb-3">
                      {post.categories.map((category, index) => (
                        <span
                          key={index}
                          className={`${category.color} font-medium text-sm`}
                        >
                          {category.name}
                        </span>
                      ))}
                    </div>

                    {/* Date & Time */}
                    <div className="text-sm text-gray-500 mb-4 font-roboto">
                      <span className="text-[#999999] text-[14px] font-[500] leading-[150%]">
                        {formatDate(post.date)}
                      </span>{" "}
                      <span className="text-[#333333] text-[14px] font-[700] leading-[150%] ml-3">
                        {post.time}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.description}
                    </p>

                    {/* Read More Link */}
                    <button className="text-[#FFAB40] underline font-medium text-sm transition-colors duration-200">
                      Read More...
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator (Optional) */}
          <div className="flex justify-center mt-6 md:hidden">
            <div className="text-sm text-gray-500">
              ← Swipe to see more posts →
            </div>
          </div>
        </div>
      </div>

      <InfoSection />
      <StayInLoop />
      <Footer />
    </main>
  );
};

export default page;

import React from "react";
import IndustryImg from "@/assets/images/industries/tabs-pic.png";
import Image from "next/image";
import { Check, MoveRight, Smartphone } from "lucide-react";
import W from "@/assets/images/industries/w.png";
import settingIllustration from "@/assets/images/industries/settingsIllustration.png";
import studentPlanner2 from "@/assets/images/industries/student-planner.png";
import LMS from "@/assets/images/industries/LMS.png";
import dashboards from "@/assets/images/industries/dashboard.png";
import work1 from "@/assets/images/industries/work1.png";
import work2 from "@/assets/images/industries/work2.png";
import work3 from "@/assets/images/industries/work3.png";
import RelatedPost from "@/assets/images/services/related-post.jpg";
import Mob1 from "@/assets/images/services/mob1.png";
import Mob2 from "@/assets/images/services/mob2.png";
import Mob3 from "@/assets/images/services/mob3.png";
import InfoSection from "@/components/InfoSection/InfoSection";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import Footer from "@/components/Footer/Footer";
import Miro from "@/components/svgs/icons/Miro";
import Excel from "@/assets/images/projects/excel.png";
import Figma from "@/assets/images/projects/figma.jpg";
import Sheets from "@/assets/images/projects/sheets.png";
import IndustryHero from "@/assets/images/projects/industry-hero.webp";
import Flow from "@/components/svgs/icons/Flow";
import Muscle from "@/components/svgs/icons/Muscle";
import Noise from "@/components/svgs/icons/Noise";
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

// Mock service data
const services = [
  {
    id: 1,
    title: "Web Development",
    slug: "web-development",
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
    title: "Mobile App Development",
    slug: "mobile-app-development",
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
];

// Helper function to get service icon
const getServiceIcon = (title: string) => {
  switch (title.toLowerCase()) {
    case "web development":
      return <ReactIcon className="w-8 h-8 text-blue-600" />;
    case "mobile app development":
      return <Smartphone className="w-8 h-8 text-green-600" />;
    default:
      return <ReactIcon className="w-8 h-8 text-gray-600" />;
  }
};

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

const page = () => {
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
      <section className="w-full bg-white">
        <div className="max-w-7xl mt-12 gap-4 mx-auto flex flex-col items-start text-start lg:px-16 md:px-12 px-4">
          {/* date and time */}
          <div className="flex gap-4 items-center">
            <p className="text-[#999999] text-[14px] leading-[150%] tracking-[0] font-[700]">
              16 March 2023
            </p>
            <p className="text-[#333333] text-[14px] leading-[150%] tracking-[0] font-[700]">
              12:24 PM
            </p>
          </div>

          <div className="flex gap-4 items-center ">
            <p className="text-[#333333] text-[16px] leading-[20px] tracking-[0%] font-[600]">
              🏷️ Industry:
            </p>
            <a
              href="#"
              className="text-[#1D76F1] underline text-[16px] leading-[20px] tracking-[0%] font-[600]"
            >
              Logistics & Transportation
            </a>
          </div>

          <h1 className=" font-roboto font-bold text-[48px] leading-[63.98px] tracking-[0]">
            FleetTrackPro - Revolutionizing Logistics Visibility
          </h1>
          <p className="font-roboto font-normal text-[#666666] text-[24px] leading-[150%] tracking-[0]">
            How skipping the empathy and iteration phase can silently kill your
            product experience.
          </p>
          <div className="flex gap-4 items-center">
            <div className="h-20 w-20 flex items-center justify-center bg-[#ECECEC] rounded-full overflow-hidden p-2">
              <Image
                src={Figma}
                alt="Figma"
                width={47}
                height={47}
                className="rounded-lg overflow-hidden"
              />
            </div>
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

        <div className="aspect-[308/225] mt-12 w-full max-w-7xl mx-auto relative">
          <Image
            src={IndustryHero}
            alt="Sample"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* the challenge section */}
      <section className="w-full bg-white px-12">
        <div className="lg:max-w-[70%] relative border-[#188AEC] border-[2px] p-12 mt-12 gap-4 mx-auto flex flex-col  text-center lg:px-16 md:px-12 px-4">
          <div className="absolute -top-[16px] left-0 -translate-x-1/2 w-[22px] h-[32px] border-[1.5px] bg-white border-[#188AEC]" />
          <div className="absolute -bottom-[16px] left-0 -translate-x-1/2 w-[22px] h-[32px] border-[1.5px] bg-white border-[#188AEC]" />
          <div className="absolute -top-[16px] right-[15%] -translate-x-1/2 w-[22px] h-[32px] border-[1.5px] bg-white border-[#188AEC]" />
          <div className="absolute -bottom-[16px] right-[15%] -translate-x-1/2 w-[22px] h-[32px] border-[1.5px] bg-white border-[#188AEC]" />

          <h1 className=" font-roboto text-[#2B2B2B] font-[600] text-[48px] leading-[100%] tracking-[-3%]">
            🧠 The Challenge
          </h1>
          <p className="font-roboto font-normal text-[#666666] text-[24px] leading-[150%] tracking-[0] mt-5">
            Fleet logistics companies often struggle with real-time visibility,
            inefficient manual processes, and lack of data-driven insights. Our
            client, a mid-sized logistics firm expanding regionally, needed a
            scalable digital platform that could streamline fleet tracking,
            reduce communication gaps, and provide actionable analytics — all
            while remaining user-friendly for on-ground staff and admin teams.
          </p>
        </div>
      </section>

      {/* project goals section */}
      <section className="w-full bg-white px-12">
        <div className="lg:max-w-[70%] relative p-12 mt-12  mx-auto flex flex-col bg-[#FAFBFA] text-center lg:px-16 md:px-12 px-4">
          <h1 className=" font-roboto text-[#2B2B2B] font-[600] text-[48px] leading-[100%] tracking-[-3%]">
            Project Goals
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mt-12 mt-8">
            <div className="flex flex-col items-center lg:gap-5 gap-4">
              <div className="h-20 w-20 flex items-center justify-center bg-[#20C5BA] rounded-full overflow-hidden p-2">
                <Flow />
              </div>
              <p className="text-[#22222A] text-[24px] leading-[150%] tracking-[0%] font-[500]">
                To create Real-Time Fleet Visibility
              </p>
            </div>
            <div className="flex flex-col items-center lg:gap-5 gap-4">
              <div className="h-20 w-20 flex items-center justify-center bg-[#FFAB40] rounded-full overflow-hidden p-2">
                <Muscle />
              </div>
              <p className="text-[#22222A] text-[24px] leading-[150%] tracking-[0%] font-[500]">
                Operational Efficiency & Automation
              </p>
            </div>
            <div className="flex flex-col items-center lg:gap-5 gap-4">
              <div className="h-20 w-20 flex items-center justify-center bg-[#19817A] rounded-full overflow-hidden p-2">
                <Noise />
              </div>
              <p className="text-[#22222A] text-[24px] leading-[150%] tracking-[0%] font-[500]">
                Actionable Insights Through Data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔍 Our Approach */}
      <section className="w-full bg-white px-12">
        <div className="lg:max-w-[70%] relative p-12 mt-12  mx-auto flex flex-col  text-start lg:px-16 md:px-12 px-4">
          <h2 className="font-roboto mb-6 md:ml-12 mx-auto font-semibold text-[32px] leading-[100%] tracking-[-3%] text-[#333333]">
            🔍 Our Approach
          </h2>
          <p className="lg:mt-8 md:ml-12 mx-auto mt-4 font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
            We kicked off with stakeholder interviews and on-site workflow
            audits to understand the bottlenecks. Our UX team mapped key
            journeys — from delivery planning to fleet performance reporting —
            and identified opportunities to automate and simplify.
          </p>
          <p className="lg:mt-8 mt-4 md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
            We proposed a solution in three phases:
          </p>
          <div className="font-roboto mb-6 md:ml-16 mx-auto border-l-[5px] pl-12 mt-12 border-[#FFAB40]">
            <ul className="list-disc">
              <li>
                <p className="font-[400] text-[24px] leading-[40px] text-[#666666]">
                  A responsive web app for admin teams to manage and monitor
                  logistics operations.
                </p>
              </li>
              <li>
                <p className="font-[400] text-[24px] leading-[40px] text-[#666666]">
                  A driver app to update trip statuses, record issues, and
                  receive optimized route instructions.
                </p>
              </li>
              <li>
                <p className="font-[400] text-[24px] leading-[40px] text-[#666666]">
                  A data dashboard for business intelligence and performance
                  monitoring.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🎨 Design & User Experience */}
      <section className="w-full bg-white px-12">
        <div className="lg:max-w-[70%] relative p-12 mt-12  mx-auto flex flex-col  text-start lg:px-16 md:px-12 px-4">
          <h2 className="font-roboto mb-6 md:ml-12 mx-auto font-semibold text-[32px] leading-[100%] tracking-[-3%] text-[#333333]">
            🎨 Design & User Experience
          </h2>
          <p className="lg:mt-8 mt-4 md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
            The design focused on clarity, accessibility, and speed. We created
            a custom design system to ensure consistency across modules. Every
            component was tested for usability, especially for users in
            low-light or on-the-move environments. Key features included:
          </p>

          <div className="font-roboto mb-6 md:ml-16 mx-auto border-l-[5px] pl-12 mt-12 border-[#FFAB40]">
            <ul className="list-disc">
              <li>
                <p className="font-[400] text-[24px] leading-[40px] text-[#666666]">
                  Interactive fleet maps with real-time geolocation
                </p>
              </li>
              <li>
                <p className="font-[400] text-[24px] leading-[40px] text-[#666666]">
                  Drag-and-drop route planning
                </p>
              </li>
              <li>
                <p className="font-[400] text-[24px] leading-[40px] text-[#666666]">
                  Smart notification system
                </p>
              </li>
              <li>
                <p className="font-[400] text-[24px] leading-[40px] text-[#666666]">
                  Role-based dashboards
                </p>
              </li>
            </ul>
          </div>
          <p className="lg:mt-8 mt-4 md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
            We ran multiple clickable prototypes and refined based on user
            feedback before development.
          </p>
        </div>
      </section>

      {/* 💻 Development Process */}
      <section className="w-full bg-white px-12">
        <div className="lg:max-w-[70%] relative p-12 mt-12  mx-auto flex flex-col  text-start lg:px-16 md:px-12 px-4">
          <h2 className="font-roboto mb-6 md:ml-12 mx-auto font-semibold text-[32px] leading-[100%] tracking-[-3%] text-[#333333]">
            💻 Development Process
          </h2>
          <p className="lg:my-8 my-4 md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
            Our full-stack team built the platform using:
          </p>

          {industryChallenges.map((challenge, index) => (
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
          ))}
        </div>
      </section>

      {/* 💻 Results and Impacts */}
      <section className="w-full bg-white px-12">
        <div className="lg:max-w-[70%] relative p-12 mt-12  mx-auto flex flex-col  text-start lg:px-16 md:px-12 px-4">
          <h2 className="font-roboto mb-6 md:ml-12 mx-auto font-semibold text-[32px] leading-[100%] tracking-[-3%] text-[#333333]">
            📊 Results & Impact
          </h2>
          <p className="lg:my-8 my-4 md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
            Since launch, FleetTrackPro has:
          </p>

          <div className="md:ml-12 mx-auto w-full ">
            {/* Grid Layout */}
            <div className=" bg-[#8FD8184D] rounded-xl p-8">
              <ul className="flex flex-col md:px-8 px-4 gap-[10px] list-disc text-[#3C5612] font-[500] text-[22px] leading-[173%] tracking-[0%]">
                <li>Reduced manual planning time by 70%</li>
                <li>Increased delivery success rate by 30%</li>
                <li>Enabled real-time tracking of 120+ active vehicles</li>
                <li>
                  Received positive feedback from both field and admin users
                </li>
              </ul>
            </div>
          </div>
          <p className="lg:my-8 my-4 md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
            The client now uses FleetTrackPro as a core operational tool and is
            planning to expand it across international branches.
          </p>
        </div>
      </section>

      {/* project goals section */}
      <section className="w-full bg-white px-12">
        <div className="lg:max-w-[70%] relative lg:p-18 p-12 mt-12  mx-auto flex flex-col items-start bg-[#F6FAFE] text-start lg:px-16 md:px-12 px-4">
          <h1 className=" font-roboto md:ml-12 mt-6 mx-auto text-[#2B2B2B] font-[600] text-[32px] leading-[100%] tracking-[-3%]">
            🧭 Why This Project Stands Out
          </h1>
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
          <h1 className="font-roboto md:ml-12 mt-6 mx-auto text-[#2B2B2B] font-[600] text-[32px] leading-[100%] tracking-[-3%]">
            🔧 Technologies & Tools Used
          </h1>
          <p className="lg:my-8 my-4 md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
            Since launch, FleetTrackPro has:
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-12 w-full md:ml-12 mx-auto lg:mt-12 mt-8 mb-6">
            {technologiesAndToolsUsed.map((tool, index) => (
              <div className="flex flex-col gap-8" key={index}>
                <h2 className="font-poppins text-[#282D46] font-[600] md:text-[32px] text-[24px] leading-[100%] tracking-[-3%]">
                  {tool.name}
                </h2>
                <div
                  key={index}
                  className={`${tool.bgColor} flex flex-col items-center rounded-xl`}
                >
                  <div className="flex flex-wrap gap-5 items-center justify-center p-12">
                    {tool.icons?.map((Icon, iconIndex) => (
                      <Icon.IconComponent
                        key={iconIndex}
                        className={`${Icon.iconSize}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <div className="w-full max-w-[90%] mx-auto flex flex-col py-16 lg:py-24">
        <div className=" px-0 sm:px-6 lg:px-8">
          {/* Header */}
          <h2 className="text-3xl md:text-[46px] font-[700] text-[#333333] font-roboto">
            🏷️ Services Provided:
          </h2>
          <p className="lg:my-8 ml-2 my-4 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
            Looking to build something similar?
          </p>
          {/* Services Grid */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service) => (
                <Link
                  href={`/services/${service.slug}`}
                  key={service.id}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 cursor-pointer"
                >
                  {/* Icon and Title */}
                  <div className="flex flex-col items-start gap-4 mb-4">
                    <div className="flex items-center gap-4 flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={50}
                        height={50}
                      />
                      <h3 className="relative inline-block text-xl font-semibold text-gray-900 mb-2">
                        {/* Circle at start of title */}
                        <span className="absolute left-0 h-4 w-4 rounded-full bg-[#20C5BA80] z-0"></span>
                        {/* Line at center bottom */}
                        <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 h-1 w-8 bg-[#20C5BA80] z-0"></span>

                        <span className="font-[700] font-roboto text-[24px]  text-[#2B2B2B] relative z-10">
                          {service.title}
                        </span>
                      </h3>
                    </div>

                    <div className="flex-1 min-w-0 pl-3">
                      <p className="text-gray-600 text-sm leading-relaxed">
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
                          <span className="text-sm text-gray-700">
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
        </div>
      </div>

      {/* Industry */}
      <div className="w-full max-w-[90%] mx-auto flex flex-col py-16 lg:py-24">
        <div className=" px-0 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl md:text-[46px] font-[700] text-[#333333] font-roboto">
            🏷️ Industry:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* industry card */}
            <div className="flex flex-col max-w-[500px] overflow-hidden gap-4 bg-white border border-gray-200 rounded-[24px] ">
              <div className="w-full aspect-[400/280] relative">
                <Image
                  src={Industry}
                  alt="industry"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <h2 className="font-Roboto text-[#2B2B2B] font-[700] text-[20px] leading-[100%] tracking-[-3%]">
                  Logistics:
                </h2>
                <p className="font-roboto text-[#475569] text-[16px] tracking-[0%] font-[400] leading-[24px]">
                  Streamlined dashboards, real-time tracking, and data-driven
                  systems that move with your supply chain.
                </p>
              </div>
            </div>
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
                      alt={post.title}
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>

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

import React from "react";
import IndustryImg from "@/assets/images/industries/tabs-pic.png";
import Image from "next/image";
import { MoveRight } from "lucide-react";
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

const page = () => {
  const industryData = [
    {
      title: "Completed Projects",
      value: "395",
      bgColor: "bg-[#8FD8184D]",
    },
    {
      title: "New Project",
      value: "12",
      bgColor: "bg-[#7DD1FF47]",
    },
    {
      title: "Under Development",
      value: "20",
      bgColor: "bg-[#FFF4CE]",
    },
    {
      title: "Testing Phase",
      value: "3",
      bgColor: "bg-[#FCCFCF]",
    },
  ];
  const cards = [
    {
      id: 1,
      title: "Learning Management Systems (LMS)",
      description:
        "Custom-built, real-time analytics, and modular content delivery.",
      image: LMS,
    },
    {
      id: 2,
      title: "Student & Educator Portals",
      description:
        "Intuitive interfaces designed for engagement, accessibility, and performance tracking.",
      image: studentPlanner2,
    },
    {
      id: 3,
      title: "Online Assessment Tools",
      description:
        "Secure, scalable platforms for tests, quizzes, and automated evaluations.",
      image: W,
    },
    {
      id: 4,
      title: "Interactive Content Platforms",
      description:
        "Microlearning, gamification, video lessons, and collaborative learning tools.",
      image: settingIllustration,
    },
    {
      id: 5,
      title: "Administrative Dashboards",
      description:
        "Real-time insights into course engagement, attendance, and student performance.",
      image: dashboards,
    },
  ];
  const cards2 = [
    {
      id: 1,
      title: "Human-Centered, Scalable Design",
      description:
        "From wireframes to development, we ensure every feature serves a real educational need and adapts to growing user bases.",
      image: work1,
    },
    {
      id: 2,
      title: "Compliance-First Architecture",
      description:
        "We help you stay compliant with FERPA, COPPA, and accessibility guidelines (WCAG) right from the start.",
      image: work2,
    },
    {
      id: 3,
      title: "Data-Driven Product Thinking",
      description:
        "We don’t just build tools — we create platforms that offer insights and help schools, ed-tech startups, and institutions track learning outcomes effectively.",
      image: work3,
    },
  ];

  const industryChallenges = [
    "Lack of engagement in online learning environments",
    "Limited scalability of traditional LMS systems",
    "Poor user experience for both educators and students",
    "Data fragmentation across systems (attendance, content, performance)",
    "Compliance with education-specific data regulations (FERPA, COPPA, etc.)",
  ];

  const featuredProjects = [
    {
      title: "FinTech Mobile App",
      description:
        "Complete redesign of a mobile banking app focusing on simplified navigation and enhanced security features.",
      image: Mob1,
      category: "Financial Services",
      categoryColor: "bg-blue-500",
      bgGradient: "from-purple-400 to-purple-600",
      tags: [
        { name: "Designing", color: "text-blue-600" },
        { name: "Web Development", color: "text-purple-600" },
        { name: "Testing", color: "text-orange-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Redesigned checkout flow and product discovery for a major e-commerce platform serving millions of users.",
      image: Mob2,
      category: "Retail",
      categoryColor: "bg-purple-500",
      bgGradient: "from-orange-400 to-orange-600",
      tags: [
        { name: "Designing", color: "text-blue-600" },
        { name: "Web Development", color: "text-purple-600" },
        { name: "Testing", color: "text-orange-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
    },
    {
      title: "SaaS Dashboard",
      description:
        "Intuitive dashboard design for a complex project management tool, focusing on data visualization and workflow optimization.",
      image: Mob3,
      category: "SaaS",
      categoryColor: "bg-green-500",
      bgGradient: "from-blue-400 to-blue-600",
      tags: [
        { name: "Designing", color: "text-blue-600" },
        { name: "Web Development", color: "text-purple-600" },
        { name: "Testing", color: "text-orange-600" },
      ],
      date: "13 March 2023",
      time: "12:24 PM",
    },
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
    <main className="bg-white w-full">
      {/* hero section */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mt-12 gap-4 mx-auto flex flex-col items-center text-start lg:px-16 md:px-12 px-4">
          <h1 className="font-roboto font-bold text-[48px] leading-[63.98px] tracking-[0]">
            Powering Smarter, Scalable, and Human-Centered Learning Platforms
          </h1>
          <p className="font-roboto font-normal text-[#666666] text-[24px] leading-[150%] tracking-[0]">
            From online classrooms to outcome-based learning tools, we help
            EdTech teams innovate with scalable technology, engaging design, and
            measurable results. Whether you're building LMS systems, mobile
            learning apps, or hybrid education tools — we're your partner in
            digital transformation.
          </p>
        </div>

        <div className="aspect-[308/225] mt-12 w-full max-w-7xl mx-auto relative">
          <Image
            src={IndustryImg}
            alt="Sample"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <div className="max-w-5xl mt-12 gap-4 mx-auto flex flex-col items-center text-start lg:px-16 md:px-12 px-4">
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-[5px]">
          {industryData.map((industry, index) => (
            <div
              key={index}
              className={`${industry.bgColor} flex flex-col items-center gap-6 p-12 justify-center rounded-lg  text-center shadow-sm`}
            >
              <h3 className="font-poppins text-[#4A4343] text-center text-3xl font-semibold leading-none tracking-tight">
                {industry.title}
              </h3>
              <p className="font-poppins  text-[#282D46] font-semibold lg:text-[80px] md:text-[72px] text-[56px] leading-[100%] tracking-[-0.03em] text-center">
                {industry.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <section className="w-full bg-white">
        <div className="mt-12 w-full max-w-7xl mx-auto relative px-4">
          <h2 className="font-roboto mb-6 md:ml-12 mx-auto font-semibold text-[32px] leading-[100%] tracking-[-3%] text-[#333333]">
            🧩 Industry Challenges We Help Solve
          </h2>
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

      <section className="max-w-7xl mx-auto py-12 mt-12 bg-[#FAFBFA]">
        <div className="w-full max-w-7xl mx-auto relative px-4">
          <h2 className="font-roboto mb-6 md:ml-12 mx-auto font-semibold text-[32px] leading-[100%] tracking-[-3%] text-[#333333]">
            🚀 Our EdTech Expertise
          </h2>
          <p className="md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
            We build custom digital solutions for:
          </p>
          <div className="max-w-7xl mx-auto mt-12">
            {/* Grid Layout */}
            <div className="flex flex-wrap gap-6 justify-center">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-3xl p-8 w-full max-w-sm border border-[#E0E0E0] hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[283/166] mb-6 rounded-2xl overflow-hidden ">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col text-center">
                    <h3 className="text-[24px] font-bold mb-3 leading-[100%] font-roboto text-[#2B2B2B]">
                      {card.title}
                    </h3>
                    <p className="text-[16px] font-[400]  leading-[22px] tracking-[0%] font-roboto text-[#868282]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* what sets us apart */}
      <section className="max-w-7xl mx-auto py-12 mt-12 bg-white">
        <div className="w-full max-w-7xl mx-auto relative px-4">
          <h2 className="font-roboto mb-6 md:ml-12 mx-auto font-semibold text-[32px] leading-[100%] tracking-[-3%] text-[#333333]">
            💡 What Sets Us Apart
          </h2>
          <p className="md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
            We build custom digital solutions for:
          </p>
          <div className="max-w-7xl mx-auto mt-12">
            {/* Grid Layout */}
            <div className="flex flex-wrap gap-6 justify-center">
              {cards2.map((card) => (
                <div
                  key={card.id}
                  className="flex flex-col items-center bg-white rounded-3xl p-8 w-full max-w-sm border border-[#E0E0E0] hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image Container */}
                  <div className="relative h-[61px] aspect-[64/61] mb-6 ">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col text-center">
                    <h3 className="text-[24px] font-bold mb-3 leading-[100%] font-roboto text-[#2B2B2B]">
                      {card.title}
                    </h3>
                    <p className="text-[16px] font-[400]  leading-[22px] tracking-[0%] font-roboto text-[#868282]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 mt-12 bg-white">
        <div className="w-full max-w-7xl mx-auto relative px-4">
          <h2 className="font-roboto mb-6 md:ml-12 mx-auto font-semibold text-[32px] leading-[100%] tracking-[-3%] text-[#333333]">
            🔒 We Build With Privacy & Compliance in Mind
          </h2>
          <p className="md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
            We follow key compliance standards to protect data, privacy, and
            user experience in educational platforms:
          </p>
          <div className="max-w-7xl mx-auto mt-12">
            {/* Grid Layout */}
            <div className=" bg-[#8FD8184D] rounded-[16px] lg:h-[242px] h-auto py-6 flex items-center justify-start px-5">
              <ul className="flex flex-col lg:px-12 md:px-8 px-4 gap-[10px] list-disc list-inside pl-2 text-[#3C5612] font-[500] text-[22px] leading-[173%] tracking-[0%]">
                <li>FERPA — Student education record protection</li>
                <li>COPPA — Children's Online Privacy Protection</li>
                <li>
                  WCAG — Web Content Accessibility Guidelines (inclusive access)
                </li>
                <li>ISO/IEC 27001 — Information security management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* related projects */}
      <div className="flex flex-col w-full lg:max-w-[90%] max-w-7xl px-4 mx-auto mt-16">
        {/* header title and button */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Related Post
          </h2>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-sm text-sm transition-colors duration-200">
            View All
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1920px] mx-auto">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-72 bg-gray-50">
                <Image
                  src={project.image}
                  alt={`${project.title} mobile interface`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-4">
                  <span
                    className={`${project.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-4 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`${tag.color} font-medium text-sm`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                {/* Date & Time */}
                <div className="text-sm text-gray-500 mb-4 font-roboto">
                  <span className="text-[#999999] text-[14px] font-[500] leading-[150%]">
                    {formatDate(project.date)}
                  </span>{" "}
                  <span className="text-[#333333] text-[14px] font-[700] leading-[150%] ml-3">
                    {project.time}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Read More Button */}
                <button className="bg-gray-100 hover:bg-gray-200 border border-[#20C5BA] text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* popular posts */}
      <div className="w-full flex flex-col  py-16 lg:py-24">
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
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="320px"
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

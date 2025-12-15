import React from "react";
import Image from "next/image";
import RelatedPost from "@/assets/images/services/related-post.jpg";
import Mob1 from "@/assets/images/services/mob1.png";
import Mob2 from "@/assets/images/services/mob2.png";
import Mob3 from "@/assets/images/services/mob3.png";
import InfoSection from "@/components/InfoSection/InfoSection";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import HeroImg from "@/assets/images/special/hero-img.webp";
import { Timeline } from "@/components/ui/timeline";
import OurTeam from "@/assets/images/special/out-team.webp";
import work1 from "@/assets/images/special/work1.webp";
import work2 from "@/assets/images/special/work2.webp";
import work3 from "@/assets/images/special/work3.webp";
import work4 from "@/assets/images/special/work4.webp";
import work5 from "@/assets/images/special/work5.webp";
import work6 from "@/assets/images/special/work6.webp";
import work7 from "@/assets/images/special/work7.webp";
import work8 from "@/assets/images/special/work8.webp";
import TheSuccess from "@/assets/images/special/the-success.webp";
import USP from "@/assets/images/special/usp.webp";
import { ArrowRight, MoveRight } from "lucide-react";
import Client1 from "@/assets/images/services/client1.png";
import Client2 from "@/assets/images/services/client2.png";
import Client3 from "@/assets/images/services/client3.png";
import Client4 from "@/assets/images/services/client4.png";
import Client5 from "@/assets/images/services/client5.png";

const page = () => {
  const valuesData = [
    {
      id: 1,
      title: "Human-Centered Problem Solving",
      description:
        "We don't just build, we empathize. Our solutions start with people and end in impact.",
      image: work1,
    },
    {
      id: 2,
      title: "Tech + Design in Harmony",
      description:
        "Code and visuals shouldn't fight. Our teams collaborate from the first brainstorm to final deploy.",
      image: work2,
    },
    {
      id: 3,
      title: "Ethics Over Everything",
      description:
        "We say no to Industries or products that don't align with community and being of purpose. We study intentions.",
      image: work3,
    },
    {
      id: 4,
      title: "Start With 100, Build for 1 Million",
      description:
        "Our MVP mindset is built for business reality – low cost, high clarity, ready to scale when you are.",
      image: work4,
    },
    {
      id: 5,
      title: "Smart Architecture, Not Just Cool Tools",
      description:
        "Lambda, microservices, or monoliths – we pick what's right, not what's trendy.",
      image: work5,
    },
    {
      id: 6,
      title: "No Fluff Communication",
      description: "We communicate like partners – clear, quick, and no ego.",
      image: work6,
    },
    {
      id: 7,
      title: "Design for Systems, Not Screens",
      description:
        "Every design is built to scale across components, user journeys, and real-world use.",
      image: work7,
    },
    {
      id: 8,
      title: "Think Ahead, Code Precisely",
      description:
        "We deliver thoroughly tested, anticipate edge cases, and ensure teams can implement and just admire.",
      image: work8,
    },
  ];

  const industryChallenges = [
    "Built an internal tool to track design-to-dev handoffs",
    "Use AI and automation in QA testing and accessibility reviewss",
    "Test trends (like no-code or new stacks) in our own labs before suggesting them to clients",
    "Maintain design kits, system templates, and plug-n-play components for faster launches",
  ];

  const timelineData = [
    {
      year: "2018",
      title: "The Beginning",
      description: "A chai-fueled idea turned into a 3-person team",
    },
    {
      year: "2020",
      title: "First Launch",
      description: "Shipped our first startup MVP, still scaling today",
    },
    {
      year: "2021",
      title: "Market Expansion",
      description: "Broke into EdTech and FinTech with high-impact solutions",
    },
    {
      year: "2022",
      title: "Global Growth",
      description: "Expanded to cross-border clients and scaled operations",
    },
    {
      year: "2023",
      title: "Technical Evolution",
      description: "Moved to microservices, AWS, and dev-ops practices",
    },
    {
      year: "2024",
      title: "Quality Milestone",
      description: "Passed 100+ projects, still obsessed with quality",
    },
    {
      year: "Today",
      title: "Innovation Focus",
      description: "Designing smarter MVPs, systems, and user-first solutions",
    },
  ];

  const achievements = [
    {
      id: 1,
      title:
        "Conducted stakeholder workshops for an EdTech platform to reveal the real cause of user drop-offs",
      bgColor: "bg-[#F2FDE1]",
      textColor: "text-[#3C5612]",
    },
    {
      id: 2,
      title:
        "Mapped customer journeys across 5 personas before building a FinTech dashboard",
      bgColor: "bg-[#FFF4CE]",
      textColor: "text-[#563412]",
    },
    {
      id: 3,
      title:
        "Reduced churn by 30% by redesigning onboarding based on behavioral interviews",
      bgColor: "bg-[#DBEFFF]",
      textColor: "text-[#122356]",
    },
  ];
  const testimonials = [
    {
      id: 1,
      name: "Crystal Maiden",
      role: "UI/UX Designer",
      avatar: Client1,
      feedback:
        "The quality of the design is top-notch, and I love how organized the files are. It's easy to find what I need.",
      rating: 5,
    },
    {
      id: 2,
      name: "Dazzle Healer",
      role: "Front End Developer",
      avatar: Client2,
      feedback:
        "This kit exceeded my expectations! The components are versatile and make implementation much easier.",
      rating: 5,
    },
    {
      id: 3,
      name: "Roshan Pro Max",
      role: "UI/UX Designer",
      avatar: Client3,
      feedback:
        "Perfect for quick prototyping! The designs are professional and work seamlessly with my workflow.",
      rating: 5,
    },
    {
      id: 4,
      name: "Mirana Marci",
      role: "3D Designer",
      avatar: Client4,
      feedback:
        "I was blown away by how complete this UI Kit is. It has everything I need, from assets to components.",
      rating: 5,
    },
    {
      id: 5,
      name: "Hearts of Taras",
      role: "Logo Designer",
      avatar: Client5,
      feedback:
        "Amazing work! The color schemes are vibrant, and the icons fit perfectly with all my projects.",
      rating: 5,
    },
  ];
  const achievements2 = [
    {
      id: 1,
      title:
        "Conducted stakeholder workshops for an EdTech platform to reveal the real cause of user drop-offs",
      bgColor: "bg-[#FFE0E0]",
      textColor: "text-[#562C12]",
    },
    {
      id: 2,
      title:
        "Mapped customer journeys across 5 personas before building a FinTech dashboard",
      bgColor: "bg-[#F1DBFF]",
      textColor: "text-[#3F1256]",
    },
    {
      id: 3,
      title:
        "Reduced churn by 30% by redesigning onboarding based on behavioral interviews",
      bgColor: "bg-[#DBF8FF]",
      textColor: "text-[#123E56]",
    },
    {
      id: 4,
      title:
        "Reduced churn by 30% by redesigning onboarding based on behavioral interviews",
      bgColor: "bg-[#DFFFDB]",
      textColor: "text-[#125618]",
    },
  ];

  const recentPosts = [
    {
      title: "HabitFy",
      description:
        "HabitFy is a habit building app aimed to help people leading a sedentary lifestyle to develop healthier habits...",
      image: Mob1,
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
      title: "HabitFy",
      description:
        "HabitFy is a habit building app aimed to help people leading a sedentary lifestyle to develop healthier habits...",
      image: Mob2,
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
      title: "HabitFy",
      description:
        "HabitFy is a habit building app aimed to help people leading a sedentary lifestyle to develop healthier habits...",
      image: Mob3,
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

  const stats =[
    {
        subText:"New Projects",
        count:"3",
    },
    {
        subText:"Completed Projects",
        count:"1K",
    },
    {
        subText:"Ongoing Projects",
        count:"13",
    },
    {
        subText:"Customer Satisfaction Rate",
        count:"86%",
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-orange-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

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
      <HeroSection
        title="Inside CorTechSols"
        subText="Our Journey, Our Differentiators, and Why It Matters the most"
        HeroImg={HeroImg}
      />

      {/* our journey section */}
      <section className="max-w-[90%] mt-12 mx-auto flex flex-col items-center text-start lg:px-16 md:px-12 px-4">
        <div className="max-w-5xl">
          <div className="flex flex-col items-center">
            <p className="text-[#FFAB40] text-[20[x] font-[500] font-roboto leading-[110%] ">
              Our Journey
            </p>
            <h2 className="font-roboto text-[#2B2B2B] font-[800] lg:text-[56px] text-[40px] tracking-[1.5%]">
              How We Got Here
            </h2>
            <p className="font-roboto mt-4 text-[#0F172A] font-[500] text-[20px] leading-[33px] tracking-[-1.5%]">
              The Evolution of a Team That Cares
            </p>
          </div>
          <div className="border-l-[5px] border-l-[#FFAB40] my-12 lg:mt-16 mt-12 pl-4">
            <p className="font-roboto text-[#666666] font-[400] text-[24px] leading-[40px] tracking-[0%]">
              What began over late-night brainstorms and whiteboard sketches
              became a studio trusted by businesses across the globe. Here's how
              we grew — one meaningful project at a time.
            </p>
          </div>
        </div>
        {/* image and timeline data */}
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full items-center gap-12">
          <div className="flex lg:h-[760px] md:h-[500px] h-[400px] relative lg:justify-end justify-center">
            <div className="relative aspect-[660/843] h-full">
              <Image
                src={OurTeam}
                alt="team-pic"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="h-full">
            <Timeline items={timelineData} />
          </div>
        </div>
      </section>

      {/* our values section */}
      <section className="w-full lg:py-22 py-12 bg-[#FAFBFA] mt-12 mx-auto flex flex-col items-center text-start lg:px-16 md:px-12 px-4">
        <div className="flex flex-col items-center">
          <p className="text-[#FFAB40] text-[20[x] font-[500] font-roboto leading-[110%] ">
            Our Values
          </p>
          <h2 className="font-roboto text-[#2B2B2B] font-[800] lg:text-[56px] text-[40px] tracking-[1.5%]">
            What Makes CorTechSols Different
          </h2>
          <p className="font-roboto mt-4 text-[#0F172A] font-[500] text-[20px] leading-[33px] tracking-[-1.5%]">
            Our Unique Value-Driven Mindset
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-12">
          {/* Grid Layout */}
          <div className="flex flex-wrap gap-6 justify-center">
            {valuesData.map((card) => (
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
      </section>

      {/* unique selling points */}
      <section className="w-full lg:py-22 py-12 mt-12 mx-auto flex flex-col items-center text-start lg:px-16 md:px-12 px-4">
        <div className="flex flex-col items-center">
          <p className="text-[#FFAB40] text-[20[x] font-[500] font-roboto leading-[110%] ">
            Unique Selling Points(Usp)
          </p>
          <h2 className="font-roboto text-[#2B2B2B] font-[800] lg:text-[56px] text-[40px] tracking-[1.5%]">
            Built with Brains, Backed by Research
          </h2>
          <p className="font-roboto mt-4 text-[#0F172A] font-[500] text-[20px] leading-[33px] tracking-[-1.5%]">
            How We Design Smarter, Not Just Prettier
          </p>
        </div>

        <div className="max-w-[90%] aspect-[308/225] mt-12 w-full  mx-auto relative">
          <Image
            src={USP}
            alt="Sample"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="max-w-[90%] py-12  mx-auto font-roboto mt-4 text-[#5E5C5C] font-[400] text-[22px] leaading-[42px] tracking-[0%]">
          We dig deep before we wireframe. From rapid user research to system
          architecture audits, our groundwork reduces rework and increases
          product-market clarity.
        </p>
        <div className="max-w-[90%] mx-auto flex flex-col justify-start w-full items-start">
          <p className=" pb-8 font-roboto mt-4 text-[#5E5C5C] font-[400] text-[22px] leaading-[42px] tracking-[0%]">
            🔍 Examples:
          </p>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 p-6 w-full mx-auto">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`${achievement.bgColor} rounded-[24px] border border-[#DADADA] p-8 hover:shadow-md transition-shadow duration-300 flex-1`}
              >
                <p
                  className={`${achievement.textColor} text-center font-roboto text-[22px] leading-[173%] font-[500]`}
                >
                  {achievement.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* the success */}
      <section className="w-full lg:py-22 py-12 mt-12 mx-auto flex flex-col items-center text-start lg:px-16 md:px-12 px-4">
        <div className="flex flex-col items-center">
          <p className="text-[#FFAB40] text-[20[x] font-[500] font-roboto leading-[110%] ">
            The Success
          </p>
          <h2 className="font-roboto text-[#2B2B2B] font-[800] lg:text-[56px] text-[40px] tracking-[1.5%]">
            Results That Speak
          </h2>
          <p className="font-roboto mt-4 text-[#0F172A] font-[500] text-[20px] leading-[33px] tracking-[-1.5%]">
            Short-Term Wins, Long-Term Gains
          </p>
        </div>

        <div className="max-w-[90%] aspect-[308/225] mt-12 w-full  mx-auto relative">
          <Image
            src={TheSuccess}
            alt="Sample"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-[90%] mx-auto flex flex-col justify-start w-full items-start">
          <p className=" pb-8 font-roboto mt-4 text-[#5E5C5C] font-[400] text-[22px] leaading-[42px] tracking-[0%]">
            🔍 Examples:
          </p>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 p-6 w-full mx-auto">
            {achievements2.map((achievement) => (
              <div
                key={achievement.id}
                className={`${achievement.bgColor} rounded-[24px] border border-[#DADADA] p-8 hover:shadow-md transition-shadow duration-300 flex-1`}
              >
                <p
                  className={`${achievement.textColor} text-center font-roboto text-[22px] leading-[173%] font-[500]`}
                >
                  {achievement.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* mini case cards */}
      <div className="flex flex-col w-full lg:max-w-[90%] max-w-7xl lg:mb-32 mb-16 lg:px-16 md:px-12 px-4 mx-auto mt-16">
        {/* header title and button */}
        <div className="flex justify-between items-center mb-12">
          <p className=" pb-4 font-roboto mt-4 text-[#5E5C5C] font-[500] text-[24px] leaading-[42px] tracking-[0%]">
            🗂️ Mini Case Card
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative aspect-[400/360] bg-gray-50">
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
              <div className="p-6 px-1">
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
                <button className="hover:bg-gray-100 border border-[#20C5BA] text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* the innovation journey */}
      <section className="w-full bg-[#FAFBFA] lg:py-22 py-12 mt-12 mx-auto flex flex-col items-center text-start lg:px-16 md:px-12 px-4">
        <div className="flex flex-col items-center">
          <p className="text-[#FFAB40] text-[20[x] font-[500] font-roboto leading-[110%] ">
            The Innovation Journey
          </p>
          <h2 className="font-roboto text-[#2B2B2B] font-[800] lg:text-[56px] text-[40px] tracking-[1.5%]">
            How We Innovate Every Day
          </h2>
          <p className="font-roboto mt-4 text-[#0F172A] font-[500] text-[20px] leading-[33px] tracking-[-1.5%]">
            We Improve Systems Even When No One's Watching
          </p>
        </div>

        <div className="max-w-[90%] lg:mt-18 mt-12 mx-auto p-12 flex flex-col justify-start w-full items-start bg-[#E5F2FF] rounded-[24px]">
          <p className="ml-12  mb-6 font-roboto text-[24px] font-[500] leading-[183%] tracking-[0%] text-[#666666]">
            Innovation isn't just what we build — it's how we work:
          </p>
          {industryChallenges.map((challenge, index) => (
            <div
              key={index}
              className="flex md:items-center items-start gap-12 mb-4"
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

      {/* testimonials */}
      <div className="font-roboto mx-auto flex flex-col px-6 py-12 bg-[#F7F7F7] w-full">
        {/* Testimonials Grid */}
        <div className="max-w-[90%] w-full self-center grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-start justify-between">
              <div className="">
                <p className="text-[#FFAB40] text-[20px] font-[500] leading-[110%] mb-2">
                  Client's Feedback
                </p>
                <h2 className="text-[32px] font-[700] leading-[160%] text-[#0F172A] mb-4">
                  What They Say After Using Our Product
                </h2>
                <p className="text-[#737373] font-[500] text-[18px] leading-[160%] ">
                  Many of our members have started their early careers with us.
                </p>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 mt-6 gap-3 justify-evenly w-full">
                <button className="bg-teal-500 hover:bg-teal-600 text-white text-[18px] font-[500] leading-[31px] px-6 py-3 rounded-sm transition-colors">
                  Join Now!
                </button>
                <button className="flex items-center gap-2 justify-center border border-[#20C5BA] hover:bg-gray-100 text-sm  text-[#2B2B2B] text-[18px] font-[500] leading-[31px] px-6 py-3 rounded-sm transition-colors">
                  View All
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
          {testimonials.slice(0, 6).map((testimonial) => (
            <div
              key={testimonial.id}
              className="font-roboto bg-white items-center flex flex-col rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Avatar and Info */}
              <div className="flex flex-col items-center text-center mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold font-poppins mt-2 text-gray-900 text-[20px]">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-[18px]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-[#0F1125] font-[500] leading-[190%] text-center text-[18px] mb-4">
                {testimonial.feedback}
              </p>

              {/* Rating */}
              <div className="flex gap-1">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* stats section */}
      <section className="w-full flex items-center font-roboto flex-wrap bg-[#19817A] md:p-16 p-10 ">
        <div className="md:max-w-[90%] max-w-[95%] mx-auto grid lg:grid-cols-4 grid-cols-2 gap-12 text-center w-full">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-6">
              <p className="text-[#fff] lg:text-[80px] text-[70px] font-[600] leading-[38px] tracking-[0%]">{stat.count}</p>
              <p className="text-[#fff] text-[20px] font-[400] leading-[38px] tracking-[0%]">{stat.subText}</p>
            </div>
          ))}
        </div>
      </section>

      <InfoSection />
      <StayInLoop />
      {/* <Footer /> */}
    </main>
  );
};

export default page;

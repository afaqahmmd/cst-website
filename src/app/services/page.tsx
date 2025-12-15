import React from "react";
import HeroImg from "@/assets/images/services/hero-img.png";
import {

  Brain,
  Layers,
  BarChart,
  Infinity,
  ArrowRight,
  Check,
} from "lucide-react";
import Image from "next/image";
import DesignTeamImg from "@/assets/images/services/design-team.png";
import TeamMember1 from "@/assets/images/services/team-member1.png";
import TeamMember2 from "@/assets/images/services/team-member2.png";
import TeamMember3 from "@/assets/images/services/team-member3.png";
import Client1 from "@/assets/images/services/client1.png";
import Client2 from "@/assets/images/services/client2.png";
import Client3 from "@/assets/images/services/client3.png";
import Client4 from "@/assets/images/services/client4.png";
import Client5 from "@/assets/images/services/client5.png";
import Mob1 from "@/assets/images/services/mob1.png";
import Mob2 from "@/assets/images/services/mob2.png";
import Mob3 from "@/assets/images/services/mob3.png";
import RelatedPost from "@/assets/images/services/related-post.jpg";
import InfoSection from "@/components/InfoSection/InfoSection";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import Footer from "@/components/Footer/Footer";
import ResearchDriven from "@/assets/images/services/research-driven.webp";
import ResearchFocused from "@/assets/images/services/research-focused.webp";
import UserCentered from "@/assets/images/services/user-centered.webp";
import ProvedTrackRecord from "@/assets/images/services/proved-track-record.webp";
import CrossIndustryExpertise from "@/assets/images/services/cross-industry-experience.webp";
import EndToEndService from "@/assets/images/services/end-to-end.webp";
import AgileMethodology from "@/assets/images/services/agile-methodology.webp";
import LatestDesignTrends from "@/assets/images/services/latest-design-trends.webp";
import PostLaunchSupport from "@/assets/images/services/post-launch-support.webp";
import ResearchAndStrategy from "@/assets/images/services/research-and-strategy.webp";
import DesignAndPrototyping from "@/assets/images/services/design-and-prototyping.png";
import TestingAndOptimization from "@/assets/images/services/testing-and-optimization.webp";
import DevelopmentSupport from "@/assets/images/services/design-and-prototyping.png";
import Globe from "@/components/svgs/icons/Globe";
import Saas from "@/components/svgs/icons/Saas";
import Mobile from "@/components/svgs/icons/Mobile";
import Enterprise from "@/components/svgs/icons/Enterprise";
import Rocket from "@/components/svgs/icons/Rocket";
import Button from "@/components/Button/Button";

const page = () => {
  const features = [
    {
      icon: ProvedTrackRecord,
      title: "Proven Track Record",
      description:
        "Over 200 successful projects with measurable improvements in user engagement and conversion rates.",
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: CrossIndustryExpertise,
      title: "Cross-Industry Expertise",
      description:
        "Experience across fintech, healthcare, e-commerce, SaaS, and emerging technologies.",
      iconColor: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: EndToEndService,
      title: "End-to-End Service",
      description:
        "From initial research to final implementation, we handle every aspect of the design process.",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: AgileMethodology,
      title: "Agile Methodology",
      description:
        "Fast iterations, continuous feedback, and flexible approach to meet changing requirements.",
      iconColor: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: LatestDesignTrends,
      title: "Latest Design Trends",
      description:
        "Stay ahead with cutting-edge design patterns, accessibility standards, & emerging technologies.",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: PostLaunchSupport,
      title: "Post-Launch Support",
      description:
        "Ongoing optimization and support to ensure your design continues to perform at its best.",
      iconColor: "text-gray-600",
      bgColor: "bg-gray-50",
    },
  ];

  const services = [
    {
      icon: ResearchAndStrategy,
      title: "Research & Strategy",
      featureBg: "bg-[#87C42C]",
      cardBg: "bg-[#F2FDE1]",
      features: [
        "User Research",
        "Competitive Analysis",
        "Information Architecture",
        "User Journey Mapping",
        "Persona Development",
      ],
    },
    {
      icon: DesignAndPrototyping,
      title: "Design & Prototyping",
      featureBg: "bg-[#FFAB40]",
      cardBg: "bg-[#FFF4CE]",
      features: [
        "Wireframing",
        "Visual Design",
        "Interactive Prototypes",
        "Design Systems",
        "Responsive Design",
      ],
    },
    {
      icon: TestingAndOptimization,
      title: "Testing & Optimization",
      featureBg: "bg-[#FF6B57]",
      cardBg: "bg-[#FFE0E0]",
      features: [
        "Usability Testing",
        "A/B Testing",
        "Accessibility Audits",
        "Performance Optimization",
        "Conversion Rate Optimization",
      ],
    },
    {
      icon: DevelopmentSupport,
      title: "Development Support",
      featureBg: "bg-[#579DFF]",
      cardBg: "bg-[#DBEFFF]",
      features: [
        "Design Handoff",
        "Frontend Collaboration",
        "Quality Assurance",
        "Launch Support",
        "Post-Launch Analysis",
      ],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understanding your business and users through research and competitive analysis.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Defining user personas, journey maps, and information architecture foundations.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Creating prototypes and high-fidelity designs through iterative collaboration.",
    },
    {
      number: "04",
      title: "Validate",
      description:
        "Testing designs with real users and iterating based on feedback and data.",
    },
  ];

  const designFeatures = [
    {
      icon: Brain,
      title: "Psychology-Informed Design",
      description:
        "Our team includes certified UX researchers who apply behavioral psychology principles to create more engaging experiences.",
      iconBg: "bg-pink-500",
      iconColor: "text-white",
    },
    {
      icon: Layers,
      title: "Technical Depth",
      description:
        "Unlike many design agencies, our designers understand development constraints and possibilities, leading to more feasible designs.",
      iconBg: "bg-blue-500",
      iconColor: "text-white",
    },
    {
      icon: BarChart,
      title: "Data-Driven Decisions",
      description:
        "Every design choice is backed by user data, analytics insights, and measurable business impact metrics.",
      iconBg: "bg-orange-500",
      iconColor: "text-white",
    },
    {
      icon: Infinity,
      title: "Continuous Learning",
      description:
        "Our team stays current with the latest design trends, accessibility standards, and emerging technologies.",
      iconBg: "bg-purple-500",
      iconColor: "text-white",
    },
  ];

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Lead UX Designer",
      experience: "8+ years",
      specialty: "User Research & Strategy",
      image: TeamMember1,
      experienceColor: "bg-blue-500",
    },
    {
      name: "Leslie Alexander",
      role: "UX Researcher",
      experience: "5+ years",
      specialty: "Usability Testing & Analytics",
      image: TeamMember2,
      experienceColor: "bg-purple-500",
    },
    {
      name: "Marcus Rodriguez",
      role: "Senior UI Designer",
      experience: "6+ years",
      specialty: "Visual Design & Prototyping",
      image: TeamMember3,
      experienceColor: "bg-orange-500",
    },
  ];

  const toolCategories = [
    {
      title: "Design & Prototyping",
      tools: [
        { name: "Figma", color: "bg-orange-400" },
        { name: "Adobe XD", color: "bg-orange-400" },
        { name: "Sketch", color: "bg-orange-400" },
        { name: "Principle", color: "bg-orange-400" },
        { name: "InVision", color: "bg-orange-400" },
      ],
    },
    {
      title: "Research & Testing",
      tools: [
        { name: "Hotjar", color: "bg-green-500" },
        { name: "Maze", color: "bg-green-500" },
        { name: "User Testing", color: "bg-green-500" },
        { name: "Lookback", color: "bg-green-500" },
        { name: "Google Analytics", color: "bg-green-500" },
      ],
    },
    {
      title: "Collaboration",
      tools: [
        { name: "Slack", color: "bg-blue-500" },
        { name: "Miro", color: "bg-blue-500" },
        { name: "Notion", color: "bg-blue-500" },
        { name: "Jira", color: "bg-blue-500" },
        { name: "Confluence", color: "bg-blue-500" },
      ],
    },
    {
      title: "Development",
      tools: [
        { name: "Zeplin", color: "bg-red-500" },
        { name: "Abstract", color: "bg-red-500" },
        { name: "GitHub", color: "bg-red-500" },
        { name: "Storybook", color: "bg-red-500" },
        { name: "Chromatic", color: "bg-red-500" },
      ],
    },
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

  const businesses = [
    {
      id: 1,
      title: "Startups",
      description: "Launch with confidence",
      icon: Rocket,
      iconColor: "bg-[#579DFF]",
      iconSize: { w: 28, h: 32 },
    },
    {
      id: 2,
      title: "Enterprises",
      description: "Scale with precision",
      icon: Enterprise,
      iconColor: "bg-[#FCBA65]",
      iconSize: { w: 36, h: 36 },
    },
    {
      id: 3,
      title: "Saas Products",
      description: "Optimize user experience",
      icon: Saas,
      iconColor: "bg-[#8D72D0]",
      iconSize: { w: 34, h: 30 },
    },
    {
      id: 4,
      title: "Mobile Apps",
      description: "Engage on-the-go users",
      icon: Mobile,
      iconColor: "bg-[#A7D266]",
      iconSize: { w: 20, h: 34 },
    },
    {
      id: 5,
      title: "Web Platforms",
      description: "Convert visitors to customers",
      icon: Globe,
      iconColor: "bg-[#FF725F]",
      iconSize: { w: 35, h: 35 },
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

  return (
    <div className="w-full flex flex-col font-roboto">
      {/* hero section */}
      <div className="bg-white min-h-screen font-roboto">
        <div className="max-w-screen mx-auto lg:px-12 sm:px-6 px-4 md:px-8">
          <div className=" grid lg:grid-cols-2 gap-12 min-h-screen items-start justify-start py-6 zoomed-out-center">
            {/* Left Content */}
            <div className="space-y-12 mt-6 zoomed-out-textcenter">
              <div className="space-y-6">
                <h1 className="font-[800] lg:text-[48px] text-[40px] leading-[55px] tracking-[-1.5%] text-[#33333] ">
                  Transform Your Ideas Into Stunning Digital Experiences
                </h1>

                <p className="font-[400] text-[24px] leading-[160%] text-[#666666]">
                  We craft intuitive, user-centered designs that not only look
                  beautiful but drive real business results. From wireframes to
                  pixel-perfect interfaces, we bring your vision to life.
                </p>
              </div>

              <button
                type="submit"
                className="min-w-[214px] bg-teal-500 text-white py-4 rounded-[5px] leading-[29px] font-[500] font-roboto hover:bg-teal-600 transition-colors duration-200  text-[18px]"
              >
                Get Started Today
              </button>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8 zoomed-out-center ">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
                  <span className="font-[500] text-[20px] leading-[150%] text-[#101828]">
                    200+ Projects Delivered
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                  <span className="font-[500] text-[20px] leading-[150%] text-[#101828]">
                    98% Client Satisfaction
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative overflow-hidden bg-green-300 rounded-2xl aspect-[575/403]">
              <Image
                src={HeroImg.src}
                alt="Designer working on wireframes and sketches"
                className="w-full h-full object-cover"
                width={575}
                height={403}
              />
            </div>
          </div>
        </div>
      </div>

      {/* about our ui/ux */}
      <div className="font-roboto bg-[#FAFBFA] py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-[600] text-[#333333] tracking-[-3%] mb-6">
              About Our UI/UX Design Service
            </h2>
            <p className="text-[18px] font-[400] text-[#666666] max-w-4xl mx-auto leading-[150%]">
              Our UI/UX design service combines strategic thinking with creative
              excellence to deliver digital experiences that users love and
              businesses value. We don't just make things look pretty — we solve
              real problems through thoughtful design that balances user needs
              with business objectives.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* User-Centered Card */}
            <div className="text-center group bg-white rounded-[24px] p-8">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-200">
                <Image
                  src={UserCentered.src}
                  alt="User-Centered"
                  width={62}
                  height={64}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                User-Centered
              </h3>
              <p className="text-[#868282] leading-[22px] font-[400] text-[16px]">
                Every design decision is backed by user research and usability
                testing
              </p>
            </div>

            {/* Research-Driven Card */}
            <div className="text-center group bg-white rounded-[24px] p-8">
              <div className=" w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-200">
                <Image
                  src={ResearchDriven.src}
                  alt="Research-Focused"
                  width={62}
                  height={64}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Research-Driven
              </h3>
              <p className="text-[#868282] leading-[22px] font-[400] text-[16px]">
                Data and insights guide our design process from start to finish
              </p>
            </div>

            {/* Results-Focused Card */}
            <div className="text-center group bg-white rounded-[24px] p-8">
              <div className=" w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-200">
                <Image
                  src={ResearchFocused.src}
                  alt="Research-Driven"
                  width={62}
                  height={64}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Results-Focused
              </h3>
              <p className="text-[#868282] leading-[22px] font-[400] text-[16px]">
                Designs that improve conversion rates and business metrics
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* why choose our ui/ux */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-[600] text-[#333333] tracking-[-3%] mb-6">
              Why Choose Our UI/UX Design Service?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We don't just create beautiful interfaces – we craft experiences
              that drive engagement, conversion, and long-term success for your
              business.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                >
                  <div
                    className={` w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={62}
                      height={64}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* what we offer */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-[600] text-[#333333] tracking-[-3%] mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive UI/UX design services to cover every aspect of your
              digital product development
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className={`${service.cardBg} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex items-center justify-center`}>
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={62}
                        height={64}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <Check
                          size={20}
                          className={`${service.featureBg} p-1 text-white  rounded-full`}
                        />
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* perfect for every business */}
      <div className="font-roboto bg-[#FAFBFA] py-16 lg:py-24">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-[600] text-[#333333] tracking-[-3%] mb-6">
              Perfect for every Business
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our UI/UX design service adapts to your specific industry needs
              and business goals
            </p>
          </div>

          {/* Business Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 w-full px-4">
            {businesses.map((business) => {
              const Icon = business.icon;
              return (
                <div
                  key={business.id}
                  className="flex flex-col items-center justify-center text-center rounded-xl shadow-md p-6 bg-white"
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-lg ${business.iconColor}`}
                  >
                    <Icon
                      className="text-white"
                      style={{
                        width: `${business.iconSize.w}px`,
                        height: `${business.iconSize.h}px`,
                      }}
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {business.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {business.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* our design process */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-[600] text-[#333333] tracking-[-3%] mb-6">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A proven methodology that ensures every project delivers
              exceptional results
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
              <div className="flex items-start justify-between relative">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start relative flex-1"
                  >
                    {/* Number Circle */}
                    <div className="text-[32px] font-[500] leading-[150%] bg-teal-500  border-4 border-white text-white w-30 h-30 rounded-full flex items-center justify-center text-xl  mb-6 relative z-10">
                      {step.number}
                    </div>

                    {/* Dotted Line - Show for all except last item */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute top-[26%] left-0 w-full h-0 border-t-2 border-dashed border-[#FFAB40] z-0 transform translate-x-8"></div>
                    )}

                    {/* Content */}
                    <div className="text-start max-w-xs md:ml-3">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet Layout */}
            <div className="hidden md:block lg:hidden">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center relative"
                  >
                    {/* Number Circle */}
                    <div className="bg-teal-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg">
                      {step.number}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex gap-6">
                    {/* Number Circle */}
                    <div className="bg-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Vertical Dotted Line for Mobile - Show for all except last item */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-6 top-12 w-0 h-8 border-l-2 border-dotted border-teal-300 transform -translate-x-px"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* what makes our design team different */}
      <div className="bg-[#FAFBFA] py-16 lg:py-24 w-full ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-[600] text-[#333333] tracking-[-3%] mb-6">
              What Makes Our Design Team Different
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our unique blend of skills, experience, and passion sets us apart
              in the industry
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Features */}
            <div className="space-y-8">
              {designFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex gap-4 items-start bg-white rounded-xl p-4">
                    {/* Icon */}
                    <div
                      className={`${feature.iconBg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${feature.iconColor}`}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Side - Image */}
            <div className="relative h-full">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={DesignTeamImg.src}
                  alt="Design team collaborating on projects with laptops and discussions"
                  className="w-full h-full object-cover aspect-[4/4]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* meet our design team */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-[600] text-[#333333] tracking-[-3%] mb-6">
              Meet Our Design Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionate designers and researchers dedicated to creating
              exceptional user experiences
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center group border rounded-xl py-12"
              >
                {/* Photo Container */}
                <div className="relative mb-6">
                  <div className="w-54 h-54 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 relative">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      sizes="(max-width: 768px) 192px, 192px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>

                  <p className="text-gray-600 font-medium">{member.role}</p>

                  {/* Experience Badge */}
                  <div className="flex justify-center">
                    <span
                      className={`${member.experienceColor} text-white px-4 py-1 rounded-full text-sm font-medium`}
                    >
                      {member.experience}
                    </span>
                  </div>

                  {/* Specialty */}
                  <p className="text-gray-500 text-sm">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* tools we use */}
      <div className="bg-[#FAFBFA] py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-[600] text-[#333333] tracking-[-3%] mb-6">
              Tools We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Industry-leading tools and technologies to deliver exceptional
              design experiences
            </p>
          </div>

          {/* Tools Grid */}
          <div className="w-full px-8 sm:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {toolCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="space-y-6 flex items-center justify-center"
              >
                <div className="flex flex-col gap-4 w-full">
                  {/* Category Title */}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>

                  {/* Tools List */}
                  <div className="space-y-3">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center gap-3">
                        {/* Colored Dot */}
                        <div
                          className={`w-3 h-3 rounded-full ${tool.color} flex-shrink-0`}
                        ></div>

                        {/* Tool Name */}
                        <span className="text-gray-700 font-medium">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" mt-12 w-full justify-center flex">
            <button className="text-[16px] height-[52px] bg-[#20C5BA] hover:bg-[#22aea5] text-white px-8 py-4 rounded-[5px] font-[500] duration-200 transition-all">
              Let's Design Something Brilliant
            </button>
          </div>
        </div>
      </div>

      {/* featured projects */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-[600] text-[#333333] tracking-[-3%] mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real results from our recent UI/UX design projects
            </p>
          </div>
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative aspect-[400/360]">
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
                <div className="p-6 px-0">
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
                  <button className="bg-white hover:bg-gray-200 border border-[#20C5BA] text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* related posts */}
      <div className="w-full bg-[#FAFBFA] flex flex-col  py-16 lg:py-24">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex mx-12 justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Related Post
            </h2>
            <Button name="View All" buttonHeight="51" />
          </div>

          {/* Horizontally Scrollable Posts */}
          <div className="overflow-x-auto scrollbar-hide ml-12">
            <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
              {relatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl transition-all duration-300 overflow-hidden group w-80 flex-shrink-0"
                >
                  {/* Post Image */}
                  <div className="relative rounded-xl overflow-hidden aspect-[400/360]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="320px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 px-0 ">
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

      {/* client testimonials */}
      <div className=" mx-auto flex flex-col px-6 py-12 bg-[#F7F7F7] w-full">
        {/* Header Section */}

        {/* Testimonials Grid */}
        <div className="max-w-6xl self-center grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-start justify-between">
              <div className="">
                <p className="text-[#FFAB40] font-medium text-sm mb-2">
                  Client's Feedback
                </p>
                <h2 className="text-[20px] font-[500] leading-[110%] text-[#0F172A] mb-4">
                  What They Say After Using Our Product
                </h2>
                <p className="text-[#737373] tracking-tight font-semibold max-w-md">
                  Many of our members have started their early careers with us.
                </p>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 mt-6 gap-3 justify-evenly w-full">
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 text-sm rounded-sm font-medium transition-colors">
                  Join Now!
                </button>
                <button className="flex items-center gap-2 justify-center border border-[#20C5BA] hover:bg-gray-100 text-gray-700 px-6 py-3 text-sm rounded-sm font-medium transition-colors ">
                  View All
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
          {testimonials.slice(0, 6).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white items-center flex flex-col rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
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
                  <h3 className="font-[600] font-poppins mt-2 text-[#0F1125] text-[20px]">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-[18px] font-[500] leading-[150%]">{testimonial.role}</p>
                </div>
              </div>

              <div className="border border-[#E9EFF5] w-[95%] mb-3 mx-2" />

              {/* Feedback */}
              <p className="text-[#0F1125] font-[500] leading-[150%] text-center text-[18px] mb-4">

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

      {/* info section */}
      <InfoSection
        title="Ready to Transform Your User Experience?"
        subText="Let's discuss how our UI/UX design service can help you create digital experiences that users love and drive real business results."
      />

      {/* stay in loop */}
      <StayInLoop />

      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default page;

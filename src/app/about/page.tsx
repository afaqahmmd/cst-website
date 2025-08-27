import HeroSection from "@/components/HeroSection/HeroSection";
import AboutImage from "@/assets/images/about/hero-image.png";
import {
  Target,
  Eye,
  BarChart3,
  Settings,
  RefreshCw,
  Triangle,
  CheckCircle,
  Search,
  Layout,
  Palette,
  Code,
  Rocket,
} from "lucide-react";
import Heart from "@/components/svgs/icons/Heart";
import Lock from "@/components/svgs/icons/Lock";
import BulbImg from "@/assets/images/about/bulb.png";
import RocketImg from "@/assets/images/about/rocket.png";
import SearchImg from "@/assets/images/about/search.png";
import TargetImg from "@/assets/images/about/target.png";
import React from "react";
import Image, { StaticImageData } from "next/image";
import OurCulture from "@/assets/images/about/ourculture.png";
import AmazonPay from "@/assets/images/about/amazonpay.png";
import Gumroad from "@/assets/images/about/gumroad.png";
import GooglePay from "@/assets/images/about/googlepay.png";
import ApplePay from "@/assets/images/about/ApplePay.png";
import Bitcoin from "@/assets/images/about/bitcoin.png";
import Bitpay from "@/assets/images/about/bitpay.png";
import Klarna from "@/assets/images/about/Klarna.png";
import Maestro from "@/assets/images/about/Maestro.png";
import Payoneer from "@/assets/images/about/Payoneer.png";
import SamsungPay from "@/assets/images/about/samsung.png";
import Shoppay from "@/assets/images/about/shoppay.png";
import Skrill from "@/assets/images/about/Skrill.png";
import Visa from "@/assets/images/about/visa.png";
import WesternUnion from "@/assets/images/about/westrnunion.png";
import InfoSection from "@/components/InfoSection/InfoSection";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import Footer from "@/components/Footer/Footer";
import Laptop from "@/assets/images/about/laptop.png";
import Board from "@/assets/images/about/board.png";
import Meeting from "@/assets/images/about/meeting.png";
import Meeting2 from "@/assets/images/about/meeting2.png";
import Discussion from "@/assets/images/about/discussion.png";
import HighFive from "@/assets/images/about/highfive.png";
import Wireframes from "@/assets/images/about/wireframes.png";

const page = () => {
  const features = [
    {
      icon: BulbImg,
      title: "Proven Track Record",
      description:
        "Over 200 successful projects with measurable improvements in user engagement and conversion rates.",
    },
    {
      icon: Heart,
      title: "Cross-Industry Expertise",
      description:
        "Experience across fintech, healthcare, e-commerce, SaaS, and emerging technologies.",
    },
    {
      icon: TargetImg,
      title: "End-to-End Service",
      description:
        "From initial research to final implementation, we handle every aspect of the design process.",
    },
    {
      icon: SearchImg,
      title: "Agile Methodology",
      description:
        "Fast iterations, continuous feedback, and flexible approach to meet changing requirements.",
    },
    {
      icon: RocketImg,
      title: "Latest Design Trends",
      description:
        "Stay ahead with cutting-edge design patterns, accessibility standards, & emerging technologies.",
    },
    {
      icon: Lock,
      title: "Post-Launch Support",
      description:
        "Ongoing optimization and support to ensure your design continues to perform at its best.",
    },
  ];

  const partners1 = [GooglePay, SamsungPay, Maestro, Klarna, Shoppay];
  const partners2 = [ApplePay, WesternUnion, Skrill, AmazonPay];
  const partners3 = [Payoneer, Visa, Bitcoin, Bitpay, Gumroad];

  const teamMembers = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      name: "Sarah Johnson",
      role: "CEO",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Michael Chen",
      role: "CTO",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      name: "Emma Rodriguez",
      role: "Design Director",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      name: "David Thompson",
      role: "Product Manager",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Alex Park",
      role: "Lead Developer",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      name: "Lisa Wang",
      role: "Marketing Director",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "James Miller",
      role: "Sales Manager",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Robert Davis",
      role: "Operations Manager",
    },
  ];

  const values = [
    {
      id: 1,
      title: "KARAK & CONCEPTS",
      subtitle: "Dare To Be Different",
      description:
        "We Aren't During One Back. In Its Because We're Different. We Don't Just Go Through The Motion When We're On Mission Once Over All The.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bgColor: "bg-slate-800",
      textColor: "text-white",
      size: "tall",
    },
    {
      id: 2,
      title: "DESIGN SPRINTS, NOT DRAMA",
      description:
        "We Don't Micromanage — We Brainstorm, Build, And Iterate Fast. We're A Sprint-Cut, Medium That Lives Between Sprint, Defining Plans.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bgColor: "bg-blue-500",
      textColor: "text-white",
      size: "medium",
    },
    {
      id: 3,
      title: "LATE NIGHTS, BRIGHT MINDS",
      description:
        "Deadlines Don't Scare Us. Whether It's A Midnight Graveyard Or A 7 AM Deployment, We Show Up For The Build Because Work Gets Done.",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bgColor: "bg-purple-600",
      textColor: "text-white",
      size: "medium",
    },
    {
      id: 4,
      title: "CELEBRATE SMALL WINS",
      description:
        "Client Got The Bug Fixes, High Fives For Client Feedback, First Dates Even Loved The Learning Something New.",
      image:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bgColor: "bg-green-500",
      textColor: "text-white",
      size: "small",
    },
    {
      id: 5,
      title: "FEEDBACK = FUEL",
      description:
        "Honest Conversations Aren't Brutal Work. We Present Remote Ideas, Ask Hard Questions Without Ego. With Intent. Magic Tale.",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bgColor: "bg-red-500",
      textColor: "text-white",
      size: "small",
    },
    {
      id: 6,
      title: "REMOTE BUT ROOTED",
      description:
        "No Matter Where We Work From — We Stay Connected To Our Team, Our Values, Their Vision For A Impact.",
      image:
        "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bgColor: "bg-purple-500",
      textColor: "text-white",
      size: "medium",
    },
    {
      id: 7,
      title: "CURIOUS OVER COMFORTABLE",
      description:
        "Why Can't We Do It Differently? Not Afraid To We Take On Bold Adventures And Ask The Stupid Questions. Comfort Zones Are Boring. Success Over Skills.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bgColor: "bg-teal-600",
      textColor: "text-white",
      size: "tall",
    },
    {
      id: 8,
      title: "CULTURE OF OWNERSHIP",
      description:
        "Your Code, Your Call. We Don't Just Push Tasks Through. We Own Them. Through Our Actions.",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bgColor: "bg-orange-500",
      textColor: "text-white",
      size: "medium",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Discover & Define",
      description:
        "Deep dive into your challenges, goals, and needs. Research-driven. No assumptions.",
      icon: Search,
      position: "top-left",
    },
    {
      id: 2,
      title: "Strategize & Wireframe",
      description:
        "Create user flows, architectures, and layouts focused to solve problems, not just decorate them.",
      icon: Layout,
      position: "top-center",
    },
    {
      id: 3,
      title: "Design & Prototype",
      description:
        "Visual storytelling through UI-based elements, and interactive prototypes.",
      icon: Palette,
      position: "top-right",
    },
    {
      id: 4,
      title: "Develop & Test",
      description:
        "Agile, scalable, and clean code — followed by rigorous quality and QA testing.",
      icon: Code,
      position: "bottom-left",
    },
    {
      id: 5,
      title: "Deliver & Support",
      description:
        "Seamless handoff, documentation and post-launch support to keep your product growing.",
      icon: Rocket,
      position: "bottom-right",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        HeroImg={AboutImage}
        title={"Ideas that build better tech"}
        subText={`Explore expert insights, product strategies, design thinking, and
          development tips — straight from the minds shaping real-world digital
          solutions at CorTechSols.`}
      />

      {/* our story section */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-20 font-roboto">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed">
            CorTechSols started as a passion project by a small team of creators
            who believed software should be human-first. From coding in tight
            corners over countless chai breaks to building products for
            industries like fintech, logistics, and healthcare — our mission has
            stayed the same: craft meaningful digital solutions with clarity,
            purpose, and real-world impact.
          </p>
        </div>

        {/* Cards Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 text-center hover:shadow-lg transition">
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-orange-100 mx-auto mb-4">
              <Target className="text-orange-500" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses through intuitive design, scalable
              development, and impactful digital strategy — helping them solve
              real problems and grow with confidence in a fast-evolving digital
              world.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 text-center hover:shadow-lg transition">
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-100 mx-auto mb-4">
              <Eye className="text-blue-500" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become a globally recognized innovation partner — where
              creativity meets code, and every digital product we craft shapes a
              smarter, more connected future.
            </p>
          </div>
        </div>
      </section>

      {/* our values */}
      <div className="bg-gray-50 py-16 lg:py-24 font-roboto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#FFAB40]">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Heart of CorTechSols
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
              const Icon = feature.icon;

              const isImage = typeof Icon !== "function"; // detect if it's an imported image

              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                >
                  <div className=" h-16">
                    {isImage ? (
                      <Image
                        src={Icon as StaticImageData}
                        alt={feature.title}
                        className={`w-auto h-12 ${index === 0 && "h-14"}`}
                      />
                    ) : (
                      <Icon className=" text-gray-700" />
                    )}
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

      {/* our partners */}
      <div className="bg-gray-50 py-16 lg:py-24 font-roboto">
        <div className=" mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[#FFAB40]">Our Partners</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
              Trusted By
            </h2>
          </div>

          {/* Company Logo Grid */}
          <div className="flex flex-wrap max-w-7xl self-center w-full rounded-[50px] justify-center bg-[#FDF1F5]">
            {/* 1st row */}
            <div className="flex w-full flex-wrap justify-between px-8 pt-12 pb-6 mb-4">
              {partners1.map((partner, index) => (
                <Image
                  key={index}
                  src={partner.src}
                  alt={"logo" + index}
                  className="w-auto h-8"
                  width={80}
                  height={50}
                />
              ))}
            </div>
            {/* 2nd row */}
            <div className="flex w-full flex-wrap justify-between px-8 pb-6 mb-4">
              {partners2.map((partner, index) => (
                <Image
                  key={index}
                  src={partner.src}
                  alt={"logo" + index}
                  className="w-auto h-8"
                  width={80}
                  height={50}
                />
              ))}
            </div>
            {/* 3rd row */}
            <div className="flex w-full flex-wrap justify-between px-8 pb-12">
              {partners3.map((partner, index) => (
                <Image
                  key={index}
                  src={partner.src}
                  alt={"logo" + index}
                  className="w-auto h-8"
                  width={80}
                  height={50}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* meet our team */}
      <div className="bg-gray-50 py-16 lg:py-24 font-roboto">
        <div className=" mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[#FFAB40]">Decision Makers</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
              Meet Our Team
            </h2>
          </div>

          {/* Team Pictures Grid */}
          <div className="flex md:pl-[200px] self-end w-full ">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="flex-shrink-0 w-64 snap-start group cursor-pointer"
                >
                  <div className="aspect-[4/5] rounded-lg overflow-hidden mb-4 bg-gray-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
              {/* Right padding to ensure last item has space */}
              <div className="flex-shrink-0 w-4 sm:w-6 lg:w-8"></div>
            </div>
          </div>
        </div>
      </div>

      {/* our culture big grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid Container */}
          <div className="grid grid-cols-2 md:grid-cols-9 lg:grid-cols-18 ">
            {/* 1st row */}
            <div className="lg:col-span-4 text-white  font-roboto  md:col-span-4 col-span-9 bg-[#1D2128]">
              <div className="relative text-[80px] md:text-[120px]  p-4 flex flex-col gap-2">
                <p className="absolute font-bold font-yantramanav top-0 leading-[112px] left-1 text-[80px] md:text-[120px] text-[#A4ABB680]  z-10">
                  1
                </p>
                <h2 className="text-[24px] font-roboto z-20 md:text-[34px] font-extrabold leading-[110%]">
                  KARAK & CONCEPTS
                </h2>
                <p className="z-20 font-roboto text-[16px] font-[400] md:text-[22px]">
                  Some of our best ideas are born during chai breaks. We believe
                  creative thinking happens when minds are relaxed, open, and
                  caffeinated.
                </p>
              </div>
            </div>
            <div className="relative lg:col-span-7 md:col-span-5 col-span-9 min-h-[300px] ">
              <Image
                src={OurCulture.src}
                alt="our-culture"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
            </div>
            <div className="lg:col-span-7 md:col-span-5 col-span-9  bg-[#579DFF]">
              <div className="relative text-[80px] md:text-[120px]  p-6 flex flex-col gap-2">
                <p className="absolute font-yantramanav font-bold top-0 leading-[112px] left-1 text-[80px] md:text-[120px] text-[#30343980]  z-10">
                  2
                </p>
                <h2 className="text-[24px] font-roboto z-20 text-[#F8F9FB] md:text-[34px] font-extrabold leading-[110%]">
                  Design Sprints, Not Drama
                </h2>
                <p className="z-20 font-roboto text-[#F0F2F8] text-[16px] font-[400] md:text-[22px]">
                  We don't micromanage — we brainstorm, build, and iterate fast.
                  With a sprint-first mindset, we let ideas breathe before
                  refining them.
                </p>
              </div>
            </div>

            {/* 2nd row */}
            <div className="relative lg:col-span-5 md:col-span-4 col-span-9  bg-purple-300">
              <Image
                src={Laptop.src}
                alt="our-culture"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
            </div>
            <div className="lg:col-span-6  md:col-span-5 col-span-9 bg-[#8D72D0]">
              <div className="relative text-[80px] md:text-[120px]  p-4 flex flex-col gap-2">
                <p className="absolute  font-bold font-yantramanav top-0 leading-[112px] left-1 text-[80px] md:text-[130px] text-[#22212580] z-10">
                  3
                </p>
                <h2 className="text-[24px] font-roboto text-[#F8F9FB] z-20 md:text-[34px] font-extrabold leading-[110%]">
                  LATE NIGHTS, BRIGHT MINDS
                </h2>
                <p className="font-roboto leading-[150%] text-[#F8F9FB] text-[16px] font-[400] md:text-[22px]">
                  Deadlines don't scare us. Whether it's a midnight prototype or
                  a 7 AM deployment, we show up for the build — because we love
                  the craft.
                </p>
              </div>
            </div>
            <div className="relative lg:col-span-7  md:col-span-4 col-span-9 bg-blue-300">
              <Image
                src={Board.src}
                alt="board"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
            </div>

            {/* 3rd row */}
            <div className="lg:col-span-6 md:col-span-5 col-span-9 bg-[#9CCD53]">
              <div className="relative text-[80px] md:text-[120px]  p-4 flex flex-col gap-2">
                <p className="absolute  font-bold font-yantramanav top-0 leading-[112px] left-1 text-[80px] md:text-[130px] text-[#22212580] z-10">
                  4
                </p>
                <h2 className="text-[24px] font-roboto text-[#F8F9FB] z-20 md:text-[34px] font-extrabold leading-[110%]">
                  CELEBRATE SMALL WINS
                </h2>
                <p className="font-roboto leading-[150%] text-[#F8F9FB] text-[16px] font-[400] md:text-[22px]">
                  We clap for bug fixes, high-fives for client feedback, and
                  cheer even louder for learning something new.
                </p>
              </div>
            </div>
            <div className="relative lg:col-span-6 md:col-span-5 col-span-9 bg-orange-300">
              {/* highfive image  */}
              <Image
                src={HighFive.src}
                alt="highfive"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
            </div>
            <div className="lg:col-span-6  md:col-span-4 col-span-9 bg-[#FF6B57]">
              <div className="relative text-[80px] md:text-[120px]  p-4 flex flex-col gap-2">
                <p className="absolute  font-bold font-yantramanav top-0 leading-[112px] left-1 text-[80px] md:text-[130px] text-[#22212580] z-10">
                  5
                </p>
                <h2 className="text-[24px] font-roboto text-[#F8F9FB] z-20 md:text-[34px] font-extrabold leading-[110%]">
                  FEEDBACK = FUEL
                </h2>
                <p className="z-20 font-roboto leading-[150%] text-[#F8F9FB] text-[16px] font-[400] md:text-[22px]">
                  Honest conversations drive better work. We share, receive, and
                  grow together — without ego, with intent.Image Idea:
                </p>
              </div>
            </div>

            {/* 4th row */}
            <div className="relative lg:col-span-6 h-56 md:col-span-4 col-span-9">
              <Image
                src={Meeting.src}
                alt="meeting"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
            </div>
            <div className="lg:col-span-6 md:col-span-5 col-span-9 bg-[#D266AA]">
              <div className="relative text-[80px] md:text-[120px]  p-4 flex flex-col gap-2">
                <p className="absolute  font-bold font-yantramanav top-0 leading-[112px] left-1 text-[80px] md:text-[130px] text-[#22212580] z-10">
                  6
                </p>
                <h2 className="text-[24px] font-roboto text-[#F8F9FB] z-20 md:text-[34px] font-extrabold leading-[110%]">
                  REMOTE BUT ROOTED
                </h2>
                <p className="z-20 font-roboto leading-[150%] text-[#F8F9FB] text-[16px] font-[400] md:text-[22px]">
                  No matter where we work from — we stay connected. Tools keep
                  us synced; trust keeps us aligned.{" "}
                </p>
              </div>
            </div>
            <div className="relative lg:col-span-6  md:col-span-5 col-span-9">
              <Image
                src={Discussion.src}
                alt="discussion"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
            </div>

            {/* 5th row */}
            <div className="lg:col-span-4 md:col-span-4 col-span-9 bg-[#6CC1E7]">
              <div className="relative text-[80px] md:text-[120px]  p-4 flex flex-col gap-2">
                <p className="absolute  font-bold font-yantramanav top-0 leading-[112px] left-1 text-[80px] md:text-[130px] text-[#22212580] z-10">
                  7
                </p>
                <h2 className="text-[24px] font-roboto text-[#F8F9FB] z-20 md:text-[34px] font-extrabold leading-[110%]">
                  CURIOUS OVER COMFORTABLE
                </h2>
                <p className="z-20 font-roboto leading-[150%] text-[#F8F9FB] text-[16px] font-[400] md:text-[22px]">
                  No matter where we work from — we stay connected. Tools keep
                  us synced; trust keeps us aligned.{" "}
                </p>
              </div>
            </div>
            <div className="relative lg:col-span-5  md:col-span-5 col-span-9 bg-orange-300">
              <Image
                src={Wireframes}
                alt="wireframes"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
            </div>
            <div className="lg:col-span-4 md:col-span-4 col-span-9 bg-[#FFAB40]">
              <div className="relative text-[80px] md:text-[120px]  p-4 flex flex-col gap-2">
                <p className="absolute  font-bold font-yantramanav top-0 leading-[112px] left-1 text-[80px] md:text-[130px] text-[#22212580] z-10">
                  8
                </p>
                <h2 className="text-[24px] font-roboto text-[#F8F9FB] z-20 md:text-[34px] font-extrabold leading-[110%]">
                  CULTURE OF OWNERSHIP
                </h2>
                <p className="z-20 font-roboto leading-[150%] text-[#F8F9FB] text-[16px] font-[400] md:text-[22px]">
                  Here, everyone leads. From interns to leads, we own our
                  outcomes and grow through our choices.
                </p>
              </div>
            </div>
            <div className="relative lg:col-span-5  md:col-span-9 col-span-9 bg-green-300">
              <Image
                src={Meeting2.src}
                alt="meeting2"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* our process */}
      <div className="w-full bg-[#FAFBFA]">
        <div className="max-w-6xl mx-auto px-6 py-16 ">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-medium text-sm tracking-wider mb-2">
              Our Process
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              The Steps Taken
            </h2>
          </div>

          <div className="relative">
            {/* Top Row Steps */}
            <div className="flex justify-between items-center mb-20">
              {steps.slice(0, 3).map((step, index) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center max-w-xs"
                >
                  <div className="relative">
                    <div className="w-20 h-20 bg-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Row Steps */}
            <div className="flex justify-center space-x-32">
              {steps.slice(3, 5).map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center max-w-xs"
                >
                  <div className="relative">
                    <div className="w-20 h-20 bg-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Dashed Arrows */}
            <svg
              className="absolute inset-0 w-full h-full md:block hidden pointer-events-none"
              style={{ zIndex: 1 }}
              viewBox="0 0 1000 400"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Arrow 1: Discover to Strategize */}
              <defs>
                <marker
                  id="arrowhead1"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
                </marker>
                <pattern
                  id="dashed"
                  patternUnits="userSpaceOnUse"
                  width="10"
                  height="1"
                >
                  <rect width="5" height="1" fill="#6B7280" />
                </pattern>
              </defs>

              {/* Arrow from step 1 to step 2 - FIXED */}
              <path
                d="M 180 40 Q 300 20 420 40"
                stroke="url(#dashed)"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead1)"
              />

              {/* Arrow from step 2 to step 3 - FIXED */}
              <path
                d="M 580 40 Q 700 20 820 40"
                stroke="url(#dashed)"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead1)"
              />

              {/* Arrow from step 3 to step 4 */}
              <path
                d="M 780 120 Q 650 200 350 280"
                stroke="url(#dashed)"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead1)"
              />

              {/* Arrow from step 4 to step 5 */}
              <path
                d="M 370 280 Q 500 300 630 280"
                stroke="url(#dashed)"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead1)"
              />
            </svg>
          </div>
        </div>
      </div>

      <InfoSection />

      <StayInLoop />

      <Footer />
    </div>
  );
};

export default page;

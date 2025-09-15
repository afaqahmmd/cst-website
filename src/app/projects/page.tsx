"use client";
import HeroSection from "@/components/HeroSection/HeroSection";
import HeroImg from "@/assets/images/projects/hero-img.webp";
import React from "react";
import Mob1 from "@/assets/images/services/mob1.png";
import Mob2 from "@/assets/images/services/mob2.png";
import Mob3 from "@/assets/images/services/mob3.png";
import Image from "next/image";
import PinkMob from "@/assets/images/projects/pink-mobile.webp";
import LightBlueMob from "@/assets/images/projects/lightblue-mobile.webp";
import BlueMob from "@/assets/images/projects/blue-mobile.webp";
import LightGreenMob from "@/assets/images/projects/lightgreen-mobile.webp";
import RoseMob from "@/assets/images/projects/rose-mobile.webp";
import LightCyanMob from "@/assets/images/projects/lightcyan-mobile.webp";
import InfoSection from "@/components/InfoSection/InfoSection";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import Footer from "@/components/Footer/Footer";
import UxReview2 from "@/assets/images/projects/orange-banner.svg";
import CyanMobile from "@/assets/images/projects/cyan-mobile.svg";
import { useProjects } from "@/hooks/useProjects";
import { joinUrl } from "@/utils/joinUrl";
import { getBlogImageUrl } from "@/utils/getBlobImageUrl";
import Link from "next/link";
import { useServices } from "@/hooks/useServices";
import { Service } from "@/types/service";

const page = () => {
  const { data: projectsData, isLoading, error } = useProjects();
  const firstProject = projectsData?.[0];
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

  const popularPosts = [
    {
      title: "HabitFy",
      description:
        "HabitFy is a habit building app aimed to help people leading a sedentary lifestyle to develop healthier habits...",
      image: PinkMob,
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
      image: LightGreenMob,
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
      image: BlueMob,
      bgGradient: "from-blue-400 to-blue-600",
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
      image: LightBlueMob,
      bgGradient: "from-blue-400 to-blue-600",
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
      image: RoseMob,
      bgGradient: "from-blue-400 to-blue-600",
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
      image: LightCyanMob,
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

  if (isLoading) {
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"></div>
    </div>;

    if (error) {
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">Error loading projects</p>
      </div>;
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <main className="w-full font-roboto">
      <HeroSection
        HeroImg={HeroImg}
        title="Turning Ideas into Impactful Products"
        subText="Explore how we help startups and enterprises turn bold ideas into purposeful, scalable digital products — from MVPs to full platforms."
      />

      {/* ux review representations  */}
      <div className="relative flex flex-col w-full lg:max-w-[90%] max-w-7xl px-4 mx-auto lg:my-16 my-8 ">
        <div className="relative aspect-[1200/550] rounded-lg overflow-hidden">
          <Image
            src={UxReview2}
            alt="ux-review-representations"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className=" lg:absolute relative right-0 bottom-[-10%]  rounded-lg flex flex-col gap-4 max-w-5xl bg-white">
          <div className="p-10 flex flex-col justify-between">
            <div className="flex flex-col gap-4 mb-12">
              {/* Category Badge */}
              <div className="flex gap-2 items-center">
                <p
                  className={` text-[#6941C6] text-[14px] leading-[20px] tracking-[0%] rounded-full text-sm font-medium`}
                >
                  Design
                </p>
                <p
                  className={` text-[#1D76F1] text-[14px] leading-[20px] tracking-[0%] rounded-full text-sm font-medium`}
                >
                  UX Research
                </p>
              </div>

              {/* Date & Time */}
              <div className="text-sm text-gray-500 ">
                16 March 2023 • 12:24 PM
              </div>

              {/* Title */}
              <h3 className="text-[32px] leading-[45px] tracking-[-1px] font-[600] text-gray-900 ">
                Design Thinking in Real Products: What Most Teams Miss
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-[400] text-[16px] leading-[150%] tracking-[0%] ">
                A crash course on why wireframes aren't enough — and how to
                embed user empathy into scalable product design.A crash course
                on why wireframes aren't enough — and how to embed user empathy
                into...A crash course on why wireframes aren't enough — and how
                to embed user empathy into scalable product design.A crash
                course on why wireframes aren't enough — and how to embed user
                empathy into...
              </p>
            </div>

            {/* Read More Button */}
            <button className="bg-gray-100 max-w-[125px] hover:bg-gray-200 border border-[#20C5BA] text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* our recent post */}
      <div className="flex flex-col w-full lg:max-w-[90%] max-w-7xl px-4 mx-auto mt-16">
        {/* header title and button */}

        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Recent Post
          </h2>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-sm text-sm transition-colors duration-200">
            View All
          </button>
        </div>

        {/* first container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:mb-12 mb-8">
          {/* left side */}
          <div className="relative  rounded-lg overflow-hidden">
            <div className="aspect-[720/455] pointer-events-none">
              <Image
                src={getBlogImageUrl(firstProject?.image)}
                alt="cyan-mobile-interface"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* right side */}
          <div className="p-6 py-2 flex flex-col justify-between">
            <div className="flex flex-col gap-4 max-w-2xl">
              {/* Category Badge */}
              <div className="flex gap-2 items-center">
                {firstProject &&
                  firstProject.tags.map(
                    (tag: { id: number; name: string }, index: number) => (
                      <p
                        key={index}
                        className={`${
                          index % 2 === 0 ? "text-[#6941C6]" : "text-[#1D76F1]"
                        } text-[14px] leading-[20px] tracking-[0%] rounded-full text-sm font-medium`}
                      >
                        {tag.name}
                      </p>
                    )
                  )}
              </div>

              {/* Date & Time */}
              <div className="font-roboto flex items-center gap-3">
                <p className="text-[#999999] text-[14px] font-[500] leading-[150%]">
                  {formatDate(firstProject?.created_at)}
                </p>
                <p className="text-[#333333] text-[14px] font-[700] leading-[150%]">
                  {formatTime(firstProject?.created_at)}
                </p>
              </div>

              {/* Title */}
              <h3 className="text-[32px] leading-[45px] tracking-[-1px] font-[600] text-gray-900 ">
                {firstProject?.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-[400] text-[16px] leading-[150%] tracking-[0%] ">
                {firstProject?.description}
              </p>
            </div>

            {/* Read More Button */}
            <Link href={`/projects/${firstProject?.slug}`}>
              <button className="bg-gray-100 max-w-[125px] hover:bg-gray-200 border border-[#20C5BA] text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                Read More
              </button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData &&
            projectsData.slice(1, 4).map((project: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative aspect-[400/360] overflow-hidden rounded-b-2xl bg-gray-50">
                  <Image
                    src={getBlogImageUrl(project.image)}
                    alt={`${project.name} mobile interface`}
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
                    {project.tags.map(
                      (tag: { id: number; name: string }, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className={`${
                            tagIndex % 2 === 0
                              ? "text-[#6941C6]"
                              : "text-[#1D76F1]"
                          } font-medium text-sm`}
                        >
                          {tag.name}
                        </span>
                      )
                    )}
                  </div>

                  {/* Date & Time */}
                  <div className="text-sm text-gray-500 mb-4 font-roboto">
                    <span className="text-[#999999] text-[14px] font-[500] leading-[150%]">
                      {formatDate(project.created_at)}
                    </span>{" "}
                    <span className="text-[#333333] text-[14px] font-[700] leading-[150%] ml-3">
                      {formatTime(project.created_at)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Read More Button */}
                  <Link href={`/projects/${firstProject?.slug}`}>
                    <button className="hover:bg-gray-100 border border-[#20C5BA] text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* popular posts */}
      <div className="flex flex-col w-full lg:max-w-[90%] max-w-7xl px-4 mx-auto lg:my-16 my-8 ">
        {/* header title and button */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Popular Post
          </h2>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-sm text-sm transition-colors duration-200">
            View All
          </button>
        </div>

        {/* cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData &&
            projectsData.slice(1, 7).map((project: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative aspect-[400/360] overflow-hidden rounded-b-2xl bg-gray-50">
                  <Image
                    src={getBlogImageUrl(project.image)}
                    alt={`${project.name} mobile interface`}
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
                    {project.tags.map(
                      (tag: { id: number; name: string }, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className={`${
                            tagIndex % 2 === 0
                              ? "text-[#6941C6]"
                              : "text-[#1D76F1]"
                          } font-medium text-sm`}
                        >
                          {tag.name}
                        </span>
                      )
                    )}
                  </div>

                  {/* Date & Time */}
                  <div className="text-sm text-gray-500 mb-4 font-roboto">
                    <span className="text-[#999999] text-[14px] font-[500] leading-[150%]">
                      {formatDate(project.created_at)}
                    </span>{" "}
                    <span className="text-[#333333] text-[14px] font-[700] leading-[150%] ml-3">
                      {formatTime(project.created_at)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Read More Button */}
                  <Link href={`/projects/${firstProject?.slug}`}>
                    <button className="hover:bg-gray-100 border border-[#20C5BA] text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>

      <InfoSection
        title="Have a vision in mind?"
        subText="Let's bring your project to life — just like we did with 40+ businesses."
      />

      <StayInLoop />

      <Footer />
    </main>
  );
};

export default page;

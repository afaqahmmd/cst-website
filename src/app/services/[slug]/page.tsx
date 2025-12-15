"use client";

import React, { use, useState } from "react";
import { useServiceBySlug } from "@/hooks/useServiceBySlug";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
	CheckCircle,
	Triangle,
	RefreshCw,
	Target,
	BarChart3,
	Settings,
	Brain,
	Layers,
	BarChart,
	Infinity,
	ArrowRight,
	Star,
	Check,
} from "lucide-react";
import Image from "next/image";
import DesignTeamImg from "@/assets/images/services/design-team.png";
import ServiceMainImage from "@/assets/images/projects/Service Main 1st Image.png";
import ServiceIcon from "@/assets/images/serviceIcon.png";
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
import { generateJsonLd } from "@/utils/structuredData";
import { joinUrl } from "@/utils/joinUrl";
import { useProjects } from "@/hooks/useProjects";
import { useBlogs } from "@/hooks/useBlogs";
import { getBlogImageUrl } from "@/utils/getBlobImageUrl";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Blog } from "@/types/blog";

interface ServicePageProps {
	params: Promise<{ slug: string }>;
}

const ServicePage = ({ params }: ServicePageProps) => {
	const { slug } = use(params);

	const router = useRouter();
	const { service, isLoading, error, notFound } = useServiceBySlug(slug);
	const [structuredData, setStructuredData] = useState<any>(null);
	const {
		data: projectsResponse,
		isLoading: projectsLoading,
		error: projectsError,
	} = useProjects();

	// Projects API returns paginated response with results array
	const projectsData =
		projectsResponse?.results || projectsResponse?.data || [];

	// Fetch blogs data
	const { data: blogsData } = useBlogs();
	const blogs: Blog[] =
		blogsData?.results || blogsData?.data || blogsData?.blogs || [];

	// Update structured data when service data changes
	useEffect(() => {
		if (service) {
			console.log("fetched service", service);
			console.log("Testimonials data:", service.testimonials);
			console.log("Has testimonials:", !!service.testimonials);
			console.log("Testimonials length:", service.testimonials?.length);
			setStructuredData(generateJsonLd("Service", service));
		}
	}, [service]);

	// Loading state
	if (isLoading) {
		return (
			<div className="w-full h-screen flex items-center justify-center">
				<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"></div>
			</div>
		);
	}

	// Error state
	if (error) {
		return (
			<div className="w-full h-screen flex items-center justify-center">
				<div className="text-center">
					<h2 className="text-2xl font-bold text-red-600 mb-4">
						Error Loading Service
					</h2>
					<p className="text-gray-600">Please try again later.</p>
					<p className="text-sm text-gray-500 mt-2">{error.message}</p>
				</div>
			</div>
		);
	}

	// Not found state
	if (notFound) {
		return (
			<div className="w-full h-screen flex items-center justify-center">
				<div className="text-center">
					<h2 className="text-2xl font-bold text-gray-600 mb-4">
						Service Not Found
					</h2>
					<p className="text-gray-500">
						The service you're looking for doesn't exist.
					</p>
				</div>
			</div>
		);
	}

	// If no service data, show loading
	if (!service) {
		return (
			<div className="w-full h-screen flex items-center justify-center">
				<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"></div>
			</div>
		);
	}

	// Helper function to render stars
	const renderStars = (rating: number) => {
		return Array(5)
			.fill(0)
			.map((_, i) => (
				<Star
					key={i}
					className={`w-4 h-4 ${
						i < rating ? "text-orange-400 fill-current" : "text-gray-300"
					}`}
				/>
			));
	};

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

	const formatTime = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleTimeString("en-US", {
			hour: "2-digit",
			minute: "2-digit",
		});
	};
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		const day = date.getDate();
		const month = date.toLocaleDateString("en-US", { month: "long" });
		const year = date.getFullYear();
		return `${day} ${month} ${year}`;
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<div className="w-full flex flex-col font-roboto">
				{/* hero section */}
				<div className="bg-white  font-roboto">
					<div className="max-w-screen mx-auto lg:px-18 sm:px-6 px-4 md:px-8">
						<div className="grid lg:grid-cols-2 gap-[100px]  lg:py-12 py-6 zoomed-out-center">
							{/* Left Content */}
							<div className="space-y-8 mt-12 zoomed-out-textcenter mb-[80px]">
								<div className="space-y-6">
									<h2 className="font-[800] lg:text-[48px] text-[40px] leading-[55px] tracking-[-1.5%] text-[#33333] ">
										{service?.name ||
											`Transform Your Ideas Into Stunning Digital Experiences`}
									</h2>

									<p className="font-[400] text-[24px] leading-[160%] text-[#666666]">
										{service?.description}
									</p>
								</div>

								<button
									type="submit"
									className="min-w-[214px] bg-teal-500 text-white py-4 rounded-[5px] leading-[29px] font-[500] font-roboto hover:bg-teal-600 transition-colors duration-200  text-[18px]"
								>
									Get Started Today
								</button>

								{/* Stats Section */}
								<div className="flex flex-wrap gap-8 pt-8 zoomed-out-center">
									<div className="flex items-center gap-3">
										<div className="w-4 h-4 rounded-full bg-yellow-400"></div>
										<span className="text-gray-700 font-semibold">
											{service.projects_delivered}+ Projects Delivered
										</span>
									</div>
									<div className="flex items-center gap-3">
										<div className="w-4 h-4 rounded-full bg-blue-400"></div>
										<span className="text-gray-700 font-semibold">
											{service.clients_satisfaction}% Client Satisfaction
										</span>
									</div>
								</div>

								{/* OLD CODE - COMMENTED FOR FUTURE USE */}
								{/* 
                { service.sections?.hero_section.length > 0 && service.sections?.hero_section?.sub_sections && (
                  <div className="flex flex-wrap gap-8 pt-8 zoomed-out-center">
                    {service.sections.hero_section.sub_sections.map(
                      (stat: any, index: number) => (
                        <div key={index} className="flex items-center gap-3">
                          <div
                            className={`w-6 h-6 rounded-full ${
                              index === 0 ? "bg-orange-400" : "bg-blue-400"
                            }`}
                          ></div>
                          <span className="text-gray-700 font-semibold">
                            {stat.title}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                )}
                */}
							</div>

							{/* Right Image */}
							<div className="relative aspect-video w-full mt-12 overflow-hidden rounded-2xl shadow-xl">
								<Image
									src={service.hero_image?.image || ServiceMainImage}
									alt={
										service.hero_image?.alt_text ||
										service.name ||
										"Service image"
									}
									fill
									className="object-cover"
									priority
									sizes="(max-width: 768px) 100vw, 80vw"
									unoptimized
								/>
							</div>

							{/* OLD IMAGE CODE - COMMENTED FOR FUTURE USE */}
							{/* 
              <div className='relative aspect-video w-full mt-12 overflow-hidden rounded-2xl shadow-xl'>
                {(() => {
                  const heroPath = service.sections?.hero_section?.image as string | undefined;
                  const heroUrl = heroPath
                    ? joinUrl(process.env.NEXT_PUBLIC_API_BASE_URL || "", heroPath)
                    : undefined;
                  const firstImage = Array.isArray(service.images) && service.images.length > 0
                    ? service.images[0]
                    : undefined;
                  const src = heroUrl || firstImage || "/placeholder.svg";
                  return (
                    <Image
                      src={src}
                      alt={service.title || "Service image"}
                      fill
                      className='object-cover'
                      priority
                      sizes="(max-width: 768px) 100vw, 80vw"
                      unoptimized
                    />
                  );
                })()}
                {service.sections?.hero_section?.image_alt_text && (
                  <span className="sr-only">{service.sections.hero_section.image_alt_text}</span>
                )}
              </div>
              */}
						</div>
					</div>
				</div>
			</div>
			{/* end hero section */}

			{/* about section */}
			{service.about_title && service.about_subsections && (
				<div className="font-roboto bg-[#FAFBFA] py-16 flex justify-center items-center lg:py-24">
					<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
						{/* Header */}
						<div className="text-center mb-16">
							<h2 className="text-[32px] font-[600] text-[#333333] tracking-[-3%] mb-6">
								{service.about_title}
							</h2>
							<p className="text-lg text-gray-600  leading-relaxed">
								{service.about_description}
							</p>
						</div>

						{/* Feature Cards */}
						<div className="grid md:grid-cols-3 gap-6">
							{service.about_subsections.map((feature: any, index: number) => (
								<div
									key={index}
									className="text-center group bg-white rounded-[24px] p-8"
								>
									<div
										className={`relative w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-80 transition-colors duration-200 `}
									>
										<Image
											src={feature?.icon || "/placeholder.svg"}
											alt={feature?.alt_text || "icon"}
											fill
											className="rounded-[10px]"
											unoptimized
										/>
									</div>
									<h2 className="text-xl font-semibold text-gray-900 mb-4">
										{feature.title}
									</h2>
									<p className="text-gray-600 leading-relaxed">
										{feature.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			)}

			{/* why choose us section */}
			{service.why_choose_title && service.why_choose_subsections && (
				<div className="bg-white py-16 lg:py-24">
					<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
						{/* Header */}
						<div className="text-center mb-16">
							<h2 className="text-[32px] font-[600] text-[#333333] tracking-[-3%] mb-6">
								{service.why_choose_title}
							</h2>
							<p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
								{service.why_choose_description}
							</p>
						</div>

						{/* Feature Grid */}
						<div className="grid md:grid-cols-3 gap-6">
							{service.why_choose_subsections.map(
								(feature: any, index: number) => {
									const icons = [
										CheckCircle,
										Triangle,
										RefreshCw,
										Target,
										BarChart3,
										Settings,
									];

									return (
										<div
											key={index}
											className="text-center group bg-white rounded-[24px] shadow-sm hover:shadow-lg p-8"
										>
											<div
												className={`relative w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-80 transition-colors duration-200 `}
											>
												<Image
													src={feature?.icon || "/placeholder.svg"}
													alt={feature?.alt_text || "icon"}
													fill
													className="!rounded-[10px]"
													unoptimized
												/>
											</div>
											<h2 className="text-xl font-semibold text-gray-900 mb-4">
												{feature.title}
											</h2>
											<p className="text-gray-600 leading-relaxed">
												{feature.description}
											</p>
										</div>
									);
								}
							)}
						</div>
					</div>
				</div>
			)}

			{/* what we offer section */}
			{service.what_we_offer_title && service.what_we_offer_subsections && (
				<div className="bg-white py-16 lg:py-24 font-roboto">
					<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
						{/* Header */}
						<div className="text-center mb-16">
							<h2 className="text-[32px] font-[600] text-[#333333] tracking-[-3%] mb-6">
								{service.what_we_offer_title}
							</h2>
							<p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
								{service.what_we_offer_description}
							</p>
						</div>

						{/* Services Grid */}
						<div className="grid md:grid-cols-2 gap-6 lg:gap-8">
							{service.what_we_offer_subsections.map(
								(serviceItem: any, index: number) => {
									const colors = [
										{
											bg: "bg-[#F2FDE1]",
											icon: "bg-green-100",
											text: "text-green-700",
											check: "bg-[#87C42C]",
										},
										{
											bg: "bg-[#FFF4CE]",
											icon: "bg-orange-100",
											text: "text-orange-700",
											check: "bg-[#FFAB40]",
										},
										{
											bg: "bg-[#FFE0E0]",
											icon: "bg-red-100",
											text: "text-red-700",
											check: "bg-[#FF6B57]",
										},
										{
											bg: "bg-[#DBEFFF]",
											icon: "bg-blue-100",
											text: "text-blue-700",
											check: "bg-[#579DFF]",
										},
									];
									const color = colors[index % colors.length];

									return (
										<div
											key={index}
											className={`${color.bg} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100`}
										>
											{/* Header */}
											<div className="flex items-center mb-6 gap-4 ">
												<div
													className={`relative w-16 h-16  rounded-xl flex items-center justify-center  group-hover:bg-opacity-80 transition-colors duration-200 `}
												>
													<Image
														src={serviceItem?.icon || "/placeholder.svg"}
														alt={serviceItem?.alt_text || "icon"}
														fill
														unoptimized
													/>
												</div>
												<h2 className="text-xl flex items-center  font-semibold text-gray-900">
													{serviceItem.title}
												</h2>
											</div>

											{/* Description */}
											<ul className="pl-6">
												{serviceItem.points?.map(
													(feature: string, idx: number) => (
														<li
															key={idx
																.toString()
																.concat(serviceItem.title)
																.concat(feature)}
															className="flex items-center mb-2"
														>
															<Check
																className={`w-6 h-6 mr-3 text-white ${color.check} p-1 rounded-full flex-shrink-0`}
															/>
															<span className="text-[#101828] text-[14px] leading-[23px] font-[400] tracking-[-0.15px] line-clamp-1">
																{feature}
															</span>
														</li>
													)
												)}
											</ul>
										</div>
									);
								}
							)}
						</div>
					</div>
				</div>
			)}

			{/* PERFECT FOR BUSINESS SECTION - Correct UI but dynamic from API */}
			{service.business_title && service.business_subsections && (
				<div className="font-roboto bg-[#FAFBFA] py-16 lg:py-24">
					<div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
						{/* Header */}
						<div className="text-center mb-16">
							<h2 className="text-[32px] font-[600] text-[#333333] tracking-[-3%] mb-6">
								{service.business_title}
							</h2>
							<p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
								{service.business_description}
							</p>
						</div>

						{/* Business Grid */}
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 w-full px-4">
							{service.business_subsections.map((sub: any, index: number) => {
								return (
									<Card
										key={index}
										className="flex flex-col items-center text-center rounded-xl shadow-md p-6 bg-white"
									>
										<div
											className={`relative w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:bg-opacity-80 transition-colors duration-200`}
										>
											<Image
												src={sub?.icon || "/placeholder.svg"}
												alt={sub?.alt_text || sub.title}
												fill
												unoptimized
											/>
										</div>

										<CardContent className="p-0 text-center">
											<h2 className="mt-0 text-lg font-semibold text-gray-900">
												{sub.title}
											</h2>
											<p className="text-sm text-gray-500 mt-1">
												{sub.description}
											</p>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</div>
			)}

			{/* OUR DESIGN PROCESS SECTION */}
			{service.design_process_title && service.design_process_subsections && (
				<div className="bg-white py-16 lg:py-24">
					<div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
						{/* Header */}
						<div className="text-center mb-16">
							<h2 className="text-[32px] font-[600] text-[#333333] tracking-[-3%] mb-6">
								{service.design_process_title}
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
								{service.design_process_description}
							</p>
						</div>

						<div className="relative">
							{/* Desktop Layout */}
							<div className="hidden lg:block">
								<div className="flex items-start justify-between relative">
									{service.design_process_subsections
										.slice(0, 4)
										.map((step: any, index: number) => (
											<div
												key={index}
												className="flex flex-col items-start relative flex-1"
											>
												{/* Number Circle */}
												<div className="text-[32px] font-[500] leading-[150%] bg-teal-500 border-4 border-white text-white w-30 h-30 rounded-full flex items-center justify-center text-xl mb-6 relative z-10">
													{String(index + 1).padStart(2, "0")}
												</div>

												{/* Connector line to next step (hidden on last) */}
												{index <
													Math.min(
														service.design_process_subsections.length,
														4
													) -
														1 && (
													<div className="pointer-events-none absolute top-[60px] left-[calc(50%-60px)] w-[calc(50%+60px)] h-0 border-t-2 border-dashed border-[#FFAB40] z-0"></div>
												)}

												{/* Content */}
												<div className="text-start max-w-xs md:ml-3">
													<h2 className="text-xl font-semibold text-gray-900 mb-4">
														{step.title}
													</h2>
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
									{service.design_process_subsections
										.slice(0, 4)
										.map((step: any, index: number) => (
											<div
												key={index}
												className="flex flex-col items-center text-center relative"
											>
												<div className="bg-teal-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg">
													{String(index + 1).padStart(2, "0")}
												</div>
												<h2 className="text-xl font-semibold text-gray-900 mb-4">
													{step.title}
												</h2>
												<p className="text-gray-600 leading-relaxed text-sm">
													{step.description}
												</p>
											</div>
										))}
								</div>
							</div>

							{/* Mobile Layout */}
							<div className="md:hidden space-y-8">
								{service.design_process_subsections
									.slice(0, 4)
									.map((step: any, index: number) => (
										<div key={index} className="relative">
											<div className="flex gap-6">
												<div className="bg-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
													{String(index + 1).padStart(2, "0")}
												</div>
												<div className="flex-1">
													<h2 className="text-lg font-semibold text-gray-900 mb-2">
														{step.title}
													</h2>
													<p className="text-gray-600 leading-relaxed text-sm">
														{step.description}
													</p>
												</div>
											</div>

											{index <
												Math.min(service.design_process_subsections.length, 4) -
													1 && (
												<div className="absolute left-6 top-12 w-0 h-8 border-l-2 border-dotted border-teal-300 transform -translate-x-px"></div>
											)}
										</div>
									))}
							</div>
						</div>
					</div>
				</div>
			)}

			{/* STATIC : why is our design team different */}
			<div className="bg-[#FAFBFA] py-16 lg:py-24 w-full font-roboto">
				<div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
					{/* Header */}
					<div className="text-center mb-16">
						<h2 className="text-[32px] font-[600] text-[#333333] tracking-[-3%] mb-6">
							What Makes Our {service.name} Team Different
						</h2>
						<p className="text-[20px] text-[#666666]  leading-[33px] tracking-[-1.5%] my-6">
							Our unique blend of skills, experience, and passion sets us apart
							in the industry
						</p>
					</div>

					{/* Content Grid */}
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left Side - Features */}
						<div className="space-y-8">
							<div className="flex gap-4 items-start bg-white rounded-xl p-4">
								{/* Icon */}
								<div className="bg-pink-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
									<Brain className="w-6 h-6 text-white" />
								</div>

								{/* Content */}
								<div className="flex-1">
									<h2 className="text-xl font-semibold text-gray-900 mb-3">
										Psychology-Informed Design
									</h2>
									<p className="text-gray-600 leading-relaxed">
										Our team includes certified UX researchers who apply
										behavioral psychology principles to create more engaging
										experiences.
									</p>
								</div>
							</div>

							<div className="flex gap-4 items-start bg-white rounded-xl p-4">
								{/* Icon */}
								<div className="bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
									<Layers className="w-6 h-6 text-white" />
								</div>

								{/* Content */}
								<div className="flex-1">
									<h2 className="text-xl font-semibold text-gray-900 mb-3">
										Technical Depth
									</h2>
									<p className="text-gray-600 leading-relaxed">
										Unlike many design agencies, our designers understand
										development constraints and possibilities, leading to more
										feasible designs.
									</p>
								</div>
							</div>

							<div className="flex gap-4 items-start bg-white rounded-xl p-4">
								{/* Icon */}
								<div className="relative w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
									<Image
										src={ServiceIcon}
										alt="Data-Driven Decisions Icon"
										fill
										className="object-contain"
									/>
								</div>

								{/* Content */}
								<div className="flex-1">
									<h2 className="text-xl font-semibold text-gray-900 mb-3">
										Data-Driven Decisions
									</h2>
									<p className="text-gray-600 leading-relaxed">
										Every design choice is backed by user data, analytics
										insights, and measurable business impact metrics.
									</p>
								</div>
							</div>

							<div className="flex gap-4 items-start bg-white rounded-xl p-4">
								{/* Icon */}
								<div className="bg-purple-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
									<Infinity className="w-6 h-6 text-white" />
								</div>

								{/* Content */}
								<div className="flex-1">
									<h2 className="text-xl font-semibold text-gray-900 mb-3">
										Continuous Learning
									</h2>
									<p className="text-gray-600 leading-relaxed">
										Our team stays current with the latest design trends,
										accessibility standards, and emerging technologies.
									</p>
								</div>
							</div>
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

			{/* MEET OUR DESIGN TEAM SECTION */}
			{service.meet_design_team_title &&
				service.meet_design_team_subsections && (
					<div className="bg-white py-16 lg:py-24">
						<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
							{/* Header */}
							<div className="text-center mb-16">
								<h2 className="text-[32px] font-[600] text-[#333333] tracking-[-3%] mb-6">
									{service.meet_design_team_title}
								</h2>
								<p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
									{service.meet_design_team_description}
								</p>
							</div>

							{/* Team Grid */}
							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
								{service.meet_design_team_subsections.map(
									(member: any, index: number) => (
										<div
											key={index}
											className="text-center group border rounded-xl py-12"
										>
											{/* Photo Container */}
											<div className="relative mb-6">
												<div className="w-54 h-54 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 relative">
													<Image
														src={member.image || "/placeholder.svg"}
														alt={
															member.alt_text ||
															`${member.name} - ${member.designation}`
														}
														fill
														sizes="(max-width: 768px) 192px, 192px"
														className="object-cover group-hover:scale-105 transition-transform duration-300"
														priority={index === 0}
														unoptimized
													/>
												</div>
											</div>

											{/* Member Info */}
											<div className="space-y-3 px-5">
												<h2 className="text-[28px] font-[700] text-[#2B2B2B]">
													{member.name}
												</h2>

												<p className="text-[#868282] text-[18px] leading-[22px] font-[400]">
													{member.designation}
												</p>

												{/* Experience Badge */}
												<div className="flex justify-center">
													<p
														className="text-white px-4 py-1 rounded-full text-[16px] font-[500]"
														style={{
															backgroundColor: [
																"#579DFF",
																"#8D72D0",
																"#FF723E",
															][index % 3],
														}}
													>
														{member.experience}
													</p>
												</div>

												{/* Summary */}
												<p className="text-[#868282] text-[18px] font-[400] leading-[22px]">
													{member.summary}
												</p>
											</div>
										</div>
									)
								)}
							</div>
						</div>
					</div>
				)}

			{/* TOOLS WE USE SECTION */}
			{service.tools_title && service.tools_subsections && (
				<div className="bg-[#FAFBFA] py-16 lg:py-18">
					<div className="max-w-6xl mx-auto px-4 sm:px-2 lg:px-4">
						{/* Header */}
						<div className="text-center mb-16">
							<h2 className="text-[32px] font-[600] text-[#333333] tracking-[-3%] mb-6">
								{service.tools_title}
							</h2>
							<p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
								{service.tools_description}
							</p>
						</div>

						{/* Tools Grid - Dynamic from API */}
						<div className="w-full !px-0 sm:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
							{service.tools_subsections.map(
								(category: any, categoryIndex: number) => {
									// Dot colors based on category index
									const dotColors = [
										"#FFAB40",
										"#87C42C",
										"#579DFF",
										"#FF6B57",
									];
									const dotColor = dotColors[categoryIndex % dotColors.length];

									return (
										<div
											key={categoryIndex}
											className="space-y-6 flex items-center justify-center"
										>
											<div className="flex flex-col gap-4 w-full">
												<h2 className="text-xl font-semibold text-gray-900">
													{category.title}
												</h2>
												<div className="space-y-3">
													{category.points?.map(
														(tool: string, toolIndex: number) => (
															<div
																key={toolIndex}
																className="flex items-center gap-3"
															>
																<div
																	className="w-3 h-3 rounded-full flex-shrink-0"
																	style={{ backgroundColor: dotColor }}
																></div>
																<span className="text-[#101828] font-[400] text-[15px] leading-[22px]">
																	{tool}
																</span>
															</div>
														)
													)}
												</div>
											</div>
										</div>
									);
								}
							)}
						</div>

						{/* OLD DYNAMIC CODE - COMMENTED FOR FUTURE USE */}
						{/* 
              <div className="w-full px-8 sm:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {service.sections.tools_used_section.sub_sections.map(
                  (
                    category: { description: string; title: string },
                    categoryIndex: number
                  ) => {
                    const tools = category.description
                      .split(",")
                      .map((tool) => tool.trim());

                    // Dot colors based on sub_section index
                    const dotColors = [
                      "#FFAB40",
                      "#87C42C",
                      "#579DFF",
                      "#FF6B57",
                    ];
                    const dotColor = dotColors[categoryIndex] || "#20C5BA"; // fallback color

                    return (
                      <div
                        key={categoryIndex}
                        className="space-y-6 flex items-center justify-center"
                      >
                        <div className="flex flex-col gap-4 w-full">
                          <h2 className="text-xl font-semibold text-gray-900">
                            {category.title}
                          </h2>

                          <div className="space-y-3">
                            {tools.map((tool: string, toolIndex: number) => (
                              <div
                                key={toolIndex}
                                className="flex items-center gap-3"
                              >
                                <div
                                  className="w-3 h-3 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: dotColor }}
                                ></div>
                                <span className="text-[#101828] font-[400] text-[15px] leading-[22px]">
                                  {tool}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
              */}
					</div>
				</div>
			)}

			{/* CTA Button */}
			<div className="mt-12 w-full justify-center flex">
				<button className="text-[16px] h-[52px] bg-[#20C5BA] hover:bg-[#22aea5] text-white px-8 py-4 rounded-[5px] font-[500] duration-200 transition-all">
					Let's Design Something Brilliant
				</button>
			</div>
			{/* featured projects */}
			<div className="bg-white py-16 lg:py-24 font-roboto">
				<div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
					{/* Header */}
					<div className="text-center mb-16">
						<h2 className="text-[32px] font-[600] text-[#333333] tracking-[-3%] mb-6">
							Featured Projects
						</h2>
						<p className="text-[20px] text-[#0F172A] font-[500] leading-[33px] tracking-[-1.5%] my-6">
							Real results from our recent UI/UX design projects
						</p>
					</div>
					{/* Projects Grid */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projectsData &&
							projectsData.slice(0, 6).map((project: any, index: number) => (
								<Link
									href={`/projects/${project.slug}`}
									key={index}
									className="bg-white rounded-2xl overflow-hidden group flex flex-col h-full"
								>
									{/* Project Image */}
									<div className="relative aspect-[400/360] overflow-hidden rounded-b-2xl bg-gray-50">
										<Image
											src={
												project.hero_image?.image ||
												project.image ||
												"/placeholder.svg"
											}
											alt={
												project.hero_image?.alt_text ||
												project.title ||
												"Project image"
											}
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											className="object-cover"
											priority={index === 0}
										/>
									</div>

									{/* Content */}
									<div className="p-6 px-1 flex flex-col flex-1 w-full">
										{/* Tags */}
										<div className="flex flex-wrap gap-4 mb-4">
											{project.tags?.map(
												(
													tag: string | { id: number; name: string },
													tagIndex: number
												) => (
													<span
														key={tagIndex}
														className="text-white font-medium text-sm px-3 py-1 rounded-full"
														style={{
															backgroundColor: [
																"#579DFF",
																"#8D72D0",
																"#FCBA65",
															][(index * 10 + tagIndex) % 3],
														}}
													>
														{typeof tag === "string" ? tag : tag.name}
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
											{project.title || project.name}
										</h3>

										{/* Description */}
										<div className="flex-1 mb-6">
											<p className="text-gray-600 leading-relaxed line-clamp-3">
												{project.excerpt || project.description}
											</p>
										</div>

										{/* Read More Button */}
										<button className="cursor-pointer hover:bg-gray-100 border border-[#20C5BA] text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200 inline-flex justify-center items-center self-start">
											Read More
										</button>
									</div>
								</Link>
							))}
					</div>
				</div>
			</div>

			{/* related posts */}
			<div className="w-full max-w-[90%] mx-auto flex flex-col py-16 lg:py-24 lg:pt-0 font-roboto">
				<div className="px-0 sm:px-6 lg:px-8">
					{/* Header */}
					<div className="flex justify-between mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
							Popular Post
						</h2>
						<Link href="/blogs">
							<button className="cursor-pointer bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-sm text-sm transition-colors duration-200">
								View All
							</button>
						</Link>
					</div>

					{/* Horizontally Scrollable Posts */}
					<div className="overflow-x-auto scrollbar-hide -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
						<div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
							{blogs.slice(0, 6).map((post: Blog) => (
								<Link
									href={`/blogs/${post.slug}`}
									key={post.id}
									className="bg-white w-80 flex-shrink-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-[430px]"
								>
									{/* Post Image */}
									<div className="relative w-full h-48 bg-gray-100 rounded-2xl overflow-hidden">
										<Image
											src={post.featured_image?.image || "/placeholder.svg"}
											alt={post.featured_image?.alt_text || post.title}
											fill
											className="object-cover group-hover:scale-105 transition-transform duration-300"
										/>
									</div>

									{/* Content */}
									<div className="p-6 flex flex-col flex-1">
										{/* Categories */}
										<div className="flex flex-wrap gap-3 mb-3">
											{post.tags?.slice(0, 2).map((tag, index) => (
												<span
													key={index}
													className={`${
														index % 2 === 0
															? "bg-[#F7F0FE] text-[#6D28D9]"
															: "bg-[#E0F2FE] text-[#0369A1]"
													} font-medium text-xs px-2 py-1 rounded-full`}
												>
													{tag}
												</span>
											))}
										</div>

										{/* Date & Time */}
										<div className="text-sm text-gray-500 mb-4 font-roboto">
											<span className="text-[#999999] text-[14px] font-[500] leading-[150%]">
												{formatDate(post.created_at as string)}
											</span>{" "}
											<span className="text-[#333333] text-[14px] font-[700] leading-[150%] ml-3">
												{formatTime(post.created_at as string)}
											</span>
										</div>

										{/* Title */}
										<h2 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
											{post.title}
										</h2>

										{/* Description */}
										<p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
											{post.excerpt}
										</p>

										{/* Read More Link */}
										<div className="mt-auto pt-2">
											<button className="text-[#FFAB40] cursor-pointer underline font-medium text-sm transition-colors duration-200">
												Read More...
											</button>
										</div>
									</div>
								</Link>
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

			{/* client testimonials/feedback section */}
			{service?.testimonials &&
				Array.isArray(service.testimonials) &&
				service.testimonials.length > 0 && (
					<div className="mx-auto flex flex-col px-6 py-12 bg-[#F7F7F7] w-full font-roboto">
						{/* Header Section */}
						<div className="max-w-[90%] self-center mb-12">
							<div className="text-center">
								<p className="text-[#FFAB40] font-medium text-sm mb-2">
									Client's Feedback
								</p>
								<h2 className="font-roboto leading-[40px] tracking-[-1.5%] text-[34px] font-[800] text-[#0F172A] mb-4">
									What Our Clients Say
								</h2>
								<p className="text-[20px] text-[#0F172A] font-[500] leading-[33px] tracking-[-1.5%] my-6">
									Real feedback from clients who trusted us with their projects
								</p>
							</div>
						</div>

						{/* Testimonials Grid */}
						<div className="max-w-6xl self-center grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{/* First Card - Call to Action */}
							<div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
								<div className="flex flex-col items-start justify-between">
									<div className="">
										<p className="text-[#FFAB40] font-medium text-sm mb-2">
											Client's Feedback
										</p>
										<h2 className="font-roboto leading-[40px] tracking-[-1.5%] text-[34px] font-[800] text-[#0F172A] mb-4">
											What They Say After Using Our Product
										</h2>
										<p className="text-[20px] text-[#0F172A] font-[500] leading-[33px] tracking-[-1.5%] my-6">
											Many of our members have started their early careers with
											us.
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

							{/* Testimonial Cards */}
							{service.testimonials.map((testimonial: any, index: number) => (
								<div
									key={index}
									className="bg-white items-center flex flex-col rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
								>
									{/* Avatar and Info */}
									<div className="flex flex-col items-center text-center mb-4">
										<div className="relative w-12 h-12">
											<Image
												src={testimonial.image}
												alt={
													testimonial.alt_text || testimonial.name || "Client"
												}
												fill
												className="rounded-full object-cover"
												unoptimized
											/>
										</div>
										<div>
											<h2 className="font-[600] font-poppins mt-2 text-[#0F1125] text-[20px]">
												{testimonial.name}
											</h2>
											<p className="text-gray-500 text-[18px] font-[500] leading-[150%]">
												{testimonial.designation}
											</p>
										</div>
									</div>

									<div className="border border-[#E9EFF5] w-[95%] mb-3 mx-2" />

									{/* Feedback */}
									<p className="text-[#0F1125] font-[500] leading-[150%] text-center text-[18px] mb-4">
										{testimonial.comment}
									</p>

									{/* Rating */}
									{testimonial.stars && (
										<div className="flex gap-1">
											{renderStars(testimonial.stars)}
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				)}

			{/* info section */}
			<InfoSection
				title="Ready to Transform Your User Experience?"
				subText="Let's discuss how our UI/UX design service can help you create digital experiences that users love and drive real business results."
			/>

			{/* stay in loop */}
			<StayInLoop />

			{/* footer */}
			{/* <Footer /> */}
		</>
	);
};

export default ServicePage;

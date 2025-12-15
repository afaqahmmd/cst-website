"use client";

import React, { use } from "react";
import Image from "next/image";
import { Check, MoveRight, Smartphone } from "lucide-react";
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
import { useServices } from "@/hooks/useServices";
import { Service } from "@/types/service";
import { useIndustries } from "@/hooks/useIndustries";
import { useProjectBySlug } from "@/hooks/useProjectBySlug";
import { useBlogs } from "@/hooks/useBlogs";
import { Blog } from "@/types/blog";
import { normalizeImageUrl } from "@/utils/normalizeImageUrl";

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

// Helper to pick a soft colored background for icon bubbles
const getIconBackgroundClass = (index: number) => {
	const palette = [
		"bg-[#FFFAE9]", // soft yellow
		"bg-[#E9FFEF]", // soft green
		"bg-[#E0F2FE]", // soft blue
		"bg-[#F7F0FE]", // soft purple
		"bg-[#FFE4E6]", // soft pink/red
	];
	return palette[index % palette.length];
};

const formatBlogDate = (dateString: string) => {
	if (!dateString) return "";
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});
};

const formatBlogTime = (dateString: string) => {
	if (!dateString) return "";
	const date = new Date(dateString);
	return date.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
	});
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

	// Services API now returns a paginated shape: { count, next, previous, results }
	// Fallback to .data for backward compatibility if needed.
	const allServices = servicesData?.results || servicesData?.data || [];
	// Use is_published from the new API; fallback to is_active if present
	const activeServices = allServices.filter((service: Service) =>
		typeof service.is_published === "boolean"
			? service.is_published
			: (service as any).is_active
	);
	const services = activeServices.length > 0 ? activeServices : allServices;
	const {
		data: industriesList,
		isLoading: industriesLoading,
		error: industriesError,
	} = useIndustries();

	// Industries API now returns paginated response with results array
	const industries = industriesList?.results || industriesList?.data || [];

	const { data: blogsData } = useBlogs();
	const blogs: Blog[] =
		blogsData?.results || blogsData?.data || blogsData?.blogs || [];

	const totalGoalItems = project?.project_goal_section?.items?.length || 0;

	// Handle loading state
	if (isLoading || isServicesLoading || industriesLoading) {
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
						{project?.title}
					</h2>
					<p className="font-roboto font-normal text-[#666666] text-[24px] leading-[150%] tracking-[0]">
						{project?.excerpt}
					</p>
					<div className="flex flex-wrap gap-4 items-center">
						{project?.icons?.map((icon: any, index: number) => (
							<div
								key={index}
								className={`h-20 w-20 flex items-center justify-center rounded-full overflow-hidden p-2 ${getIconBackgroundClass(
									index
								)}`}
							>
								<Image
									src={icon?.image || "/images/placeholder.jpg"}
									alt={icon?.alt_text || ""}
									width={47}
									height={47}
								/>
							</div>
						))}
					</div>
				</div>

				<div className="relative aspect-[308/225] mt-12 w-full max-w-7xl mx-auto">
					<Image
						src={project?.hero_image?.image || "/images/placeholder.jpg"}
						alt={
							project?.hero_image?.alt_text || project?.title || "Project image"
						}
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
						{project?.challenge_title}
					</h2>
					<p className="font-roboto font-normal text-[#666666] text-[24px] leading-[150%] tracking-[0] mt-5">
						{project?.challenge_description}
					</p>
				</div>
			</section>

			{/* project goals section */}
			<section className="w-full bg-white px-12 ">
				<div className="lg:max-w-[70%] relative rounded-[28px] p-12 mx-auto mt-12 flex flex-col bg-[#FAFBFA] text-center lg:px-8 md:px-6 px-4">
					<h2 className=" font-roboto text-[#2B2B2B] font-[600] text-[48px] leading-[100%] tracking-[-3%]">
						{project?.project_goal_title}
					</h2>
					<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mt-12 mt-8">
						{project?.project_goal_content?.map(
							(goalItem: any, index: number) => (
								<div
									key={index}
									className="flex flex-col items-center lg:gap-5 gap-4"
								>
									<Image
										src={goalItem.icon || "/placeholder.svg"}
										alt={goalItem.alt_text || "Goal icon"}
										width={80}
										height={80}
									/>
									<p className="text-[#22222A] text-[22px] leading-[150%] tracking-[0%] font-[500]">
										{goalItem.goal}
									</p>
								</div>
							)
						)}
					</div>
				</div>
			</section>

			{/* Project Goal Section - Intro and Items */}
			{project?.project_goal_section && (
				<section className="w-full mt-12 bg-white px-12">
					<div className="lg:max-w-[70%] relative p-12 mx-auto flex flex-col text-start lg:px-16 md:px-12 px-4">
						{/* Goal Section Items */}
						{project?.project_goal_section?.items?.map(
							(item: any, index: number) => (
								<div
									key={index}
									className={`mt-12 md:ml-12 mx-auto w-full ${
										totalGoalItems >= 5 && index === 4
											? "bg-[#F6FAFE] rounded-xl p-8"
											: ""
									}`}
								>
									<h2 className="font-roboto mb-6 mx-auto font-semibold text-[32px] leading-[100%] tracking-[-3%] text-[#333333]">
										{item.title}
									</h2>
									{index < 4 && (
										<p className="lg:mt-8 mx-auto mt-4 font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
											{item.desc}
										</p>
									)}
									{item.points?.length > 0 && (
										<>
											{/* Case: 3rd item (index 2) when there are at least 3 items: arrows, no vertical line */}
											{totalGoalItems >= 3 && index === 2 ? (
												<>
													<div className="mt-8 space-y-3 md:ml-12 mx-auto">
														{item.points.map(
															(point: string, pointIndex: number) => (
																<div
																	key={pointIndex}
																	className="flex items-start gap-3"
																>
																	<MoveRight
																		size={24}
																		color="#FFAB40"
																		className="mt-1 shrink-0"
																	/>
																	<p className="font-roboto text-[20px] leading-[32px] text-[#666666]">
																		{point}
																	</p>
																</div>
															)
														)}
													</div>
													{item.bottomDescription && (
														<div className="mt-6 md:ml-12 mx-auto">
															<p className="font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
																{item.bottomDescription}
															</p>
														</div>
													)}
												</>
											) : null}

											{/* Case: 4th item (index 3) when there are at least 4 items: green box with bullets, no orange line */}
											{totalGoalItems >= 4 && index === 3 ? (
												<>
													<div className=" mx-auto w-full mt-8">
														<div className="bg-[#8FD8184D] rounded-xl p-8">
															<ul className="flex flex-col gap-[10px] ml-[30px] list-disc text-[#3C5612] font-[500] text-[22px] leading-[173%] tracking-[0%]">
																{item.points.map(
																	(point: string, pointIndex: number) => (
																		<li key={pointIndex}>{point}</li>
																	)
																)}
															</ul>
														</div>
													</div>
													{item.bottomDescription && (
														<div className="mt-6 md:ml-12 mx-auto">
															<p className="font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
																{item.bottomDescription}
															</p>
														</div>
													)}
												</>
											) : null}

											{/* Case: 5th item (index 4) when there are at least 5 items: tick before each point */}
											{totalGoalItems >= 5 && index === 4 ? (
												<>
													<div className="mt-8 space-y-3 md:ml-12 mx-auto">
														{item.points.map(
															(point: string, pointIndex: number) => (
																<div
																	key={pointIndex}
																	className="flex items-start gap-3"
																>
																	<Check
																		size={22}
																		color="#22C55E"
																		className="mt-1 shrink-0"
																	/>
																	<p className="font-roboto text-[20px] leading-[32px] text-[#666666]">
																		{point}
																	</p>
																</div>
															)
														)}
													</div>
													{item.bottomDescription && (
														<div className="mt-6 md:ml-12 mx-auto">
															<p className="font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
																{item.bottomDescription}
															</p>
														</div>
													)}
												</>
											) : null}

											{/* Default style (for all other cases and items) */}
											{!(
												(totalGoalItems >= 3 && index === 2) ||
												(totalGoalItems >= 4 && index === 3) ||
												(totalGoalItems >= 5 && index === 4)
											) && (
												<>
													<div className="font-roboto mb-6 md:ml-16 mx-auto border-l-[5px] pl-12 mt-12 border-[#FFAB40]">
														<ul className="list-disc">
															{item.points.map(
																(point: string, pointIndex: number) => (
																	<li key={pointIndex}>
																		<p className="font-[400] text-[24px] leading-[40px] text-[#666666]">
																			{point}
																		</p>
																	</li>
																)
															)}
														</ul>
													</div>
													{item.bottomDescription && (
														<div className="mt-6  mx-auto">
															<p className="font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
																{item.bottomDescription}
															</p>
														</div>
													)}
												</>
											)}
										</>
									)}
								</div>
							)
						)}
					</div>
				</section>
			)}

			{/* technologies and tools used */}
			{project?.technology_content?.length > 0 && (
				<section className="w-full bg-white px-12">
					<div className="lg:max-w-[70%] relative lg:p-18 p-12 mt-12 mx-auto flex flex-col items-start text-start lg:px-16 md:px-12 px-4">
						<h2 className="font-roboto md:ml-12 mt-6 mx-auto text-[#2B2B2B] font-[600] text-[32px] leading-[100%] tracking-[-3%]">
							{project?.technology_title}
						</h2>
						<p className="lg:my-8 my-4 md:ml-12 mx-auto font-roboto font-[400] text-[16px] text-[#666666] leading-[150%] tracking-[0%]">
							{project?.technology_description}
						</p>
						<div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-12 w-full md:ml-12 mx-auto lg:mt-12 mt-8 mb-6">
							{project?.technology_content?.map((tech: any, index: number) => (
								<div className="flex flex-col gap-8" key={index}>
									<h2 className="font-poppins text-[#282D46] font-[600] md:text-[32px] text-[24px] leading-[100%] tracking-[-3%]">
										{tech.name}
									</h2>
									<div
										className={`${
											technologiesAndToolsUsed[
												index % technologiesAndToolsUsed.length
											]?.bgColor || "bg-gray-100"
										} flex flex-col items-center rounded-xl`}
									>
										<div className="flex flex-wrap gap-4 md:gap-5 items-center justify-center p-6 md:p-12 min-h-[110px] md:min-h-[150px]">
											{tech.icons?.map((icon: any, iconIndex: number) => (
												<div
													key={iconIndex}
													className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20"
												>
													<Image
														src={icon.url || "/placeholder.svg"}
														alt={icon.alt_text || ""}
														width={64}
														height={64}
														className="object-contain max-w-full max-h-full"
													/>
												</div>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			)}

			{/* Services Provided */}
			{services && services.length > 0 && (
				<div className="w-full max-w-[90%] mx-auto flex flex-col py-16 lg:py-24">
					<div className=" px-0 sm:px-6 lg:px-8">
						<h2 className="mb-12 text-3xl md:text-[46px] font-[700] text-[#333333] font-roboto">
							🏷️ Services Provided:
						</h2>
						{/* Services Grid */}

						<div className="flex flex-col gap-8">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
								{services.slice(0, 3).map((service: Service, index: number) => (
									<Link
										href={`/services/${service.slug}`}
										key={service.id}
										className="bg-white flex flex-col h-full rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 cursor-pointer"
									>
										<div className="flex flex-col items-start gap-4 mb-4 border-b border-[#D1D3D9] pb-4">
											<div className="flex items-start gap-4 flex-shrink-0 p-0 bg-white rounded-lg">
												{/* Service icon / hero image */}
												<Image
													src={service.hero_image?.image || "/placeholder.svg"}
													alt={
														service.hero_image?.alt_text ||
														`${service.name} service icon`
													}
													width={40}
													height={40}
													className="w-10 h-10 rounded-[10px] object-cover flex-shrink-0"
												/>
												<h2 className="relative inline-block text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
													<span className="absolute left-0 h-4 w-4 rounded-full bg-[#20C5BA80] z-0"></span>
													<span className="absolute left-1/2 -bottom-1 -translate-x-1/2 h-1 w-8 bg-[#20C5BA80] z-0"></span>
													<span className="relative z-10 line-clamp-2">
														{service.name}
													</span>
												</h2>
											</div>

											<div className="flex-1 min-w-0">
												<p className="text-[#868282] text-[16px] leading-[22px] font-[400]">
													{service.description.slice(0, 100)}...
												</p>
											</div>
										</div>

										<div className="space-y-2 mt-5">
											{(service.bullet_points &&
											service.bullet_points.length > 0
												? service.bullet_points
												: generateFeatures(service.description)
											).map((feature: string, featureIndex: number) => (
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
											))}
										</div>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Industry */}
			<div className="w-full max-w-[90%] mx-auto flex flex-col py-16 lg:py-24 lg:pt-0">
				<div className=" px-0 sm:px-6 lg:px-8">
					<h2 className="mb-12 text-3xl md:text-[46px] font-[700] text-[#333333] font-roboto">
						🏷️ Industry:
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
						{industries.slice(0, 3).map((industry: any, index: any) => (
							<Link
								href={`/industries/${industry.slug}`}
								key={index}
								className="flex flex-col h-full overflow-hidden gap-4 bg-white border border-gray-200 rounded-[24px]"
							>
								<div className="w-full aspect-[400/280] relative">
									<Image
										src={
											industry?.hero_image?.image ||
											industry?.images?.[0] ||
											"/placeholder.svg"
										}
										alt={
											industry?.hero_image?.alt_text ||
											industry?.image_alt_texts?.[0] ||
											"industry"
										}
										fill
										className="object-cover"
									/>
								</div>
								<div className="flex flex-col gap-4 p-6">
									<h2 className="font-Roboto text-[#2B2B2B] font-[700] text-[20px] line-clamp-2 leading-[100%] tracking-[-3%]">
										{industry?.title || industry?.name}
									</h2>
									<p className="font-roboto text-[#475569] text-[16px] tracking-[0%] font-[400] leading-[24px] line-clamp-3">
										{industry?.description || industry?.meta_description}
									</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>

			{/* popular posts */}
			<div className="w-full max-w-[90%] mx-auto flex flex-col py-16 lg:py-24 lg:pt-0">
				<div className="px-0 sm:px-6 lg:px-8">
					{/* Header */}
					<div className="flex justify-between mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
							Popular Post
						</h2>
						<Link href={`/blogs`}>
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
												{formatBlogDate(post.created_at as string)}
											</span>{" "}
											<span className="text-[#333333] text-[14px] font-[700] leading-[150%] ml-3">
												{formatBlogTime(post.created_at as string)}
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
											<button className="text-[#FFAB40] underline cursor-pointer font-medium text-sm transition-colors duration-200">
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

			<InfoSection />
			<StayInLoop />
			{/* <Footer /> */}
		</main>
	);
};

export default page;

import React from "react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import DarkLogo from "@/assets/images/logo-dark.png";
import Image from "next/image";
import Facebook from "@/components/svgs/icons/fb";
import Youtube from "@/components/svgs/icons/youtube";
import Linkedin from "@/components/svgs/icons/linkedin";
import Twitter from "@/components/svgs/icons/x";
import Link from "next/link";
import CortechFooter from "@/assets/images/CortechFooter.png";
import stashPinLocation from "@/assets/images/stashPinLocation.png";
// Data objects for footer content
const footerColumns = [
	{
		title: "Services",
		links: [
			{ label: "Web Development", href: "#services-section" },
			{ label: "UI/UX Design", href: "#services-section" },
			{ label: "App Development", href: "#services-section" },
			{ label: "Google Ads", href: "#services-section" },
			{ label: "Digital Strategy", href: "#services-section" },
		],
	},
	{
		title: "Company",
		links: [
			{ label: "About Us", href: "/about" },
			{ label: "Our Team", href: "#team-section" },
			{ label: "Testimonials", href: "#clients-section" },
			{ label: "Contact", href: "#contact-section" },
		],
	},
	{
		title: "Industries",
		links: [
			{ label: "eCommerce", href: "#industries-section" },
			{ label: "Healthcare", href: "#industries-section" },
			{ label: "Fintech", href: "#industries-section" },
			{ label: "EdTech", href: "#industries-section" },
			{ label: "Logistics", href: "#industries-section" },
		],
	},
	{
		title: "Resources",
		links: [
			{ label: "Case Studies", href: "#case-studies-section" },
			{ label: "FAQs", href: "#faqs-section" },
			{ label: "Privacy Policy", href: "/privacy-policy" },
			{ label: "Terms & Conditions", href: "/terms-and-conditions" },
			{ label: "Refund Policy", href: "/refund-policy" },
		],
	},
];

const socialLinks = [
	{
		name: "Facebook",
		href: "https://www.facebook.com/share/1B2L4EMkTR/",
		icon: "Facebook",
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com/cortechsols?igsh=MXZoYXcybGVkNzRhaQ==",
		icon: "Instagram",
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/company/cortechsols/",
		icon: "Linkedin",
	},
];

const contactInfo = {
	email: "CortechsolsSupport@gmail.com",
	phone: "+1 7373125488",
	location: "Islamabad, Pakistan",
};

// Reusable FooterColumn component - keeping exact same styling
const FooterColumn: React.FC<{ column: (typeof footerColumns)[0] }> = ({
	column,
}) => {
	return (
		<div>
			<h3 className="font-semibold mb-4">{column.title}</h3>
			<ul className="space-y-2 text-sm">
				{column.links.map((link, index) => (
					<li key={index}>
						<Link href={link.href} className="hover:underline">
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

const Footer = () => {
	return (
		<footer className="w-full max-w-[1920px] mx-auto relative bg-[#20292C] text-white py-10 px-6 overflow-hidden">
			{/* Radial gradient background layer */}
			{/* <div className='absolute inset-0 z-0 pointer-events-none'>
        <div
          className='absolute md:top-[-100px] top-[-200px] md:left-[-100px]  md:w-[80%] w-full md:min-h-[600px] min-h-[800px] rounded-full opacity-60
      bg-[radial-gradient(circle,#20C5BA,transparent_70%)]'
        />
      </div> */}

			{/* footer content */}
			<div className="max-w-7xl relative z-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
				{/* Column 1 - Logo & Contact */}
				<div className="space-y-4 lg:col-span-2">
					<div className="flex items-center space-x-2">
						<Image
							src={CortechFooter.src}
							alt="Logo"
							width={200}
							height={100}
						/>
					</div>
					<div className="space-y-2 text-sm">
						<a
							href={`mailto:${contactInfo.email}`}
							className="flex items-center gap-2 underline cursor-pointer"
						>
							<Mail size={16} />
							<span>{contactInfo.email}</span>
						</a>
						<p className="flex items-center gap-2">
							<Phone size={16} /> {contactInfo.phone}
						</p>
						<p className="flex items-center gap-2">
							<img
								src={stashPinLocation.src}
								alt="location"
								width={20}
								height={20}
							/>{" "}
							{contactInfo.location}
						</p>
					</div>
					<div className="flex space-x-[16px] mt-3">
						{socialLinks.map((social, index) => {
							const getIcon = () => {
								switch (social.icon) {
									case "Facebook":
										return <Facebook />;
									case "Linkedin":
										return <Linkedin />;
									case "Instagram":
										return <Instagram color="#19817A" />;
									default:
										return null;
								}
							};

							return (
								<a
									key={index}
									href={social.href}
									target="_blank"
									className="bg-white p-2 flex items-center justify-center rounded-[12px] w-[40px] h-[40px] hover:bg-white/75"
								>
									{getIcon()}
								</a>
							);
						})}
					</div>
				</div>

				{/* Footer Columns - using data objects */}
				{footerColumns.map((column, index) => (
					<FooterColumn key={index} column={column} />
				))}
			</div>

			{/* Horizontal border line */}
			<hr className="border-gray-700 my-8" />

			{/* Newsletter and copyright section */}
			<div className="max-w-7xl relative z-10 mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
				<div className="flex flex-col items-center md:items-start gap-2">
					<h3 className="font-semibold text-lg">Stay Updated</h3>
					<p className="text-sm text-center md:text-left text-[#D3DBE8]">
						Subscribe to our newsletter for the latest updates and insights.
					</p>
					<div className="flex lg:flex-row md:items-start items-center flex-col gap-4">
						<p className="text-[#19E675]">
							© 2025 CortechSols. All rights reserved.
						</p>
						<Link
							href="/privacy-policy"
							className="hover:underline text-[#19E675]"
						>
							Privacy Policy
						</Link>
						<Link
							href="/terms-and-conditions"
							className="hover:underline text-[#19E675]"
						>
							Terms of Service
						</Link>
					</div>
				</div>

				<div className="flex flex-col items-center md:items-end gap-2 text-sm">
					<div className="flex flex-col sm:flex-row gap-2 mt-2">
						<input
							type="email"
							placeholder="Enter your email"
							className="px-4 py-2 rounded-lg bg-white placeholder:text-black text-black sm:w-[300px] w-full"
						/>
						<button
							className="cursor-pointer px-6 py-2 rounded-lg text-white transition-all hover:opacity-90"
							style={{
								background:
									"linear-gradient(93.21deg, #1F8982 -8.46%, #2FADA5 53.53%, #1F8982 115.53%)",
							}}
						>
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import TabsPic from "@/assets/images/industries/tabs-pic.png";
import Building from "@/components/svgs/icons/Building";
import Bank from "@/components/svgs/icons/Bank";
import Store from "@/components/svgs/icons/Store";
import HeartPlus from "@/components/svgs/icons/HeartPlus";
import Truck from "@/components/svgs/icons/Truck";
import Laptop from "@/components/svgs/icons/Laptop";

interface Industry {
  slug: string;
  title: string;
  name?: string; // Legacy field
  description?: string;
  hero_image?: {
    id: number;
    image: string;
    alt_text: string;
  };
  images?: string[]; // Legacy field
  projects_count?: number;
  reviews_count?: number;
  industries_count?: number;
}

interface IndustriesTabsSectionProps {
  industries: Industry[];
}

interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<{
    className?: string;
    fill?: string;
    stroke?: string;
  }>;
}

const IndustriesTabsSection: React.FC<IndustriesTabsSectionProps> = ({ industries }) => {
  const [activeTab, setActiveTab] = useState<string>("");
  const [industriesData, setIndustriesData] = useState<Industry[]>(industries);
  const [loading, setLoading] = useState(false);

  // Fetch industries data on mount
  useEffect(() => {
    const fetchIndustries = async () => {
      setLoading(true);
      try {
        console.log("Fetching industries from: /api/industries");
        const response = await fetch("/api/industries");
        if (response.ok) {
          const data = await response.json();
          const fetchedIndustries = data.results || data.data || [];
          setIndustriesData(fetchedIndustries);
          console.log("Industries fetched:", fetchedIndustries);
        }
      } catch (error) {
        console.error("Error fetching industries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIndustries();
  }, []);

  // Update activeTab when industries are loaded
  useEffect(() => {
    if (industriesData.length > 0 && !activeTab) {
      setActiveTab(industriesData[0].slug);
    }
  }, [industriesData, activeTab]);

  // Icons for tabs
  const icons = [Laptop, Building, Store, Bank, HeartPlus, Truck, Store];

  const tabs: Tab[] = industriesData.map((industry, index) => ({
    id: industry.slug,
    label: (industry.title || industry.name || "Industry") as string,
    icon: icons[index % icons.length], // cycles through icons
  }));

  // Find current industry from API data
  const currentIndustry = industriesData.find((industry) => industry.slug === activeTab);

  console.log("current industry in tab:", currentIndustry);
  // Fallback data structure for the current industry
  const currentData = currentIndustry
    ? {
      title: currentIndustry.title || currentIndustry.name,
      description: currentIndustry.description,
      stats: {
        projects: currentIndustry.projects_count ? `${currentIndustry.projects_count}+` : "0+",
        reviews: currentIndustry.reviews_count ? `${currentIndustry.reviews_count}+` : "0+",
        industries: currentIndustry.industries_count ? `${currentIndustry.industries_count}+` : "0+",
      },
      image: currentIndustry.hero_image?.image || currentIndustry.images?.[0] || TabsPic.src,
    }
    : null;

  return (
    <div className='relative flex flex-col items-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 -mt-2 z-30'>
      {/* Tab Navigation */}
      <div className='relative w-full z-40 bg-white rounded-t-lg overflow-hidden shadow-sm border'>
        {/* Desktop Tabs */}
        <div className='hidden sm:flex overflow-x-auto scrollbar-hide'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 flex flex-1 items-center justify-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-200 whitespace-nowrap ${activeTab === tab.id
                ? "bg-[#20C5BA] text-white"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
            >
              <span className='transition-colors duration-200'>
                <tab.icon
                  fill={activeTab === tab.id ? "#ffffff" : "#2B2B2B"}
                  stroke={activeTab === tab.id ? "#ffffff" : "#2B2B2B"}
                />
              </span>
              <p className='text-lg font-medium m-0'>{tab.label}</p>
            </button>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className='sm:hidden p-2'>
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className='w-full border rounded-md px-3 py-2 text-gray-700 focus:ring-2 focus:ring-[#20C5BA] focus:outline-none'
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className='bg-[#579DFF] w-full rounded-b-2xl overflow-hidden shadow-md'>
        {currentData ? (
          <div className='flex flex-col lg:flex-row lg:min-h-[600px]'>
            {/* Left Image Section */}
            <div className='lg:w-1/2 relative h-64 sm:h-80 lg:h-auto'>
              <Image
                src={currentData.image || TabsPic.src}
                alt={`${currentData.title} showcase`}
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
                className='object-cover'
                priority
              />
            </div>

            {/* Right Content Section */}
            <div className='lg:w-1/2 p-6 sm:p-8 lg:p-12 text-white flex flex-col justify-between'>
              <div className='flex flex-col gap-4'>
                <h2 className='text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6'>
                  {currentData.title}
                </h2>

                <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-roboto text-[#e6eaef] leading-relaxed mb-6 sm:mb-8'>
                  {currentData.description}
                </p>
              </div>

              <div>
                {/* Stats */}
                <div className='flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 mb-6 sm:mb-8'>
                  <div className='flex gap-2 items-center text-base sm:text-xl md:text-2xl font-normal text-white'>
                    {currentData.stats.projects}
                    <p>Projects</p>
                  </div>
                  <div className='hidden sm:block border-l h-5 border-white' />
                  <div className='flex gap-2 items-center text-base sm:text-xl md:text-2xl font-normal text-white'>
                    {currentData.stats.reviews}
                    <p>Reviews</p>
                  </div>
                  <div className='hidden sm:block border-l h-5 border-white' />
                  <div className='flex gap-2 items-center text-base sm:text-xl md:text-2xl font-normal text-white'>
                    {currentData.stats.industries}
                    <p>Industries</p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href={`/industries/${activeTab}`}>
                  <button className='bg-white text-[#579DFF] px-4 sm:px-6 py-2 sm:py-3 rounded-[5px] font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2 group'>
                    <p>Explore More</p>
                    <ArrowRight
                      color='#579DFF'
                      className='w-4 h-4 group-hover:translate-x-1 transition-transform'
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center min-h-[400px] text-white'>
            <p className='text-xl'>No industry data available</p>
          </div>
        )}
      </div>

      {/* Bottom Button */}
      <a
        href="tel:+17373125488"
        className="!cursor-pointer"
      >
        <button className=' cursor-pointer bg-[#20C5BA] hover:bg-[#17a398] mt-8 sm:mt-12 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-[5px] font-roboto font-medium text-base sm:text-lg md:text-xl'>
          Let's Build Something Great
        </button>
      </a>
    </div>
  );
};

export default IndustriesTabsSection;

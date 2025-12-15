"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Headphones,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Check,
} from "lucide-react";
import logo from "@/assets/images/logo.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useServices } from "@/hooks/useServices";
import { Service } from "@/types/service";
import { useRouter, usePathname } from "next/navigation";

export default function TopNav() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const { data: servicesData, isLoading } = useServices();
  const servicesList = servicesData?.results?.map((service: Service) => service.name) || [];

  // Check if current page is a service page
  const isServicePage = pathname?.startsWith('/services');
  
  // Get current service slug from pathname
  const currentServiceSlug = pathname?.startsWith('/services/') 
    ? pathname.split('/services/')[1] 
    : null;

  const handleServiceSelect = (slug: string) => {
    router.push(`/services/${slug}`);
    // Reset the select value after navigation
    setTimeout(() => setSelectedService(""), 100);
  };

  return (
    <header className="sticky top-0 z-50 w-full max-w-[1920px] mx-auto bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="mx-4 md:mx-12 flex h-16 items-center justify-between">
        {/* Logo + Desktop Nav */}
        <div className="flex items-center gap-6 md:gap-12">
          <Link href="/" className="hover:text-slate-900">
            <Image
              src={logo}
              alt="Cortechsols LLC logo"
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-md font-[500] text-[#0F172A]">
            <Link href="/about" className="hover:text-slate-900">
              About
            </Link>

            {/* Services Select */}
            <Select value={selectedService} onValueChange={handleServiceSelect}>
              <SelectTrigger className="!cursor-pointer border-0 bg-transparent p-0 h-auto shadow-none focus:ring-0 focus:ring-offset-0 hover:text-slate-900 flex items-center gap-2">
                <span className={`font-[500] text-[15px] ${isServicePage ? 'text-[#20C5BA] font-[600]' : 'text-[#0F172A]'}`}>Services</span>
              </SelectTrigger>
              <SelectContent>
                {isLoading ? (
                  <SelectItem value="loading" disabled>
                    <span className="text-gray-500">Loading...</span>
                  </SelectItem>
                ) : servicesData?.results?.filter((service: any) => service.is_published).length === 0 ? (
                  <SelectItem value="empty" disabled>
                    <span className="text-gray-500">No published services</span>
                  </SelectItem>
                ) : (
                  servicesData?.results
                    .filter((service: any) => service.is_published)
                    .map((service: any, index: number) => {
                      const isActive = currentServiceSlug === service.slug;
                      return (
                        <SelectItem key={index} value={service.slug}>
                          <div className="flex items-center justify-between w-full">
                            <span className={isActive ? 'text-[#20C5BA] font-[600]' : ''}>
                              {service.name}
                            </span>
                            {isActive && (
                              <Check className="w-4 h-4 ml-2 text-[#20C5BA]" />
                            )}
                          </div>
                        </SelectItem>
                      );
                    })
                )}
              </SelectContent>
            </Select>

            <Link href="/industries" className="hover:text-slate-900">
              Industries
            </Link>
            <Link href="/blogs" className="hover:text-slate-900">
              Blogs
            </Link>
            <Link href="/projects" className="hover:text-slate-900">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-slate-900">
              Contact
            </Link>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-3 text-slate-700">
            <Headphones className="h-6 w-6 text-[#2B2B2B]" aria-hidden="true" />
            <a
              href="tel:+17373125488"
              className="text-[#2B2B2B] mt-1 font-roboto font-[500] text-[16px]"
            >
              +1 7373125488
            </a>
          </div>
          <Link href="/contact">
            <Button className="hidden sm:flex cursor-pointer bg-[#20C5BA] rounded-[3px] min-w-[150px] p-3 hover:bg-teal-600 text-white">
              <p className="font-roboto font-[500] text-[16px] leading-[20px]">
                Get In Touch
              </p>
              <ArrowRight />
            </Button>
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-md h-screen overflow-y-auto">
          <nav className="flex flex-col space-y-4 p-4 text-[#0F172A] font-[500]">
            <Link href="/about" onClick={() => setMobileOpen(false)}>
              About
            </Link>

            {/* Collapsible Services */}
            <button
              className="flex items-center justify-between"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {servicesOpen && (
              <div className="ml-4 flex flex-col space-y-2 text-sm">
                {isLoading || servicesList.length === 0 ? (
                  <span>Loading...</span>
                ) : (
                  servicesData?.results
                    .filter((service: any) => service.is_published)
                    .map((service:any, index: number) => (
                      <Link
                        href={`/services/${service.slug}`}
                        key={index}
                        onClick={() => setMobileOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))
                )}
              </div>
            )}

            <Link href="/industries" onClick={() => setMobileOpen(false)}>
              Industries
            </Link>
            <Link href="/blogs" onClick={() => setMobileOpen(false)}>
              Blogs
            </Link>
            <Link href="/projects" onClick={() => setMobileOpen(false)}>
              Projects
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>

            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <Button className="bg-[#20C5BA] cursor-pointer rounded-[3px] h-10 hover:bg-teal-600 text-white">
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Get In Touch
                <ArrowRight />
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

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
} from "lucide-react";
import logo from "@/assets/images/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useServices } from "@/hooks/useServices";
import { Service } from "@/types/service";

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { data: servicesData, isLoading } = useServices();
  const servicesList =
    servicesData?.data?.map((service: Service) => service.title) || [];

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
            <Link href="#hero-section" className="hover:text-slate-900">
              About
            </Link>
            <Link href="#services-section" className="hover:text-slate-900">
              Services
            </Link>

            {/* Services Dropdown */}
            {/* <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-slate-900">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {isLoading || servicesList.length === 0 ? (
                  <DropdownMenuItem>Loading...</DropdownMenuItem>
                ) : (
                  servicesList.map((title: string, index: number) => (
                    <DropdownMenuItem asChild key={index}>
                      <Link href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}>
                        {title}
                      </Link>
                    </DropdownMenuItem>
                  ))
                )}
              </DropdownMenuContent>
            </DropdownMenu> */}

            <Link href="#industries-section" className="hover:text-slate-900">
              Industries
            </Link>

            <Link href="#contact-section" className="hover:text-slate-900">
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
          <Link href="#contact-section">
            <Button className="hidden sm:flex bg-[#20C5BA] rounded-[3px] min-w-[150px]  p-3 hover:bg-teal-600 text-white">
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
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-md h-screen overflow-y-auto">
          <nav className="flex flex-col space-y-4 items-center p-4 text-[#0F172A] font-[500]">
            <Link href="#hero-section" onClick={() => setMobileOpen(false)}>
              About
            </Link>

            {/* Collapsible Services */}
            <Link href="#services-section" onClick={() => setMobileOpen(false)}>
              <span>Services</span>
            </Link>

            <Link
              href="#industries-section"
              onClick={() => setMobileOpen(false)}
            >
              Industries
            </Link>

            <Link href="#contact-section" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>

            <Link href="#contact-section">
              <Button
                className="bg-[#20C5BA] rounded-[3px] h-10 hover:bg-teal-600 text-white"
                onClick={() => setMobileOpen(false)}
              >
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

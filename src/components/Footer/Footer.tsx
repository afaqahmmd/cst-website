import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,

} from "lucide-react";
import DarkLogo from "@/assets/images/logo-dark.png";
import Image from "next/image";
import Facebook from "@/components/svgs/icons/fb";
import Youtube from "@/components/svgs/icons/youtube";
import Linkedin from "@/components/svgs/icons/linkedin";
import Twitter from "@/components/svgs/icons/x";


const Footer = () => {
  return (
    <footer className="w-full max-w-[1920px] mx-auto relative bg-zinc-900 text-white py-10 px-6 overflow-hidden">
      {/* Radial gradient background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute md:top-[-100px] top-[-200px] md:left-[-100px]  md:w-[80%] w-full md:min-h-[600px] min-h-[800px] rounded-full opacity-60
      bg-[radial-gradient(circle,#20C5BA,transparent_70%)]"
        />
      </div>

      {/* footer content */}
      <div className="max-w-7xl relative z-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Column 1 - Logo & Contact */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Image src={DarkLogo.src} alt="Logo" width={200} height={100} />
          </div>
          <div className="space-y-2 text-sm">
            <a href="mailto:CortechsolsSuport@gmail.com" className="flex items-center gap-2 underline cursor-pointer">
              <Mail size={16} /> CortechsolsSupport@gmail.com
            </a>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +1 7373125488
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Islamabad, Pakistan
            </p>
          </div>
          <div className="flex space-x-[16px] mt-3">
            <a href="https://www.facebook.com/share/1B2L4EMkTR/" target="_blank" className="bg-white p-2 flex items-center justify-center rounded-[12px] w-[40px] h-[40px] hover:bg-white/75">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/cortechsols?igsh=MXZoYXcybGVkNzRhaQ==" target="_blank" className="bg-white p-2 flex items-center justify-center rounded-[12px] w-[40px] h-[40px] hover:bg-white/75">
              <Instagram  color="#19817A"/>
            </a>
            <a href="https://www.linkedin.com/company/cortechsols/" target="_blank" className="bg-white p-2 flex items-center justify-center rounded-[12px] w-[40px] h-[40px] hover:bg-white/75">
              <Linkedin />
            </a>
          </div>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#services-section" className="hover:underline">
                Web Development
              </a>
            </li>
            <li>
              <a href="#services-section" className="hover:underline">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#services-section" className="hover:underline">
                App Development
              </a>
            </li>
            <li>
              <a href="#services-section" className="hover:underline">
                Google Ads
              </a>
            </li>
            <li>
              <a href="#services-section" className="hover:underline">
                Digital Strategy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#hero-section" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#team-section" className="hover:underline">
                Our Team
              </a>
            </li>
            <li>
              <a href="#clients-section" className="hover:underline">
                Testimonials
              </a>
            </li>
           
            <li>
              <a href="#contact-section" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Industries */}
        <div>
          <h3 className="font-semibold mb-4">Industries</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#industries-section" className="hover:underline">
                eCommerce
              </a>
            </li>
            <li>
              <a href="#industries-section" className="hover:underline">
                Healthcare
              </a>
            </li>
           
            <li>
              <a href="#industries-section" className="hover:underline">
                Fintech
              </a>
            </li>
            <li>
              <a href="#industries-section" className="hover:underline">
                EdTech
              </a>
            </li>
            <li>
              <a href="#industries-section" className="hover:underline">
                Logistics
              </a>
            </li>
           
          </ul>
        </div>

        {/* Column 5 - Resources */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#case-studies-section" className="hover:underline">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#faqs-section" className="hover:underline">
                FAQs
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

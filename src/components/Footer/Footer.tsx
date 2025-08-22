import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
} from "lucide-react";
import DarkLogo from "@/assets/images/logo-dark.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full relative bg-zinc-900 text-white py-10 px-6 overflow-hidden">
      {/* Radial gradient background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-0 left-[-100px] w-[80%] min-h-[600px] rounded-full opacity-60
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
            <p className="flex items-center gap-2">
              <Mail size={16} /> CortechsolsSuport@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +92 3XX-XXXXXXX
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Islamabad, Pakistan
            </p>
          </div>
          <div className="flex space-x-4 mt-3">
            <a href="#">
              <Facebook className="h-5 w-5 hover:text-teal-400" />
            </a>
            <a href="#">
              <Youtube className="h-5 w-5 hover:text-teal-400" />
            </a>
            <a href="#">
              <Twitter className="h-5 w-5 hover:text-teal-400" />
            </a>
            <a href="#">
              <Linkedin className="h-5 w-5 hover:text-teal-400" />
            </a>
          </div>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>App Development</li>
            <li>SEO & Performance</li>
            <li>Google Ads</li>
            <li>Digital Strategy</li>
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Culture</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 4 - Industries */}
        <div>
          <h3 className="font-semibold mb-4">Industries</h3>
          <ul className="space-y-2 text-sm">
            <li>eCommerce</li>
            <li>SaaS Startups</li>
            <li>Healthcare</li>
            <li>Education</li>
            <li>Fintech</li>
            <li>Retail</li>
          </ul>
        </div>

        {/* Column 5 - Resources */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Headphones,
  ChevronDown,
  MoveRight,
  ArrowRight,
} from "lucide-react";
import logo from "@/assets/images/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TopNav() {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="mx-12 flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-12">
          <Image
            src={logo}
            alt="Cortechsols LLC logo"
            priority
            className="h-10 w-auto"
          />
          <nav className="hidden md:flex items-center gap-6 text-md font-[500] text-[#0F172A] ">
            <Link href="/about" className="hover:text-slate-900">
              About
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center cursor-pointer gap-1 hover:text-slate-900">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/services" className="w-full">
                    All Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Mobile Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Cloud Solutions
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    IT Consulting
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="#" className="hover:text-slate-900">
              Industries
            </Link>
            <Link href="/blogs" className="hover:text-slate-900">
              Blogs
            </Link>
            <Link href="/contact" className="hover:text-slate-900">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-slate-700">
            <Headphones className="h-4 w-4 text-slate-500" aria-hidden="true" />
            <a href="tel:+923346640201" className="text-slate-900 text-sm">
              +92 3346640201
            </a>
          </div>
          <Button className="bg-[#20C5BA] rounded-[3px] h-10 hover:bg-teal-600 text-white">
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            Get In Touch
            <ArrowRight />
          </Button>
        </div>
      </div>
    </header>
  );
}

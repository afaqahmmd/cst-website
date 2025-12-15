import { StaticImageData } from "next/image";
import TestimonialAvatar from "@/assets/images/homepage/testimonial-avatar.png";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: StaticImageData;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahsan R. - CEO, TechLift",
    role: "Product Manager",
    company: "TechCorp",
    content:
      "This product has completely transformed how our team collaborates. The intuitive interface and powerful features make it indispensable for our daily workflow.",
    rating: 5,
    avatar: TestimonialAvatar,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    content:
      "Outstanding service and support! The team went above and beyond to ensure our implementation was smooth and successful. Highly recommend to any growing business.",
    rating: 5,
    avatar: TestimonialAvatar,
  },
  {
    id: 3,
    name: "Rodriguez",
    role: "Designer",
    company: "Creative Studio",
    content:
      "The design system is incredibly well thought out. It's rare to find a tool that balances functionality with such beautiful aesthetics. Our productivity has increased significantly.",
    rating: 5,
    avatar: TestimonialAvatar,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO",
    company: "InnovateLab",
    content:
      "From a technical perspective, this platform is solid. Great API documentation, reliable uptime, and excellent developer experience. It scales beautifully with our needs.",
    rating: 5,
    avatar: TestimonialAvatar,
  },
];

export const testimonials2: Testimonial[] = [
  {
    id: 11,
    name: "Ahsan R. - CEO, TechLift",
    role: "Product Manager",
    company: "TechCorp",
    content:
      "This product has completely transformed how our team collaborates. The intuitive interface and powerful features make it indispensable for our daily workflow.",
    rating: 5,
    avatar: TestimonialAvatar,
  },
  {
    id: 12,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    content:
      "Outstanding service and support! The team went above and beyond to ensure our implementation was smooth and successful. Highly recommend to any growing business.",
    rating: 5,
    avatar: TestimonialAvatar,
  },
  {
    id: 13,
    name: "Rodriguez",
    role: "Designer",
    company: "Creative Studio",
    content:
      "The design system is incredibly well thought out. It's rare to find a tool that balances functionality with such beautiful aesthetics. Our productivity has increased significantly.",
    rating: 5,
    avatar: TestimonialAvatar,
  },
];

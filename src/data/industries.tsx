import React from "react";
import BuildIcon from "@/components/svgs/icons/BulidingBig";
import LaptopIcon from "@/components/svgs/icons/LaptopBig";
import ShoppingCartIcon from "@/components/svgs/icons/ShoppingCart";
import BankIcon from "@/components/svgs/icons/BankIcon";
import HeartIcon from "@/components/svgs/icons/HeartIcon";
import LogisticsIcon from "@/components/svgs/icons/LogisticsIcon";
import ConstructionIcon from "@/components/svgs/icons/Construction";
import LegalIcon from "@/components/svgs/icons/LegalIcon";

export interface Industry {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  cardBg: string;
}

export const industries: Industry[] = [
  {
    title: "EdTech",
    icon: <LaptopIcon width={62} height={42} />,
    description:
      "Interactive, distraction-free learning tools that put students, educators, and outcomes at the center.",
    bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
    cardBg: "bg-blue-500",
  },
  {
    title: "Real Estate",
    icon: <BuildIcon width={62} height={64} />,
    description:
      "Property management, virtual tours, and market analytics that help agents close deals faster.",
    bgColor: "bg-gradient-to-br from-green-400 to-green-600",
    cardBg: "bg-green-500",
  },
  {
    title: "E-commerce",
    icon: <ShoppingCartIcon width={62} height={64} />,
    description:
      "From checkout optimization to inventory management, we build stores that convert visitors into customers.",
    bgColor: "bg-gradient-to-br from-purple-400 to-purple-600",
    cardBg: "bg-purple-500",
  },
  {
    title: "FinTech",
    icon: <BankIcon width={62} height={64} />,
    description:
      "Secure, compliant financial platforms that handle transactions, investments, and banking with confidence.",
    bgColor: "bg-gradient-to-br from-indigo-400 to-indigo-600",
    cardBg: "bg-indigo-500",
  },
  {
    title: "Healthcare",
    icon: <HeartIcon width={62} height={64} />,
    description:
      "HIPAA-compliant patient portals, telemedicine platforms, and health management systems that care.",
    bgColor: "bg-gradient-to-br from-red-400 to-red-600",
    cardBg: "bg-red-500",
  },
  {
    title: "Logistics",
    icon: <LogisticsIcon width={62} height={64} />,
    description:
      "Supply chain optimization, tracking systems, and delivery management that keeps everything moving.",
    bgColor: "bg-gradient-to-br from-orange-400 to-orange-600",
    cardBg: "bg-orange-500",
  },
  {
    title: "Construction",
    icon: <ConstructionIcon width={62} height={64} />,
    description:
      "Project management, safety compliance, and resource tracking for construction teams that build the future.",
    bgColor: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    cardBg: "bg-yellow-500",
  },
  {
    title: "Legal",
    icon: <LegalIcon width={62} height={64} />,
    description:
      "Case management, document automation, and client portals that streamline legal practice and improve outcomes.",
    bgColor: "bg-gradient-to-br from-lime-400 to-lime-600",
    cardBg: "bg-lime-500",
  },
];

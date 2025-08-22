import SummaryStats from "@/components/SummaryStats/SummaryStats";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroImg from "@/components/svgs/hero/heroRight";
import HeroImgLeft from "@/components/svgs/hero/heroLeftBottom";
import HeroIcons from "@/components/svgs/hero/heroIcons";
import { ChartSpline, Code2, PlayCircle, Puzzle, Rocket, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
     <section className="min-h-screen flex w-full items-center relative overflow-hidden ">
      <div className="w-full h-screen grid grid-cols-1 self-center gap-10  py-10 md:py-16 lg:grid-cols-2 lg:gap-12">
        {/* LEFT CONTENT */}
        <div className="relative z-10 flex flex-col pt-18 justify-center gap-[20%]">
          <div className="flex flex-col pl-8 md:pl-24  ml-[50px]">
            <h1 className="text-5xl font-bold tracking-tight font-roboto text-[#0F172A] sm:text-5xl md:text-[60px] lg:text-8xl">
              <span className="relative inline-block font-roboto">
                <span className="relative z-10">Fixing</span>
                {/* orange underline */}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 h-2 bg-orange-400"
                  style={{
                    borderRadius: "50%/100% 100% 0 0",
                    height: "10px",
                    transform: "translateY(2px)",
                  }}
                />
                <span
                  aria-hidden="true"
                  className="absolute w-[70%] -bottom-2 right-0 h-2 bg-orange-400"
                  style={{
                    borderRadius: "50%/100% 100% 0 0",
                    height: "8px",
                    transform: "translateY(4px)",
                  }}
                />
              </span>{" "}
              What
              <br />
              Others Miss
            </h1>

            <p className="mt-6 max-w-xl text-slate-600 md:text-lg">
              Smart design + strategy that unlocks the hidden gaps in your
              funnel.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button className="h-10 bg-teal-500 px-5 text-white hover:bg-teal-600">
                Get In Touch
              </Button>
              <Link
                href="#learn-more"
                className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
              >
                <PlayCircle
                  className="h-5 w-5 text-slate-500"
                  aria-hidden="true"
                />
                Learn More
              </Link>
            </div>

            {/* Trusted by */}
            <div className="flex gap-12 mt-10">
              <p className="mb-3 text-xs uppercase tracking-wide text-slate-500 text-balance">
                Trusted by <br />
                leading companies
              </p>
              <div className="flex max-w-md items-center justify-between gap-4 text-slate-500">
                <ShieldCheck className="h-5 w-5" aria-label="Security" />
                <ChartSpline className="h-5 w-5" aria-label="Analytics" />
                <Code2 className="h-5 w-5" aria-label="Development" />
                <Puzzle className="h-5 w-5" aria-label="Integrations" />
                <Rocket className="h-5 w-5" aria-label="Growth" />
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <HeroImgLeft />
          </div>
        </div>
        {/*  RIGHT CONTENT */}
        <div className="relative flex items-center">
          <div className="flex absolute top-12 left-[10%] items-center justify-center">
            <HeroIcons width={200} height={130} />
          </div>
          <div className="relative flex items-center justify-center pl-8 md:pl-0 w-full ">
            <HeroImg height={700} width={750} />
          </div>
        </div>
      </div>
    </section>
      <SummaryStats/>
    </main>
  );
}

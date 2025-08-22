import React from "react";
import { Button } from "@/components/ui/button";
import StayAlign from "@/assets/images/stayalign.png";
import Image from "next/image";

const StayInLoop = () => {
  return (
    <div className="p-12 w-full h-fit">
      <div className="min-h-[400px] grid md:grid-cols-2 grid-cols-1 items-center justify-center w-full rounded-[50px] bg-[#EEFFF3]">
        <div className="col-span-1 text-start font-roboto flex flex-col items-start space-y-6 md:pl-24 pl-12 md:pt-0 pt-12">
          <h2 className="font-bold sm:text-[40px] text-[32px] md:text-[56px] mb-2 text-[#0F172A]">
            Stay in the Loop
          </h2>
          <p className="text-[#0F172A] sm:text-[22px] text-[18px] md:max-w-[80%] w-full">
            Get insights, design trends, and smart strategies delivered monthly.
          </p>
          <div className="sm:h-12 h-auto flex sm:flex-row flex-col sm:gap-0 gap-2">
            <input
              className="border bg-white  px-4 lg:min-w-full lg:max-w-full max-w-3xl  h-full"
              placeholder="Email"
            />
            <Button className="h-full rounded-[5px] bg-[#20C5BA] px-6">
              Submit
            </Button>
          </div>
          <p>No spam — just the good stuff to grow your product or business.</p>
        </div>
        <div className="col-span-1 flex justify-center">
          <Image src={StayAlign} alt="stayalign" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default StayInLoop;

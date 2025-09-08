import React from "react";
import { Button } from "@/components/ui/button";
import ButtonComponent  from "@/components/Button/Button";
import StayAlign from "@/assets/images/stayalign.svg";
import Image from "next/image";

const StayInLoop = ({
  title="Stay in the Loop",
  subText="Get insights, design trends, and smart strategies delivered monthly.",
  buttonText="Submit",
}: {
  title?: string;
  subText?: string;
  buttonText?: string;
}) => {
  return (
    <div className="md:p-12 p-4 w-full">
      <div className=" grid md:grid-cols-2 grid-cols-1 items-center justify-center w-full rounded-[50px] bg-[#EEFFF3]">
        <div className="col-span-1 text-start font-roboto flex flex-col items-start space-y-6 md:pl-24 px-6 md:pt-0 pt-12">
          <h2 className="font-bold sm:text-[40px] text-[32px] md:text-[56px] mb-2 text-[#0F172A]">
            {title}
          </h2>
          <p className="text-[#0F172A] sm:text-[22px] text-[18px] md:max-w-[80%] w-full">
            {subText}
          </p>
          <div className="sm:h-12 h-auto flex sm:flex-row flex-col sm:gap-0 gap-2 ">
            <input
              className="border bg-white  px-4 lg:min-w-full lg:max-w-full max-w-3xl min-h-[50px]"
              placeholder="Email"
            />
            <ButtonComponent name={buttonText} buttonHeight="51" />

          </div>
          <p>No spam — just the good stuff to grow your product or business.</p>
        </div>
        <div className="col-span-1 flex justify-center  px-4 md:px-0">
          <Image src={StayAlign} alt="stayalign" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default StayInLoop;

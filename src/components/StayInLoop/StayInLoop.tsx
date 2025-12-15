"use client"
import React, { useState } from "react";
import ButtonComponent from "@/components/Button/Button";
import StayAlign from "@/assets/images/stayalign.svg";
import Image from "next/image";

const StayInLoop = ({
  title = "Stay in the Loop",
  subText = "Get insights, design trends, and smart strategies delivered monthly.",
  buttonText = "Subscribe",
}: {
  title?: string;
  subText?: string;
  buttonText?: string;
}) => {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState<null | { message: string; type: "success" | "error" }>(null);

  const handleSubscribe = () => {
    const isValid = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
    if (!isValid) {
      setToast({ message: "Please enter a valid email.", type: "error" });
      setTimeout(() => setToast(null), 2500);
      return;
    }
    setToast({ message: "Subscribed successfully!", type: "success" });
    setTimeout(() => setToast(null), 2500);
  };
  return (
    <div className='md:p-12 p-4 w-full'>
      <div className='grid md:grid-cols-2 grid-cols-1 items-center justify-center w-full rounded-[50px] bg-[#EEFFF3]'>
        <div className='col-span-1 text-start font-roboto flex flex-col items-start space-y-6 lg:pl-24 px-6 md:pt-0 pt-4'>
          <h2 className=' font-bold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[56px] mb-2 text-[#0F172A]'>
            {title}
          </h2>
          <p className='text-[#0F172A] text-[16px] sm:text-[18px] md:text-[22px] md:max-w-[80%] w-full'>
            {subText}
          </p>
          <div
            className='w-full flex md:flex-row flex-col md:gap-0 gap-4 '
            //  className='sm:h-12 h-auto flex sm:flex-row flex-col sm:gap-0 gap-2'
          >
            <input
              className='border bg-white  px-4 w-full md:w-9/12 min-h-[50px]'
              placeholder='Email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ButtonComponent
              name={buttonText}
              buttonHeight='51'
              customClasses='w-1/2 sm:w-1/3 md:w-auto mx-auto md:mx-0 px-[20px] md:px-[30px]'
              onClickFunction={handleSubscribe}
            />
            <div className='mx-auto md:mx-0'></div>
          </div>
          <p>No spam — just the good stuff to grow your product or business.</p>
        </div>
        <div className='col-span-1 flex justify-center  px-4 md:px-0'>
          <Image src={StayAlign} alt='stayalign' width={400} height={400} />
        </div>
      </div>
      {toast && (
        <div
          role='status'
          aria-live='polite'
          className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded shadow-lg text-white ${
            toast.type === "success" ? "bg-teal-500" : "bg-red-500"
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default StayInLoop;

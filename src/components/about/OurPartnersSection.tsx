import React from "react";
import Image from "next/image";
import AmazonPay from "@/assets/images/about/amazonpay.png";
import Gumroad from "@/assets/images/about/gumroad.png";
import GooglePay from "@/assets/images/about/googlepay.png";
import ApplePay from "@/assets/images/about/ApplePay.png";
import Bitcoin from "@/assets/images/about/bitcoin.png";
import Bitpay from "@/assets/images/about/bitpay.png";
import Klarna from "@/assets/images/about/Klarna.png";
import Maestro from "@/assets/images/about/Maestro.png";
import Payoneer from "@/assets/images/about/Payoneer.png";
import SamsungPay from "@/assets/images/about/samsung.png";
import Shoppay from "@/assets/images/about/shoppay.png";
import Skrill from "@/assets/images/about/Skrill.png";
import Visa from "@/assets/images/about/visa.png";
import WesternUnion from "@/assets/images/about/westrnunion.png";

const OurPartnersSection = () => {
  const partners1 = [
    { src: GooglePay, width: 123, height: 51 },
    { src: SamsungPay, width: 176, height: 78 },
    { src: Maestro, width: 96, height: 60 },
    { src: Klarna, width: 185, height: 74 },
    { src: Shoppay, width: 181, height: 44 },
  ];

  const partners2 = [
    { src: ApplePay, width: 123, height: 51 },
    { src: WesternUnion, width: 176, height: 40 },
    { src: Skrill, width: 118, height: 40 },
    { src: AmazonPay, width: 185, height: 74 },
  ];

  const partners3 = [
    { src: Payoneer, width: 113, height: 75 },
    { src: Visa, width: 105, height: 40 },
    { src: Bitcoin, width: 104, height: 36 },
    { src: Bitpay, width: 102, height: 60 },
    { src: Gumroad, width: 106, height: 21 },
  ];

  return (
    <div className='bg-gray-50  py-16 lg:py-24 font-roboto'>
      <div className=' mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <p className='text-[#FFAB40] text-[20px] font-[500] mb-2'>Our Partners</p>
          <h2 className='text-3xl md:text-5xl font-[800] text-[#0F172A] leading-[110%] '>
            Trusted By
          </h2>
        </div>

        {/* Company Logo Grid */}
        <div className='max-w-7xl w-full self-center rounded-[50px] bg-[#FDF1F5] p-8 px-4'>
          {/* 1st row: 5 columns on lg */}
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-8 items-center justify-center'>
            {partners1.map((partner, index) => (
              <Image
                key={index}
                src={partner.src}
                alt={"logo" + index}
                width={partner.width}
                height={partner.height}
                className='object-contain mx-auto'
              />
            ))}
          </div>

          {/* 2nd row: 4 columns on lg */}
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-8 items-center justify-center'>
            {partners2.map((partner, index) => (
              <Image
                key={index}
                src={partner.src}
                alt={"logo" + index}
                width={partner.width}
                height={partner.height}
                className='object-contain mx-auto'
              />
            ))}
          </div>

          {/* 3rd row: 5 columns on lg */}
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center'>
            {partners3.map((partner, index) => (
              <Image
                key={index}
                src={partner.src}
                alt={"logo" + index}
                width={partner.width}
                height={partner.height}
                className='object-contain mx-auto'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartnersSection;

'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import OurCulture from "@/assets/images/about/ourculture.png";
import Laptop from "@/assets/images/about/laptop.png";
import Board from "@/assets/images/about/board.png";
import Meeting from "@/assets/images/about/meeting.png";
import Meeting2 from "@/assets/images/about/meeting2.png";
import Discussion from "@/assets/images/about/discussion.png";
import HighFive from "@/assets/images/about/highfive.png";
import Wireframes from "@/assets/images/about/wireframes.png";
import Button from "@/components/Button/Button";

const OurCultureSection = () => {
  const router = useRouter();
  return (
    <div className='py-16 font-roboto'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <p className='text-[#FFAB40] text-[20px] font-[500] mb-2'>Our Culture</p>
          <h2 className='text-3xl md:text-5xl font-[800] text-[#0F172A] leading-[110%] '>
            Culture CorTechSols Follows
          </h2>
        </div>
        {/* Grid Container */}
        <div className='grid grid-cols-2 md:grid-cols-9 lg:grid-cols-18 pt-4'>
          {/* 1st row */}
          <div className='lg:col-span-4 text-white  font-roboto  md:col-span-4 col-span-9 bg-[#1D2128]'>
            <div className='relative text-[80px] md:text-[120px]  p-4 flex flex-col gap-2'>
              <p className='absolute font-bold font-yantramanav top-0 leading-[112px] left-1 text-[80px] md:text-[120px] text-[#A4ABB680]  z-10'>
                1
              </p>
              <h2 className='text-[24px] font-roboto z-20 md:text-[34px] font-extrabold leading-[110%]'>
                KARAK & CONCEPTS
              </h2>
              <p className='z-20 font-roboto text-[16px] font-[400] md:text-[22px]'>
                Some of our best ideas are born during chai breaks. We believe creative thinking
                happens when minds are relaxed, open, and caffeinated.
              </p>
            </div>
          </div>
          <div className='relative lg:col-span-7 md:col-span-5 col-span-9 min-h-[300px] '>
            <Image
              src={OurCulture.src}
              alt='our-culture'
              fill
              className='object-cover object-center'
              sizes='100vw'
              priority
            />
          </div>
          <div className='lg:col-span-7 md:col-span-5 col-span-9  bg-[#579DFF]'>
            <div className='relative text-[80px] md:text-[120px]  p-6 flex flex-col gap-2'>
              <p className='absolute font-yantramanav font-bold top-0 leading-[112px] left-1 text-[80px] md:text-[120px] text-[#30343980]  z-10'>
                2
              </p>
              <h2 className='text-[24px] font-roboto z-20 text-[#F8F9FB] md:text-[34px] font-extrabold leading-[110%]'>
                Design Sprints, Not Drama
              </h2>
              <p className='z-20 font-roboto text-[#F0F2F8] text-[16px] font-[400] md:text-[22px]'>
                We don't micromanage — we brainstorm, build, and iterate fast. With a sprint-first
                mindset, we let ideas breathe before refining them.
              </p>
            </div>
          </div>

          {/* 2nd row */}
          <div className='relative lg:col-span-5 md:col-span-4 col-span-9  bg-purple-300'>
            <Image
              src={Laptop.src}
              alt='our-culture'
              fill
              className='object-cover object-center'
              sizes='100vw'
              priority
            />
          </div>
          <div className='lg:col-span-6  md:col-span-5 col-span-9 bg-[#8D72D0]'>
            <div className='relative text-[80px] md:text-[120px]  p-4 flex flex-col gap-2'>
              <p className='absolute  font-bold font-yantramanav top-0 leading-[112px] left-1 text-[80px] md:text-[130px] text-[#22212580] z-10'>
                3
              </p>
              <h2 className='text-[24px] font-roboto text-[#F8F9FB] z-20 md:text-[34px] font-extrabold leading-[110%]'>
                LATE NIGHTS, BRIGHT MINDS
              </h2>
              <p className='font-roboto leading-[150%] text-[#F8F9FB] text-[16px] font-[400] md:text-[22px]'>
                Deadlines don't scare us. Whether it's a midnight prototype or a 7 AM deployment, we
                show up for the build — because we love the craft.
              </p>
            </div>
          </div>
          <div className='relative lg:col-span-7  md:col-span-4 col-span-9 bg-blue-300'>
            <Image
              src={Board.src}
              alt='board'
              fill
              className='object-cover object-center'
              sizes='100vw'
              priority
            />
          </div>

          {/* 3rd row */}
          <div className='lg:col-span-6 md:col-span-5 col-span-9 bg-[#9CCD53]'>
            <div className='relative text-[80px] md:text-[120px]  p-4 flex flex-col gap-2'>
              <p className='absolute  font-bold font-yantramanav top-0 leading-[112px] left-1 text-[80px] md:text-[130px] text-[#22212580] z-10'>
                4
              </p>
              <h2 className='text-[24px] font-roboto text-[#F8F9FB] z-20 md:text-[34px] font-extrabold leading-[110%]'>
                CELEBRATE SMALL WINS
              </h2>
              <p className='font-roboto leading-[150%] text-[#F8F9FB] text-[16px] font-[400] md:text-[22px]'>
                We clap for bug fixes, high-fives for client feedback, and cheer even louder for
                learning something new.
              </p>
            </div>
          </div>
          <div className='relative lg:col-span-6 md:col-span-5 col-span-9 bg-orange-300'>
            {/* highfive image  */}
            <Image
              src={HighFive.src}
              alt='highfive'
              fill
              className='object-cover object-center'
              sizes='100vw'
              priority
            />
          </div>
          <div className='lg:col-span-6  md:col-span-4 col-span-9 bg-[#FF6B57]'>
            <div className='relative text-[80px] md:text-[120px]  p-4 flex flex-col gap-2'>
              <p className='absolute  font-bold font-yantramanav top-0 leading-[112px] left-1 text-[80px] md:text-[130px] text-[#22212580] z-10'>
                5
              </p>
              <h2 className='text-[24px] font-roboto text-[#F8F9FB] z-20 md:text-[34px] font-extrabold leading-[110%]'>
                FEEDBACK = FUEL
              </h2>
              <p className='z-20 font-roboto leading-[150%] text-[#F8F9FB] text-[16px] font-[400] md:text-[22px]'>
                Honest conversations drive better work. We share, receive, and grow together —
                without ego, with intent.Image Idea:
              </p>
            </div>
          </div>

          {/* 4th row */}
          <div className='relative lg:col-span-6 h-56 md:col-span-4 col-span-9'>
            <Image
              src={Meeting.src}
              alt='meeting'
              fill
              className='object-cover object-center'
              sizes='100vw'
              priority
            />
          </div>
          <div className='lg:col-span-6 md:col-span-5 col-span-9 bg-[#D266AA]'>
            <div className='relative text-[80px] md:text-[120px]  p-4 flex flex-col gap-2'>
              <p className='absolute  font-bold font-yantramanav top-0 leading-[112px] left-1 text-[80px] md:text-[130px] text-[#22212580] z-10'>
                6
              </p>
              <h2 className='text-[24px] font-roboto text-[#F8F9FB] z-20 md:text-[34px] font-extrabold leading-[110%]'>
                REMOTE BUT ROOTED
              </h2>
              <p className='z-20 font-roboto leading-[150%] text-[#F8F9FB] text-[16px] font-[400] md:text-[22px]'>
                No matter where we work from — we stay connected. Tools keep us synced; trust keeps
                us aligned.{" "}
              </p>
            </div>
          </div>
          <div className='relative lg:col-span-6  md:col-span-5 col-span-9'>
            <Image
              src={Discussion.src}
              alt='discussion'
              fill
              className='object-cover object-center'
              sizes='100vw'
              priority
            />
          </div>

          {/* 5th row */}
          <div className='lg:col-span-4 md:col-span-4 col-span-9 bg-[#6CC1E7]'>
            <div className='relative text-[80px] md:text-[120px]  p-4 flex flex-col gap-2'>
              <p className='absolute  font-bold font-yantramanav top-0 leading-[112px] left-1 text-[80px] md:text-[130px] text-[#22212580] z-10'>
                7
              </p>
              <h2 className='text-[24px] font-roboto text-[#F8F9FB] z-20 md:text-[34px] font-extrabold leading-[110%]'>
                CURIOUS OVER COMFORTABLE
              </h2>
              <p className='z-20 font-roboto leading-[150%] text-[#F8F9FB] text-[16px] font-[400] md:text-[22px]'>
                No matter where we work from — we stay connected. Tools keep us synced; trust keeps
                us aligned.{" "}
              </p>
            </div>
          </div>
          <div className='relative lg:col-span-5  md:col-span-5 col-span-9 bg-orange-300'>
            <Image
              src={Wireframes}
              alt='wireframes'
              fill
              className='object-cover object-center'
              sizes='100vw'
              priority
            />
          </div>
          <div className='lg:col-span-4 md:col-span-4 col-span-9 bg-[#FFAB40]'>
            <div className='relative text-[80px] md:text-[120px]  p-4 flex flex-col gap-2'>
              <p className='absolute  font-bold font-yantramanav top-0 leading-[112px] left-1 text-[80px] md:text-[130px] text-[#22212580] z-10'>
                8
              </p>
              <h2 className='text-[24px] font-roboto text-[#F8F9FB] z-20 md:text-[34px] font-extrabold leading-[110%]'>
                CULTURE OF OWNERSHIP
              </h2>
              <p className='z-20 font-roboto leading-[150%] text-[#F8F9FB] text-[16px] font-[400] md:text-[22px]'>
                Here, everyone leads. From interns to leads, we own our outcomes and grow through
                our choices.
              </p>
            </div>
          </div>
          <div className='relative lg:col-span-5  md:col-span-9 col-span-9 bg-green-300'>
            <Image
              src={Meeting2.src}
              alt='meeting2'
              fill
              className='object-cover object-center'
              sizes='100vw'
              priority
            />
          </div>
        </div>

        {/* join us now button */}
        <div className='my-12 flex justify-center cursor-pointer'>
          <Button
            name='Join us now'
            buttonHeight='58px'
            customClasses='cursor-pointer'
            onClickFunction={() => router.push('/contact')}
          />
        </div>
      </div>
    </div>
  );
};

export default OurCultureSection;

import React from "react";
import Image from "next/image";
import DocSearch from "@/components/svgs/icons/DocSearch";
import Puzzle from "@/components/svgs/icons/Puzzle";
import DesignIdeas from "@/components/svgs/icons/DesignIdeas";
import CodeIcon from "@/components/svgs/icons/Code";
import Rocket2 from "@/components/svgs/icons/Rocket2";
import step1to2Arrow from "@/assets/images/process/step1to2.png";
import step2to3Arrow from "@/assets/images/process/step2to3.png";
import step3to4Arrow from "@/assets/images/process/step3to4.png";
import step4to5Arrow from "@/assets/images/process/step4to5.png";

const OurProcessSection = () => {
  const steps = [
    {
      id: 1,
      title: "Discover & Define",
      description:
        "Deep dive into your challenges, goals, and needs. Research-driven. No assumptions.",
      icon: DocSearch,
      position: "top-left",
    },
    {
      id: 2,
      title: "Strategize & Wireframe",
      description:
        "Create user flows, architectures, and layouts focused to solve problems, not just decorate them.",
      icon: Puzzle,
      position: "top-center",
    },
    {
      id: 3,
      title: "Design & Prototype",
      description: "Visual storytelling through UI-based elements, and interactive prototypes.",
      icon: DesignIdeas,
      position: "top-right",
    },
    {
      id: 4,
      title: "Develop & Test",
      description: "Agile, scalable, and clean code — followed by rigorous quality and QA testing.",
      icon: CodeIcon,
      position: "bottom-left",
    },
    {
      id: 5,
      title: "Deliver & Support",
      description:
        "Seamless handoff, documentation and post-launch support to keep your product growing.",
      icon: Rocket2,
      position: "bottom-right",
    },
  ];

  return (
    <div className='w-full bg-[#FAFBFA]'>
      <div className='max-w-6xl mx-auto px-6 py-16 '>
        <div className='text-center mb-16'>
          <p className='text-[#FFAB40] font-[500] text-[20px] mb-2'>Our Process</p>
          <h2 className='text-4xl font-bold text-gray-900'>The Steps Taken</h2>
        </div>

        <div className='relative'>
          {/* Top Row Steps */}
          <div className='flex justify-between items-center mb-20 flex-col md:flex-row gap-8 md:gap-0'>
            {steps.slice(0, 3).map((step) => (
              <div key={step.id} className='flex flex-col items-center max-w-xs'>
                <div className='w-[100px] h-[100px] relative rounded-tl-[25px] rounded-tr-[25px] rounded-br-[25px] overflow-hidden shadow-lg flex items-center justify-center mb-6'>
                  {/* Top-right triangle */}
                  <div
                    className='absolute top-0 left-0 w-full h-full'
                    style={{
                      clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                      background: "radial-gradient(circle at top right, #0d9488, #0f766e)",
                    }}
                  ></div>

                  {/* Bottom-left triangle */}
                  <div
                    className='absolute top-0 left-0 w-full h-full'
                    style={{
                      clipPath: "polygon(0 100%, 100% 100%, 0 0)",
                      background: "radial-gradient(circle at bottom left, #0f766e, #0d9488)",
                    }}
                  ></div>

                  {/* Half diagonal line */}
                  <div
                    className='absolute'
                    style={{
                      width: "1px",
                      height: "50%",
                      top: "0",
                      left: "0",
                      backgroundColor: "white",
                      transform: "rotate(45deg)",
                      transformOrigin: "top left",
                      opacity: 0.7,
                    }}
                  ></div>

                  {/* Icon centered */}
                  <div className='relative z-10'>
                    <step.icon
                      className={`${step.id === 1 ? "w-[41px] h-[48px]" : " w-10 h-10"} text-white`}
                    />
                  </div>
                </div>

                <h3 className='text-xl font-bold text-gray-900 mb-3 text-center'>{step.title}</h3>
                <p className='text-gray-600 text-center text-sm leading-relaxed'>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row Steps */}
          <div className='flex justify-center items-center md:space-x-32 flex-col md:flex-row gap-8 md:gap-0'>
            {steps.slice(3, 5).map((step) => (
              <div key={step.id} className='flex w-full flex-col items-center'>
                <div className='w-[100px] h-[100px] relative rounded-tl-[25px] rounded-tr-[25px] rounded-br-[25px] overflow-hidden shadow-lg flex items-center justify-center mb-6'>
                  {/* Top-right triangle */}
                  <div
                    className='absolute top-0 left-0 w-full h-full'
                    style={{
                      clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                      background: "radial-gradient(circle at top right, #0d9488, #0f766e)",
                    }}
                  ></div>

                  {/* Bottom-left triangle */}
                  <div
                    className='absolute top-0 left-0 w-full h-full'
                    style={{
                      clipPath: "polygon(0 100%, 100% 100%, 0 0)",
                      background: "radial-gradient(circle at bottom left, #0f766e, #0d9488)",
                    }}
                  ></div>

                  {/* Half diagonal line */}
                  <div
                    className='absolute'
                    style={{
                      width: "1px",
                      height: "50%",
                      top: "0",
                      left: "0",
                      backgroundColor: "white",
                      transform: "rotate(45deg)",
                      transformOrigin: "top left",
                      opacity: 0.7,
                    }}
                  ></div>

                  {/* Icon centered */}
                  <div className='relative z-10'>
                    <step.icon
                      className={`${step.id === 5 ? "w-[38px] h-[45px]" : " w-10 h-10"} text-white`}
                    />
                  </div>
                </div>

                <h3 className='text-xl font-bold text-gray-900 mb-3 text-center'>{step.title}</h3>
                <p className='text-gray-600 text-center text-sm leading-relaxed'>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Arrow Images */}
          <div className='absolute inset-0 w-full h-full lg:block hidden pointer-events-none' style={{ zIndex: 1 }}>
            {/* Arrow from step 1 to step 2 */}
            <div
              className='absolute'
              style={{
                top: '0px',
                left: '227px',
                maxWidth: '240px',
              }}
            >
              <Image
                src={step1to2Arrow}
                alt='Process arrow from step 1 to step 2'
                width={240}
                height={100}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>

            {/* Arrow from step 2 to step 3 */}
            <div
              className='absolute'
              style={{
                top: '69px',
                left: '628px',
                maxWidth: '240px',
              }}
            >
              <Image
                src={step2to3Arrow}
                alt='Process arrow from step 2 to step 3'
                width={240}
                height={100}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>

            {/* Arrow from step 3 to step 4 */}
            <div
              className='absolute'
              style={{
                top: '200px',
                left: '350px',
                maxWidth: '500px',
              }}
            >
              <Image
                src={step3to4Arrow}
                alt='Process arrow from step 3 to step 4'
                width={500}
                height={120}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>

            {/* Arrow from step 4 to step 5 */}
            <div
              className='absolute'
              style={{
                top: '350px',
                left: '320px',
                maxWidth: '480px',
              }}
            >
              <Image
                src={step4to5Arrow}
                alt='Process arrow from step 4 to step 5'
                width={480}
                height={120}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcessSection;

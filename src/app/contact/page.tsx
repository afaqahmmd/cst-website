"use client";
import React, { useState } from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import HeroImg from "@/assets/images/contact/hero-img.png";
import GoogleMap from "@/components/GoogleMap/GoogleMapComponent";
import InfoSection from "@/components/InfoSection/InfoSection";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Mail, Minus, Plus } from "lucide-react";
import Client1 from "@/assets/images/services/client1.png";
import Client2 from "@/assets/images/services/client2.png";
import Client3 from "@/assets/images/services/client3.png";
import Client4 from "@/assets/images/services/client4.png";
import Client5 from "@/assets/images/services/client5.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PhoneNumberInput from "@/components/PhoneNumberInput/PhoneNumberInput";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [toast, setToast] = useState<null | { message: string; type: "success" | "error" }>(null);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Please fill in Name, Email, and Message before sending.");
      return;
    }
    setErrorMsg(null);
    
    // Show success message
    setToast({ message: "Message sent! We'll get back to you soon.", type: "success" });
    setTimeout(() => setToast(null), 2500);
    
    // Clear the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const getCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000);
    setToast({ message: `Verification code sent: ${code}`, type: "success" });
    setTimeout(() => setToast(null), 2500);
  };

  const faqData = [
    {
      id: "industries-1",
      question: "What industries do you work with?",
      answer:
        "We work with startups, SaaS platforms, eCommerce brands, healthcare, education, fintech, and more. If it needs great UX and results – we're in.",
      isOpen: true,
    },
    {
      id: "industries-2",
      question: "What industries do you work with?",
      answer:
        "We work with startups, SaaS platforms, eCommerce brands, healthcare, education, fintech, and more. If it needs great UX and results – we're in.",
    },
    {
      id: "project-duration-1",
      question: "How long does a typical project take?",
    },
    {
      id: "project-duration-2",
      question: "How long does a typical project take?",
    },
    {
      id: "project-duration-3",
      question: "How long does a typical project take?",
    },
    {
      id: "project-duration-4",
      question: "How long does a typical project take?",
    },
    {
      id: "seo-marketing-1",
      question: "Do you offer SEO or digital marketing after launch?",
    },
    {
      id: "seo-marketing-2",
      question: "Do you offer SEO or digital marketing after launch?",
    },
    {
      id: "ownership-1",
      question: "Will I own the final design/code?",
    },
    {
      id: "ownership-2",
      question: "Will I own the final design/code?",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Crystal Maiden",
      role: "UI/UX Designer",
      avatar: Client1,
      feedback:
        "The quality of the design is top-notch, and I love how organized the files are. It's easy to find what I need.",
      rating: 5,
    },
    {
      id: 2,
      name: "Dazzle Healer",
      role: "Front End Developer",
      avatar: Client2,
      feedback:
        "This kit exceeded my expectations! The components are versatile and make implementation much easier.",
      rating: 5,
    },
    {
      id: 3,
      name: "Roshan Pro Max",
      role: "UI/UX Designer",
      avatar: Client3,
      feedback:
        "Perfect for quick prototyping! The designs are professional and work seamlessly with my workflow.",
      rating: 5,
    },
    {
      id: 4,
      name: "Mirana Marci",
      role: "3D Designer",
      avatar: Client4,
      feedback:
        "I was blown away by how complete this UI Kit is. It has everything I need, from assets to components.",
      rating: 5,
    },
    {
      id: 5,
      name: "Hearts of Taras",
      role: "Logo Designer",
      avatar: Client5,
      feedback:
        "Amazing work! The color schemes are vibrant, and the icons fit perfectly with all my projects.",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-orange-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <div className="w-full font-roboto">
      {/* hero section */}
      <HeroSection
        HeroImg={HeroImg}
        title="Get in Touch with Us!"
        subText="Have questions, need support, or want to learn more about CorTechSols? Reach out to our team and we’ll get back to you as soon as possible."
      />

      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-4 right-4 p-4 rounded-md z-50 ${
          toast.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
        }`}>
          {toast.message}
        </div>
      )}

      {/* form section */}
      <div className="font-roboto bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Form Section */}
              <div className="lg:col-span-3 p-8 lg:p-12 lg:pr-6">
                <div onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 max-h-[60px] focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Phone Number with Country Code */}
                  <div className="flex gap-0 max-h-[60px]">
                    <PhoneNumberInput />
                    <button
                      type="button"
                      onClick={getCode}
                      className="px-6 py-3 min-w-[120px] bg-[#2B2B2B] text-white rounded-none hover:bg-gray-900 transition-colors duration-200 font-medium"
                    >
                      Get Code
                    </button>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  {errorMsg && (
                    <p className="text-red-600 text-sm">{errorMsg}</p>
                  )}
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-teal-500 text-white py-4 rounded-[5px] hover:bg-teal-600 transition-colors duration-200 font-semibold text-lg"
                  >
                    Send
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:col-span-2 p-8 lg:p-12 lg:pl-6 flex flex-col ">
                <div className="max-w-md">
                  <h1 className="text-4xl font-bold mb-6 leading-tight">
                    Born From Curiosity,
                    <br />
                    Built With Code
                  </h1>

                  <div className="flex flex-col gap-4">
                    <p className="leading-[32px] font-[400] text-[#5E5C5C]">
                      CorTechSols began as a passion project by a team of
                      builders who believed tech should solve real problems —
                      not just function.
                    </p>

                    <p className="leading-[32px] font-[400] text-[#5E5C5C]">
                      From small rooms to big partnerships, we've grown by
                      crafting digital experiences that blend creativity with
                      logic, strategy with empathy. Every line of code and every
                      design choice is driven by one purpose: to create
                      intuitive, scalable, and meaningful solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* map section */}
      <GoogleMap address="Cortech Sols, Gulberg Greens, Islamabad" />

      <InfoSection
        buttonText="View more"
        title="Find us near you"
        subText="Connect with us online or drop by in person — we're just a click or a visit away."
      />

      {/* faq section */}
      <div className="max-w-5xl mx-auto px-6 py-12 bg-white min-h-screen">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block text-[#FFAB40] px-3 py-1 rounded-full text-sm font-medium mb-4">
            FAQs
          </div>
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-extrabold font-roboto text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Got questions about CorTechSols? Explore helpful answers that make
            your blurry mind clear.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="space-y-4">
            <Accordion
              type="single"
              collapsible
              defaultValue="industries-1"
              className="space-y-4"
            >
              {faqData.slice(0, 5).map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline data-[state=open]:text-gray-900 [&>svg]:hidden group/trigger">
                    {faq.question}
                    <div className="shrink-0 ml-auto">
                      <Plus className="h-4 w-4 transition-all duration-200 group-data-[state=open]/trigger:hidden" />
                      <Minus className="h-4 w-4 transition-all duration-200 hidden group-data-[state=open]/trigger:block" />
                    </div>
                  </AccordionTrigger>
                  {faq.answer && (
                    <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.slice(5).map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline data-[state=open]:text-gray-900 [&>svg]:hidden group/trigger">
                    {faq.question}
                    <div className="shrink-0 ml-auto">
                      <Plus className="h-4 w-4 transition-all duration-200 group-data-[state=open]/trigger:hidden" />
                      <Minus className="h-4 w-4 transition-all duration-200 hidden group-data-[state=open]/trigger:block" />
                    </div>
                  </AccordionTrigger>
                  {faq.answer && (
                    <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-sm font-semibold transition-colors">
            View All
          </button>
          <div className="flex items-center gap-2">
            <button className="relative w-14 h-14 shadow-lg rounded-full bg-white flex items-center justify-center">
              <span className="absolute inset-0 rounded-full border-4 border-black [clip-path:polygon(0_0,50%_0,50%_100%,0_100%)]"></span>

              <span className="z-10 text-black font-bold">
                <Mail size={20} />
              </span>
            </button>
            <p className="text-bold capitalize text-[16px] hover:underline cursor-pointer">
              {" "}
              Get in touch
            </p>
          </div>
        </div> */}
      </div>

      {/* testimonials */}
      <div className=" mx-auto flex flex-col px-6 py-12 bg-[#F7F7F7] w-full">
        {/* Header Section */}

        {/* Testimonials Grid */}
        <div className="max-w-6xl self-center grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-start justify-between">
              <div className="">
                <p className="text-orange-500 font-medium text-sm mb-2">
                  Client's Feedback
                </p>
                <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
                  What They Say After Using Our Product
                </h2>
                <p className="text-[#737373] tracking-tight font-semibold max-w-md">
                  Many of our members have started their early careers with us.
                </p>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 mt-6 gap-3 justify-evenly w-full">
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 text-sm rounded-sm font-medium transition-colors">
                  Join Now!
                </button>
                <button className="flex items-center gap-2 justify-center border border-[#20C5BA] hover:bg-gray-100 text-gray-700 px-6 py-3 text-sm rounded-sm font-medium transition-colors ">
                  View All
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
          {testimonials.slice(0, 6).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white items-center flex flex-col rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Avatar and Info */}
              <div className="flex flex-col items-center text-center mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold font-poppins mt-2 text-gray-900 text-sm">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-[#0F1125] font-semibold leading-[160%] text-center text-sm  mb-4">
                {testimonial.feedback}
              </p>

              {/* Rating */}
              <div className="flex gap-1">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <StayInLoop />

      {/* <Footer /> */}
    </div>
  );
};

export default page;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Mail } from "lucide-react";
import { Service } from "@/types/service";
import { fetchServicesSSR, withSSRErrorHandling } from "@/lib/api-ssr";

const ServicesSection: React.FC = async () => {
  // Fetch services data using SSR API
  const { data: servicesData, error } = await withSSRErrorHandling(fetchServicesSSR);

  // Generate structured data for services
  const generateStructuredData = () => {
    if (!servicesData?.results) return null;

    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Our Services",
      description: "Technology solutions and digital services offered by CortechSols",
      numberOfItems: servicesData.results.length,
      itemListElement: servicesData.results.map((service: Service, index: number) => ({
        "@type": "Service",
        position: index + 1,
        name: service.name,
        description: service.description,
        url: `https://cortechsols.com/services/${service.slug}`,
        image: service.hero_image?.image,
        provider: {
          "@type": "Organization",
          name: "CortechSols",
        },
      })),
    };
  };

  // Function to generate features from bullet points or description
  const generateFeatures = (service: Service) => {
    // Use bullet_points if available, otherwise fallback to description
    if (service.bullet_points && service.bullet_points.length > 0) {
      return service.bullet_points.slice(0, 4);
    }
    // Fallback: split description into sentences
    const sentences = service.description.split(/[.!?]+/).filter((s) => s.trim().length > 10);
    return sentences.slice(0, 4).map((sentence) => sentence.trim());
  };

  // Handle error state - return error UI if data fetching failed
  if (error) {
    return (
      <div className='w-full max-w-[1920px] mx-auto bg-white py-12 px-4 sm:px-6 lg:px-8 font-roboto'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center'>
            <p className='text-red-600'>Error loading services: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  // Show only published services
  const allServices = servicesData?.results || [];
  const publishedServices = allServices.filter((service: Service) => service.is_published);
  const services = publishedServices;
  const structuredData = generateStructuredData();

  return (
    <>
      {structuredData && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      <section
        id='services-section'
        className='w-full max-w-[1920px] mx-auto bg-white py-12 px-4 sm:px-6 lg:px-8 font-roboto'
        aria-labelledby='services-heading'
      >
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <p className='text-[20px] font-[500] text-[#FFAB40] mb-4'>Our Services</p>
            <h2
              id='services-heading'
              className='font-roboto leading-[60px] tracking-[-1.5%] text-[56px] font-[800] text-[#0F172A]'
            >
              Powering Ideas with Design, Code & Growth
            </h2>
            <p className='text-[20px] text-[#0F172A] font-[500] leading-[33px] tracking-[-1.5%] my-6'>
              From UX to full-stack and marketing - our services connect like a smart system to
              elevate your digital journey.
            </p>
          </div>

          <div className='flex flex-col gap-8'>
            <div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
              role='region'
              aria-label='Services Grid'
            >
              {services.map((service: Service, index: number) => (
                <article
                  key={service.id}
                  className='bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200'
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className='block h-full'
                    aria-label={`Learn more about ${service.name} service`}
                  >
                    <div className='flex flex-col items-start gap-4 mb-4  border-b-1 border-[#D1D3D9] pb-4'>
                      <div className='flex items-start gap-4 flex-shrink-0 p-0 bg-white rounded-lg'>
                        <Image
                          src={service.hero_image?.image}
                          alt={service.hero_image?.alt_text || `${service.name} service icon`}
                          width={40}
                          height={40}
                          className='w-10 h-10 rounded-[10px] object-cover'
                          unoptimized
                        />
                        <h3 className='relative inline-block text-xl font-semibold text-gray-900 mb-2'>
                          <span className='absolute left-0 h-4 w-4 rounded-full bg-[#20C5BA80] z-0'></span>
                          <span className='absolute left-1/2 -bottom-1 -translate-x-1/2 h-1 w-8 bg-[#20C5BA80] z-0'></span>
                          <span className='relative z-10'>{service.name}</span>
                        </h3>
                      </div>

                      <div className='flex-1 min-w-0'>
                        <p className='text-[#868282] text-[16px] leading-[22px] font-[400]'>
                          {service.description.length > 100 ? `${service.description.slice(0, 100)}...` : service.description}
                        </p>
                      </div>
                    </div>

                    <div className='space-y-2 mt-5'>
                      {generateFeatures(service).map(
                        (feature: string, featureIndex: number) => (
                          <div key={featureIndex} className='flex items-center gap-2'>
                            <div className='flex-shrink-0 bg-teal-500 h-6 w-6 p-1 flex items-center justify-center rounded-full'>
                              <Check className='w-4 h-4 text-white' size={16} />
                            </div>
                            <span className='text-sm text-gray-700'>
                              {feature.slice(0, 100)}...
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* bottom navigation buttons */}
          <div className='flex mt-12 flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link
              className={`bg-[#20C5BA] hover:bg-[#20C5BA]/80 h-[55px] px-[40px] py-[15px] capitalize rounded-[5px] text-[18px] font-[500] leading-[32px] font-roboto`}
              href="/services"
            >
              View All
            </Link>
            <div className='flex items-center gap-2'>
              <button className='relative w-14 h-14 shadow-lg rounded-full bg-white flex items-center justify-center'>
                {/* Left semi-circle border */}
                <span className='absolute inset-0 rounded-full border-4 border-black [clip-path:polygon(0_0,50%_0,50%_100%,0_100%)]'></span>

                {/* Button content */}
                <Mail />
              </button>
              <a
                href='#contact-section'
                className='font-[600] capitalize text-[16px] hover:underline cursor-pointer'
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;

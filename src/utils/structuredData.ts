// utils/structuredData.ts
import { Testimonial } from "@/data/testimonials";

export const generateJsonLd = (type: string, data: any) => {
  console.log("data", data);
  switch (type) {
    case "Blog":
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data?.title || "",
        datePublished: data?.created_at || "",
        image: data?.featured_image?.image || "",
        description: data?.excerpt || data?.meta_description || "",
        author: {
          "@type": "Person",
          name: data?.created_by || "Anonymous"
        }
      };

    case "Service":
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data?.title || "",
        description: data?.description || "",
        image: data?.images?.[0] || "",
      };

    // add more types as needed
    default:
      return {};
  }
};

export const generateTestimonialsStructuredData = (testimonials: Testimonial[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cortechsols",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: testimonials.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonials.map((testimonial) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: testimonial.name,
        jobTitle: testimonial.role,
        worksFor: {
          "@type": "Organization",
          name: testimonial.company,
        },
      },
      reviewBody: testimonial.content,
      datePublished: "2025-05-13",
      publisher: {
        "@type": "Organization",
        name: "Cortechsols",
      },
    })),
  };
};

export const generateFAQsStructuredData = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

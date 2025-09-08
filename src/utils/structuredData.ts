// utils/structuredData.ts

export const generateJsonLd = (type: string, data: any) => {
  console.log("data", data);
    switch (type) {
      case "Blog":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "datePublished": data.created_at,
          "image": data.images[0] || "",
          "description": data.content || "",
        };
  
      case "Service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.title,
          "description": data.description,
          "image": data.images[0] || "",
        };
  
      // add more types as needed
      default:
        return {};
    }
  };
  
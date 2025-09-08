  //  function to replace localhost api from image url with deployed backend api url
export const getBlogImageUrl = (url?: string) => {
    if (!url) return "/placeholder.svg"; // fallback if no URL
  
    // Replace localhost with environment variable if needed
    if (url.includes("localhost")) {
      return url.replace("http://localhost:7000", process.env.NEXT_PUBLIC_API_BASE_URL!);
    }
  
    return url;
  };
  
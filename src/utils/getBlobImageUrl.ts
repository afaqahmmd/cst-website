//  function to replace localhost api from image url with deployed backend api url
// export const getBlogImageUrl = (url?: string) => {
//     if (!url) return "/placeholder.svg"; // fallback if no URL

//     // Replace localhost with environment variable if needed
//     if (url.includes("localhost")) {
//       return url.replace("http://localhost:7000", process.env.NEXT_PUBLIC_API_BASE_URL!);
//     }

//     return url;
//   };

export const getBlogImageUrl = (url?: string) => {
  // console.log("url linkkkk:", url);

  if (!url) return "/placeholder.svg"; // fallback if no URL

  // Find the /media part and reconstruct the URL
  const mediaIndex = url.indexOf("/media");
  if (mediaIndex !== -1) {
    const mediaPath = url.slice(mediaIndex); // keep /media and everything after
    return `${process.env.NEXT_PUBLIC_API_BASE_URL}${mediaPath}`;
  }

  // If no /media found, just return original
  return url;
};

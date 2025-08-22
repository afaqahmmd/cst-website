// "use client";

// import React, { useState } from "react";
// import { ArrowUpRight, Search } from "lucide-react";
// import Link from "next/link";
// import clsx from "clsx";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import Image from "next/image";
// import blogImage from "@/assets/images/blogs/blog-header.png";
// import type { Blog } from "@/types/blog";
// import Blog1 from "@/assets/images/blogs/blog1.jpg";
// import Blog2 from "@/assets/images/blogs/blog2.jpg";
// import Blog3 from "@/assets/images/blogs/blog3.jpg";
// import Blog4 from "@/assets/images/blogs/blog4.jpg";
// import Blog5 from "@/assets/images/blogs/blog5.jpg";
// import Blog6 from "@/assets/images/blogs/blog6.jpg";
// import Blog7 from "@/assets/images/blogs/blog7.jpg";
// import Blog8 from "@/assets/images/blogs/blog8.jpg";
// import Blog9 from "@/assets/images/blogs/blog9.jpg";
// import Avatar1 from "@/assets/images/blogs/avatar1.png";
// import Avatar2 from "@/assets/images/blogs/avatar2.png";
// import Avatar3 from "@/assets/images/blogs/avatar3.png";
// import Avatar4 from "@/assets/images/blogs/avatar4.png";
// import Avatar5 from "@/assets/images/blogs/avatar5.png";
// import Avatar6 from "@/assets/images/blogs/avatar6.png";
// import Avatar7 from "@/assets/images/blogs/avatar7.png";
// import Avatar8 from "@/assets/images/blogs/avatar8.png";
// import Avatar9 from "@/assets/images/blogs/avatar9.png";
// import InfoSection from "@/components/InfoSection/InfoSection";
// import StayInLoop from "@/components/StayInLoop/StayInLoop";
// import Footer from "@/components/Footer/Footer";
// import { fetchBlogs } from "@/lib/api";
// import { useQuery } from "@tanstack/react-query";


// const page =  () => {
//   const [selectedTag, setSelectedTag] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 8;
//   const blogsList: Blog[] = [
//     {
//       id: 1,
//       title: "How to Learn React",
//       description:
//         "A concise guide on how to master React for frontend development.",
//       headerImage: Blog1.src,
//       author: {
//         name: "John Doe",
//         avatar: Avatar1.src,
//       },
//       date: "Aug 18, 2025",
//       tags: ["Design", "UX Research"],
//     },
//     {
//       id: 2,
//       title: "Understanding TypeScript",
//       description:
//         "Learn the key features of TypeScript and how it helps in large projects.",
//       headerImage: Blog2.src,
//       author: {
//         name: "Jane Smith",
//         avatar: Avatar2.src,
//       },
//       date: "Aug 17, 2025",
//       tags: ["Design", "Softwares", "Models"],
//     },
//     {
//       id: 3,
//       title: "Next.js Tips & Tricks",
//       description: "Boost your Next.js apps with these productivity tips.",
//       headerImage: Blog3.src,
//       author: {
//         name: "Alice Brown",
//         avatar: Avatar3.src,
//       },
//       date: "Aug 16, 2025",
//       tags: ["API Stack", "Backend Masters", "Software Engineering"],
//     },
//     {
//       id: 4,
//       title: "Tailwind Deep Dive",
//       description:
//         "Explore advanced Tailwind CSS techniques for modern web apps.",
//       headerImage: Blog4.src,
//       author: {
//         name: "Bob Martin",
//         avatar: Avatar4.src,
//       },
//       date: "Aug 15, 2025",
//       tags: ["Management", "Leadership"],
//     },
//     {
//       id: 5,
//       title: "State Management with Redux",
//       description:
//         "Learn how to manage complex state in React using Redux Toolkit.",
//       headerImage: Blog5.src,

//       author: {
//         name: "Carol Lee",
//         avatar: Avatar5.src,
//       },
//       date: "Aug 14, 2025",
//       tags: ["Product", "Research", "Business Intelligence"],
//     },
//     {
//       id: 6,
//       title: "Building a Portfolio Website",
//       description:
//         "Step by step guide to creating your personal portfolio using React.",
//       headerImage: Blog6.src,

//       author: {
//         name: "David Kim",
//         avatar: Avatar6.src,
//       },
//       date: "Aug 13, 2025",
//       tags: ["Design", "UX Research", "Wireframing"],
//     },
//     {
//       id: 7,
//       title: "GraphQL for Beginners",
//       description:
//         "Understanding GraphQL queries and how to integrate with React apps.",
//       headerImage: Blog7.src,

//       author: {
//         name: "Eve White",
//         avatar: Avatar7.src,
//       },
//       date: "Aug 12, 2025",
//       tags: ["Design", "UX Research", "Leaders"],
//     },
//     {
//       id: 8,
//       title: "Effective Unit Testing",
//       description:
//         "Learn how to write maintainable and effective tests in JavaScript.",
//       headerImage: Blog8.src,

//       author: {
//         name: "Frank Hall",
//         avatar: Avatar8.src,
//       },
//       date: "Aug 11, 2025",
//       tags: ["Product", "Frameworks", "Models"],
//     },
//     {
//       id: 9,
//       title: "Deploying with Vercel",
//       description: "Deploy your Next.js apps seamlessly using Vercel hosting.",
//       headerImage: Blog9.src,

//       author: {
//         name: "Grace Lin",
//         avatar: Avatar9.src,
//       },
//       date: "Aug 10, 2025",
//       tags: ["Cusomter Success", "Community Driven"],
//     },
//   ];

//  const { data } = useQuery({
//     queryKey: ["blogs"],
//     queryFn: fetchBlogs,
//   });

//   const pageNumbers = () => {
//     const pages = [];
//     for (let i = 1; i <= totalPages; i++) {
//       // show first 4, last 1 and around current page
//       if (
//         i <= 4 ||
//         i === totalPages ||
//         (i >= currentPage - 1 && i <= currentPage + 1)
//       ) {
//         pages.push(i);
//       } else if (pages[pages.length - 1] !== "...") {
//         pages.push("...");
//       }
//     }
//     return pages;
//   };

//   const goToPage = (page: number) => {
//     if (page < 1 || page > totalPages) return;
//     setCurrentPage(page);
//   };

//   const tags = [
//     "All",
//     "AWS",
//     "Aritficial Intelligence",
//     "Azure",
//     "Banking IT",
//     "IT",
//     "Big Data",
//     "Blockchain",
//     "Business Intelligence",
//     "Machine Learning",
//     "SEO",
//     "LLMs",
//     "DevOps",
//     "Cybersecurity",
//     "Cloud Computing",
//     "Data Science",
//   ];



//   const displayBlogs = blogsList;




//   return (
//     <div className="w-full h-fit">
//       {/* Header */}
//       <div
//         id="header"
//         className="relative h-[350px] gap-4 flex flex-col items-center justify-center bg-center bg-cover"
//         style={{ backgroundImage: `url(${blogImage.src})` }}
//       >
//         {/* Black overlay */}
//         <div className="absolute inset-0 bg-black/50"></div>

//         {/* Content */}
//         <div className="relative z-10 text-center px-4">
//           <h2 className="font-bold font-roboto text-[56px] capitalize text-white">
//             Ideas that build better tech
//           </h2>
//           <p className="text-balance w-full text-[24px] leading-[36px] text-white">
//             Explore expert insights, product strategies, design thinking, and
//             development tips — straight from the minds shaping real-world
//             digital solutions at CorTechSols.
//           </p>
//         </div>
//       </div>

//       {/* Our Blogs Section */}
//       <div
//         id="our-blog-parent"
//         className="flex flex-col items-center relative w-full mt-24"
//       >
//         {/* Bars container */}
//         <div className="absolute flex flex-col w-full transform -skew-y-6">
//           {/* blue bar */}
//           <div className="w-full h-12 bg-blue-300" />
//           {/* 2nd bar container- pink,white,pink */}
//           <div className="grid grid-cols-7 w-full">
//             <div className="col-span-2 bg-pink-200 h-12"></div>
//             <div className="col-span-2 bg-white h-12"></div>
//             <div className="col-span-3 bg-pink-200 h-12"></div>
//           </div>
//           {/* 3rd bar container - purple,white,purple */}
//           <div className="grid grid-cols-15 w-full">
//             <div className="col-span-2 bg-purple-300 h-12"></div>
//             <div className="col-span-12 bg-white h-12"></div>
//             <div className="col-span-1 bg-purple-300 h-12"></div>
//           </div>
//         </div>

//         {/* title and text section  */}
//         <div className="relative font-roboto text-center flex flex-col items-center mt-14">
//           <p className="text-orange-300 text-[20px] font-[500]">Our Blogs</p>
//           <h2 className="font-[700] text-[#0F172A] leading-10 text-[40px] tracking-[-0.02em]">
//             Resources and insights
//           </h2>
//           <p className="text[#0F172A] mt-4 text-balance text-[20px] font-[500]">
//             The latest industry news, interviews, technologies, and resources.
//           </p>
//         </div>

//         {/* search input */}
//         <div>
//           <div className="w-[250px] mt-8 flex gap-3 items-center border border-gray-300 rounded-md px-4 py-2">
//             <Search color="#667085" />
//             <input
//               placeholder="Search"
//               className="flex-1 outline-none focus:ring-0 focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* tags list */}
//         <ul className="scrollbar-hide w-full flex px-4  gap-3 items-center justify-start mt-8 overflow-auto">
//           {tags.map((name, index) => (
//             <li
//               key={index}
//               className={clsx(
//                 "cursor-pointer py-1 border border-gray-300 rounded-full min-w-fit text-center px-5",
//                 selectedTag === name
//                   ? "bg-teal-400 text-white"
//                   : "bg-white text-[#2B2B2B]",
//                 index === 0 && "ml-8 sm:ml-16 md:ml-24 "
//               )}
//               onClick={() => setSelectedTag(name)}
//             >
//               {name}
//             </li>
//           ))}
//         </ul>

//         {/* blogs container */}
//         <div className="max-w-6xl mt-12 grid grid-cols-1 md:mx-16 lg:24 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ">
//           {displayBlogs.map((blog:any) => (
//             <Link href={`/blogs/${blog.id}`} key={blog.id}>
//             <Card
//               key={blog.id}
//               className="transition-shadow duration-300 p-4 rounded-none shadow-lg border-gray-100"
//             >
//               <CardHeader className="p-0">
//                 <Image
//                   src={blog.headerImage}
//                   alt={blog.title}
//                   width={400}
//                   height={200}
//                   className="w-full h-48 object-cover rounded-t-md"
//                 />
//               </CardHeader>
//               <CardContent className="p-0">
//                 <ul className="flex items-center gap-2 mb-2">
//                   {blog.tags.map((tag: string, index:number) => (
//                     <li
//                       key={tag}
//                       className={clsx(
//                         "text-sm font-[500]",
//                         index === 0 && "text-[#6941C6]",
//                         index === 1 && "text-[#1D76F1]",
//                         index === 2 &&
//                           (tag === "Models"
//                             ? "text-[#F11D8B]"
//                             : tag === "Software Engineering"
//                             ? "text-[#F1991D]"
//                             : tag === "Wireframing"
//                             ? "text-[#FFAB40]"
//                             : tag === "Business Intelligence"
//                             ? "text-[#77A72E]"
//                             : "text-[#F1641D]")
//                       )}
//                     >
//                       {tag}
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="text-lg font-semibold">{blog.title}</h3>
//                   <ArrowUpRight />
//                 </div>
//                 <p className="text-gray-600 text-sm line-clamp-2">
//                   {blog.description}
//                 </p>
//               </CardContent>
//               <CardFooter className="flex items-center gap-3 p-0">
//                 <Image
//                   src={blog.author.avatar}
//                   alt={blog.author.name}
//                   width={32}
//                   height={32}
//                   className="rounded-full"
//                 />
//                 <div className="flex flex-col text-sm">
//                   <span className="font-medium">{blog.author.name}</span>
//                   <span className="text-gray-500">{blog.date}</span>
//                 </div>
//               </CardFooter>
//             </Card>
//             </Link>
//           ))}
//         </div>

//         {/* pagination */}
//         <div className="flex items-center space-x-3 sm:my-20 my-8">
//           {/* Previous */}
//           <button
//             onClick={() => goToPage(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="h-8 w-8 rounded-full text-gray-400 bg-gray-100 hover:bg-gray-200 disabled:cursor-not-allowed"
//           >
//             &laquo;
//           </button>
//           <button
//             onClick={() => goToPage(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="h-8 w-8 rounded-full text-gray-400 bg-gray-100 hover:bg-gray-200 disabled:cursor-not-allowed"
//           >
//             &lt;
//           </button>

//           {/* Page numbers */}
//           {pageNumbers().map((num, idx) =>
//             num === "..." ? (
//               <span key={idx} className="px-3 py-1 text-gray-400">
//                 ...
//               </span>
//             ) : (
//               <button
//                 key={idx}
//                 onClick={() => goToPage(num as number)}
//                 className={clsx(
//                   "h-8 w-8 rounded-full text-sm",
//                   num === currentPage
//                     ? "bg-teal-500 text-white"
//                     : "text-gray-600 hover:bg-gray-200 bg-gray-100"
//                 )}
//               >
//                 {num}
//               </button>
//             )
//           )}

//           {/* Next */}
//           <button
//             onClick={() => goToPage(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="w-8 h-8 rounded-full text-gray-400 bg-gray-100 hover:bg-gray-200 disabled:cursor-not-allowed"
//           >
//             &gt;
//           </button>
//           <button
//             onClick={() => goToPage(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="w-8 h-8 rounded-full text-gray-400 bg-gray-100 hover:bg-gray-200 disabled:cursor-not-allowed"
//           >
//             &raquo;
//           </button>
//         </div>

//         {/* info section */}
//         <InfoSection
//           title="Let's build something that matters"
//           subText="Have a project or an idea? Let's turn it into a digital experience people will remember"
//         />

//         {/* stay in loop */}
//         <StayInLoop />

//         {/* footer */}
//         <Footer/>
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";

import React, { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import blogImage from "@/assets/images/blogs/blog-header.png";
import type { Blog } from "@/types/blog";
import InfoSection from "@/components/InfoSection/InfoSection";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import Footer from "@/components/Footer/Footer";
import { fetchBlogs } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

// Default avatar using a placeholder service
const defaultAvatar = "https://ui-avatars.com/api/?name=User&background=0ea5e9&color=fff&size=32";

const page = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const totalPages = 8;

  const { data: blogsData, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  const pageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      // show first 4, last 1 and around current page
      if (
        i <= 4 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const tags = [
    "All",
    "AWS",
    "Artificial Intelligence",
    "Azure",
    "Banking IT",
    "IT",
    "Big Data",
    "Blockchain",
    "Business Intelligence",
    "Machine Learning",
    "SEO",
    "LLMs",
    "DevOps",
    "Cybersecurity",
    "Cloud Computing",
    "Data Science",
  ];

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Function to get author name from email
  const getAuthorName = (email: string) => {
    if (!email) return "Anonymous";
    // Extract name from email (before @)
    const name = email.split("@")[0];
    // Convert to title case and replace dots/underscores with spaces
    return name
      .replace(/[._]/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  // Function to get random colors for tags
  const getTagColor = (index: number, tag: string) => {
    const colors = [
      "text-[#6941C6]",
      "text-[#1D76F1]",
      "text-[#F11D8B]",
      "text-[#F1991D]",
      "text-[#FFAB40]",
      "text-[#77A72E]",
      "text-[#F1641D]",
    ];
    return colors[index % colors.length];
  };

  // Function to get author avatar with dynamic generation
  const getAuthorAvatar = (email: string, name: string) => {
    if (!email && !name) return defaultAvatar;
    const displayName = name || email.split("@")[0];
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=0ea5e9&color=fff&size=32`;
  };

  // Handle the API response structure: {message: "...", data: [...]}
  const blogs = blogsData?.data || [];
  
  // Filter blogs based on search query and selected tag
  const filteredBlogs = blogs.filter((blog: any) => {
    if (!blog) return false;
    
    const matchesSearch =
      (blog.title && blog.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (blog.summary && blog.summary.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesTag =
      selectedTag === "All" ||
      (blog.tags && Array.isArray(blog.tags) && blog.tags.some((tag: string) => 
        tag.toLowerCase() === selectedTag.toLowerCase()
      ));
    
    return matchesSearch && matchesTag && blog.published;
  });

  // Debug logging
  console.log("blogsData:", blogsData);
  console.log("isLoading:", isLoading);
  console.log("error:", error);

  // Loading state
  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Blogs</h2>
          <p className="text-gray-600">Please try again later.</p>
          <p className="text-sm text-gray-500 mt-2">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-fit">
      {/* Header */}
      <div
        id="header"
        className="relative h-[350px] gap-4 flex flex-col items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${blogImage.src})` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h2 className="font-bold font-roboto text-[56px] capitalize text-white">
            Ideas that build better tech
          </h2>
          <p className="text-balance w-full text-[24px] leading-[36px] text-white">
            Explore expert insights, product strategies, design thinking, and
            development tips — straight from the minds shaping real-world
            digital solutions at CorTechSols.
          </p>
        </div>
      </div>

      {/* Our Blogs Section */}
      <div
        id="our-blog-parent"
        className="flex flex-col items-center relative w-full mt-24"
      >
        {/* Bars container */}
        <div className="absolute flex flex-col w-full transform -skew-y-6">
          {/* blue bar */}
          <div className="w-full h-12 bg-blue-300" />
          {/* 2nd bar container- pink,white,pink */}
          <div className="grid grid-cols-7 w-full">
            <div className="col-span-2 bg-pink-200 h-12"></div>
            <div className="col-span-2 bg-white h-12"></div>
            <div className="col-span-3 bg-pink-200 h-12"></div>
          </div>
          {/* 3rd bar container - purple,white,purple */}
          <div className="grid grid-cols-15 w-full">
            <div className="col-span-2 bg-purple-300 h-12"></div>
            <div className="col-span-12 bg-white h-12"></div>
            <div className="col-span-1 bg-purple-300 h-12"></div>
          </div>
        </div>

        {/* title and text section  */}
        <div className="relative font-roboto text-center flex flex-col items-center mt-14">
          <p className="text-orange-300 text-[20px] font-[500]">Our Blogs</p>
          <h2 className="font-[700] text-[#0F172A] leading-10 text-[40px] tracking-[-0.02em]">
            Resources and insights
          </h2>
          <p className="text[#0F172A] mt-4 text-balance text-[20px] font-[500]">
            The latest industry news, interviews, technologies, and resources.
          </p>
        </div>

        {/* search input */}
        <div>
          <div className="w-[250px] mt-8 flex gap-3 items-center border border-gray-300 rounded-md px-4 py-2">
            <Search color="#667085" />
            <input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none focus:ring-0 focus:outline-none"
            />
          </div>
        </div>

        {/* tags list */}
        <ul className="scrollbar-hide w-full flex px-4 gap-3 items-center justify-start mt-8 overflow-auto">
          {tags.map((name, index) => (
            <li
              key={index}
              className={clsx(
                "cursor-pointer py-1 border border-gray-300 rounded-full min-w-fit text-center px-5",
                selectedTag === name
                  ? "bg-teal-400 text-white"
                  : "bg-white text-[#2B2B2B]",
                index === 0 && "ml-8 sm:ml-16 md:ml-24 "
              )}
              onClick={() => setSelectedTag(name)}
            >
              {name}
            </li>
          ))}
        </ul>

        {/* blogs container */}
        <div className="max-w-6xl mt-12 grid grid-cols-1 md:mx-16 lg:24 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog: any) => (
              <Link href={`/blogs/${blog.slug}`} key={blog.id}>
                <Card className="transition-shadow duration-300 p-4 rounded-none shadow-lg border-gray-100 hover:shadow-xl">
                  <CardHeader className="p-0">
                    <Image
                      src={blog.images?.[0] || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop"}
                      alt={blog.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-md"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop";
                      }}
                    />
                  </CardHeader>
                  <CardContent className="p-0">
                    {blog.tags && blog.tags.length > 0 && (
                      <ul className="flex items-center gap-2 mb-2 flex-wrap">
                        {blog.tags.slice(0, 3).map((tag: string, index: number) => (
                          <li
                            key={tag}
                            className={clsx(
                              "text-sm font-[500]",
                              getTagColor(index, tag)
                            )}
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold line-clamp-2">
                        {blog.title}
                      </h3>
                      <ArrowUpRight className="flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {blog.summary || blog.meta_description || "Click to read more about this blog post."}
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center gap-3 p-0 mt-4">
                    <Image
                      src={getAuthorAvatar(blog.author_email, getAuthorName(blog.author_email))}
                      alt={getAuthorName(blog.author_email)}
                      width={32}
                      height={32}
                      className="rounded-full"
                      onError={(e) => {
                        e.currentTarget.src = defaultAvatar;
                      }}
                    />
                    <div className="flex flex-col text-sm">
                      <span className="font-medium">
                        {getAuthorName(blog.author_email)}
                      </span>
                      <span className="text-gray-500">
                        {formatDate(blog.created_at)}
                      </span>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                {searchQuery || selectedTag !== "All" 
                  ? "No blogs found matching your criteria." 
                  : "No blogs available at the moment."
                }
              </p>
            </div>
          )}
        </div>

        {/* pagination */}
        {filteredBlogs.length > 0 && (
          <div className="flex items-center space-x-3 sm:my-20 my-8">
            {/* Previous */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-8 w-8 rounded-full text-gray-400 bg-gray-100 hover:bg-gray-200 disabled:cursor-not-allowed"
            >
              &laquo;
            </button>
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-8 w-8 rounded-full text-gray-400 bg-gray-100 hover:bg-gray-200 disabled:cursor-not-allowed"
            >
              &lt;
            </button>

            {/* Page numbers */}
            {pageNumbers().map((num, idx) =>
              num === "..." ? (
                <span key={idx} className="px-3 py-1 text-gray-400">
                  ...
                </span>
              ) : (
                <button
                  key={idx}
                  onClick={() => goToPage(num as number)}
                  className={clsx(
                    "h-8 w-8 rounded-full text-sm",
                    num === currentPage
                      ? "bg-teal-500 text-white"
                      : "text-gray-600 hover:bg-gray-200 bg-gray-100"
                  )}
                >
                  {num}
                </button>
              )
            )}

            {/* Next */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-8 h-8 rounded-full text-gray-400 bg-gray-100 hover:bg-gray-200 disabled:cursor-not-allowed"
            >
              &gt;
            </button>
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-8 h-8 rounded-full text-gray-400 bg-gray-100 hover:bg-gray-200 disabled:cursor-not-allowed"
            >
              &raquo;
            </button>
          </div>
        )}

        {/* info section */}
        <InfoSection
          title="Let's build something that matters"
          subText="Have a project or an idea? Let's turn it into a digital experience people will remember"
        />

        {/* stay in loop */}
        <StayInLoop />

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default page;
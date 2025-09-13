"use client";

import React, { useEffect, useState } from "react";
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
import InfoSection from "@/components/InfoSection/InfoSection";
import StayInLoop from "@/components/StayInLoop/StayInLoop";
import Footer from "@/components/Footer/Footer";
import { fetchBlogs } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { getBlogImageUrl } from "@/utils/getBlobImageUrl";
import Avatar1 from "@/assets/images/blogs/avatar1.png";
import Avatar2 from "@/assets/images/blogs/avatar2.png";
import Avatar3 from "@/assets/images/blogs/avatar3.png";
import Avatar4 from "@/assets/images/blogs/avatar4.png";
import Avatar5 from "@/assets/images/blogs/avatar5.png";
import Avatar6 from "@/assets/images/blogs/avatar6.png";
import Avatar7 from "@/assets/images/blogs/avatar7.png";
import Avatar8 from "@/assets/images/blogs/avatar8.png";
import Avatar9 from "@/assets/images/blogs/avatar9.png";

const defaultAvatar = "https://ui-avatars.com/api/?name=User&background=0ea5e9&color=fff&size=32";

const page = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const totalPages = 8;

  const {
    data: blogsData,
    isLoading,
    error,
  } = useQuery({
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

  const getAuthorAvatar = (blogId: number, email: string, name: string) => {
    if (!email && !name) return defaultAvatar;
    
    // Use imported avatars based on blog ID to ensure different avatars
    const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7, Avatar8, Avatar9];
    
    // Use blog ID to assign different avatars
    const avatarIndex = blogId % avatars.length;
    return avatars[avatarIndex];
  };

  const getAvatarBackgroundColor = (blogId: number) => {
    const colors = [
      "bg-blue-100",    
      "bg-green-100",   
      "bg-purple-100",  
      "bg-pink-100",    
      "bg-yellow-100",  
      "bg-indigo-100",  
      "bg-red-100",     
      "bg-orange-100",  
      "bg-teal-100",    
    ];
    
    return colors[blogId % colors.length];
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
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

  // Handle the API response structure: {message: "...", data: [...]}
  const blogs = blogsData?.data || [];

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
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Error Loading Blogs
        </h2>
        <p className="text-gray-600">Please try again later.</p>
        <p className="text-sm text-gray-500 mt-2">{error.message}</p>
      </div>
    </div>
  );
}

  // Get unique tags from blogs data
  const getUniqueTags = (blogs: any[]) => {
    const allTags = new Set<string>();
  
    blogs.forEach((blog) => {
      if (blog.tags && Array.isArray(blog.tags)) {
        blog.tags.forEach((tag: { id: number; name: string }) => {
          allTags.add(tag.name);
        });
      }
    });
  
    console.log("passed blogs param:", blogs);
    return ["All", ...Array.from(allTags).sort()];
  };
  

  const tags = getUniqueTags(blogs);


  // Filter blogs based on search query and selected tag
  const filteredBlogs = blogs.filter((blog: any) => {
    if (!blog) return false;

    console.log("blog in filteredBlogs:", blog);

    const matchesSearch =
      (blog.title &&
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (blog.summary &&
        blog.summary.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag =
      selectedTag === "All" ||
      (blog.tags &&
        Array.isArray(blog.tags) &&
        blog.tags.some(
          (tag: { id: number; name: string }) =>
            tag.name.toLowerCase() === selectedTag.toLowerCase()
        ));

    return matchesSearch && matchesTag && blog.published;
  });


 

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
                      src={getBlogImageUrl(blog.images?.[0]) || "/placeholder.svg"}
                      alt={blog.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-md"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold line-clamp-2">
                        {blog.title}
                      </h3>
                      <ArrowUpRight className="flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {blog.summary ||
                        blog.meta_description ||
                        "Click to read more about this blog post."}
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center gap-3 p-0 mt-4">
                    <div className={`w-8 h-8 rounded-full ${getAvatarBackgroundColor(blog.id)} flex items-center justify-center`}>
                      <Image
                        src={getAuthorAvatar(blog.id, blog.author_email, getAuthorName(blog.author_email))}
                        alt={getAuthorName(blog.author_email)}
                        width={32}
                        height={32}
                        className="rounded-full"
                        onError={(e) => {
                          e.currentTarget.src = defaultAvatar;
                        }}
                      />
                    </div>
                    <div className="flex flex-col text-sm">
                      <p className="font-medium">
                        {getAuthorName(blog.author_email)}
                      </p>
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
                  : "No blogs available at the moment."}
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

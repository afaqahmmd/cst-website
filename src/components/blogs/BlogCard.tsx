"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Blog } from "@/types/blog";
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

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const getAuthorAvatar = (blogId: number, email: string, name: string) => {
    if (!email && !name) return defaultAvatar;

    // Use imported avatars based on blog ID to ensure different avatars
    const avatars = [
      Avatar1,
      Avatar2,
      Avatar3,
      Avatar4,
      Avatar5,
      Avatar6,
      Avatar7,
      Avatar8,
      Avatar9,
    ];

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

  return (
    <Link href={`/blogs/${blog.slug}`} className='h-full block'>
      <Card className='transition-shadow duration-300 p-4 rounded-none shadow-lg border-gray-100 hover:shadow-xl h-full flex flex-col'>
        <CardHeader className='p-0 mb-4'>
          <div className='w-full aspect-video overflow-hidden rounded-t-md bg-gray-100'>
            <Image
              src={blog.featured_image?.image || "/placeholder.svg"}
              alt={blog.featured_image?.alt_text || blog.title}
              width={400}
              height={225}
              className='w-full h-full object-cover'
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>
        </CardHeader>
        <CardContent className='p-0 flex-1 flex flex-col'>
          <div className='flex-1'>
            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className='flex flex-wrap gap-2 mb-3'>
                {blog.tags.slice(0, 3).map((tag: string, index: number) => (
                  <span
                    key={index}
                    className={`${
                      index % 2 === 0
                        ? "text-[#6941C6]"
                        : "text-[#1D76F1]"
                    } font-medium text-xs`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <div className='flex items-start justify-between mb-2 min-h-[3.5rem]'>
              <h3 className='text-lg font-semibold line-clamp-2 pr-2'>{blog.title}</h3>
              <ArrowUpRight className='flex-shrink-0 mt-1' />
            </div>
            <p className='text-gray-600 text-sm line-clamp-2'>
              {blog.excerpt || blog.meta_description || "Click to read more about this blog post."}
            </p>
          </div>
        </CardContent>
        <CardFooter className='flex items-center gap-3 p-0 mt-4'>
          <div
            className={`w-8 h-8 rounded-full ${getAvatarBackgroundColor(
              blog.id
            )} flex items-center justify-center`}
          >
            <Image
              src={getAuthorAvatar(blog.id, blog.created_by || '', getAuthorName(blog.created_by || ''))}
              alt={getAuthorName(blog.created_by || '')}
              width={32}
              height={32}
              className='rounded-full'
              onError={(e) => {
                e.currentTarget.src = defaultAvatar;
              }}
            />
          </div>
          <div className='flex flex-col text-sm'>
            <p className='font-medium'>{getAuthorName(blog.created_by || '')}</p>
            <span className='text-gray-500'>{formatDate(blog.created_at)}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

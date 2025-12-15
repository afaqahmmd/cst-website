import { Blog } from "@/types/blog";
import BlogCard from "./BlogCard";

interface BlogsGridServerProps {
  blogs: Blog[];
  searchQuery: string;
  selectedTag: string;
}

export default function BlogsGridServer({ blogs, searchQuery, selectedTag }: BlogsGridServerProps) {
  return (
    <div className='max-w-6xl mt-12 grid grid-cols-1 md:mx-16 lg:24 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
      {blogs.length > 0 ? (
        blogs.map((blog: Blog) => <BlogCard key={blog.id} blog={blog} />)
      ) : (
        <div className='col-span-full text-center py-12'>
          <p className='text-gray-500 text-lg'>
            {searchQuery || selectedTag !== "All"
              ? "No blogs found matching your criteria."
              : "No blogs available at the moment."}
          </p>
        </div>
      )}
    </div>
  );
}

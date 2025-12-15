"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Blog } from "@/types/blog";
import BlogSearchAndFilters from "./BlogSearchAndFilters";
import BlogsGrid from "./BlogsGrid";
import BlogPagination from "./BlogPagination";

interface BlogsClientWrapperProps {
  initialBlogs: Blog[];
  initialPagination: {
    current_page: number;
    total_pages: number;
    total_count: number;
    per_page: number;
    has_next: boolean;
    has_previous: boolean;
  };
  initialTags: string[];
}

export default function BlogsClientWrapper({
  initialBlogs,
  initialPagination,
  initialTags,
}: BlogsClientWrapperProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isInitialized = useRef(false);

  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [pagination, setPagination] = useState(initialPagination);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(initialPagination.current_page || 1);

  // Initialize state from URL params only once
  useEffect(() => {
    if (!isInitialized.current) {
      const query = searchParams.get("search") || "";
      const tag = searchParams.get("tag") || "All";
      const page = parseInt(searchParams.get("page") || "1");

      setSearchQuery(query);
      setSelectedTag(tag);
      setCurrentPage(page);
      isInitialized.current = true;
      
      // Fetch fresh data on mount
      fetchBlogsData(query, tag, page);
    }
  }, [searchParams]);

  // Function to fetch blogs data
  const fetchBlogsData = async (query: string, tag: string, page: number) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (query.trim()) params.set("search", query.trim());
      if (tag !== "All") params.append("tag", tag);
      if (page > 1) params.set("page", page.toString());

      console.log("Fetching blogs from:", `/api/blogs?${params.toString()}`);
      
      // Fetch new data
      const response = await fetch(`/api/blogs?${params.toString()}`);
      if (response.ok) {
        const data = await response.json();
        setBlogs(data.results || []);
        setPagination(data.pagination || initialPagination);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (query: string, tag: string, page: number) => {
      // Update URL without page reload
      const params = new URLSearchParams();
      if (query.trim()) params.set("search", query.trim());
      if (tag !== "All") params.set("tag", tag);
      if (page > 1) params.set("page", page.toString());

      const newUrl = `/blogs${params.toString() ? `?${params.toString()}` : ""}`;
      router.push(newUrl, { scroll: false });

      // Fetch data
      await fetchBlogsData(query, tag, page);
    }, 300),
    [router, initialPagination]
  );

  // Handle search input changes
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on search
    debouncedSearch(query, selectedTag, 1);
  };

  // Handle tag selection
  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
    setCurrentPage(1); // Reset to first page on tag change
    debouncedSearch(searchQuery, tag, 1);
  };

  // Handle page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    debouncedSearch(searchQuery, selectedTag, page);
  };

  return (
    <>
      {/* Search and Filters */}
      <BlogSearchAndFilters
        searchQuery={searchQuery}
        setSearchQuery={handleSearchChange}
        tags={initialTags}
        selectedTag={selectedTag}
        setSelectedTag={handleTagChange}
      />

      {/* Loading indicator */}
      {loading && (
        <div className='flex flex-col items-center py-8'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500 mb-4'></div>
          <p className='text-gray-500'>Loading blogs...</p>
        </div>
      )}

      {/* Blogs Grid */}
      {!loading && <BlogsGrid blogs={blogs} searchQuery={searchQuery} selectedTag={selectedTag} />}

      {/* Pagination */}
      {!loading && pagination && pagination.total_pages > 1 && (
        <BlogPagination
          currentPage={currentPage}
          totalPages={pagination.total_pages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}

// Debounce utility function
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

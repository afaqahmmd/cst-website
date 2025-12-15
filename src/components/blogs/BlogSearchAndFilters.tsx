"use client";

import { Search } from "lucide-react";
import clsx from "clsx";

interface BlogSearchAndFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  tags: string[];
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
}

export default function BlogSearchAndFilters({
  searchQuery,
  setSearchQuery,
  tags,
  selectedTag,
  setSelectedTag,
}: BlogSearchAndFiltersProps) {
  return (
    <>
      {/* search input */}
      <div>
        <div className='w-[250px] mt-8 flex gap-3 items-center border border-gray-300 rounded-md px-4 py-2'>
          <Search color='#667085' />
          <input
            placeholder='Search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='flex-1 outline-none focus:ring-0 focus:outline-none'
          />
        </div>
      </div>

      {/* tags list */}
      <ul className='scrollbar-hide w-full flex px-4 gap-3 items-center justify-center mt-8 overflow-auto'>
        {tags.map((name, index) => (
          <li
            key={index}
            className={clsx(
              "cursor-pointer py-1 border border-gray-300 rounded-full min-w-fit text-center px-5 font-semibold",
              selectedTag === name ? "bg-teal-400 text-white" : "bg-white text-[#2B2B2B]",
              index === 0 && "ml-8 sm:ml-16 md:ml-24 "
            )}
            onClick={() => setSelectedTag(name)}
          >
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}

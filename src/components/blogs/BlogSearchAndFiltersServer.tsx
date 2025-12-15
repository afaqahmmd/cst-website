import { Search } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

interface BlogSearchAndFiltersServerProps {
  searchQuery: string;
  tags: string[];
  selectedTag: string;
}

export default function BlogSearchAndFiltersServer({
  searchQuery,
  tags,
  selectedTag,
}: BlogSearchAndFiltersServerProps) {
  const createSearchUrl = (newSearch: string, newTag: string = selectedTag) => {
    const params = new URLSearchParams();
    if (newSearch.trim()) params.set("query", newSearch.trim());
    if (newTag !== "All") params.set("tag", newTag);
    return `/blogs${params.toString() ? `?${params.toString()}` : ""}`;
  };

  const createTagUrl = (tag: string) => {
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("search", searchQuery.trim());
    if (tag !== "All") params.set("tag", tag);
    return `/blogs${params.toString() ? `?${params.toString()}` : ""}`;
  };

  return (
    <>
      {/* search input */}
      <div>
        <form
          action='/blogs'
          method='get'
          className='w-[250px] mt-8 flex gap-3 items-center border border-gray-300 rounded-md px-4 py-2'
        >
          <Search color='#667085' />
          <input
            name='query'
            placeholder='Search'
            defaultValue={searchQuery}
            className='flex-1 outline-none focus:ring-0 focus:outline-none'
          />
          {selectedTag !== "All" && <input type='hidden' name='tag' value={selectedTag} />}
        </form>
      </div>

      {/* tags list */}
      <ul className='scrollbar-hide w-full flex px-4 gap-3 items-center justify-start mt-8 overflow-auto'>
        {tags.map((name, index) => (
          <li
            key={index}
            className={clsx(
              "cursor-pointer py-1 border border-gray-300 rounded-full min-w-fit text-center px-5",
              selectedTag === name ? "bg-teal-400 text-white" : "bg-white text-[#2B2B2B]",
              index === 0 && "ml-8 sm:ml-16 md:ml-24 "
            )}
          >
            <Link href={createTagUrl(name)} className='block w-full h-full'>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

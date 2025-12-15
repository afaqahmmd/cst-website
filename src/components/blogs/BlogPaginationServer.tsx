import clsx from "clsx";
import Link from "next/link";

interface BlogPaginationServerProps {
  currentPage: number;
  totalPages: number;
  searchQuery: string;
  selectedTag: string;
}

export default function BlogPaginationServer({
  currentPage,
  totalPages,
  searchQuery,
  selectedTag,
}: BlogPaginationServerProps) {
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("search", searchQuery.trim());
    if (selectedTag !== "All") params.set("tag", selectedTag);
    if (page > 1) params.set("page", page.toString());
    return `/blogs${params.toString() ? `?${params.toString()}` : ""}`;
  };

  const pageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      // show first 4, last 1 and around current page
      if (i <= 4 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className='flex items-center space-x-3 sm:my-20 my-8'>
      {/* Previous */}
      <Link
        href={createPageUrl(currentPage - 1)}
        className={clsx(
          "h-8 w-8 rounded-full text-gray-400 bg-gray-100 hover:bg-gray-200 flex items-center justify-center",
          currentPage === 1 && "pointer-events-none opacity-50"
        )}
        aria-disabled={currentPage === 1}
      >
        &laquo;
      </Link>
      <Link
        href={createPageUrl(currentPage - 1)}
        className={clsx(
          "h-8 w-8 rounded-full text-gray-400 bg-gray-100 hover:bg-gray-200 flex items-center justify-center",
          currentPage === 1 && "pointer-events-none opacity-50"
        )}
        aria-disabled={currentPage === 1}
      >
        &lt;
      </Link>

      {/* Page numbers */}
      {pageNumbers().map((num, idx) =>
        num === "..." ? (
          <span key={idx} className='px-3 py-1 text-gray-400'>
            ...
          </span>
        ) : (
          <Link
            key={idx}
            href={createPageUrl(num as number)}
            className={clsx(
              "h-8 w-8 rounded-full text-sm flex items-center justify-center",
              num === currentPage
                ? "bg-teal-500 text-white"
                : "text-gray-600 hover:bg-gray-200 bg-gray-100"
            )}
          >
            {num}
          </Link>
        )
      )}

      {/* Next */}
      <Link
        href={createPageUrl(currentPage + 1)}
        className={clsx(
          "w-8 h-8 rounded-full text-gray-400 bg-gray-100 hover:bg-gray-200 flex items-center justify-center",
          currentPage === totalPages && "pointer-events-none opacity-50"
        )}
        aria-disabled={currentPage === totalPages}
      >
        &gt;
      </Link>
      <Link
        href={createPageUrl(currentPage + 1)}
        className={clsx(
          "w-8 h-8 rounded-full text-gray-400 bg-gray-100 hover:bg-gray-200 flex items-center justify-center",
          currentPage === totalPages && "pointer-events-none opacity-50"
        )}
        aria-disabled={currentPage === totalPages}
      >
        &raquo;
      </Link>
    </div>
  );
}

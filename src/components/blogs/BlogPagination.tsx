"use client";

import clsx from "clsx";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: BlogPaginationProps) {
  // Don't render pagination if there's only 1 page
  if (totalPages <= 1) {
    return null;
  }

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

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <div className='flex items-center space-x-3 sm:my-20 my-8'>
      {/* Previous */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className='h-8 w-8 rounded-full text-gray-400 bg-gray-100 hover:bg-gray-200 disabled:cursor-not-allowed'
      >
        &laquo;
      </button>
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className='h-8 w-8 rounded-full text-gray-400 bg-gray-100 hover:bg-gray-200 disabled:cursor-not-allowed'
      >
        &lt;
      </button>

      {/* Page numbers */}
      {pageNumbers().map((num, idx) =>
        num === "..." ? (
          <span key={idx} className='px-3 py-1 text-gray-400'>
            ...
          </span>
        ) : (
          <button
            key={idx}
            onClick={() => goToPage(num as number)}
            className={clsx(
              "h-8 w-8 rounded-full text-sm cursor-pointer",
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
        className='w-8 h-8 rounded-full text-gray-400 bg-gray-100 hover:bg-gray-200 disabled:cursor-not-allowed'
      >
        &gt;
      </button>
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='w-8 h-8 rounded-full text-gray-400 bg-gray-100 hover:bg-gray-200 disabled:cursor-not-allowed'
      >
        &raquo;
      </button>
    </div>
  );
}

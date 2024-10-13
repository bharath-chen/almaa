import { FC, useState } from "react";
import twFocusClass from "../../utils/twFocusClass";

export interface PaginationProps {
  className?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize?: number; // Number of pages to show at once (defaults to 5)
}

const Pagination: FC<PaginationProps> = ({
  className = "",
  currentPage,
  totalPages,
  onPageChange,
  pageSize = 5, // Default to showing 5 pages at a time
}) => {
  const [currentPageGroup, setCurrentPageGroup] = useState(0); // Track the current group of pages

  const totalPageGroups = Math.ceil(totalPages / pageSize); // Total number of page groups

  // Generate the range of page numbers to display in the current group
  const generatePageNumbers = () => {
    const startPage = currentPageGroup * pageSize + 1;
    const endPage = Math.min(startPage + pageSize - 1, totalPages);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handleNextGroup = () => {
    if (currentPageGroup < totalPageGroups - 1) {
      setCurrentPageGroup(currentPageGroup + 1);
      onPageChange(currentPageGroup * pageSize + pageSize + 1);
    }
  };

  const handlePreviousGroup = () => {
    if (currentPageGroup > 0) {
      setCurrentPageGroup(currentPageGroup - 1);
      onPageChange(currentPageGroup * pageSize);
    }
  };

  const renderPageItem = (pageNumber: number) => {
    const isActive = currentPage === pageNumber;
    if (isActive) {
      return (
        <span
          key={pageNumber}
          className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white ${twFocusClass()}`}
        >
          {pageNumber}
        </span>
      );
    }

    return (
      <button
        key={pageNumber}
        className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
        onClick={() => onPageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  return (
    <nav
      className={`nc-Pagination inline-flex space-x-1 text-base font-medium ${className}`}
    >
      {/* Previous group button */}
      <button
        className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
        onClick={handlePreviousGroup}
        disabled={currentPageGroup === 0}
      >
        {"<"}
      </button>

      {/* Render current group of page numbers */}
      {generatePageNumbers().map(renderPageItem)}

      {/* Next group button */}
      <button
        className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
        onClick={handleNextGroup}
        disabled={currentPageGroup === totalPageGroups - 1}
      >
        {">"}
      </button>
    </nav>
  );
};

export default Pagination;

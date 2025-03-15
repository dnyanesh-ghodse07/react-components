import React, { useEffect, useRef, useState } from "react";
import { PaginationProps } from "./types";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalItems,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePages, setVisiblePages] = useState(5);
  const [screenWidth, setScreenWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (entries && entries[0]) {
        const { width } = entries[0].contentRect;
        const pages = width < 300 ? 1 : width < 500 ? 3 : 5;
        setScreenWidth(width);
        setVisiblePages(pages);
      }
    });

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  const getNearbyPages = (currentPage: number) => {
    const pages = [];
    const half = Math.floor(visiblePages / 2); // Use half of visiblePages
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    // Adjust start if there's not enough space at the beginning
    if (end - start < visiblePages - 1) {
      start = Math.max(1, end - visiblePages + 1);
    }

    // Adjust end if there's not enough space at the end
    if (end - start < visiblePages - 1) {
      end = Math.min(totalPages, start + visiblePages - 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  if (totalPages <= 1) return <></>;

  return (
    <div
      ref={containerRef}
      className="flex space-x-2 p-1 overflow-x-auto items-center justify-center"
      role="navigation"
      aria-label="Pagination"
    >
      <div className="flex space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          aria-label="Previous"
          aria-disabled={currentPage === 1}
          className={`flex items-center text-blue-400 ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
        >
          <FaAngleLeft />
          {screenWidth > 300 && <span>Prev</span>}
        </button>
        {currentPage > Math.ceil(visiblePages / 2) && (
          <>
            <button
              onClick={() => setCurrentPage(1)}
              className="w-10 h-10 text-blue-400 rounded-full cursor-pointer"
            >
              01
            </button>
            {currentPage > Math.ceil(visiblePages / 2) + 1 && (
              <button className="text-blue-400" disabled>...</button>
            )}
          </>
        )}
        {getNearbyPages(currentPage).map((page) => (
          <button
            key={page}
            className={`w-10 h-10 text-blue-400 rounded-full cursor-pointer ${
              currentPage === page
                ? "bg-blue-400 text-white border-blue-400"
                : ""
            }`}
            onClick={() => setCurrentPage(page)}
            aria-label={`Go to page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page < 10 ? `0${page}` : page}
          </button>
        ))}
        {currentPage < totalPages - Math.ceil(visiblePages / 2) && (
          <>
            {currentPage < totalPages - Math.ceil(visiblePages / 2) - 1 && (
              <button className="text-blue-400" disabled>...</button>
            )}
            <button
              onClick={() => setCurrentPage(totalPages)}
              className="p-1 text-blue-400 rounded-full cursor-pointer"
            >
              {totalPages}
            </button>
          </>
        )}
        <button
          aria-label="Next"
          aria-disabled={currentPage === totalPages}
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className={`flex items-center text-blue-400 ${
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
        >
          {screenWidth > 300 &&<span>Next</span>}
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

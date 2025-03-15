import React, { useEffect, useState } from "react";
import { PaginationProps } from "./types";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalItems,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getNearbyPages = (currentPage: number) => {
    return [currentPage - 1, currentPage, currentPage + 1].filter(
      (page) => page > 0 && page <= totalPages
    );
  };

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  if (totalPages <= 1) return <> </>;

  return (
    <div className="flex space-x-2 p-1 overflow-x-auto shadow-md rounded-md" role="navigation" aria-label="Pagination">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        aria-label="Previous"
        aria-disabled={currentPage === 1}
        className={`flex items-center ${
          currentPage === 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
      >
        <FaAngleLeft />
        <span>Prev</span>
      </button>
      {currentPage > 3 && (
        <>
          <button onClick={() => setCurrentPage(1)}>01</button>
          <button disabled>...</button>
        </>
      )}
      {getNearbyPages(currentPage).map((page) => (
        <button
          key={page}
          className={`p-1 rounded-md cursor-pointer ${
            currentPage === page ? "bg-blue-400 text-white border-blue-400" : ""
          }`}
          onClick={() => setCurrentPage(page)}
          aria-label={`Go to page ${page}`}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page < 10 ? `0${page}` : page}
        </button>
      ))}
      {currentPage < totalPages - 2 && (
        <>
          <button disabled>...</button>
          <button onClick={() => setCurrentPage(totalPages)}>
            {totalPages}
          </button>
        </>
      )}
      <button
        aria-label="Next"
        aria-disabled={currentPage === totalPages}
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        className={`flex items-center ${
          currentPage === totalPages
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer"
        }`}
      >
        <span>Next</span>
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
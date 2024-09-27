import React from 'react';

export default function Pagination({
  currentPage,
  totalResults,
  itemsPerPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  return (
    <div id="pagination" className="flex justify-center items-center mt-8 space-x-4">
      <button
        id="prev-page"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-pink-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span id="page-info" className="text-gray-400">
        Page {currentPage} of {totalPages}
      </span>
      <button
        id="next-page"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-pink-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
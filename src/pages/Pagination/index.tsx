import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";

const PaginationPage = () => {
  const [totalItems, setTotalItems] = useState(100);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log("Current Page:", page);
  };

  const handleTotalItemsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTotalItems(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Pagination</h1>

      {/* Total Items */}
      <div className="flex items-center space-x-4 mb-4">
        <h1 className="text-lg">Total Items</h1>
        <select
          value={totalItems}
          onChange={handleTotalItemsChange}
          className="border rounded-md p-2"
        >
          <option value="100">100</option>
          <option value="300">300</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
        </select>
      </div>

      {/* Items Per Page */}
      <div className="flex items-center space-x-4 mb-4">
        <h1 className="text-lg">Items Per Page</h1>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="border rounded-md p-2"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>

      {/* Pagination Component */}
      <div className="w-full">
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
};

export default PaginationPage;

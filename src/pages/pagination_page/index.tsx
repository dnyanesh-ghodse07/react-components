import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Header from "../../components/UI/Header";

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

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div className="">
      <Header title="Pagination" githubLink="https://github.com/dnyanesh-ghodse07/react-components/blob/main/src/components/Pagination/Pagination.tsx" />

      <div className="flex flex-row items-center justify-between">
        {/* Total Items */}
        <div className="flex items-center space-x-2 mb-2">
          <h1 className="">Total Items</h1>
          <select
            value={totalItems}
            onChange={handleTotalItemsChange}
            className="border rounded-md"
          >
            <option value="100">100</option>
            <option value="300">300</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
          </select>
        </div>

        {/* Items Per Page */}
        <div className="flex items-center space-x-2 mb-2">
          <h1 className="">Items Per Page</h1>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border rounded-md"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>

      {/* Pagination Component */}
      <div className="w-full mt-6">
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

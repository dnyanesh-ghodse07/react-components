import Pagination from "../../components/Pagination/Pagination";

const PaginationPage = () => {
  return (
    <div className="">
      <h1>Pagination</h1>
      <div className="w-full">
        <Pagination
          currentPage={1}
          onPageChange={(page) => console.log(page)}
          totalItems={1000}
          itemsPerPage={5}
        />
      </div>
    </div>
  );
};

export default PaginationPage;

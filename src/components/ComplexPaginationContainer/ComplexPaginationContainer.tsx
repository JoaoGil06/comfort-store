import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { OrdersLoaderResponse } from "../../utils/types/OrdersLoaderResponse.type";

type addPageButtonType = {
  pageNumber: number;
  activeClass: boolean;
};

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData() as OrdersLoaderResponse;
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber: number): void => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", `${pageNumber}`);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const handlePreviousPage = (): void => {
    let prevPage = page - 1;
    if (prevPage < 1) prevPage = pageCount;
    handlePageChange(prevPage);
  };

  const handleNextPage = (): void => {
    let nextPage = page + 1;
    if (nextPage > pageCount) nextPage = 1;
    handlePageChange(nextPage);
  };

  const addPageButton = ({
    pageNumber,
    activeClass,
  }: addPageButtonType): JSX.Element => {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`btn btn-xs sm:btn-md border-none join-item ${
          activeClass ? "bg-base-300 border-base-300" : ""
        }`}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons: JSX.Element[] = [];
    // first button
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

    // Dots
    if (page > 2) {
      pageButtons.push(
        <button className="join-item btn btn-xs sm:btn-md" key="dots-1">
          ...
        </button>
      );
    }

    // active/current page
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }

    // Dots
    if (page < pageCount - 1) {
      pageButtons.push(
        <button className="join-item btn btn-xs sm:btn-md" key="dots-2">
          ...
        </button>
      );
    }

    // last button
    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    );
    return pageButtons;
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md jooin-item"
          onClick={handlePreviousPage}
        >
          Prev
        </button>
        {renderPageButtons()}
        <button
          className="btn btn-xs sm:btn-md jooin-item"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ComplexPaginationContainer;

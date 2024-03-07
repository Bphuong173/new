import React from "react";
import { fetchTodoLabelapi } from "../api/apitodolabel";
export function PaginateTodolabel({
  setTodoLabels,
  paginationLabel,
  setPaginationLabel,
}) {
  console.log(paginationLabel);
  const loadNextPage = async () => {
    const nextPage = (paginationLabel.current_page || 1) + 1;
    if (nextPage <= paginationLabel.total_pages) {
      await fetchTodoLabelapi(nextPage).then((res) => {
        const newData = res.data.data;
        const newPaginationLabel = res.data.paginationLabel;
        console.log(newData);
        setTodoLabels(newData);
        setPaginationLabel(newPaginationLabel);
      });
    }
  };
  const loadPrevPage = async () => {
    const prevPage = (paginationLabel.current_page || 1) - 1;
    if (prevPage <= paginationLabel.total_pages) {
      await fetchTodoLabelapi(prevPage).then((res) => {
        const newData = res.data.data;
        const newPaginationLabel = res.data.paginationLabel;
        setTodoLabels(newData);
        setPaginationLabel(newPaginationLabel);
      });
    }
  };

  return (
    <>
      <button
        disabled={paginationLabel.current_page === 1}
        onClick={loadPrevPage}
      >
        Trang trước
      </button>
      <button
        disabled={paginationLabel.current_page === paginationLabel.total_pages}
        onClick={loadNextPage}
      >
        Trang tiếp theo
      </button>
    </>
  );
}

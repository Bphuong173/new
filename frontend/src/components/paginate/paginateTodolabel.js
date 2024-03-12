import React from "react";
import { fetchTodoLabelapi } from "../api/apitodolabel";
import { Paginateiconright } from "./paginateicon/paginateiconright";
import { Paginateiconleft } from "./paginateicon/paginateiconleft";
export function PaginateTodolabel({
  setTodoLabels,
  paginationLabel,
  setPaginationLabel,
}) {
  const loadNextPage = async () => {
    const nextPage = (paginationLabel.current_page || 1) + 1;
    if (nextPage <= paginationLabel.total_pages) {
      await fetchTodoLabelapi(nextPage).then((res) => {
        const newData = res.data.data;
        const newPaginationLabel = res.data.paginationLabel;

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
      <div className="absolute pl-2.5 mb-5 bottom-0 w-11/12 flex justify-between">
        <button
          disabled={paginationLabel.current_page === 1}
          onClick={loadPrevPage}
        >
          <Paginateiconleft />
        </button>
        <button
          disabled={
            paginationLabel.current_page === paginationLabel.total_pages
          }
          onClick={loadNextPage}
        >
          <Paginateiconright />
        </button>
      </div>
    </>
  );
}

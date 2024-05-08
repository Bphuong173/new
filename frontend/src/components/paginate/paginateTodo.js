import React from "react";
import { fetchTodos } from "../api/apitodo";
import { Paginateiconright } from "./paginateicon/paginateiconright";
import { Paginateiconleft } from "./paginateicon/paginateiconleft";
export function PaginateTodo({ setTodos, paginationTodo, setPaginationTodo }) {
  const loadNextPage = async () => {
    const nextPage = paginationTodo.current_page + 1;
    if (nextPage <= paginationTodo.total_pages) {
      await fetchTodos(nextPage).then((res) => {
        const newData = res.data.data;
        const newPaginationTodo = res.data.paginationTodo;

        setTodos(newData);
        setPaginationTodo(newPaginationTodo);
      });
    }
  };
  const loadPrevPage = async () => {
    const prevPage = paginationTodo.current_page - 1;
    if (prevPage <= paginationTodo.total_pages) {
      await fetchTodos(prevPage).then((res) => {
        const newData = res.data.data;
        const newPaginationTodo = res.data.paginationTodo;
        setTodos(newData);
        setPaginationTodo(newPaginationTodo);
      });
    }
  };

  return (
    <>
      <div className=" pb-4 bottom-0 w-11/12 flex items-center mt-3 justify-center ">
        <button
          disabled={paginationTodo.current_page === 1}
          onClick={loadPrevPage}
        >
          <Paginateiconleft />
        </button>
        <button
          disabled={paginationTodo.current_page === paginationTodo.total_pages}
          onClick={loadNextPage}
        >
          <Paginateiconright />
        </button>
      </div>
    </>
  );
}

import React from "react";
import { fetchTodos } from "../api/apitodo";
export function PaginateTodo({ setTodos, paginationTodo, setPaginationTodo }) {
  console.log(paginationTodo);
  const loadNextPage = async () => {
    const nextPage = paginationTodo.current_page + 1;
    if (nextPage <= paginationTodo.total_pages) {
      await fetchTodos(nextPage).then((res) => {
        const newData = res.data.data;
        const newPaginationTodo = res.data.paginationTodo;
        console.log(newData);
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
      <button
        disabled={paginationTodo.current_page === 1}
        onClick={loadPrevPage}
      >
        Trang trước
      </button>
      <button
        disabled={paginationTodo.current_page === paginationTodo.total_pages}
        onClick={loadNextPage}
      >
        Trang tiếp theo
      </button>
    </>
  );
}

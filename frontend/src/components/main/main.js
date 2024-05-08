import React, { useEffect } from "react";
import { Todo } from "../todo/todo/todo";
import { TodoLabel } from "../todolabel/list/todolabel";
import { useNavigate } from "react-router-dom";
import { UploadAvatar } from "../uploadavatar/uploadavatar";
import { fetchTodos } from "../api/apitodo";
import { fetchTodoLabelapi } from "../api/apitodolabel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useData } from "./mainstate.js";
import "../../index.css";
export function Main() {
  const queryClient = new QueryClient();
  const {
    todoLabels,
    setTodoLabels,
    todos,
    setTodos,
    paginationLabel,
    setPaginationLabel,
    paginationTodo,
    setPaginationTodo,
    currentPage,
    setCurrentPage,
    displayedLabels,
    setDisplayedLabels,
  } = useData();

  const navigate = useNavigate();
  const loadTodo = async () => {
    await fetchTodos()
      .then((res) => {
        setTodos(res.data.data);
        setPaginationTodo(res.data.paginationTodo);
      })
      .catch((error) => console.log(error));
  };

  const loadTodolabel = async () => {
    await fetchTodoLabelapi()
      .then((res) => {
        setTodoLabels(res.data.data);
        setPaginationLabel(res.data.paginationLabel);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    loadTodolabel();
    loadTodo();
  }, []);
  const updateTodoLabels = async () => {
    try {
      const res = await fetchTodoLabelapi(currentPage); // Fetch lại dữ liệu nhãn công việc sau mỗi thao tác
      setDisplayedLabels(res.data.data);
      setPaginationLabel(res.data.paginationLabel);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UploadAvatar />
        <div className="flex w-full h-[100vh]">
          <div className=" w-1/4 mt-12 relative h[90%] ">
            <TodoLabel
              setTodoLabels={setTodoLabels}
              paginationLabel={paginationLabel}
              setPaginationLabel={setPaginationLabel}
              updateTodoLabels={updateTodoLabels}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              displayedLabels={displayedLabels}
              setDisplayedLabels={setDisplayedLabels}
            />
          </div>
          <div className=" w-3/4 mt-12 bg-[#F5F5F9]">
            <Todo
              todoLabels={todoLabels}
              todos={todos}
              loadTodo={loadTodo}
              setTodos={setTodos}
              paginationTodo={paginationTodo}
              setPaginationTodo={setPaginationTodo}
            />
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}

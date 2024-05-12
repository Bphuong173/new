import React, { useEffect } from "react";
import { Todo } from "../todo/todo/todo";
import { TodoLabel } from "../todolabel/list/todolabel";
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
  } = useData();

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
  const reloadAll = () => {
    loadTodo();
    loadTodolabel();
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UploadAvatar />
        <div className="flex w-full h-[100vh]">
          <div className=" w-1/4 mt-12 relative h[90%] ">
            <TodoLabel
              setTodoLabels={setTodoLabels}
              todoLabels={todoLabels}
              paginationLabel={paginationLabel}
              setPaginationLabel={setPaginationLabel}
              reloadAll={reloadAll}
            />
          </div>
          <div className=" w-3/4 mt-12 bg-[#F5F5F9]">
            <Todo
              todoLabels={todoLabels}
              setTodoLabels={setTodoLabels}
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

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
  const reloadAll = () => {
    loadTodo();
    loadTodolabel();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    // Chuyển hướng người dùng về trang đăng nhập sau khi đăng xuất
    navigate("/login");
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="h-full w-full">
          <UploadAvatar />
          <div className="flex h-full w-full">
            <div className="todoLabel">
              <TodoLabel
                todoLabels={todoLabels}
                reloadAll={reloadAll}
                setTodoLabels={setTodoLabels}
                paginationLabel={paginationLabel}
                setPaginationLabel={setPaginationLabel}
              />
            </div>
            <div className="todoList">
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
          <button
            className=" absolute mt-2 top-0 right-5 text-white bg-[#F93B42]  focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-4 py-2.5 text-center me-2 mb-2 "
            onClick={handleLogout}
          >
            Đăng xuất
          </button>
        </div>
      </QueryClientProvider>
    </>
  );
}

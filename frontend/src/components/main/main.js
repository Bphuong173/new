import React, { useEffect, useState } from "react";
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
    setTodoLabels,
    setTodos,
    filteredLabel,
    setFilteredLabel,
    lastIdLabel,
    lastIdTodo,
    setLastIdTodo,
  } = useData();

  const loadTodo = async (lastId = lastIdTodo) => {
    console.log(`Fetching Todos with lastId: ${lastId}`);
    try {
      const res = await fetchTodos(lastId);
      setTodos((prevTodos) => [...prevTodos, ...res.data]);
      console.log(`Successfully fetched todos:`, res.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
  const loadTodolabel = async (lastId = lastIdLabel) => {
    console.log(`Fetching TodoLabel with lastId: ${lastId}`);
    try {
      const res = await fetchTodoLabelapi(lastId);
      console.log(res.data);
      setTodoLabels((prevLabels) => {
        console.log(`Successfully fetched todoLabel:`, [
          ...prevLabels,
          ...res.data,
        ]);
        return [...prevLabels, ...res.data];
      });
      return res.data.length;
    } catch (error) {
      console.error("Error fetching todoLabels:", error);
    }
  };

  useEffect(() => {
    loadTodolabel();
    loadTodo();
  }, []);

  const reloadAll = () => {
    loadTodo();
    // loadTodolabel();
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UploadAvatar />
        <div className="flex w-full h-[100vh]">
          <div className=" w-1/4 mt-12 relative h[90%] flex flex-col ">
            <TodoLabel
              reloadAll={reloadAll}
              setFilteredLabel={setFilteredLabel}
              loadTodolabel={loadTodolabel}
            />
          </div>
          <div className=" w-3/4 mt-12 bg-[#F5F5F9]">
            <Todo
              loadTodo={loadTodo}
              filteredLabel={filteredLabel}
              setLastIdTodo={setLastIdTodo}
            />
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}

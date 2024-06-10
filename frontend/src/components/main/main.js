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
  const { setTodoLabels, setTodos, setLastIdTodo } = useData();

  const loadTodo = async (lastIdTodo) => {
    console.log(`Fetching Todos with lastId: ${lastIdTodo}`);
    try {
      const res = await fetchTodos(lastIdTodo);
      setTodos((prevTodos) => [...prevTodos, ...res.data]);
      console.log(`Successfully fetched todos:`, res.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
  const loadTodolabel = async (lastIdLabel) => {
    console.log(`Fetching TodoLabel with lastId: ${lastIdLabel}`);
    try {
      const res = await fetchTodoLabelapi(lastIdLabel);
      console.log(res.data);
      setTodoLabels((prevLabels) => [...prevLabels, ...res.data]);
    } catch (error) {
      console.error("Error fetching todoLabels:", error);
    }
  };

  useEffect(() => {
    loadTodolabel();
    loadTodo();
  }, []);

  const reloadAll = () => {
    // loadTodolabel();
    loadTodo();
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UploadAvatar />
        <div className="flex w-full h-[100vh]">
          <div className=" w-1/4 mt-12 relative h[90%] flex flex-col ">
            <TodoLabel reloadAll={reloadAll} loadTodolabel={loadTodolabel} />
          </div>
          <div className=" w-3/4 mt-12 bg-[#F5F5F9]">
            <Todo loadTodo={loadTodo} setLastIdTodo={setLastIdTodo} />
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}

// {showTodomodal && (
//   <div>
//     <Todomodal />
//   </div>
// )}

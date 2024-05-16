import React, { useState, useRef, useEffect } from "react";
import { Input } from "../input/input";
import { Item } from "../item/item";
import axios from "axios";
import {
  fetchTodos,
  createTodoapi,
  updateTodoapi,
  deleteTodoapi,
} from "../../api/apitodo";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useData } from "../../main/mainstate";
export const Todo = ({ loadTodo, filteredLabel }) => {
  const { todos, setTodos } = useData();
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ["todos"], queryFn: fetchTodos });
  const [lastId, setLastId] = useState(null);
  const containerRef = useRef(null);

  // let filteredTodos;
  // if (filteredLabel) {
  //   filteredTodos = todos.filter((todo) => todo.labelId === filteredLabel);
  // } else {
  //   filteredTodos = todos;
  // }
  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      // Kiểm tra container có tồn tại hay không

      const handleScroll = async () => {
        if (
          container.scrollTop + container.clientHeight >=
          container.scrollHeight
        ) {
          if (lastId) {
            const res = await loadTodo(lastId);
            setTodos((prevTodos) => [...prevTodos, ...res.data]);
            setLastId(res.data[res.data.length - 1]._id);
          }
        }
      };

      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastId]);

  const mutationCreate = useMutation({
    mutationFn: createTodoapi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      query.refetch();
    },
  });

  const mutation = useMutation({
    mutationFn: (data) =>
      updateTodoapi(data._id, {
        task: data.task,
        clockCompleted: data.clockCompleted,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      query.refetch();
    },
  });
  const mutationDelete = useMutation({
    mutationFn: deleteTodoapi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      query.refetch();
    },
  });
  const [clockCompleted, setClockCompleted] = useState([]);
  const [countdownActive, setCountdownActive] = useState(false);
  const handleClockCompletedChange = (newClockCompleted) => {
    setClockCompleted(newClockCompleted);
  };
  const handleCountdownEnd = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo._id === todoId
        ? {
            ...todo,
            clockCompleted: todo.clockCompleted.slice(0, -1),
          }
        : todo
    );
    setTodos(updatedTodos);
    const todoToUpdate = updatedTodos.find((todo) => todo._id === todoId);

    // Gửi yêu cầu cập nhật dữ liệu đến server
    axios
      .put(`http://localhost:5500/todo/${todoId}`, {
        _id: todoId,
        task: todoToUpdate.task,
        clockCompleted: todoToUpdate.clockCompleted,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`Error! status: ${response.status}`);
        }
        return response.data;
      })
      .catch((error) => {
        console.error("Error updating todo on server:", error);
      });
  };

  const addTodo = (task, labelId, time, clockCompleted, countdownTime) => {
    mutationCreate.mutate({
      task: task,
      labelId: labelId,
      time: time,
      clockCompleted: clockCompleted,
      countdownTime: countdownTime,
    });
  };
  const deleteTodo = (_id) => {
    mutationDelete.mutate(_id);
  };
  const updateTask = (task, _id, clockCompleted) => {
    mutation.mutate({ _id, task, clockCompleted });
  };
  if (query.isLoading) return <div>Loading...</div>;
  if (query.error) return <div>Error: {query.error.message}</div>;

  return (
    <>
      <div>
        <Input
          clockCompleted={clockCompleted}
          addTodo={addTodo}
          handleClockCompletedChange={handleClockCompletedChange}
        />
        <div className="mt-4 -mb-4 pl-4">Nhiệm vụ</div>
        <div
          ref={containerRef}
          className="overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 200px)" }}
        >
          {" "}
          {todos.map((todo) => (
            <Item
              key={todo._id}
              todo={todo}
              deleteTodo={deleteTodo}
              updateTodo={updateTask}
              handleCountdownEnd={handleCountdownEnd}
              countdownActive={countdownActive}
              setCountdownActive={setCountdownActive}
              loadTodo={loadTodo}
            />
          ))}
        </div>
      </div>
    </>
  );
};

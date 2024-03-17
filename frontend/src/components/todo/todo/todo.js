import React, { useState } from "react";
import { Input } from "../input/input";
import { Item } from "../item/item";
import axios from "axios";
import {
  fetchTodos,
  createTodoapi,
  updateTodoapi,
  deleteTodoapi,
} from "../../api/apitodo";
import { PaginateTodo } from "../../paginate/paginateTodo";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
export const Todo = ({
  todoLabels,
  todos,
  loadTodo,
  setTodos,
  paginationTodo,
  setPaginationTodo,
}) => {
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ["todos"], queryFn: fetchTodos });

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
      <Input
        clockCompleted={clockCompleted}
        addTodo={addTodo}
        todoLabels={todoLabels}
        handleClockCompletedChange={handleClockCompletedChange}
      />
      {query?.data?.data?.data.map((todo) => (
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
      <PaginateTodo
        setTodos={setTodos}
        paginationTodo={paginationTodo}
        setPaginationTodo={setPaginationTodo}
      />
    </>
  );
};

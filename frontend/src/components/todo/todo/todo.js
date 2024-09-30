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
export const Todo = ({ loadTodo }) => {
  const { todos, setTodos, filteredLabel } = useData();
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ["todos"], queryFn: fetchTodos });
  const containerRef = useRef(null);

  const fetchTodoapi = async () => {
    const response = await fetchTodos();
    setTodos(response.data);
  };
  const mutationCreate = useMutation({
    mutationFn: createTodoapi,
    onSuccess: () => {
      fetchTodoapi();
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const mutation = useMutation({
    mutationFn: (data) =>
      updateTodoapi(data._id, {
        task: data.task,
        clockCompleted: data.clockCompleted,
        label: data.labelId,
        notes: data.notes,
      }),
    onSuccess: () => {
      fetchTodoapi();
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const mutationDelete = useMutation({
    mutationFn: deleteTodoapi,
    onSuccess: () => {
      fetchTodoapi();
      queryClient.invalidateQueries({ queryKey: ["todos"] });
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
        labelId: todoToUpdate.labelId,
        notes: todoToUpdate.notes,
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

  const addTodo = (
    task,
    labelId,
    time,
    clockCompleted,
    countdownTime,
    notes
  ) => {
    if (!task || !labelId || !clockCompleted) {
      alert(
        "Vui lòng nhập đầy đủ thông tin 'Công việc' + 'Nhãn' + 'Thời gian' "
      );
      return;
    }
    mutationCreate.mutate({
      task: task,
      labelId: labelId,
      time: time,
      clockCompleted: clockCompleted,
      countdownTime: countdownTime,
      notes: notes,
    });
  };
  const deleteTodo = (_id) => {
    mutationDelete.mutate(_id);
  };
  const updateTask = (task, _id, clockCompleted, newLabelId, notes) => {
    mutation.mutate({ task, _id, clockCompleted, labelId: newLabelId, notes });
    console.log(newLabelId);
  };
  const lastElement = todos[todos.length - 1];
  const lastIdTodo = lastElement ? lastElement._id : "";
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = async () => {
        if (
          container.scrollTop + container.clientHeight >=
          container.scrollHeight
        ) {
          await loadTodo(lastIdTodo);
        }
      };
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastIdTodo, loadTodo]);
  if (query.isLoading) return <div>Loading...</div>;
  if (query.error) return <div>Error: {query.error.message}</div>;
  const filteredTodos = filteredLabel
    ? todos.filter((todo) => todo.labelId === filteredLabel)
    : todos;

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
          {filteredTodos.map((todo) => (
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

import React, { useState } from "react";
import { Input } from "../input/input";
import { Item } from "../item/item";
import axios from "axios";
import { createTodoapi, updateTodoapi, deleteTodoapi } from "../../api/apitodo";
export const Todo = ({ todoLabels, todos, loadTodo, setTodos }) => {
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
    createTodoapi({
      task: task,
      labelId: labelId,
      time: time,
      clockCompleted: clockCompleted,
      countdownTime: countdownTime,
    })
      .then((res) => {
        loadTodo();
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const deleteTodo = (_id) => {
    deleteTodoapi(_id)
      .then(() => {
        loadTodo();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const updateTask = (task, _id, clockCompleted) => {
    updateTodoapi(_id, {
      task,
      clockCompleted,
    }).then((response) => {
      if (response.status !== 200) {
        throw new Error(`Error! status: ${response.status}`);
      }
      loadTodo();
    });
  };

  return (
    <>
      <Input
        clockCompleted={clockCompleted}
        addTodo={addTodo}
        todoLabels={todoLabels}
        handleClockCompletedChange={handleClockCompletedChange}
      />
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
    </>
  );
};

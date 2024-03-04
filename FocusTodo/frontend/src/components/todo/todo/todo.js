import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "../input/input";
import { Item } from "../item/item";
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
    fetch(`http://localhost:5500/todo/${todoId}`, {
      method: "PUT",
      body: JSON.stringify({
        _id: todoId,
        task: todoToUpdate.task,
        clockCompleted: todoToUpdate.clockCompleted,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {})
      .catch((error) => {
        console.error("Error updating todo on server:", error);
      });
  };

  const addTodo = (task, labelId, time, clockCompleted, countdownTime) => {
    const newTodo = {
      task: task,
      labelId: labelId,
      time: time,
      clockCompleted: clockCompleted,
      countdownTime: countdownTime,
    };
    fetch("http://localhost:5500/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => {
        loadTodo();
      })

      .catch((err) => {
        alert(err.message);
      });
  };
  const deleteTodo = (_id) => {
    fetch("http://localhost:5500/todo/" + _id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        loadTodo();
      });
  };

  const updateTask = (task, _id, clockCompleted) => {
    fetch("http://localhost:5500/todo/" + _id, {
      method: "PUT",
      body: JSON.stringify({
        _id: uuidv4(),
        task: task,
        clockCompleted: clockCompleted,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    });
    loadTodo();
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

import React, { useState, useEffect } from "react";
import { Todo } from "../todo/todo/todo";
import { TodoLabel } from "../todolabel/list/todolabel";
import { useNavigate } from "react-router-dom";
import { UploadAvatar } from "../uploadavatar/uploadavatar";
export function Main() {
  const [todoLabels, setTodoLabels] = useState([]);
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const loadTodo = () => {
    fetch("http://localhost:5500/todo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
      })
      .catch((error) => console.log(error));
  };

  const loadTodolabel = () => {
    fetch("http://localhost:5500/todoLabel", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setTodoLabels(json);
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
      <div>
        <UploadAvatar />
        <div className="Alltodo">
          <TodoLabel todoLabels={todoLabels} reloadAll={reloadAll} />
          <Todo
            todoLabels={todoLabels}
            todos={todos}
            loadTodo={loadTodo}
            setTodos={setTodos}
          />
        </div>
      </div>
      <div>
        <button onClick={handleLogout}>Đăng xuất</button>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { Todo } from "../todo/todo/todo";
import { TodoLabel } from "../todolabel/list/todolabel";
import { useNavigate } from "react-router-dom";
import { UploadAvatar } from "../uploadavatar/uploadavatar";
import { fetchTodos } from "../api/apitodo";
import { fetchTodoLabelapi } from "../api/apitodolabel";
export function Main() {
  const [todoLabels, setTodoLabels] = useState([]);
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  console.log(todoLabels);

  const loadTodo = async () => {
    await fetchTodos()
      .then((res) => {
        setTodos(res.data);
      })
      .catch((error) => console.log(error));
  };

  const loadTodolabel = async () => {
    await fetchTodoLabelapi()
      .then((res) => {
        setTodoLabels(res.data);
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

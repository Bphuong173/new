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
  const [pagination, setPagination] = useState([]);
  const navigate = useNavigate();

  const loadTodo = async () => {
    await fetchTodos()
      .then((res) => {
        setTodos(res.data);
        setPagination(res.data.pagination);
      })
      .catch((error) => console.log(error));
  };

  const loadTodolabel = async () => {
    await fetchTodoLabelapi()
      .then((res) => {
        setTodoLabels(res.data.data);
        setPagination(res.data.pagination);
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
  const loadNextPage = async () => {
    const nextPage = pagination.current_page + 1;
    if (nextPage <= pagination.total_pages) {
      await fetchTodoLabelapi(nextPage).then((res) => {
        const newData = res.data.data;
        const newPagination = res.data.pagination;
        console.log(newData);
        setTodoLabels(newData);
        setPagination(newPagination);
      });
    }
  };
  const loadPrevPage = async () => {
    const prevPage = pagination.current_page - 1;
    if (prevPage <= pagination.total_pages) {
      await fetchTodoLabelapi(prevPage).then((res) => {
        const newData = res.data.data;
        const newPagination = res.data.pagination;
        setTodoLabels(newData);
        setPagination(newPagination);
      });
    }
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
      <button onClick={loadPrevPage} disabled={pagination.current_page === 1}>
        Trang trước
      </button>
      <button
        onClick={loadNextPage}
        disabled={pagination.current_page === pagination.total_pages}
      >
        Trang tiếp theo
      </button>
      <div>
        <button onClick={handleLogout}>Đăng xuất</button>
      </div>
    </>
  );
}

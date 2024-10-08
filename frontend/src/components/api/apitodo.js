// api.js
import axios from "axios";
import { baseURL } from "../baseurl/baseurl";

axios.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = localStorage.getItem("token");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Hàm gửi yêu cầu GET danh sách todo
export const fetchTodos = (lastIdTodo = null) => {
  return axios.get(
    `${baseURL}/todo?lastIdTodo=${lastIdTodo ? lastIdTodo : ""}`
  );
};

// Hàm gửi yêu cầu POST để tạo todo mới
export const createTodoapi = (newTodo) => {
  return axios.post(`${baseURL}/todo`, newTodo);
};

// Hàm gửi yêu cầu PUT để cập nhật todo
export const updateTodoapi = (todoId, data) => {
  return axios.put(`${baseURL}/todo/${todoId}`, data);
};

// Hàm gửi yêu cầu DELETE để xóa todo
export const deleteTodoapi = (todoId) => {
  return axios.delete(`${baseURL}/todo/${todoId}`);
};

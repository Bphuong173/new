// api.js
import axios from "axios";

const baseURL = "http://localhost:5500";

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
export const fetchTodoLabelapi = () => {
  return axios.get(`${baseURL}/todoLabel`);
};

// Hàm gửi yêu cầu POST để tạo todo mới
export const createTodoLabelapi = (newTodoLabel) => {
  return axios.post(`${baseURL}/todoLabel`, newTodoLabel);
};

// Hàm gửi yêu cầu PUT để cập nhật todo
export const updateTodoLabelapi = (id, data) => {
  return axios.put(`${baseURL}/todoLabel/${id}`, data);
};

// Hàm gửi yêu cầu DELETE để xóa todo
export const deleteTodoLabelapi = (id) => {
  return axios.delete(`${baseURL}/todoLabel/${id}`);
};

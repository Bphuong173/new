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

// Hàm gửi yêu cầu GET danh sách todoLabel
export const fetchTodoLabelapi = (lastIdLabel = null) => {
  return axios.get(
    `${baseURL}/todoLabel?lastId=${lastIdLabel ? lastIdLabel : ""}`
  );
};
// Hàm gửi yêu cầu POST để tạo todoLabel mới
export const createTodoLabelapi = (newTodoLabel) => {
  return axios.post(`${baseURL}/todoLabel`, newTodoLabel);
};

// Hàm gửi yêu cầu PUT để cập nhật todoLabel
export const updateTodoLabelapi = (id, data) => {
  return axios.put(`${baseURL}/todoLabel/${id}`, data);
};

// Hàm gửi yêu cầu DELETE để xóa todoLabel
export const deleteTodoLabelapi = (id) => {
  return axios.delete(`${baseURL}/todoLabel/${id}`);
};

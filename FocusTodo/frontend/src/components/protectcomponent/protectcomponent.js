import React from "react";
import { Navigate } from "react-router-dom";
export const ProtectComponent = ({ component }) => {
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    return component;
  } else {
    // Nếu không có token trong localStorage, chuyển hướng đến trang đăng nhập
    return <Navigate to={"/login"} />;
  }
};

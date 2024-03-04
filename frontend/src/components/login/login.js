// Login component
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const Login = ({ handleCloseLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5500/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.text(); // Trả về kết quả từ response.text()
        } else {
          throw new Error("Lỗi đăng nhập");
        }
      })
      .then((token) => {
        localStorage.setItem("token", token); // Lưu token vào localStorage
        alert("login is succeed");
        navigate("/todos");
      })
      .catch((error) => {
        console.log(error);
        alert("loi dang nhap");
      });
  };

  const isLoggedIn = localStorage.getItem("token");
  if (isLoggedIn) {
    return <Navigate to="/todos" />;
  }

  return (
    <>
      <div className="register-page">
        <div className="register-form-container"></div>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              required
              id="email"
              className="form-control"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Mật khẩu
            </label>
            <input
              required
              id="password"
              className="form-control"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="submit-btn">Login</button>
        </form>
        <button onClick={handleCloseLogin}>X</button>
      </div>
    </>
  );
};

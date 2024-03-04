import React, { useState } from "react";
import { Navigate } from "react-router-dom";
export const Register = ({ handleCloseModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const addUser = (name, email, password) => {
    setIsLoading(true);
    const newUser = {
      name: name,
      email: email,
      password: password,
    };

    fetch("http://localhost:5500/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (response.ok) {
          setName("");
          setEmail("");
          setPassword("");
          setIsLoading(false);
          setIsRegistered(true);
        } else {
          throw new Error("Email đã tồn tại hoặc có lỗi xảy ra");
        }
      })
      .catch((err) => {
        alert(err.message);
        setIsLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(name, email, password);
    localStorage.removeItem("avatarUrl");
  };

  if (isRegistered) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="register-page">
        <div className="register-form-container"></div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name here"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              required
              className="form-control"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Password
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
          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign in"}
          </button>
        </form>
        <button onClick={handleCloseModal}>X</button>
      </div>
    </>
  );
};

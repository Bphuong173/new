import React from "react";
import { Main } from "./components/main/main";
import { Login } from "./components/login/login";
import { Register } from "./components/register/register";
import { ProtectComponent } from "./components/protectcomponent/protectcomponent";
import { Home } from "./components/landingpage/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
export default function App() {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/todos"
            element={<ProtectComponent component={<Main />} />}
          />
          <Route path="/home" element={<Home />} />
          <Route
            path="/"
            element={<Navigate to={isLoggedIn ? "/todos" : "/home"} replace />}
          />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    </>
  );
}

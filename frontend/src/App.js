import React from "react";
import { Main } from "./components/main/main";
import { Login } from "./components/login/login";
import { Register } from "./components/register/register";
import { ProtectComponent } from "./components/protectcomponent/protectcomponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
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
        </Routes>
      </Router>
    </>
  );
}

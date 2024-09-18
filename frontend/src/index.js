import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MainProvider } from "./components/main/mainstate";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MainProvider>
    <GoogleOAuthProvider clientId="99288234114-5cev3rks5teiaf5j6mojaspct9rj394m.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </MainProvider>
);
reportWebVitals();

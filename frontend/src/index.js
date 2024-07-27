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
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/* margin: 0;
  font-family: "PP Right", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw; */

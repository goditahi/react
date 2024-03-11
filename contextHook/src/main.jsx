import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CounterContexProvider } from "./context/counterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CounterContexProvider>
    <App />
  </CounterContexProvider>
);

import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// eslint-disable-next-line react-refresh/only-export-components

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

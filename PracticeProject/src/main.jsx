import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import ActiveMessage from "./page/ActiveMessage"; // Import other components
import Challenge2 from "./page/Challenge2"; // Import other components
import Challenge3 from "./page/Challenge3.jsx"; // Import other components
import Excerxise1 from "./page/Excerxise1.jsx"; // Import other components
import Lifting from "./page/Lifting.jsx"; // Import other components
import TodoList from "./page/TodoList.jsx"; // Import other components
import StopWatch from "./page/StopWatch.jsx";
import Accordion from "./page/Accordion.jsx";
import TipCalculator from "./page/TipCalculator.jsx";
import EatNSplit from "./page/EatNSplit.jsx";
import CheckOut from "./page/CheckOut.jsx";
import TipCalculate from "./page/TipCalculate.jsx";
import Jug from "./page/Jug.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "activeMessage", element: <ActiveMessage /> },
      { path: "challenge2", element: <Challenge2 /> },
      { path: "challenge3", element: <Challenge3 /> },
      { path: "q&a", element: <Excerxise1 /> },
      { path: "lifting", element: <Lifting /> },
      { path: "todoList", element: <TodoList /> },
      { path: "stopwatch", element: <StopWatch /> },
      { path: "accordion", element: <Accordion /> },
      { path: "tipcalculator", element: <TipCalculator /> },
      { path: "eatnsplit", element: <EatNSplit /> },
      { path: "checkout", element: <CheckOut /> },
      { path: "TipCalculate", element: <TipCalculate /> },
      { path: "Jug", element: <Jug /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

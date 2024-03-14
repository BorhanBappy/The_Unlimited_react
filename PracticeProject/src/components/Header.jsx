import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "ActiveMessage", path: "/activeMessage" },
  { name: "DateFindCount", path: "/challenge2" },
  { name: "DateFindInput", path: "/challenge3" },
  { name: "Q&A", path: "/q&a" },
  { name: "Lifting", path: "/lifting" },
  { name: "TodoList", path: "/todoList" },
  { name: "Stopwatch", path: "/stopwatch" },
  { name: "Accordion", path: "/accordion" },

];

export default function Header() {
  const location = useLocation();

  return (
    <div>
      
      <ul className="flex justify-center items-center gap-2 p-4 bg-slate-600">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={clsx(
              "rounded-md p-1 font-bold",
              {
                "bg-green-400": location.pathname !== link.path,
                "bg-red-500": location.pathname === link.path,
              }
            )}
          >
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

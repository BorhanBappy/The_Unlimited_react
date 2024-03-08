import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "ActiveMessage", path: "/activeMessage" },
  { name: "DateFindCount", path: "/challenge2" },
  { name: "DateFindInput", path: "/challenge3" },
  { name: "Q&A", path: "/q&a" },
  { name: "Lifting", path: "/lifting" },
  { name: "TodoList", path: "/todoList" },
];

export default function Header() {
  const location = useLocation();

  return (
    <div>
      <ul className="flex justify-center items-center gap-2 p-4 bg-slate-600">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`bg-green-400 rounded-md p-1 font-bold ${
              location.pathname === link.path ? "bg-red-500" : ""
            }`}
          >
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

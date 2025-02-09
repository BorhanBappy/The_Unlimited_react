import { useState } from "react";

export default function Navbar({ children }) {
  return (
    <nav className="bg-blue-500 py-3 px-8 flex items-center justify-between">
      {children}
    </nav>
  );
}

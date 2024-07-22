import React from "react";

export default function Button({ children, onclick }) {
  return (
    <button
      className="bg-[#ec8743] p-1 px-4 rounded-[5px] ml-4"
      onClick={onclick}
    >
      {children}
    </button>
  );
}

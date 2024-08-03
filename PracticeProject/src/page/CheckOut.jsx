import React from "react";

export default function CheckOut() {
  return (
    <div className=" flex mx-auto">
      <Promotion />
    </div>
  );
}

function Total() {}

function Promotion() {
  return (
    <div>
      <input className=" border border-black rounded-sm" type="text" />
      <button>Apply</button>
    </div>
  );
}

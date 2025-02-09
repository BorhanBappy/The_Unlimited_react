/* eslint-disable react/prop-types */
import { useState } from "react";
import { tempWatchedData } from "../data.js";
// Define the average function

// const average = (arr) => {
//   if (arr.length === 0) return 0;
//   const sum = arr.reduce((acc, curr) => acc + curr, 0);
//   return (sum / arr.length).toFixed(1);
// };


// GrandChild component
const GrandChild = ({ user }) => {
  return <h2>Hello, {user.name}!</h2>;
};

// Child component
const Child = ({ user }) => {
  return <GrandChild user={user} />;
};

// Parent component
const Parent = ({ user }) => {
  return <Child user={user} />;
};

// App component
export default function App() {
  const user = { name: "Borhan Uddin" };

  return (
    <div>
      <h1>Prop Drilling Example</h1>
      <Parent user={user} />
    </div>
  );
}

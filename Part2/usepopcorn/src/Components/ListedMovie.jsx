/* eslint-disable react/prop-types */
import { useState } from "react";
import ActiveMessage from "./../../../../PracticeProject/src/page/ActiveMessage";

export default function Creator() {
  const [name, setName] = useState(""); // To store the user's input
  const [names, setNames] = useState([
    "Bappy",
    "Sharukh",
    "Shorif",
    "Saim",
    "Shanto",
    "Arif",
    "Rakib",
    "Tanvir",
    "Riyad",
    "Sajib",
    "Hasan",
    "Jubayer",
    "Faruk",
    "Manik",
    "Sujon",
    "Nasir",
    "Nayeem",
    "Sumon",
    "Hridoy",
    "Aminul",
    "Apu",
    "Badsha",
    "Bashar",
    "Milon",
    "Rasel",
    "Rubel",
    "Shafiq",
    "Sharif",
    "Sohag",
    "Sohel",
    "Tariq",
    "Taufiq",
    "Tuhin",
    "Tusher",
    "Yasir",
    "Zahid",
    "Zaman",
    "Zarif",
    "Zakaria",
    "Zayed",
    "Asif",
    "Ashraful",
    "Atiq",
    "Ayon",
    "Aziz",
    "Azam",
    "Bashir",
    "Borhan",
    "Tanbir",
    "Tanjim",
  ]); // Array of 50 names

  function Change(filteredName) {
    alert(`Do You want delete ${filteredName}`);
    setNames(names.filter((b) => b !== filteredName));
  }
  function addName(name) {
    setNames([name, ...names]);
    setName("");
  }
  // Filter names dynamically based on input
  const filteredNames = names
    .filter((n) => n.toLowerCase().includes(name.toLowerCase())) // Case-insensitive search
    .slice(0, 5); // Limit to 5 results
  console.log(filteredNames);
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <div className="flex justify-between items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Search names"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={() => addName(name)}
        >
          ADD
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {console.log(filteredNames)}
        {filteredNames.length > 0 ? (
          filteredNames.map((filteredName, index) => (
            <li
              key={index}
              className=" p-[10px] border-b-2 so"
              style={{
                padding: "10px",
                borderBottom: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              <Number
                onclick={() => Change(filteredName)}
                index={index + 1}
                filter={filteredName}
              />
            </li>
          ))
        ) : (
          <p style={{ color: "red", fontStyle: "italic" }}>
            No matching names found.
          </p>
        )}
      </ul>
    </div>
  );
}

function Number({ onclick, index, filter }) {
  return (
    <div>
      {index} {filter}
      <button
        className=" bg-green-500 rounded-md p-2 m-2 shadow-lg"
        onClick={onclick}
      >
        X
      </button>
    </div>
  );
}
// function x() {
//   for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 2000); // Multiply `i` by 2000ms to delay each number by 2 seconds
//   }
// }
// x();
// console.log(countr());

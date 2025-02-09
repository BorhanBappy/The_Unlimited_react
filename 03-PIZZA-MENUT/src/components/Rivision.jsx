import React, { useState } from "react";

export default function Rivision() {
  const [todos, setTodos] = useState(["Bappy", "Borhan"]);
  const [item, setItem] = useState("");
  const [editValue, setEditValue] = useState("");
  const [eidindex, setIndex] = useState(null);
  function addItem() {
    setTodos([item, ...todos]);
    setItem("");
  }
  function handleEdit(index) {
    setEditValue(todos[index]);
    setIndex(index);
  }
  console.log(editValue);
  function handleSave() {
    if (eidindex !== null) {
      // Create a copy of the todos array
      const updatedTodos = [...todos];

      // Update the item at the editing index with the new value
      updatedTodos[eidindex] = editValue;

      // Update the state with the modified array
      setTodos(updatedTodos);

      // Reset the editing state
      setIndex(null);
      setEditValue("");
    }
  }
  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i != index));
  }
  return (
    <div className=" p-2">
      <input
        type="text"
        placeholder="Add new name"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <button onClick={() => addItem(item)}>Add</button>
      <ul>
        {todos.map((val, index) => (
          <li key={index} className=" p-2 flex justify-between items-center">
            <div className=" flex justify-between gap-4">
              {eidindex == index ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button onClick={() => handleSave(index)}>save</button>
                </>
              ) : (
                <>
                  {val}
                  <button onClick={() => handleEdit(index)}>Edit</button>
                </>
              )}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

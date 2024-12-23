import { useState } from "react";

export default function From({ handleAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    // Function Calling
    handleAddItem(newItem);
    setQuantity(1);
    setDescription("");
  }

  function handleOnChange(e) {
    setQuantity(Number(e.target.value));
  }

  return (
    <div className="flex justify-center gap-2 mt-2">
      <form
        action=""
        className="flex justify-center gap-2"
        onSubmit={handleSubmit}
      >
        <p>What do you need for your 😍 trip?</p>
        <select value={quantity} onChange={handleOnChange}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          className=" text-xl"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className=" bg-green-500 p-1 px-2 rounded-md text-xl">
          Add{" "}
        </button>
      </form>
    </div>
  );
}

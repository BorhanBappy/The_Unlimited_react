/* eslint-disable react/prop-types */
import React, { useState } from "react";
export default function TodoList() {
  const [listItem, setListItem] = useState([]);

  function handleAddItem(item) {
    setListItem((prev) => [...prev, item]);
  }

  function handleDeleteItem(id) {
    setListItem((listItem) => listItem.filter((item) => item.id !== id));
  }
  function toggleItem(id) {
    setListItem((listItem) =>
      listItem.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // function toggleItem(id) {
  //   setListItem((listItem) =>
  //     listItem.map(
  //       (item) => (item.id = id ? { ...item, packed: !item.packed } : item)
  //     )
  //   );
  // }

  return (
    <>
      <Logo />
      <From onAddItem={handleAddItem} />
      <PackingList
        listItem={listItem}
        onDeleteItem={handleDeleteItem}
        OnToggle={toggleItem}
      />
      <Status listItem={listItem} />
    </>
  );
}

function Logo() {
  return (
    <h1 className="p-4 text-center text-7xl bg-[#f7ba11]"> 🌳Far Away 💰</h1>
  );
}

function From({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <div className="flex justify-center gap-2">
      <form
        action=""
        className="flex justify-center gap-2"
        onSubmit={handleSubmit}
      >
        <p>What do you need for your trip?</p>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
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
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

function PackingList({ listItem, onDeleteItem, OnToggle }) {
  return (
    <ul className="flex gap-12 p-4 bg- ">
      {listItem.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          toggleItem={OnToggle}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, toggleItem }) {
  return (
    <li className="flex justify-center items-center gap-4 bg-orange-300 rounded-sm p-1">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => toggleItem(item.id)}
        className="h-5 w-5 bg-red-700"
      />
      <span className={`${item.packed ? "line-through bg-red-700" : ""}`}>
        {item.quantity} {item.description}
      </span>
      <button
        className="text-red-600 text-xl font-bold"
        onClick={() => onDeleteItem(item.id)}
      >
        X
      </button>
    </li>
  );
}

function Status({ listItem }) {
  const packedValues = listItem.map((item) => item.packed);
  console.log(packedValues);
  const packedTrueCount = packedValues.filter((value) => value === true).length;
  // console.log(packedTrueCount);
  // console.log(listItem.length);
  const percentageTrueItems = (packedTrueCount / listItem.length) * 100;
  // console.log(percentageTrueItems);
  return (
    <footer className="text-center">
      <em>
        {`You have ${
          listItem.length
        } item in your List, You have packed ${packedTrueCount} and ${
          isNaN(percentageTrueItems) ? "0" : percentageTrueItems.toFixed(2)
        } % of Total `}
      </em>
    </footer>
  );
}

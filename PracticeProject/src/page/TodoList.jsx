/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Logo from "../components/TodoList/Logo";
import From from "../components/TodoList/From";
import PackingList from "../components/TodoList/PackingList";
import Status from "../components/TodoList/Status";
export default function TodoList() {
  const [listItem, setListItem] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  function handleAddItem(item) {
    setListItem((prev) => [...prev, item]);
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + item.quantity);
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

  function clearListItem() {
    const confirmed = window.confirm("Are you sure clear the list of Item");
    if (confirmed) setListItem([]);
  }

  return (
    <>
      <Logo />
      <From onAddItem={handleAddItem} />

      <PackingList
        listItem={listItem}
        onDeleteItem={handleDeleteItem}
        OnToggle={toggleItem}
        OnClearItem={clearListItem}
      />
      <Status listItem={listItem} totalQuantity={totalQuantity} />
    </>
  );
}

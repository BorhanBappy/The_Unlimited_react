/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Logo from "../components/TodoList/Logo";
import From from "../components/TodoList/From";
import PackingList from "../components/TodoList/PackingList";
import Status from "../components/TodoList/Status";
export default function TodoList() {
  const [listItem, setListItem] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  // Define Function
  function handleAddItem(item) {
    setListItem((prev) => [...prev, item]);
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + item.quantity);
  }

  // useEffect(() => {
  //   handleAddItem({
  //     description: "New IRRM",
  //     quantity: 5,
  //     packed: false,
  //     id: 10,
  //   });
  // }, []);

  function handleDeleteItem(id) {
    setListItem((listItem) => listItem.filter((item) => item.id !== id));
  }
  function toggleItem(id) {
    console.log(id);
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
      <From handleAddItem={handleAddItem} />
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

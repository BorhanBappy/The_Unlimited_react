import Item from "./Item";
import { useState } from "react";
export default function PackingList({ listItem, onDeleteItem, OnToggle, OnClearItem }) {
    const [sortBy, setSortBy] = useState("input");
    let sortItems;
    if (sortBy === "input") sortItems = listItem;
    console.log(sortItems);
  
    if (sortBy === "description")
      sortItems = listItem
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    console.log(sortItems);
  
    if (sortBy == "packed")
      sortItems = listItem
        .slice()
        .sort((a, b) => Number(b.packed) - Number(a.packed));
    console.log(sortItems);
  
    return (
      <div>
        <ul className="flex gap-12 p-4 bg- ">
          {sortItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              toggleItem={OnToggle}
            />
          ))}
        </ul>
        <div className=" flex justify-center items-center">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input</option>
            <option value="description">Sort by Description</option>
            <option value="packed">Sort by Packed</option>
          </select>
          <button onClick={OnClearItem}>Clear List</button>
        </div>
      </div>
    );
  }
  
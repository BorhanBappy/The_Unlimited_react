import React, { useState } from "react";
import Button from "./Button";

export default function From({ addFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(
    "/Image/matheus-ferrero-pg_WCHWSdT8-unsplash.jpg"
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const newFriend = {
      name,
      image,
      balance: 0,
      id: crypto.randomUUID(),
    };
    console.log(newFriend);
    addFriend(newFriend);
    setName("");
    setImage("/Image/matheus-ferrero-pg_WCHWSdT8-unsplash.jpg");
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" grid grid-cols-2  bg-[#ffe6cc] p-4 gap-2 mt-8"
      >
        <label> 👨‍👨‍👦‍👦Friend Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" border-black p-1"
        />
        <label>🖼️ Image Url</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className=" border-black p-1"
        />
        <div></div>
        <Button>Add</Button>
      </form>
    </div>
  );
}

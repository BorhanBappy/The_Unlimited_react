import React, { useState,useEffect } from "react";
import Button from "./Button";

export default function FromSplitBill({
  selectedFriend,
  onSplitBill,
}) {
  const [bill, setBill] = useState("");
  const [paidUser, setPaidByUser] = useState("");
  const paidFriend = bill ? bill - paidUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill && !paidUser) return;
    onSplitBill(whoIsPaying === "user" ? paidFriend : -paidUser);
  }
  console.log("render")
  useEffect(() => {
    setBill("");
    setPaidByUser("");
  }, [selectedFriend]);


  return (
    <div className="bg-[#ffe6cc]  mt-[58px] ml-4 lg:mr-24 text-sm md:text-xl rounded-[10px] w-[600px]">
      <h2 className="uppercase pl-4 pt-4">
        Split the bill with {selectedFriend.name}
      </h2>
      <form onSubmit={handleSubmit} className=" grid grid-cols-2 p-4 gap-4 ">
        <label> 💰 Bill Value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          className=" border-black p-1"
        />
        <label>Your Expense</label>
        <input
          type="text"
          value={paidUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill ? paidUser : Number(e.target.value)
            )
          }
          className=" border-black p-1"
        />
        <label>{selectedFriend.name}'s Expense</label>
        <input
          type="text"
          className=" border-black p-1"
          disabled
          value={paidFriend}
        />
        <label>Who is paying the bill</label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
        <div></div>
        <Button>Split Bill</Button>
      </form>
    </div>
  );
}

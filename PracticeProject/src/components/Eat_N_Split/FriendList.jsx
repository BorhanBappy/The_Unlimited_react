import React from "react";
import Button from "./Button";

export default function FriendList({
  friends,
  OnselectFriend,
  selectedFriend,
}) {
  return (
    <div className="">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          OnselectFriend={OnselectFriend}
          selectedFriend={selectedFriend}
          
        />
      ))}
    </div>
  );
}

function Friend({ friend, OnselectFriend, selectedFriend }) {
  const isSelect = selectedFriend?.id === friend.id;
  
  return (
    <div>
      <ul className="flex py-4 justify-between items-center gap-2">
        <img className="h-12 w-12 rounded-full" src={friend.image} alt="" />
        <div className="">
          <li>{friend.name}</li>
          <div className=" w-[250px]">
            {friend.balance < 0 && (
              <p className="text-red-600">
                Your owe {friend.name} {friend.balance}$
              </p>
            )}
            {friend.balance > 0 && (
              <p className="text-green-600">
             {friend.name}  owes   You {friend.balance}$
              </p>
            )}
            {friend.balance == 0 && (
              <p className="text-black"> You and {friend.name} are even</p>
            )}
          </div>
        </div>
        <Button onclick={() => OnselectFriend(friend)}>
          {isSelect ? "Close" : "Select"}
        </Button>
      </ul>
    </div>
  );
}

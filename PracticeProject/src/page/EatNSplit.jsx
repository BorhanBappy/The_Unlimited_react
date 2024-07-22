import { useState } from "react";
import Button from "../components/Eat_N_Split/Button";
import FriendList from "../components/Eat_N_Split/FriendList";
import From from "../components/Eat_N_Split/From";
import FromSplitBill from "../components/Eat_N_Split/FromSplitBill";

const intialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "/Image/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "/Image/matheus-ferrero-pg_WCHWSdT8-unsplash.jpg",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "/Image/craig-mckay-jmURdhtm7Ng-unsplash.jpg",
    balance: 0,
  },
];
export default function EatNSplit() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(intialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  // function handleButton() {
  //   setShowAddFriend((show) => !show);
  // }
  function handleFriendSubmit(friend) {
    setFriends((friends) => [...friends, friend]);
  }
  function selectFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    // console.log(friend);
  }

  function splitBill(value) {
    console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="flex lg:flex-row flex-col  items-start">
      <div className="p-8">
        <FriendList
          friends={friends}
          OnselectFriend={selectFriend}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <From addFriend={handleFriendSubmit} />}
        <div className="mt-4 text-right">
          <Button onclick={() => setShowAddFriend((show) => !show)}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
      </div>
      {selectedFriend && (
        <FromSplitBill selectedFriend={selectedFriend}  onSplitBill={splitBill} />
      )}{" "}
    </div>
  );
}

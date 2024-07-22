/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return (
    <h1 className="text-5xl text-center mt-2 text-yellow-300 p-4">
      Fast React Pizza Co.
    </h1>
  );
}
function Menu() {
  const numPizzas = pizzaData.length;
  // const numPizzas = 0;

  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="p-4 pt-8 ">
        <hr className="h-[5px] bg-slate-800 w-32 mx-auto" />
        <h2 className=" text-center uppercase text-2xl font-semibold p-1">
          Our Menu
        </h2>
        <hr className="h-[5px] bg-slate-800 w-32 mx-auto" />
      </div>
      {numPizzas > 0 ? (
        <div>
          <p className=" text-center pt-6">
            Authentic Italian cuisine. 6 creative dishes to chose from. All from
            our stone oven, all organic, all delicious
          </p>
          <ul className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} pizzaObj={pizza} />
            ))}
          </ul>
        </div>
      ) : (
        <p>The menu is Empty</p>
      )}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  const { name, price, photoName, ingredients } = pizzaObj;
  // name = "pizaa1";
  const [prices, setprice] = useState(price);

  // if (pizzaObj.soldOut) return null;

  function handlePrice() {
    const newPrice = prompt("Enter new price:");
    const pric = Number(newPrice);
    setprice(pric);
  }
  return (
    <li
      className={`flex gap-4 p-2 ${
        pizzaObj.soldOut ? "bg-red-200 rounded-2xl" : ""
      }`}
    >
      <img className="h-20 w-16" src={photoName} alt={name} />
      <div>
        <h3 className="font-bold">{name}</h3>
        <p>{ingredients}</p>
        <span className="font-semibold mt-4 mr-2">
          {pizzaObj.soldOut ? "SOLD OUT" : prices}
        </span>
        {pizzaObj.soldOut ? (
          ""
        ) : (
          <button onClick={handlePrice} type="button">
            Increase Price
          </button>
        )}
      </div>
    </li>
  );
}

function Footer() {
  //   const [time, setTime] = useState(new Date().toLocaleTimeString());
  //   useEffect(() => {
  //     const timeIntrvelID = setInterval(() => {
  //       setTime(new Date().toLocaleTimeString());
  //     }, 1000);
  //     return () => clearInterval(timeIntrvelID);
  //   }, []);
  // console.log("object")
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 18;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className=" text-center text-2xl pb-4">
      {/* {new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })} */}
      {isOpen ? (
        <p>We'r open until {closeHour}:00. Come visit or Order Online </p>
      ) : (
        // (alert("Close this shop Open at 9.00"),
        <p>
          We're happy to welcome you between {openHour}:00 to {closeHour}:00
        </p>
      )}
      <button className=" bg-green-600 px-4 py-1 rounded-sm m-2">Order</button>
    </footer>
  );
}

export default function PizzaMenu() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

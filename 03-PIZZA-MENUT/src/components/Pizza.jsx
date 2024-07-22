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

const Heading = function () {
  return (
    <div>
      <h1 className="text-5xl text-center mt-2 text-red-400 p-4">
        Fast React Pizza Co.
      </h1>
    </div>
  );
};
const Menu = () => {
  const numPizzas = pizzaData.length;
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
              <Pizza key={pizza.name} pizzaObject={pizza} />
            ))}
          </ul>
        </div>
      ) : (
        <p>The menu is Empty</p>
      )}
    </div>
  );
};

const Pizza = ({ pizzaObject }) => {
  console.log(pizzaObject);
  const { name, ingredients, price, photoName } = pizzaObject;
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
        pizzaObject.soldOut ? "bg-red-200 rounded-2xl" : ""
      }`}
    >
      <img className="h-20 w-16" src={photoName} alt={name} />
      <div>
        <h3 className="font-bold">{name}</h3>
        <p>{ingredients}</p>
        <span className="font-semibold mt-4 mr-2">
          {pizzaObject.soldOut ? "SOLD OUT" : prices}
        </span>
        {pizzaObject.soldOut ? (
          ""
        ) : (
          <button onClick={handlePrice} type="button">
            Increase Price
          </button>
        )}
      </div>
    </li>
  );
};
function Footer() {
  const hour = new Date().getHours();
  const openHr = 10;
  const closeHr = 22;

  // if (hour >= openHr && hour <= closeHr) alert("We are Currently Open");
  // else alert("We are currently close");

  return (
    <footer>{new Date().toLocaleTimeString()}.We are currently open</footer>
  );
}

export default function PizzaMenu() {
  return (
    <div>
      <Heading />
      <Menu />
      <Footer />
    </div>
  );
}

import React, { useState } from "react";

export default function CheckOut() {
  const [coupons, setCoupons] = useState("");

  function handleCoupons(item) {
    setCoupons(item);
  }

  return (
    <div className="flex justify-between p-8">
      {/* <Total coupons={coupons} />
      <Promotion handleCoupons={handleCoupons} /> */}
      <Counter />
      <Counter2 />
    </div>
  );
}

function Total({ coupons }) {
  let originalPrice = 140.0;
  let discount = 0;

  if (coupons === "Bappy") {
    discount = originalPrice * 0.5; // 50% discount
  } else if (coupons === "Any") {
    discount = originalPrice * 0.8; // 80% discount
  }

  const finalPrice = originalPrice - discount;

  console.log("Coupon applied:", coupons);

  return (
    <div className="bg-white p-4 w-2/6 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-2">Total</h1>
      <div className="flex flex-col gap-2">
        <span className="text-4xl">${finalPrice.toFixed(2)}</span>
        <span className="line-through">${originalPrice.toFixed(2)}</span>
        <span>- ${discount.toFixed(2)}</span>
        <button className="bg-blue-500 text-white rounded-lg p-4">
          Checkout
        </button>
      </div>
    </div>
  );
}

function Promotion({ handleCoupons }) {
  const [input, setInput] = useState("");

  return (
    <div className="bg-white p-4 w-2/6 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-2">Apply Promotion</h1>
      <div className="flex space-x-2">
        <input
          className="border border-gray-300 rounded-lg p-2 flex-grow"
          type="text"
          placeholder="Promo Code"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white rounded-lg px-4 py-2"
          onClick={() => handleCoupons(input)}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setCount(count + 1); // Multiple state updates
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

function Counter2() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1); // Using functional form
    setCount((prevCount) => prevCount + 1); // Multiple state updates with functional form
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

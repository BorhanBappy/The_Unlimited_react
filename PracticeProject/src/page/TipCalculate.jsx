import React, { useState } from "react";

export default function TipCalculate() {
  const [bill, setBill] = useState("");
  const [tipsY, setTipsY] = useState(0);
  const [tipsF, setTipsF] = useState(0);
  console.log(bill);
  const final = ((tipsY / 100) * bill + (tipsF / 100) * bill) / 2;
  const total = bill + final;
  const onClick = () => {
    setBill("");
    setTipsF(0);
    setTipsY(0);
  };
  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <ServiceY setTipsY={setTipsY} />
      <ServiceF setTipsF={setTipsF} />

      <div>{bill > 0 ? `You Pay $ ${total} (${bill} +${final} tips)` : ""}</div>
      <div className=" ml-48">
        <Btn onClick={onClick} reset="Reset" />
      </div>
    </div>
  );
}

const Btn = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
    >
      {props.reset}
    </button>
  );
};

function Bill({ bill, setBill }) {
  return (
    <div className=" p-4">
      <label htmlFor="">How Much was the Bill</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        className=" ml-2 border-2 rounded-md border-blue-400"
      />
    </div>
  );
}
const data = [
  { id: 0, Sat: "Dissatisfied 0%" },
  { id: 5, Sat: "It was okay 5%" },
  { id: 10, Sat: "It was good 10%" },
  { id: 20, Sat: " Absolutely Amazing 20%" },
];

function ServiceY({ setTipsY }) {
  return (
    <div className=" p-4">
      <label htmlFor="">How did you like the services ?</label>
      <select
        className=" ml-2 border-2 rounded-md border-blue-400"
        onChange={(e) => setTipsY(Number(e.target.value))}
      >
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.Sat}
          </option>
        ))}
      </select>
    </div>
  );
}

function ServiceF({ setTipsF }) {
  return (
    <div className=" p-4">
      <label htmlFor="">How did your friend like the services ?</label>

      <select
        className=" ml-2 border-2 rounded-md border-blue-400"
        onChange={(e) => setTipsF(Number(e.target.value))}
      >
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.Sat}
          </option>
        ))}
      </select>
    </div>
  );
}

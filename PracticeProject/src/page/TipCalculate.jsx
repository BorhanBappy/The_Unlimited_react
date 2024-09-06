import React, { useState } from "react";

export default function TipCalculate() {
  const [bill, setBill] = useState("");
  const [tipsY, setTipsY] = useState(null);
  const [tipsF, setTipsF] = useState(null);
  console.log(bill);
  const final = ((tipsY / 100) * bill + (tipsF / 100) * bill) / 2;
  const total = bill + final;
  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <ServiceY setTipsY={setTipsY} />
      <ServiceF setTipsF={setTipsF} />

      <div>{bill > 0 ? `You Pay $ ${total} (${bill} +${final} tips)` : ""}</div>
      <button>Reset</button>
    </div>
  );
}

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

import React, { useState } from "react";

export default function Challenge2() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  //   date.setDate(date.getDate() + count);
  // console.log(step);

  function countminus() {
    setCount(count - step);
  }

  function countplus() {
    setCount(count + step);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div>
        <div className="mt-2 flex justify-center gap-2">
          <button
            className=" bg-slate-200 px-2 text-xl rounded shadow-lg border border-purple-700 "
            onClick={() => setStep((pre) => pre - 1)}
          >
            -
          </button>
          <p className=" text-xl">Step:{step}</p>
          <button
            className=" bg-slate-200 px-2 text-xl rounded shadow-lg border border-purple-700 "
            onClick={() => setStep((pre) => pre + 1)}
          >
            +
          </button>
        </div>
        <div className=" mt-2 flex justify-center gap-2">
          <button
            className=" bg-slate-200 px-2 text-xl rounded shadow-lg border border-purple-700 "
            onClick={countminus}
          >
            -
          </button>
          <p className=" text-xl">Count:{count}</p>
          <button
            className=" bg-slate-200 px-2 text-xl rounded shadow-lg border border-purple-700 "
            onClick={countplus}
          >
            +
          </button>
        </div>
      </div>

      <div>
        <span>
          {count === 0
            ? `Today is `
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was`.slice(1)}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}

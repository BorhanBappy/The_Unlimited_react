import { useState } from "react";

export default function Challenge3() {
  const [count, setCount] = useState(0);
  const [range, setRange] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);
  //   date.setDate(date.getDate() + count);
  // console.log(step);

  function countminus() {
    setCount(count - range);
  }

  function countplus() {
    setCount(count + range);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div>
        <div className="mt-2 flex justify-center gap-2">
          <input
            type="range"
            min="0"
            max="10"
            value={range}
            onChange={(e) => setRange(Number(e.target.value))}
          />
          {range}
        </div>
        <div className=" mt-2 flex justify-center gap-2">
          <button
            className=" bg-slate-200 px-2 text-xl rounded shadow-lg border border-purple-700 "
            onClick={countminus}
          >
            -
          </button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
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
      {count != 0 ? (
        <button
          className=" bg-slate-200 shadow-xl p-2 rounded-md"
          onClick={reset}
        >
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );

  function reset() {
    setRange(0);
    setCount(0);
  }
}

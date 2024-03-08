import React, { memo } from "react";
import { useEffect } from "react";
import { useState } from "react";

 function Stopwatch() {
  console.log("Stopwatch Rendering")
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((pre) => pre + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className=" flex justify-center items-center pt-8  ">
      <div className="bg-slate-300 flex flex-col rounded-md justify-center items-center p-4">
          <div className=" text-2xl text-red-700">
            <span>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </div>
          <div className=" flex gap-4 text-4xl">
              <button onClick={() => setRunning(!running)}>
                {running ? "Stop" : "Start"}
              </button>
              <button onClick={() => setTime(0)}>Restart</button>
          </div>
              </div>
      </div>
  );
}
export default Stopwatch;

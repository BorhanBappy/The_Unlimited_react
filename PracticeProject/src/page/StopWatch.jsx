import React, { useEffect, useState } from "react";

export default function StopWatch() {
  const [timer, setTimer] = useState(0);

  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTimer((prev) => prev + 10), 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  function ResetBtn() {
    setTimer(0);
    setRunning(false);
  }
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-9">
  <h1 className="text-3xl text-center">Stopwatch</h1>
  <div className="flex justify-center items-center">
    <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl">{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}</span>:
    <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl">{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}</span>:
    <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl">{("0" + Math.floor((timer / 10) % 100)).slice(-2)}</span>:
  </div>
  <div className=" flex gap-3 text-xl">
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300" onClick={() => setRunning(!running)}>
      {running ? "Stop" : "Start"}
    </button>
    <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300" onClick={ResetBtn}>Reset</button>
  </div>
</div>

  );
}

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
    <div className=" flex-col justify-center items-center ">
      <h1>Stopwatch</h1>
      <div className=" border">
        <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}</span>:
        <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}</span>:
        <span>{("0" + Math.floor((timer / 10) % 100)).slice(-2)}</span>:
        <span>{}</span>
        <span>{}</span>
      </div>
      <button onClick={() => setRunning(!running)}>
        {running ? "Stop" : "Start"}
      </button>
      <button onClick={ResetBtn}>Reset</button>
    </div>
  );
}

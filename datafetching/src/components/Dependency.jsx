import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // ✅ Cleanup interval on unmount
  }, []); // ✅ Runs only once when the component mounts

  return <h1 className=" bg-amber-400">Count: {count}</h1>;
}

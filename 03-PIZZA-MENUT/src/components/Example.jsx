import React, { useState } from "react";

function ExampleComponentWithoutEffect() {
  const [count, setCount] = useState(["bappy"]);
  //   console.log(count);
  console.log(count, "render");
  const handleClick = () => {
    setCount([...count, name]);

    setName("");
  };
  const [name, setName] = useState("");
  const [message, setMessage] = useState("this is your Message");
 
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={handleClick}>Add Name</button>
      <p>{name}</p>
      <ul>
        {count.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExampleComponentWithoutEffect;

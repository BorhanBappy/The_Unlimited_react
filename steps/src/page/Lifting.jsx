/* eslint-disable react/prop-types */
import React, { useState } from "react";

export default function Lifting() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handlename(name) {
    setName(name);
  }

  function Password(password) {
    setPassword(password);
  }

  return (
    <div>
      <h1 className="text-center text-3xl">Hello Lifting</h1>
      <Input name={handlename} password={Password} />
      <Profile name={name} password={password} />
    </div>
  );
}

function Input({ name, password }) {
  const [nam, chnagename] = useState("");
  const [pass, changePass] = useState("");
  function handleSubmit() {
    name(nam);
    password(pass);
  }
  console.log(name);
  return (
    <div>
      <label> Enter Your Name</label>
      <input
        type="text"
        value={nam}
        onChange={(e) => chnagename(e.target.value)}
      />
      <label> Enter Your Password</label>
      <input
        type="password"
        value={pass}
        onChange={(e) => changePass(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

function Profile({ name, password }) {
  return (
    <div>
      <h2>Profile</h2>
      {name != ""
        ? name === "Bappy" && password === "1234"
          ? `Welcome ${name}`
          : "Password or name is incorrect"
        : ""}
    </div>
  );
}

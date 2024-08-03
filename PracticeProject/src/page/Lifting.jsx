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
  const [nam, changeName] = useState("");
  const [pass, changePass] = useState("");
  function handleSubmit() {
    name(nam);
    password(pass);
  }

  return (
    <div>
      <label> Enter Your Name :</label>
      <input
        className=" rounded-md border-4 border-red-600"
        type="text"
        value={nam}
        onChange={(e) => changeName(e.target.value)}
      />
      <label> Enter Your Password :</label>
      <input
        className=" rounded-md border-4 border-red-600"
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

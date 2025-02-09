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
  const [fromData, setFromData] = useState({ Fname: "", password: "" });

  function handleSubmit() {
    name(fromData.Fname);
    password(fromData.password);
    setFromData({ Fname: "", password: "" });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setFromData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
  return (
    <div>
      <label> Enter Your Name :</label>
      <input
        className=" rounded-md border-4 border-red-600"
        type="text"
        name="Fname"
        value={fromData.Fname}
        onChange={handleChange}
      />
      <label> Enter Your Password :</label>
      <input
        className=" rounded-md border-4 border-red-600"
        type="password"
        name="password"
        value={fromData.password}
        onChange={handleChange}
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

import React from "react";
import { useState } from "react";

export default function AGE() {
  const [age, setAge] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState(null);
  const [ageColor, setAgeColor] = useState("text-green-500"); // Default to green

  const handleCalculate = () => {
    // Validation for the year to be a 4-digit number between 2000 and 2024
    if (year.length !== 4 || year < 2000 || year > 2024) {
      alert("Year must be a 4-digit number between 2000 and 2024.");
      return;
    }

    // Validation for the age to be less than or equal to 100
    if (age > 100) {
      alert("Age cannot be greater than 100.");
      return;
    }

    if (age && year) {
      const calculatedYear = year - age;
      setResult(calculatedYear);
    }
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    setAge(value);

    // Set text color based on age
    if (value > 100) {
      setAgeColor("text-red-500");
    } else {
      setAgeColor("text-green-500");
    }
  };

  return (
    <div className=" bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Age Year Calculator
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="age"
          >
            Enter Your Age
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={handleAgeChange}
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-4xl ${ageColor}`}
            placeholder="e.g., 50"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="year"
          >
            Enter Article Year
          </label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full p-2 border text-4xl rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g., 2020"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Calculate
        </button>

        {result !== null && (
          <div className="mt-6 text-center">
            <p className="font-bold text-green-800 text-6xl">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

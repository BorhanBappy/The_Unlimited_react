import React, { useState } from "react";

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const handleDateChange = (event) => {
    setBirthDate(event.target.value);
  };

  const calculateAge = () => {
    if (!birthDate) {
      alert("Please select your date of birth.");
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();

    const timeDifference = today.getTime() - birth.getTime();
    const ageDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    const ageYears = Math.floor(ageDays / 365.25);
    const remainingDays = ageDays % 365.25;
    const ageMonths = Math.floor(remainingDays / 30.44);
    const exactDays = Math.floor(remainingDays % 30.44);

    setAge({
      years: ageYears,
      months: ageMonths,
      days: exactDays,
      totalDays: ageDays,
    });
  };

  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded-xl shadow-lg space-y-6">
      <h1 className="text-4xl font-bold text-center text-indigo-600">
        Age Calculator
      </h1>
      <div className="flex flex-col items-center space-y-4">
        <label
          htmlFor="birthDatePicker"
          className="block text-2xl font-medium text-gray-700"
        >
          Select your Date For Check NRISK:
        </label>
        <input
          type="date"
          id="birthDatePicker"
          onChange={handleDateChange}
          className="w-full px-6 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-2xl"
          style={{ height: "60px" }} // Increase the height of the input
        />
        <button
          onClick={calculateAge}
          className="mt-4 w-full bg-indigo-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-2xl"
        >
          Calculate Age
        </button>
      </div>
      {age && (
        <div className="text-center">
          <p className="text-4xl text-gray-800">
            Your age is:{" "}
            <span className="font-bold">
              {age.months} months and {age.days} days
            </span>
            .
          </p>
          <p className="text-4xl text-gray-800 mt-2">
            Or, <span className="font-bold">{age.totalDays} days in total</span>
            .
          </p>
          <p
            className={`text-4xl mt-4 ${
              age.totalDays < 90 ? "text-green-600" : "text-red-600"
            }`}
          >
            {age.totalDays > 90 ? "NRISK" : "Alert"}
          </p>
        </div>
      )}
    </div>
  );
}

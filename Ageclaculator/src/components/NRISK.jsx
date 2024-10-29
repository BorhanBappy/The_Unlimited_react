import React, { useState } from "react";

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState(null);

  const handleDateChange = (event) => {
    setBirthDate(event.target.value);
  };

  const calculateDateDifference = () => {
    if (!birthDate) {
      alert("Please select a date.");
      return;
    }

    // Set both dates to midnight to avoid timezone issues
    const birth = new Date(birthDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // set today to midnight
    birth.setHours(0, 0, 0, 0); // set birthDate to midnight

    const futureDate = new Date(birth.getTime() + 90 * 24 * 60 * 60 * 1000);

    setResult({
      totalDays: Math.floor((today - birth) / (1000 * 60 * 60 * 24)),
      isNRISK: today > futureDate,
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
          style={{ height: "60px" }}
        />
        <button
          onClick={calculateDateDifference}
          className="mt-4 w-full bg-indigo-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-2xl"
        >
          Calculate Days
        </button>
      </div>
      {result && (
        <div className="text-center">
          <p className="text-4xl text-gray-800">
            Total Days: <span className="font-bold">{result.totalDays}</span>
          </p>
          <p
            className={`text-4xl mt-4 ${
              result.isNRISK ? "text-red-600" : "text-green-600"
            }`}
          >
            {result.isNRISK ? "NRISK" : "Alert"}
          </p>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";

export default function App() {
  const [age, setAge] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    if (age && year) {
      const calculatedYear = year - age;
      setResult(calculatedYear);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            <p className="text-xl font-bold text-gray-800">Result: {result}</p>
          </div>
        )}
      </div>
    </div>
  );
}


import { useState } from "react";

const message = [
  "Learn React 👍",
  "Apply the Jobs 🤜",
  "Invest your income 😶‍🌫️",
];

const active = "bg-blue-600 rounded-full px-2";

export default function ActiveMessage() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [name, setName] = useState({ name: "Bappy" });

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }
  function handleView() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button className="p-4 mt-2 float-right text-2xl" onClick={handleView}>
        🔄
      </button>
      {isOpen && (
        <div className=" flex justify-center p-2 ">
          <div className=" mt-12 px-6 py-2 text-center w-full sm:w-1/2 lg:1/3 bg-slate-200 ">
            <div className="flex justify-between">
              <div className={step === 1 ? active : ""}>1</div>
              <div className={step === 2 ? active : ""}>2</div>
              <div className={step === 3 ? active : ""}>3</div>
            </div>
            <p className=" p-4 font-bold">
              Step {step}: {message[step - 1]}
              {name.name}
            </p>
            <div className="flex justify-between ">
              <button
                className=" bg-blue-600 rounded-md p-1"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                className=" bg-blue-600 rounded-md p-1"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


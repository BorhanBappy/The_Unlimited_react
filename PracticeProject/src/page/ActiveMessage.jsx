// import { useState } from "react";
import { useState } from "react";
import Button from "./../components/Eat_N_Split/Button";

// const message = [
//   "Learn React 👍",
//   "Apply the Jobs 🤜",
//   "Invest your income 😶‍🌫️",
// ];

// const active = "bg-blue-600 rounded-full px-2";

// export default function ActiveMessage() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   function handlePrevious() {
//     if (step > 1) setStep(step - 1);
//   }
//   function handleNext() {
//     if (step < 3) setStep(step + 1);
//   }
//   function handleView() {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <>
//       <button className="p-4 mt-2 float-right text-2xl" onClick={handleView}>
//         🔄
//       </button>
//       {isOpen && (
//         <div className=" flex justify-center p-2 ">
//           <div className=" mt-12 px-6 py-2 text-center w-full sm:w-1/2 lg:1/3 bg-slate-200 ">
//             <div className="flex justify-between">
//               <div className={step === 1 ? active : ""}>1</div>
//               <div className={step === 2 ? active : ""}>2</div>
//               <div className={step === 3 ? active : ""}>3</div>
//             </div>
//             <StepMessage step={step} message={message[step - 1]} />
//             <div className="flex justify-between ">
//               <button
//                 className=" bg-blue-600 rounded-md p-1"
//                 onClick={handlePrevious}
//               >
//                 Previous
//               </button>
//               <button
//                 className=" bg-blue-600 rounded-md p-1"
//                 onClick={handleNext}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// function StepMessage({ step, message }) {
//   return (
//     <div className=" p-4 font-bold">
//       <h3>Step {step}</h3>
//       {message}
//     </div>
//   );
// }

const message = [
  "Learn React 👍",
  "Apply the Jobs 🤜",
  "Invest your income 😶‍🌫️",
];
const active = "bg-blue-600 rounded-full px-2";
export default function ActiveMessage() {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(true);

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  return (
    <>
      <button className="p-4 text-2xl relative" onClick={() => setOpen(!open)}>
        🔄
      </button>
      {open ? (
        <div className=" w-1/2 mx-auto bg-slate-400 mt-4 p-7">
          <div className=" flex justify-between ">
            <div className={step == 1 ? active : ""}>1</div>
            <div className={step == 2 ? active : ""}>2</div>
            <div className={step == 3 ? active : ""}>3</div>
          </div>
          <Message step={step} message={message[step - 1]} />
          <div className=" flex justify-between p-2">
            <ButtonBTN
              name={"Previous"}
              handle={() => step > 1 && setStep((s) => s - 1)}
            />
            <ButtonBTN name={"Next"} handle={handleNext} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

const Message = ({ step, message }) => {
  return (
    <div className="text-center p-2">
      {`Step-${step} `}
      {message}
    </div>
  );
};

function ButtonBTN({ name, handle }) {
  return (
    <button
      className=" bg-blue-600 text-white rounded-md py-1 px-4"
      onClick={handle}
    >
      {name}
    </button>
  );
}

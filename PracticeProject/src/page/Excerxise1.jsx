import { useState } from "react";
import { clsx } from "clsx";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

// export default function Exercise1() {
//   const [selectedID, setSelectedID] = useState(null);
//   function handleID(id) {
//     setSelectedID(id !== selectedID ? id : null);
//     // console.log(id);
//     // console.log(selectedID);
//   }

//   return (
//     <div className=" grid grid-cols-3 gap-12 p-8 text-2xl  shadow-md  ">
//       {questions.map((question) => (
//         <div key={question.id}>
//           <p
//             onClick={() => handleID(question.id)}
//             className={
//               question.id === selectedID
//                 ? " bg-green-600 w-[400px] h-[200px] text-white text-center mx-auto p-2"
//                 : " bg-slate-200 w-[400px] h-[200px] text-center mx-auto "
//             }
//           >
//             {question.id === selectedID
//               ? `${question.answer}`
//               : `${question.question}`}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

export default function Exercise1() {
  const [selectedID, setSelectedID] = useState(null);

  function handle(id) {
    setSelectedID(id !== selectedID ? id : null);
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-6 text-2xl">
      {questions.map((question) => (
        <div key={question.id}>
          <p
            onClick={() => handle(question.id)}
            className={
              question.id === selectedID
                ? "bg-green-600 w-[400px] h-[200px] text-white text-center mx-auto p-2 rounded-lg"
                : "bg-slate-200 w-[400px] h-[200px] text-center mx-auto rounded-lg p-2"
            }
          >
            {question.id === selectedID
              ? `${question.answer}`
              : `${question.question}`}
          </p>
        </div>
      ))}
    </div>
  );
}

import { useState } from "react";

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

export default function Exercise1() {
  const [selectedID, setSelectedID] = useState(null);
  function handleID(id) {
    setSelectedID(id !== selectedID ? id : null);
    // console.log(id);
    // console.log(selectedID);
  }

  return (
    <div className=" grid grid-cols-3 gap-12 p-8 text-2xl rounded-lg">
      {questions.map((question) => (
        <div key={question.id}>
          <p
            onClick={() => handleID(question.id)}
            className={
              question.id === selectedID
                ? "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 "
                : " "
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

import { useState, useEffect } from "react";

const quiz = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correct: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: "4",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Jane Austen"],
    correct: "Harper Lee",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "N2"],
    correct: "H2O",
  },
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [score, setScore] = useState(0);
  const [isTimeFinished, setIsTimeFinished] = useState(false);

  // Timer Effect
  useEffect(() => {
    if (timeLeft === 0) {
      setIsTimeFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Handle Answer Selection
  const handleAnswer = (selectedOption) => {
    if (!isTimeFinished && selectedOption === quiz[currentQuestion].correct) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  // Move to the next question
  const handleNextQuestion = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz Finished! Your score is ${score} out of ${quiz.length}`);
    }
  };

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Quiz App</h1>

      {isTimeFinished ? (
        <h2 className="text-2xl text-red-500 font-bold">⏳ Time Finished!</h2>
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-center">
          <h2 className="text-xl font-semibold">
            {quiz[currentQuestion].question}
          </h2>
          <div className="mt-4 space-y-2">
            {quiz[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="w-full p-2 bg-blue-500 hover:bg-blue-600 rounded-md"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="mt-4 text-lg">⏳ Total Time Left: {timeLeft} sec</p>
        </div>
      )}
    </div>
  );
}

export default QuizApp;

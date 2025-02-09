import React, { useState } from "react";
import clsx from "clsx";

const data = [
  {
    title: "Introduction",
    text: "Welcome to our platform. We aim to provide valuable information and resources to our users.",
  },
  {
    title: "Features",
    text: "Our platform offers a variety of features including user authentication, data visualization, and community forums.",
  },
  {
    title: "User Engagement",
    text: "We encourage active participation from our users. Share your thoughts, ask questions, and connect with other members of the community.",
  },
  {
    title: "Updates",
    text: "Stay up-to-date with the latest news and developments on our platform. We regularly release updates and improvements based on user feedback.",
  },
  {
    title: "Get Started",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magni accusantium aliquam dicta vel minima laboriosam inventore incidunt dolorum...",
  },
];

export default function App() {
  // export default function Accordion() {

  return (
    <div className="bg-gray-100">
      {data.map((el, i) => (
        <AccordionItem key={i} num={i} title={el.title} text={el.text} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, textn }) {
  const [curOpen, setcurOpen] = useState(null);

  const isActive = num === curOpen;
  console.log(num);
  console.log(curOpen);
  // console.log(isActive);
  return (
    <ul className="p-4 text-2xl">
      <div
        onClick={() => setcurOpen(isActive ? null : num)}
        className={clsx("bg-white w-full p-1 cursor-pointer", {
          "border-t-4 border-green-500": isActive,
        })}
      >
        <div className="flex items-center justify-between">
          <div>
            <span
              className={clsx("ml-4", {
                "text-slate-400": !isActive,
                "text-green-700 font-semibold": isActive,
              })}
            >
              {("0" + (num + 1)).slice(-2)}
            </span>
            <span
              className={clsx("ml-4", {
                "text-black": !isActive,
                "text-green-700 font-semibold": isActive,
              })}
            >
              {`${title} ,${textn}`}
            </span>
          </div>
          <span className="text-4xl">{isActive ? "-" : "+"}</span>
        </div>
        {isActive && (
          <p className="text-[19px] p-12 pt-5 text-justify">{text}</p>
        )}
      </div>
    </ul>
  );
}

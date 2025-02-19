/* eslint-disable react/prop-types */
import { useState } from "react";
import clsx from "clsx";

const content = [
  {
    summary: "Rendering Lists Dynamically in React Using Arrays",
    details: `
In React, arrays are a key way to dynamically create UI elements. By using methods like .map(), developers can iterate over data arrays to render lists. This is often used in applications to display items such as blog posts, user profiles, or e-commerce products. React efficiently updates the DOM only for the elements that have changed, making the process optimized for performance.
    `,
  },
  {
    summary: "Filtering Data for Conditional Rendering in React",
    details: `
React allows developers to filter arrays to display only the elements that meet certain conditions. For example, you can implement a search feature by filtering an array of data based on user input or create category views in a product catalog. The .filter() method returns a new array that meets the provided criteria, and React re-renders the UI based on the filtered data.
    `,
  },
  {
    summary: "Aggregating Data in React Using Array Reduction",
    details: `
In React, the .reduce() method can be used to calculate summaries or aggregated values from arrays. This is useful for tasks like computing the total cost in a shopping cart, counting completed tasks in a to-do app, or summarizing statistics from user activity. Using .reduce() ensures concise logic to derive meaningful insights from raw data.
    `,
  },
  {
    summary: "Transforming and Combining Arrays for Complex UIs",
    details: `
React applications often involve transforming or combining multiple arrays to create complex UIs. Methods like .concat(), .flatMap(), or even custom logic can merge arrays or break them down into smaller parts. This is useful for scenarios like showing a feed that combines posts from different sources or preparing hierarchical data for tree-like views.
    `,
  },
];

export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}
// console.log(<DifferentContent />);
// console.log(DifferentContent(123));

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <TabList
        count={content.length}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <TabContent content={content} activeTab={activeTab} />
    </div>
  );
}
// dynamical add Tab
function TabList({ count, activeTab, setActiveTab }) {
  return (
    <div className="flex  space-x-4 px-12 py-4 mt-8 ">
      {[...Array(count + 2)].map((_, index) => (
        <Tab
          key={index}
          num={index}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}
    </div>
  );
}

function TabContent({ content, activeTab }) {
  if (activeTab >= content.length) return <DifferentContent />;

  return <ContentDetails item={content[activeTab]} />;
}

const ContentDetails = ({ item }) => {
  const [showDetails, setShowDetails] = useState(true);
  const [love, setLove] = useState(0);
  console.log(item);
  return (
    <div className=" bg-gray-200 mx-12 w-[600px] p-4">
      <h1 className=" text-xl text-blue-900 font-bold py-2"> {item.summary}</h1>
      <h1 className=" text-justify">{showDetails ? item.details : ""}</h1>
      <div className=" flex justify-between py-2">
        <button
          className=" text-blue-500 text-[18px] underline underline-offset-1
"
          onClick={() => setShowDetails((setShowDetails) => !setShowDetails)}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
        <div>
          {love} <button onClick={() => setLove((e) => e + 1)}>❤️</button>
        </div>
      </div>
    </div>
  );
};

const Tab = ({ num, activeTab, setActiveTab }) => {
  return (
    <div>
      <button
        className={clsx(
          "px-4 py-2 rounded-md font-medium shadow-md",
          activeTab === num
            ? "bg-blue-800 text-white"
            : "bg-gray-200 text-blue-800"
        )}
        onClick={() => setActiveTab(num)}
      >
        Tab {num + 1}
      </button>
    </div>
  );
};

function DifferentContent() {
  return (
    <div className=" bg-gray-200 mx-12 w-[600px] p-4 text-blue-800 font-bold text-xl">
      I am different tab so I reset State 💣 💥
    </div>
  );
}

import { useState } from "react";
import Stopwatch from "./components/Stopwatch";

const Advanced = "💪";
const Intermediate = "👍";
const Beginner = "😄";

const skills = [
  {
    skill: "HTML+CSS",
    label: Advanced,
    color: "bg-blue-700",
  },
  {
    skill: "JavaScript",
    label: Advanced,
    color: "bg-yellow-400",
  },
  {
    skill: "Web Design",
    label: Advanced,
    color: "bg-[#ABC69D]",
  },
  {
    skill: "Git and Github",
    label: Intermediate,
    color: "bg-[#C94F2E]",
  },
  {
    skill: "React",
    label: Advanced,
    color: "bg-sky-400",
  },
  {
    skill: "Tailwind",
    label: Beginner,
    color: "bg-[#FA390E]",
  },
];

function SkillList({ skills }) {
  console.log(skills);
  const { color, skill, label } = skills;
  // console.log(color);
  return (
    <div className="mb-1">
      <span className={`${color} rounded-[4px] px-2`}>
        {skill}
        {label}
      </span>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img
        className=" h-[180px] w-full"
        src="/IMG_20240214_091044.jpg"
        alt=""
      />
    </div>
  );
}
function Intro() {
  return (
    <div>
      <h1 className="text-3xl pb-3 mt-4 pl-6 font-bold">Borhan Uddin Bappy</h1>
      <p className="pl-6 pb-2 font-semibold">
        I a front-end Developer. Currently I am searching Job. I am learning
        react. I am graduated from Green University of Bangladesh.
      </p>
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0);
  console.log("Profile Rendering");

  return (
    <>
      <div className=" flex justify-start items-start">
        <div className="m-8 border-black border-2 h-full w-[370px]">
          <Avatar />
          <Intro />

          <label htmlFor="">ADD A new Skill</label>
          <input
            type="text"
            className=" border border-blue-600 rounded-md w-1/2 m-2"
          />
          <div className="px-6 font-semibold grid grid-cols-2 justify-items-start">
            {/* <SkillList
              skill1="HTML+CSS"
              emoji1=" 💪"
              skill2="JavaScript"
              emoji2=" 💪"
              color1="bg-blue-700"
              color2="bg-yellow-400 "
            />
            <SkillList
              skill1="Web-Design"
              emoji1=" 💪"
              skill2="Git and Github "
              emoji2=" 👍"
              color1="bg-[#ABC69D]"
              color2="bg-[#C94F2E] "
            />
            <SkillList
              skill1="React"
              emoji1=" 💪"
              skill2="Tailwind"
              emoji2=" 😄"
              color1="bg-sky-400 "
              color2="bg-[#FA390E] "
            /> */}

            {skills.map((skills) => (
              <SkillList key={skills.skill} skills={skills} />
            ))}
          </div>
        </div>
        {count}
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <Stopwatch />
      </div>
      <Stopwatch />
    </>
  );
}

export default App;

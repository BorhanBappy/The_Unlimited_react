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
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magni accusantium aliquam dicta vel minima laboriosam inventore incidunt dolorum, itaque animi fugit ipsa id numquam voluptatum repellat? Error, expedita quasi culpa nobis odit id nisi minus quam quos pariatur iste labore consectetur placeat alias eum sed ab, veritatis, nihil totam tempore sint! Incidunt voluptatum possimus minima rem repudiandae pariatur, expedita sapiente magni eaque ratione ipsa eligendi, praesentium dolor excepturi sint dignissimos vel nobis distinctio laudantium quaerat. Velit hic, eveniet id quam ducimus a esse veritatis sapiente possimus fugiat laudantium corrupti dolor, amet quod. Amet atque molestias eos illo rerum iusto, dicta maiores et dolor adipisci ipsa perferendis praesentium? Quibusdam omnis molestias eligendi enim repellat. Quas, iste adipisci fuga maxime magnam neque cupiditate! Aliquid, doloribus. Non repudiandae dolor voluptatem fugiat perferendis consequatur quos autem facilis necessitatibus molestias placeat consequuntur provident, doloremque assumenda quaerat corporis asperiores nostrum, quas enim id tempore explicabo sint! Dignissimos, porro molestiae. Corporis quae veniam et tempora optio ullam sed ratione molestias enim quidem, voluptas incidunt eveniet fugiat quas voluptatibus unde provident distinctio aspernatur non odio excepturi minus dicta. Quae inventore ut in eveniet esse, dignissimos veritatis eaque, iure laboriosam odio vero mollitia molestias commodi nulla accusantium fugit quam, corporis dolore aliquam repellat aperiam! Architecto dignissimos doloremque repudiandae odio veniam debitis, fugiat asperiores tempora inventore. Earum voluptatibus impedit consequatur aliquid quo eos perferendis, similique facere a nostrum fuga adipisci recusandae, tempora tenetur perspiciatis quasi ipsa? Fugit illo, odit, fuga in alias facere ex eligendi porro accusamus amet fugiat sunt cumque? Dolores iure tenetur culpa at doloribus libero minus suscipit a mollitia neque rem tempore cum excepturi ratione necessitatibus debitis, consequatur soluta! Laboriosam quo sed velit itaque, deleniti fugiat ipsum tempora voluptate consequatur dolores qui ratione magni hic, perspiciatis sunt. Assumenda ratione deserunt vitae aperiam fugiat quibusdam placeat enim. Sit tempore non a architecto odit fuga? Libero ipsam sint excepturi delectus beatae numquam, iusto repellendus id, ab eaque minima iste? Ex eligendi quisquam dolorem ullam laborum molestias natus deleniti laboriosam sint obcaecati iste excepturi consectetur maxime illo ipsum ut sit recusandae aspernatur assumenda, omnis inventore nihil voluptas aperiam. Perspiciatis hic, et cumque expedita repudiandae ratione soluta nobis, adipisci ab sapiente ad facere inventore repellendus deleniti mollitia aperiam odit! Fuga eligendi velit, consequuntur aliquam rem eveniet perferendis nesciunt reiciendis sequi? Similique, adipisci rerum accusamus, nulla unde hic odit suscipit magnam sint voluptate dicta reiciendis mollitia libero omnis vero enim nisi ducimus repudiandae incidunt laborum sequi iure fuga officia? Veritatis odit corrupti, dolor nihil fugiat hic, id aspernatur temporibus odio incidunt sunt, ut adipisci voluptas? Explicabo temporibus non distinctio velit commodi repudiandae earum reiciendis dicta ad consequatur! Doloribus nulla fugiat suscipit sequi perspiciatis earum, deleniti vero iure itaque molestiae, nemo ad rem quia aperiam libero! Consequatur culpa enim reprehenderit eveniet perspiciatis sit minus explicabo rerum eligendi corporis, accusamus illo error ex saepe ab voluptas, eum, voluptates atque! Porro voluptatibus tempore ut autem tenetur quidem inventore exercitationem enim. Quisquam, delectus consequatur cumque dolores, quia ea excepturi vero magni autem alias quas odio?"
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={data} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="bg-gray-100">
      {data.map((el, i) => (
        <AccordionItem key={i} num={i} title={el.title} text={el.text} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [Te, hideText] = useState(false);
  return (
    <ul className="p-4 text-2xl ">
      <div
        onClick={() => hideText(!Te)}
        className=" bg-white w-full p-1 cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <div>
            <span
              className={clsx("ml-4", {
                " text-slate-400": Te === false,
                "text-green-700 font-semibold": Te === true,
              })}
            >
              {("0" + (num + 1)).slice(-2)}
            </span>
            <span
              className={clsx("ml-4", {
                "text-black": Te === false,
                "text-green-700 font-semibold": Te === true,
              })}
            >
              {title}
            </span>
          </div>
          <span className=" text-4xl">{Te ? "-" : "+"}</span>
        </div>
        {Te ? <p className="text-[19px] p-12 pt-5 text-justify">{text}</p> : ""}
      </div>
    </ul>
  );
}

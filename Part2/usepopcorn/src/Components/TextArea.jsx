/* eslint-disable react/prop-types */
import React, { useState } from "react";

export default function TextArea() {
  return (
    <div>
      <TextExpender
        size={10}
        show="Show more"
        clops="Show Less"
        color="text-blue-500  "
        expended={true}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
        doloribus sit quia ipsam, labore ullam architecto iusto itaque magni,
        optio quas eaque nobis dolor odio vero delectus? Recusandae, atque iure?
      </TextExpender>
      <TextExpender
        size={22}
        show="Show Text"
        clops="Collapse text"
        color="text-orange-500   "
        expended={true}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt
        est facilis eligendi qui assumenda tempora eum, asperiores error hic
        suscipit dignissimos at voluptas sequi accusamus modi voluptatibus iure
        recusandae in veniam possimus, commodi molestias numquam! Maiores
        exercitationem molestiae repudiandae est corrupti voluptatum architecto
        ullam, soluta repellendus eius explicabo ratione incidunt nisi quidem.
        Autem commodi debitis, facere soluta cumque praesentium, aperiam
        repellendus nihil necessitatibus expedita, pariatur aliquid itaque
        voluptatum nesciunt! Error molestiae ex ullam similique architecto.
        Officiis dolore nesciunt accusantium!
      </TextExpender>
      <TextExpender
        className=" bg-red-300 rounded-md p-2 m-2 shadow-lg"
        color="text-blue-500 "
        size={15}
        show="Show more"
        clops="Show Less"
        expended={false}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto harum
        voluptatem, saepe earum sunt atque blanditiis reprehenderit inventore
        veritatis amet aliquam vel eveniet, exercitationem modi ratione
        perspiciatis. Soluta placeat impedit hic eius iusto cumque, tenetur
        doloribus. Voluptatibus dolorum eaque nesciunt quaerat ipsa veritatis
        optio voluptates quibusdam iure atque corporis asperiores quo libero,
        blanditiis vero quas illum molestiae placeat eum sint? Tempora neque
        ullam repudiandae optio consectetur nisi rem iure quo sunt, obcaecati
        ipsam commodi reprehenderit a officia deserunt facere, perspiciatis amet
        aliquid. Ipsam quas repellat, doloribus alias porro placeat. A nisi
        laboriosam amet, reprehenderit distinctio sequi magnam minima asperiores
        earum?
      </TextExpender>
    </div>
  );
}

function TextExpender({
  children,
  className,
  size = 10,
  show = "Show more",
  clops = "show less",
  color = "text-blue-500",
  expended = false,
}) {
  const [limit, setLimit] = useState(expended);
  const limitText = children.split(" ").slice(0, size).join(" ");

  return (
    <div className={`p-2 ${className} `}>
      {limit ? `${limitText} ...` : children}
      <button className={`pl-2 ${color}`} onClick={() => setLimit(!limit)}>
        {limit ? show : clops}
      </button>
    </div>
  );
}

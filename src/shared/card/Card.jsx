import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

function Card(props) {
  return (
    <div className="block max-w-md p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
      <h1 className="text-black text-center text-xl">{props.position}</h1>
      <h2 className="text-black text-center text-md">{props.company}</h2>
      <p className="text-black text-center text-sm">{props.duration}</p>
      <ul className="flex flex-col gap-2 pt-5">
        {props.experience.map((exp, index) => (
          <li key={index} className="text-sm flex items-center fle-col gap-3">
            <div className="flex items-start">
              <AiFillCaretRight />
            </div>
            <p>{exp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;

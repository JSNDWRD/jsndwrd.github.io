import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

function Skill(props) {
  const skillIcons = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    Javascript: <FaJs />,
    TailwindCSS: <SiTailwindcss />,
    ReactJS: <FaReact />,
    NextJS: <SiNextdotjs />,
    Python: <FaPython />,
    Bootstrap: <FaBootstrap />,
  };
  return (
    <div className="bg-white w-auto rounded-lg drop-shadow-sm hover:drop-shadow-md transition-all p-6 mb-4">
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-4">{skillIcons[props.skill] || <div className="text-4xl text-gray-500">Icon Missing</div>}</div>
        <div>
          <h3 className="text-xl font-semibold">{props.skill}</h3>
          <div className="text-gray-600">Proficiency: {props.proficiency}</div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex-1">
          <span className="text-gray-600">Experience:</span> <span className="text-blue-500">{props.time} years</span>
        </div>
      </div>
    </div>
  );
}

export default Skill;

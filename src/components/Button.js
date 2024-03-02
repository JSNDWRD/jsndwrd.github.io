"use client";
import React from "react";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
function Button(props) {
  return (
    <div>
      <a
        href="mailto:jasonedwardsalim@gmail.com?subject=hello"
        target="_blank"
        className="px-8 py-4 font-semibold bg-blue-600 hover:bg-text hover:text-blue-600 hover:drop-shadow-md transition-all duration-200 rounded-full flex gap-2 items-center"
        type="button"
      >
        <BsFillChatLeftQuoteFill size={25} />
        {props.text}
      </a>
    </div>
  );
}

export default Button;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "../../public/profile.jpg";

function NavigationMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="lg:hidden px-4 py-2 bg-primary h-20 text-text flex justify-between items-center fixed top-0 z-[100] w-full ">
        <div className=" flex items-center">
          <Image
            src={profile}
            alt="profile"
            className="w-14 h-14 rounded-full hover:rotate-45 transition-all"
          />
          <h1 className="font-bebasneue  text-3xl mx-4">jsndwrd</h1>
        </div>
        <button
          onClick={handleClick}
          className="text-white flex flex-col justify-center items-center"
        >
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
          ></span>
        </button>
      </nav>

      <div
        className={`lg:hidden bg-primary backdrop-blur-md p-4 h-screen w-full fixed top-20 left-0 z-[50] transition-all ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul className="text-text *:px-4 *:py-2 font-medium text-2xl">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/photograph">Photograph</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavigationMobile;

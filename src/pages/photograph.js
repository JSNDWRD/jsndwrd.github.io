import React from "react";
import Head from "next/head";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Skill from "@/components/Skill";
import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";
import "../../node_modules/tailwindcss/tailwind.css";
import "../app/globals.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>jsndwrd</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Navigation />
      <main className="bg-primary lg:flex text-text mt-20">
        <ProgressBar />
        <section className="h-[calc(100vh-5rem)] mb-2 w-screen lg:w-1/3 flex flex-col justify-center">
          <div className="p-4   bg-primary pl-12 w-screen lg:w-1/3 lg:fixed font-medium overflow-hidden">
            <p className="text-2xl mb-1">Hello World, I am</p>
            <h1 className="text-8xl font-bebasneue leading-[.8]">
              Jason Edward Salim
            </h1>
            <h2 className="text-2xl">Web Developer</h2>
            <p className="my-4">A highschool student who likes to code</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button text="Let's Talk" />
              <a href="https://www.instagram.com/jsndwrd" target="_blank">
                <FaInstagram
                  size={35}
                  className="hover:fill-blue-600 fill-text hover:scale-125 transition-all"
                />
              </a>
              <a href="https://www.twitter.com/jsndwrd" target="_blank">
                <FaTwitter
                  size={35}
                  className="hover:fill-blue-600 fill-text hover:scale-125 transition-all"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jason-edward-salim-50751927a/"
                target="_blank"
              >
                <FaLinkedin
                  size={35}
                  className="hover:fill-blue-600 fill-text hover:scale-125 transition-all"
                />
              </a>
            </div>
            <p className="mt-8">&copy; 2024 | Created by jsndwrd</p>
          </div>
        </section>
        <section
          id="mainContent"
          className=" bg-primary w-screen lg:w-2/3 pb-4 pl-8 pr-2"
        ></section>
      </main>
    </div>
  );
}

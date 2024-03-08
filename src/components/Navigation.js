import React from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "../../public/profile.jpg";

function Navigation() {
  return (
    <div>
      <nav className="px-4 py-2 bg-primary h-20 text-text flex justify-between items-center fixed top-0 z-[100] w-full ">
        <div className=" flex items-center">
          <Image
            src={profile}
            alt="profile"
            className="w-14 h-14 rounded-full hover:rotate-45 transition-all"
          />
          <h1 className="font-bebasneue  text-3xl mx-4">jsndwrd</h1>
        </div>
        <ul className="flex items-center gap-4 p-2 px-4 drop-shadow-sm font-medium">
          <li>
            <Link href="/" className="hover:text-blue-500 transition-all">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/photograph"
              className="hover:text-blue-500 transition-all"
            >
              Photograph
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

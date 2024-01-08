"use client";

import React, { useState } from "react";
import Navlink from "./Navlink";
import Link from "next/link";
const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setopen] = useState(false);
  // Temp
  const isAdmin = false;
  const session = false;

  return (
    <div>
      <div className="flex items-center gap-5">
        <div className="sm:flex hidden">
          {links.map((link, index) => (
            <Navlink key={index} item={link} />
          ))}
        </div>
        {session ? (
          <>
            {isAdmin && <Navlink item={{ title: "Admin", path: "/admin" }} />}
            <button className="bg-red-200 text-red-800 font-bold px-5 py-1.5 rounded-full">
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className="kTextButton">
            Login
          </Link>
        )}
        <button
          onClick={() => {
            setopen(!open);
          }}
          className="sm:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-2 right-5 absolute w-[200px] bg-gray-800 p-5 rounded-lg sm:hidden z-20">
          {links.map((link, index) => (
            <div key={index}>
              <Navlink item={link} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;

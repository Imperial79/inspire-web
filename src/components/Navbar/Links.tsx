"use client";

import React, { useState } from "react";
import Navlink from "./Navlink";
import Link from "next/link";
import { auth } from "@/utils/auth";
import { handleSignout } from "@/utils/actions";
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

const Links = async ({ session }: { session: any }) => {
  const [isOpen, setisOpen] = useState(false);
  // Temp
  const isAdmin = false;

  return (
    <div>
      <div className="flex items-center gap-5">
        <div className="sm:flex hidden">
          {links.map((link, index) => (
            <Navlink key={index} item={link} />
          ))}
        </div>
        {session !== null ? (
          <>
            {session.user?.isAdmin && (
              <Navlink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleSignout}>
              <button className="bg-red-200 text-red-800 font-bold px-5 py-1.5 rounded-full">
                Logout
              </button>
            </form>
          </>
        ) : (
          <Link href="/login" className="kTextButton">
            Login
          </Link>
        )}
        <button
          onClick={() => {
            setisOpen(!isOpen);
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

      {isOpen && <Navmenu />}
    </div>
  );
};

export default Links;

function Navmenu() {
  return (
    <div className="flex flex-col gap-2 right-5 absolute bg-gray-800 py-3 rounded-lg sm:hidden z-20 items-center w-[120px]">
      {links.map((link, index) => (
        <div key={index}>
          <Link key={link.title} href={link.path}>
            <div className="kNavmenuBtn">{link.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

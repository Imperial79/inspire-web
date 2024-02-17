import React from "react";
import Links from "./Links";
import Link from "next/link";
import { auth } from "@/utils/auth";
import DarkToggle from "../Dark Mode Toggle/DarkToggle";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className="flex items-center justify-between h-20 mb-5 bg-gray-900/20 backdrop-blur-xl fixed z-40 w-full mx-auto px-10 left-0 right-0">
      <Link href="/" className="font-bold text-xl">
        !nspire
      </Link>
      <div className="flex items-center">
        <DarkToggle />
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;

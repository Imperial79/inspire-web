import React from "react";
import Links from "./Links";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 mb-5 bg-gray-900/20 backdrop-blur-xl fixed z-50 w-full mx-auto px-10 left-0 right-0">
      <Link href="/" className="font-bold text-xl">
        !nspire
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;

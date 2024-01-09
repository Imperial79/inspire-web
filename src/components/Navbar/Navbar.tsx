import React from "react";
import Links from "./Links";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 mb-10">
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

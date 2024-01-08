import React from "react";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 mb-10">
      <div className="font-bold text-xl">!nspire</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;

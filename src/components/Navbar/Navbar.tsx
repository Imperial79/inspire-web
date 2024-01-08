import React from "react";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="font-bold text-xl">!nspire</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;

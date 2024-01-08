"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ key, item }: { key: any; item: any }) => {
  const pathName = usePathname();

  return (
    <Link
      key={key}
      href={item.path}
      className={`kButton 
      ${
        pathName === item.path
          ? "bg-blue-100 text-black rounded-full px-5 py-1.5 font-bold hover:bg-blue-100"
          : "bg-transparent text-white rounded-full px-5 py-1.5 font-bold hover:bg-transparent hover:shadow-none"
      }      
      `}
    >
      {item.title}
    </Link>
  );
};

export default Navlink;

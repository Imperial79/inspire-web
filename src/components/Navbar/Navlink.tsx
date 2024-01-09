"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ item }: { item: any }) => {
  const pathName = usePathname();

  return (
    <Link
      prefetch={false}
      key={item.title}
      href={item.path}
      className={`kButton 
      ${
        pathName === item.path
          ? "bg-blue-100 text-black hover:bg-blue-100"
          : "bg-transparent text-white hover:bg-transparent hover:shadow-none"
      }      
      `}
    >
      {item.title}
    </Link>
  );
};

export default Navlink;

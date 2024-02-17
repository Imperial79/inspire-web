"use client";

import { useSession } from "next-auth/react";
import React from "react";

const Home = async () => {
  const session = useSession();
  console.log(session);
  return <div className="flex gap-[100px]">Home</div>;
};

export default Home;

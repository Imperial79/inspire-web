import { auth } from "@/utils/auth";
import React from "react";

const Home = async () => {
  const session = await auth();
  console.log("session: ", session !== null);
  return <div className="flex gap-[100px]">Home</div>;
};

export default Home;

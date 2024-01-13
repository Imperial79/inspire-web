"use client";

import { auth } from "@/utils/auth";
import { useAppContext } from "@/utils/contextProvider";
import React from "react";

const Home = async () => {
  const { showAlert } = useAppContext();

  // const session = await auth();
  // console.log("session: ", session !== null);
  return (
    <div className="flex gap-[100px]">
      Home - {showAlert ? "True" : "False"}
    </div>
  );
};

export default Home;

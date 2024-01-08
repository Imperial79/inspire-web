import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex gap-[100px]">
      <div className="flex-1">
        <h1 className="text-5xl font-bold">!nspire a million</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quos
          similique dolorem accusamus corrupti ipsum ad, placeat, esse ab,
          suscipit alias explicabo debitis? Et qui aliquam incidunt explicabo,
          nisi doloribus.
        </p>
        <br />
        <div className="flex items-center gap-5">
          <Link href="" className="hover:underline hover:underline-offset-8">
            Learn More
          </Link>
          <button className="kButton">Contact</button>
        </div>
      </div>

      <div className="flex-1 relative">
        <Image src="/hero.svg" alt="" fill />
      </div>
    </div>
  );
};

export default Home;

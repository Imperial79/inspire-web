import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About us",
  description: "Find all the blogs at one place from top influencers",
};

const AboutPage = () => {
  return (
    <div className="flex gap-[100px]">
      <div className="flex-1">
        <h3 className="text-2xl mb-6">About Us</h3>

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
          <Link href="" className="kTextButton">
            Learn More
          </Link>
          <Link href="/contact" className="kButton">
            Contact
          </Link>
        </div>
      </div>

      <div className="flex-1 relative invisibleOnPhone">
        <Image src="/hero.svg" alt="" fill />
      </div>
    </div>
  );
};

export default AboutPage;

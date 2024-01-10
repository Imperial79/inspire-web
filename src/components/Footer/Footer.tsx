import Link from "next/link";
import React from "react";

const Footer = () => {
  const mailId: String = "avishekverma79@gmail.com";
  return (
    <div className="text-gray-400 p-10 flex justify-between items-end">
      <div>
        <h2 className="font-bold">!nspire &copy; {new Date().getFullYear()}</h2>
        <Link href={`mailto:${mailId}`} target="_blank">
          {mailId}
        </Link>
      </div>

      <p className="font-bold">Imperial Devs &copy; All rights reserved</p>
    </div>
  );
};

export default Footer;

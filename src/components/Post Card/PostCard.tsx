import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({ path }: { path: string }) => {
  return (
    <div className="flex flex-col gap-5 mb-5 group">
      <div className="flex relative bg-gray-900 rounded-xl">
        <div className="flex-1">
          <Image
            src={path}
            alt=""
            height={400}
            width={200}
            className="object-cover mx-auto flex-shrink-0"
          />
        </div>
      </div>

      <div className="flex gap-2 relative">
        <div className="mr-16">
          <h1 className="text-xl font-bold">Title</h1>
          <p className="text-sm text-gray-300 mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            quisquam reiciendis, distinctio illum
          </p>
          <Link
            href="/blog/post"
            className="kTextButton lg:invisible lg:group-hover:visible sm:visible"
          >
            Read More
          </Link>
        </div>
        <div className="rotate-90 absolute bg-black top-10 right-0">
          01.01.2024
        </div>
      </div>
    </div>
  );
};

export default PostCard;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col gap-5 mb-5 group">
      <div className="flex rounded-xl">
        <div className="relative h-96 w-96 overflow-hidden object-center bg-blue-950/50 rounded-lg">
          <Image
            src={data.url}
            alt=""
            fill
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="w-10 justify-center inline-flex whitespace-nowrap py-10 items-center">
          <p className="rotate-90 text-center">01.01.2024</p>
        </div>
      </div>

      <div className="flex gap-2 relative">
        <div className="mr-16">
          <h1 className="text-xl font-bold mb-2 line-clamp-2 overflow-ellipsis">
            {data?.title}
          </h1>
          <p className="text-sm text-gray-300 mb-2 line-clamp-4 overflow-ellipsis">
            {data?.description}
          </p>
          <Link
            href={`/blog/${data?.id}`}
            className="kTextButton lg:invisible lg:group-hover:visible sm:visible"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

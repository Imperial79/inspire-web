import { getPost, getUser } from "@/utils/data";
import Image from "next/image";
import React from "react";

export const generateMetadata = async ({ params }: { params: any }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.description,
  };
};

const SinglePostPage = async ({ params }: { params: any }) => {
  const postRes = await getPost(params.slug);

  return (
    <div>
      <div className="flex items-start gap-[60px]">
        <div className="relative flex-1 h-[600px] w-[90%]">
          <Image
            src={postRes.img}
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex-1 flex-col">
          <UserData userId={postRes.userId} />
          <h1 className="text-3xl font-bold">{postRes.title}</h1>
          <p className="text-lg text-gray-300">{postRes.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;

async function UserData({ userId }: { userId: String }) {
  const userRes = await getUser(userId);
  return (
    <div className="mb-5">
      <div className="inline-flex mb-5 items-center gap-5">
        <div className="bg-gray-500 h-12 w-12 rounded-full relative overflow-hidden flex-shrink-0">
          <Image
            src={userRes.img || "/avatar.png"}
            alt=""
            fill
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg">{userRes.username}</h2>
          <h3 className="text-gray-300">@{userRes.username}</h3>
        </div>
      </div>
      <h2 className="font-bold">
        Published <span className="text-gray-400">01.01.2024</span>
      </h2>
    </div>
  );
}

import Image from "next/image";
import React from "react";

async function getPostData(id: String) {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/photos/${id}`
  );

  if (!res.ok) {
    console.log("Something went wrong");
  }

  return res.json();
}

async function getUserData(id: String) {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/users/${id}`
  );

  if (!res.ok) {
    console.log("Something went wrong");
  }

  return res.json();
}

const SinglePostPage = async ({ params }: { params: any }) => {
  const postRes = await getPostData(params.slug);

  const userRes = await getUserData(postRes.photo.user);
  console.log(userRes);

  return (
    <div>
      <div className="flex gap-[60px]">
        <div className="relative h-[500px] flex-1">
          <Image src={postRes.photo.url} alt="" objectFit="contain" fill />
        </div>
        <div className="flex-1 flex-col">
          <MetaData userData={userRes.user} />
          <h1 className="text-3xl font-bold">{postRes.photo.title}</h1>
          <p className="text-lg text-gray-300">{postRes.photo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;

function MetaData({ userData }: { userData: any }) {
  return (
    <div className="mb-5">
      <div className="inline-flex mb-5 items-center gap-5">
        <div className="bg-gray-500 h-12 w-12 rounded-full relative overflow-hidden flex-shrink-0">
          <Image src={userData.profile_picture} alt="" fill objectFit="cover" />
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg">
            {userData.first_name} {userData.last_name}
          </h2>
          <h3 className="text-gray-300">@{userData.email.split("@")[0]}</h3>
        </div>
      </div>
      <h2 className="font-bold">
        Published <span className="text-gray-400">01.01.2024</span>
      </h2>
    </div>
  );
}

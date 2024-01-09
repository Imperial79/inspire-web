import PostCard from "@/components/Post Card/PostCard";
import React from "react";

async function getData() {
  // to cache data {cache: "force-cache"} (default)
  // to not cache data {cache: "no-store"}
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
    // {
    //   cache: "no-store",
    // }
  );

  if (!res.ok) {
    console.log("Something went wrong");
  }

  return res.json();
}

const BlogPage = async () => {
  const posts = await getData();

  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-10">
      {posts.photos.map((post: any) => (
        <div key={post.id}>
          <PostCard data={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;

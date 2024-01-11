import PostCard from "@/components/Post Card/PostCard";
import { getPosts } from "@/utils/data";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Blogs",
  description: "Find all the blogs at one place from top influencers",
};

// Fetch data with an API
async function getData() {
  const res = await fetch("http://localhost:3000/api/blog");
  return res.json();
}

const BlogPage = async () => {
  const posts = await getPosts();
  const res = await getData();
  // // console.log(res);

  return (
    <div>
      <div className="flex flex-col justify-end mb-10 sticky top-20 z-10 bg-black w-full">
        <Link href="/blog/create-post" className="kTextButton self-end ">
          Create a post
        </Link>
        <div className="h-[1px] mt-1 bg-white w-full"></div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-2 gap-10">
        {posts.map((post: any) => (
          <div key={post.id}>
            <PostCard data={post} />
          </div>
        ))}

        {posts.length === 0 && <p>No Posts yet! come back later</p>}
      </div>
    </div>
  );
};

export default BlogPage;

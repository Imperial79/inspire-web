import PostCard from "@/components/Post Card/PostCard";
import { getPosts } from "@/utils/data";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Blogs",
  description: "Find all the blogs at one place from top influencers",
};

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div>
      <div className="flex flex-col justify-end mb-10">
        <Link href="/blog/create-post" className="kTextButton self-end">
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

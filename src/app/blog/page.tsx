import PostCard from "@/components/Post Card/PostCard";
import React from "react";

const BlogPage = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-10">
      <PostCard path="/post.png" />
      <PostCard path="/about.png" />
      <PostCard path="/about.png" />
      <PostCard path="/post.png" />
      <PostCard path="/post.png" />
      <PostCard path="/about.png" />
      <PostCard path="/post.png" />
      <PostCard path="/about.png" />
    </div>
  );
};

export default BlogPage;

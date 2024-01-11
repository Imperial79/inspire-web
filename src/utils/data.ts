import { connectToDB } from "./connectToDB";
import { Post, User } from "./models";
import { unstable_noStore as no_store } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    // console.log(error);
    throw new Error("Failed to fetch posts");
  }
};

export const getPost = async (slug: String) => {
  no_store();
  try {
    connectToDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    // console.log(error);
    throw new Error(`Failed to fetch Post with slug ${slug}`);
  }
};

export const getUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    // console.log(error);
    throw new Error("Failed to fetch Users");
  }
};

export const getUser = async (id: String) => {
  no_store();
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    // console.log(error);
    throw new Error(`Failed to fetch User with id ${id}`);
  }
};

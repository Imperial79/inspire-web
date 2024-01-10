"use server";

import { connectToDB } from "./connectToDB";
import { Post } from "./models";

export const addPost = async (formdata: FormData) => {
  const { title, img, description } = Object.fromEntries(formdata);
  console.log(title, img, description);
  try {
    connectToDB();
    const newPost = new Post({
      title,
      img,
      description,
      slug: Date.toString,
      userId: "123",
    });

    await newPost.save();
    console.log("Post saved");
  } catch (error) {
    console.log(error);
  }
};

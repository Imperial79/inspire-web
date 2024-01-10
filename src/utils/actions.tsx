"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "./connectToDB";
import { Post } from "./models";

export const addPost = async (formdata: FormData) => {
  const { title, img, description } = Object.fromEntries(formdata);
  try {
    connectToDB();
    const newPost = new Post({
      title,
      img,
      description,
      slug: new Date().getMilliseconds().toString(),
      userId: "659e139a84cee1e443fb25c2",
    });

    await newPost.save();
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
  }
};
"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "./connectToDB";
import { Post } from "./models";
import { useRouter } from "next/navigation";

const router = useRouter();

export const addPost = async (formdata: FormData) => {
  const { title, img, description } = Object.fromEntries(formdata);
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
    revalidatePath("/blog")
    router.back();
  } catch (error) {
    console.log(error);
  }
};

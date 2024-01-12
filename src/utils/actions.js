"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "./connectToDB";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (formdata) => {
  const { title, image, description } = Object.fromEntries(formdata);
  try {
    connectToDB();
    const newPost = new Post({
      title,
      image,
      description,
      slug: new Date().getMilliseconds().toString(),
      userId: "659e139a84cee1e443fb25c2",
    });

    await newPost.save();
    revalidatePath("/blog");
  } catch (error) {
    throw new Error("Cannot create new post");
  }
};

export const handleGithubLogin = async () => {
  await signIn("github", { redirectTo: "/" });
};
export const handleGoogleLogin = async () => {
  await signIn("google", { redirectTo: "/" });
};

export const handleSignout = async () => {
  await signOut({ redirectTo: "/login" });
};

export const registerUser = async (formdata) => {
  const { name, username, email, password, confirmPassword, image } =
    Object.fromEntries(formdata);

  if (password !== confirmPassword) {
    return "Passwords do not match";
  }
  try {
    connectToDB();
    const userData = await User.findOne({ username });
    if (userData) {
      return "User already exists";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
      image,
    });
    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Cannot create new user");
  }
};

export const loginUser = async (formdata) => {
  const { username, password } = Object.fromEntries(formdata);
  console.log(username, password);

  try {
    await signIn("credentials", {
      username,
      password,
      redirectTo: "/",
    });
  } catch (error) {
    console.log(error);
  }
};

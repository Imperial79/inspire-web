"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "./connectToDB";
import { Post, User } from "./models";
import { auth, signIn, signOut } from "./auth";
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
      userId: "65a3cfa6ecdb24f39648b480",
    });

    await newPost.save();
    revalidatePath("/blog");
  } catch (error) {
    return { error: "Error saving post" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};
export const handleGoogleLogin = async () => {
  await signIn("google");
};

export const handleSignout = async () => {
  await signOut();
};

export const registerUser = async (previousState, formdata) => {
  const { name, username, email, password, confirmPassword, image } =
    Object.fromEntries(formdata);

  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }
  try {
    connectToDB();
    const userData = await User.findOne({ username });
    if (userData) {
      return { error: "User with same username already exists" };
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

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Cannot create new user" };
  }
};

export const loginUser = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
    return { success: true };
  } catch (err) {
    if (err.type === "CredentialsSignin") {
      return { error: "Wrong credentials!" };
    }
    throw err;
  }
};

export const checkLoggedIn = async () => {
  const session = await auth();
  return session;
};

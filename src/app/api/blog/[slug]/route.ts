import { connectToDB } from "@/utils/connectToDB";
import { Post } from "@/utils/models";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }: { params: any }) => {
  const { slug } = params;
  try {
    connectToDB();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    // console.log(error);
    throw new Error("Failed to fetch post");
  }
};

export const DELETE = async (req: Request, { params }: { params: any }) => {
  const { slug } = params;
  try {
    connectToDB();
    await Post.deleteOne({ slug });
    return NextResponse.json("POst deleted successfully");
  } catch (error) {
    // console.log(error);
    throw new Error("Failed to delete post");
  }
};

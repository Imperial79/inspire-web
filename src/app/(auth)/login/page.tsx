import {
  handleGithubLogin,
  handleGoogleLogin,
  loginUser,
} from "@/utils/actions";
import { signIn } from "@/utils/auth";
import Link from "next/link";
import React from "react";

const LoginPage = async () => {
  return (
    <div className="flex flex-col gap-2 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">Welcome back</h1>
      <p className="text-lg text-gray-300 mb-5">login with credentials</p>
      <div className="border-[1px] p-10">
        <form action={loginUser}>
          <input
            type="text"
            name="username"
            id="username"
            className="kTextfield"
            placeholder="Enter your username"
          />
          <input
            type="password"
            name="password"
            id="password"
            className="kTextfield"
            placeholder="Create a password"
          />
          <button className="kButton mt-5">Login</button>
          <p className="mt-5 flex items-center gap-3">
            Don&apos;t have an account?
            <Link href="/register" className="kTextButton font-bold">
              Register
            </Link>
          </p>

          <div className="flex gap-5 items-center my-10">
            <p className=" text-gray-400 flex-shrink-0">Or continue with</p>
            <div className="w-full bg-gray-200 h-[1px]"></div>
          </div>
        </form>
        <div className="flex items-center gap-5 justify-center">
          <form action={handleGithubLogin}>
            <button className="kTextButton">Github</button>
          </form>
          <form action={handleGoogleLogin}>
            <button className="kTextButton">Google</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

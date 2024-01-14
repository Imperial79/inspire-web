"use client";

import { checkLoggedIn, loginUser } from "@/utils/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(loginUser, undefined);
  useEffect(() => {
    if (state?.success) {
      router.push("/");
    }
  }, [state?.success, router]);

  console.log("state", state);
  return (
    <form action={formAction}>
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
      <ErrorBar state={state} />
      <div className="flex gap-5 items-center my-10">
        <p className=" text-gray-400 flex-shrink-0">Or continue with</p>
        <div className="w-full bg-gray-200 h-[1px]"></div>
      </div>
    </form>
  );
};

export default LoginForm;

function ErrorBar({
  state,
}: {
  state:
    | {
        success: boolean;
        error?: undefined;
      }
    | {
        error: string;
        success?: undefined;
      }
    | undefined;
}) {
  return (
    <div>
      {state?.error && (
        <p className="text-white mt-5 flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-red-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
          <span className="font-bold text-red-300">Error</span>
          {state?.error}
        </p>
      )}
    </div>
  );
}

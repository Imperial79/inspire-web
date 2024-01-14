"use client";

import { registerUser } from "@/utils/actions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

const RegisterForm = () => {
  const [state, formAction] = useFormState(registerUser, undefined);
  const router = useRouter();
  useEffect(() => {
    if (state?.success) {
      router.push("/login");
    }
  }, [state?.success, router]);
  return (
    <form action={formAction} className="border-[1px] p-10 rounded-md">
      <div className="grid grid-cols-2 gap-5 mb-5">
        <input
          type="text"
          name="name"
          id="name"
          className="kTextfield mb-0"
          placeholder="Enter your fullname"
        />

        <input
          type="text"
          name="username"
          id="username"
          className="kTextfield"
          placeholder="Enter your username (Unique)"
        />
      </div>
      <input
        type="email"
        name="email"
        id="email"
        className="kTextfield"
        placeholder="Your E-mail here ..."
      />
      <input
        type="password"
        name="password"
        id="password"
        className="kTextfield"
        placeholder="Create a password"
      />
      <input
        type="confirmPassword"
        name="confirmPassword"
        id="confirmPassword"
        className="kTextfield"
        placeholder="Repeat the password for confirmation"
      />
      <button className="kButton mt-5">Register</button>

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
          {state.error}
        </p>
      )}
    </form>
  );
};

export default RegisterForm;

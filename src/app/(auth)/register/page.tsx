import { registerUser } from "@/utils/actions";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">Get Started</h1>
      <p className="text-lg text-gray-300 mb-5">register with credentials</p>
      <form action={registerUser} className="border-[1px] p-10">
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
      </form>
    </div>
  );
};

export default RegisterPage;

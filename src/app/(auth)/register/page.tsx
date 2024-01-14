import RegisterForm from "@/components/RegisterForm/RegisterForm";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">Get Started</h1>
      <p className="text-lg text-gray-300 mb-5">register with credentials</p>

      <RegisterForm />
    </div>
  );
};

export default RegisterPage;

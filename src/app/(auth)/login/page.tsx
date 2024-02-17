import LoginForm from "@/components/LoginForm/LoginForm";
import { handleGithubLogin, handleGoogleLogin } from "@/utils/actions";
import { auth } from "@/utils/auth";
import Image from "next/image";
import React from "react";

const LoginPage = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col gap-2 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">Welcome back</h1>
      <p className="text-lg text-gray-300 mb-5">login with credentials</p>
      <div className="border-[1px] p-10">
        <LoginForm />
        <div className="flex items-center gap-5 justify-center">
          <form action={handleGithubLogin}>
            <button className="kSocialButton">
              <Image
                src="/github.png"
                alt="github-icon"
                height={20}
                width={20}
                className="invert"
              />
              Github
            </button>
          </form>
          <form action={handleGoogleLogin}>
            <button className="kSocialButton">
              <Image
                src="/google.png"
                alt="github-icon"
                height={20}
                width={20}
              />
              Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

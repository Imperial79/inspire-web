import { handleGithubLogin } from "@/utils/actions";
import { auth } from "@/utils/auth";
import React from "react";

const LoginPage = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with github</button>
      </form>
    </div>
  );
};

export default LoginPage;

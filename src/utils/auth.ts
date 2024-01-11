import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import google from "next-auth/providers/google";

export const {
  handlers: { POST, GET },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // google({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
  ],
});

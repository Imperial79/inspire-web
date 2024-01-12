import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "./connectToDB";
import { User } from "./models";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

async function login(credentials) {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Invalid credentials");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Password Incorrect");

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Login: " + error.message);
  }
}

export const {
  handlers: { POST, GET },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    credentials({
      name: "credentials",
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn(params) {
      // params contains user, account, and profile information
      const { user, account, profile } = params;
      if (account?.provider === "github") {
        connectToDB();
        try {
          const userData = await User.findOne({ email: profile?.email });
          if (!userData) {
            const newUser = new User({
              name: user?.name,
              email: user?.email,
              image: user?.image,
              username: user?.email.split("@")[0],
            });
            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
  },
});

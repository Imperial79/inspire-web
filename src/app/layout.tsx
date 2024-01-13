import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AppContextProvider from "@/utils/contextProvider";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "!nspire", template: "%s | !nspire" },
  description: "A blog app created using Next JS 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <AppContextProvider>
          <Navbar />
          <div className="max-w-6xl mx-auto px-[20px] py-[20px] min-h-screen flex flex-col justify-around">
            <div className="pt-20 content-center">{children}</div>
          </div>
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}

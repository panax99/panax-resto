import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/canela-text-trial" rel="stylesheet"/>  
        <link href="https://fonts.cdnfonts.com/css/avalon" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/inter" rel="stylesheet"/>
      </head>
      <body className=" bg-[#FAF8F7]">
        {children}
      </body>
    </html>
  );
}

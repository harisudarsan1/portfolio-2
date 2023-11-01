import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
export const metadata = {
  title: "Harisudarsan",
  description: "personal portfolio website of harisudarsan",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` bg-bg3 text-black-900 ${inter.className} `}>
        <Navbar></Navbar>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

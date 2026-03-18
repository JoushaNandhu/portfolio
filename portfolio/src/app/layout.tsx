import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nandhakumar | DevOps Engineer",
  description: "Portfolio of Nandhakumar, a DevOps and Cloud Engineer building scalable, automated, and reliable systems.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundEffect } from "@/components/ui/BackgroundEffect";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {/* <BackgroundEffect /> */}
        <Navbar />
        <main className="relative z-10 w-full pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

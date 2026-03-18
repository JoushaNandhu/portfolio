import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nandhakumar S | Software & DevOps Engineer",
  description: "Portfolio of Nandhakumar S, an Aspiring DevOps and Cloud Engineer building scalable, automated systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans bg-[#030014] text-[#ededed]">
        {children}
      </body>
    </html>
  );
}

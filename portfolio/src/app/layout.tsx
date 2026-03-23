import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nandhakumar S | Software & DevOps Engineer",
  description: "Portfolio of Nandhakumar S, an Aspiring DevOps and Cloud Engineer building scalable, automated systems.",
  icons: {
    icon: "/N.png?v=final2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-S0VT874KR5"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S0VT874KR5');
            `,
          }}
        />
      </head>
      <body className="antialiased font-sans bg-[#030014] text-[#ededed]">
        {children}
      </body>
    </html>
  );
}

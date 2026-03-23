import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nandhakumar | DevOps Engineer Portfolio | AWS | Cloud | CI/CD",
  description: "DevOps Engineer portfolio showcasing AWS, Docker, Kubernetes, CI/CD projects and cloud automation skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S0VT874KR5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S0VT874KR5');
          `}
        </Script>
      </head>
      <body className="antialiased font-sans bg-[#030014] text-[#ededed]">
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Navbar } from "../components/navBar/navbar";
import { Footer } from "./footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Julian Valle Portfolio",
  description: "Julian Valle is Full Stack Developer,building amazing sites using React, Vue, Next.js and Laravel"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} scroll-smooth bg-slate-50 dark:bg-slate-950`}
      >
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

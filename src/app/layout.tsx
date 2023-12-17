import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Navbar } from "../components/navBar/navbar";
import { Footer } from "./footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Julian Valle Portfolio",
  description: "Julian Valle Full Stack Developer",
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
          <SpeedInsights />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

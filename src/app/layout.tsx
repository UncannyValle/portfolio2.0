import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Navbar } from "@/components/navBar/navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Analytics } from "@vercel/analytics/react";

config.autoAddCss = false;

library.add(fas, far, fab);

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
        <Providers attribute="class">
          <Navbar />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

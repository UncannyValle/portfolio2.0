import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/darkMode/theme-provider";
import { Navbar } from "@/components/navBar/navbar";
// import { switchThemeDuration } from "./constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Julian Valle Portfolio",
    description: "Julian Valle Full Stack Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-slate-50 dark:bg-[#0d1117]`}>
                <ThemeProvider attribute="class">
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

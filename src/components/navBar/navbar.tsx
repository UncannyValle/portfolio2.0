"use client";
import Link from "next/link";
import { ThemeSwitcher } from "../darkMode/theme-switcher";
import { useEffect, useState } from "react";
import { debounce } from "@/utils/debounce";

export const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = debounce(
    () => {
      const currentScrollPos = window.scrollY;

      setVisible(prevScrollPos > currentScrollPos);

      setPrevScrollPos(currentScrollPos);
    },
    100,
    false,
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`${
        visible ? "top-0" : "-top-24"
      } fixed z-10 w-full bg-slate-50 py-2 duration-300 ease-out dark:bg-slate-950`}
    >
      <nav className="container mx-auto">
        <div className="hidden justify-between md:flex">
          <Link
            href="/#"
            className="hover:scale-110 px-4 py-6 text-3xl transition hover:text-purple-400"
            onClick={() => setVisible(true)}
          >
            {`<Julian Valle.dev />`}
          </Link>
          <div className="flex w-1/3 items-center justify-between">
            <Link
              href="/#about-me"
              className="rounded px-4 py-3 transition ease-in-out hover:scale-110 active:scale-100 dark:hover:bg-purple-600"
              onClick={() => setVisible(true)}
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="rounded px-4 py-3 duration-200 hover:scale-110 active:scale-100 dark:hover:bg-purple-600"
              onClick={() => setVisible(true)}
            >
              Projects
            </Link>
            <Link
              href="/"
              className="rounded px-4 py-3 duration-200 hover:scale-110 active:scale-100 dark:hover:bg-purple-600"
              onClick={() => setVisible(true)}
            >
              Contact
            </Link>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
};

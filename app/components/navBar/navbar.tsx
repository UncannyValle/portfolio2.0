"use client";
import Link from "next/link";
import { ThemeSwitcher } from "../darkMode/theme-switcher";
import { SyntheticEvent, useEffect, useState } from "react";
import { debounce } from "../../utils/debounce";

export const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  type Event = MouseEvent | TouchEvent | SyntheticEvent;

  const handleScroll = debounce(
    () => {
      const currentScrollPos = window.scrollY;
      const checkScroll =
        prevScrollPos > currentScrollPos || currentScrollPos < 100;

      setVisible(checkScroll);
      !checkScroll ? setIsOpen(false) : null;

      setPrevScrollPos(currentScrollPos);
    },
    100,
    false,
  );

  const handleClickOutside = (event: Event) => {
    if (isOpen && !(event.target as HTMLElement).closest(".navbar")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [handleScroll, isOpen]);

  return (
    <header
      className={`${
        visible ? "top-0" : "-top-24"
      } fixed z-10 w-full bg-slate-50 py-2 duration-300 ease-out dark:bg-slate-950`}
    >
      <nav className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link
            href="/#"
            className="px-4 py-6 text-xl transition hover:scale-110 hover:text-purple-400 lg:text-3xl"
            onClick={() => setVisible(true)}
          >
            {`<Julian Valle.dev />`}
          </Link>
          <button
            className={`z-10 mr-8 flex h-8 w-8 cursor-pointer flex-col  flex-wrap justify-around lg:hidden`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`block h-[0.35rem] w-8 origin-[1px] rounded bg-black transition-all dark:bg-white ${
                isOpen ? "rotate-45" : "rotate-0"
              }`}
            />
            <div
              className={`block h-[0.35rem] w-8 origin-[1px] rounded bg-black transition-all dark:bg-white ${
                isOpen ? "translate-x-28 bg-transparent" : "translate-x-0"
              }`}
            />
            <div
              className={`block h-[0.35rem] w-8 origin-[1px] rounded bg-black transition-all dark:bg-white ${
                isOpen ? "rotate-[-45deg]" : "rotate-0"
              }`}
            />
          </button>
          <div className="hidden w-1/3 items-center justify-between lg:flex">
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
              href="/#contact"
              className="rounded px-4 py-3 duration-200 hover:scale-110 active:scale-100 dark:hover:bg-purple-600"
              onClick={() => setVisible(true)}
            >
              Contact
            </Link>
            <ThemeSwitcher />
          </div>

          <div
            className={`right-0 ${
              isOpen ? "" : "translate-x-full"
            } absolute top-20 flex h-72 w-80 flex-col items-center justify-between bg-white shadow-lg transition dark:bg-black lg:hidden`}
          >
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
              href="/#contact"
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

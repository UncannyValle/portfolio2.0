"use client";
import Link from "next/link";
import { ThemeSwitcher } from "../darkMode/theme-switcher";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MobileNavbar } from "./mobileNavbar";
import { HamburgerMenu } from "./hamburgerMenu";

export const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsOpen(false);

    const currentScrollPos = latest.valueOf();
    const checkScroll =
      prevScrollPos > currentScrollPos || currentScrollPos < 100;

    setVisible(checkScroll);

    setPrevScrollPos(currentScrollPos);
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <motion.header
      variants={variants}
      animate={visible ? "visible" : "hidden"}
      className="fixed  top-0 z-10 w-screen bg-slate-50 py-2  dark:bg-slate-950"
    >
      <nav className="container mx-auto px-8">
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="flex w-full items-center justify-between"
        >
          <Link
            href="/#"
            className="px-4 py-6 text-xl transition hover:scale-110 hover:text-purple-400 lg:text-3xl"
          >
            {`<Julian Valle.dev />`}
          </Link>
          {/* hamburger */}
          <HamburgerMenu toggle={() => setIsOpen(!isOpen) as any} />

          <div className="hidden w-1/2 items-center justify-between lg:flex">
            <Link
              href="/#about-me"
              className="rounded-full px-4 py-3 transition ease-in-out hover:scale-110 active:scale-100 dark:hover:bg-purple-600"
            >
              About
            </Link>
            <Link
              href="/#skills"
              className="rounded-full px-4 py-3 transition ease-in-out hover:scale-110 active:scale-100 dark:hover:bg-purple-600"
            >
              Skills
            </Link>
            <Link
              href="/#projects"
              className="rounded-full px-4 py-3 duration-200 hover:scale-110 active:scale-100 dark:hover:bg-purple-600"
            >
              Projects
            </Link>
            <Link
              href="/#careers"
              className="rounded-full px-4 py-3 duration-200 hover:scale-110 active:scale-100 dark:hover:bg-purple-600"
            >
              Careers
            </Link>
            <Link
              href="/#contact"
              className="rounded-full px-4 py-3 duration-200 hover:scale-110 active:scale-100 dark:hover:bg-purple-600"
            >
              Contact
            </Link>
            <ThemeSwitcher />
          </div>

          {/* Mobile navbar */}
          <MobileNavbar isOpen={isOpen} />
        </motion.div>
      </nav>
    </motion.header>
  );
};

import Link from "next/link";
import { ThemeSwitcher } from "../darkMode/theme-switcher";

export const Navbar = () => {
  return (
    <header className="py-2 fixed w-full bg-white dark:bg-black z-10">
      <nav className="container mx-auto">
        <div className="hidden justify-between md:flex">
          <Link href="/" className="px-4 py-6 text-3xl">
            {`<Julian Valle.dev />`}
          </Link>
          <div className="flex w-1/3 items-center justify-evenly">
            <Link
              href="/"
              className="rounded px-4 py-3 transition ease-in-out hover:scale-110 active:scale-100 dark:hover:bg-purple-600"
            >
              About
            </Link>
            <Link
              href="/"
              className="rounded px-4 py-3 duration-200 hover:scale-110 active:scale-100 dark:hover:bg-purple-600"
            >
              Projects
            </Link>
            <Link
              href="/"
              className="rounded px-4 py-3 duration-200 hover:scale-110 active:scale-100 dark:hover:bg-purple-600"
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

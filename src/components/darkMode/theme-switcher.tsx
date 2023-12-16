"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`duration-20 t flex h-10 w-10 items-center justify-center rounded-full  transition ease-out hover:scale-110 active:scale-100`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <FaMoon className="text-2xl text-blue-950" />
      ) : (
        <FaSun className="text-2xl text-yellow-400" />
      )}
    </button>
  );
};

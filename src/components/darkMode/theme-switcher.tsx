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
      className={`duration-20 flex  items-center justify-center rounded-full p-8 transition ease-out hover:scale-125 active:scale-100`}
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

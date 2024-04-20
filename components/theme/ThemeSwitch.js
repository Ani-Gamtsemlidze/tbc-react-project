"use client";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  function checkUserPreference() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  useEffect(() => {
    setMounted(true);
    checkUserPreference();
  }, []);

  function handleTheme(newTheme) {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  function handleSystemTheme(newTheme) {
    setTheme(newTheme);
    localStorage.removeItem("theme");
  }

  return (
    <>
      {mounted && (
        <>
          <button
            type="button"
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all rounded flex items-center justify-center h-7 w-7"
            aria-label={
              theme === "dark" ? "Toggle light mode" : "Toggle dark mode"
            }
            onClick={() => handleTheme("dark")}
          >
            <FiMoon />
          </button>
          <button
            type="button"
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all rounded flex items-center justify-center h-7 w-7"
            aria-label={
              theme === "dark" ? "Toggle light mode" : "Toggle dark mode"
            }
            onClick={() => handleTheme("light")}
          >
            <FiSun />
          </button>
          <button
            type="button"
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all rounded flex items-center justify-center h-7 w-7"
            aria-label={
              theme === "dark" ? "Toggle light mode" : "Toggle dark mode"
            }
            onClick={() => handleSystemTheme("system")}
          >
            <FiMonitor />
          </button>
        </>
      )}
    </>
  );
}

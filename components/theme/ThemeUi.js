"use client";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

export default function ThemeUi({
  mounted,
  theme,
  handleTheme,
  handleSystemTheme,
}) {
  return (
    <>
      {mounted && (
        <>
          <button
            type="button"
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all mr-2 rounded flex items-center justify-center h-7 w-7"
            aria-label={theme === "dark"}
            onClick={() => handleTheme("dark")}
          >
            <FiMoon />
          </button>
          <button
            type="button"
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all mr-2  rounded flex items-center justify-center h-7 w-7"
            aria-label={theme === "light"}
            onClick={() => handleTheme("light")}
          >
            <FiSun />
          </button>
          <button
            type="button"
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all mr-2  rounded flex items-center justify-center h-7 w-7"
            aria-label={theme === "system"}
            onClick={() => handleSystemTheme("system")}
          >
            <FiMonitor />
          </button>
        </>
      )}
    </>
  );
}

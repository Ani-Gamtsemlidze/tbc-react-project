"use client";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

interface ThemeUiProps {
  mounted: boolean;
  theme: string | undefined;
  handleTheme: (newTheme: string) => void;
  handleSystemTheme: (newTheme: string) => void;
}
export default function ThemeUi({
  mounted,
  handleTheme,
  handleSystemTheme,
}: ThemeUiProps) {
  return (
    <>
      {mounted && (
        <>
          <button
            type="button"
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all mr-2 rounded flex items-center justify-center h-7 w-7"
            aria-label="Switch to Dark Theme"
            onClick={() => handleTheme("dark")}
          >
            <FiMoon />
          </button>
          <button
            type="button"
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all mr-2  rounded flex items-center justify-center h-7 w-7"
            aria-label="Switch to Dark Theme"
            onClick={() => handleTheme("light")}
          >
            <FiSun />
          </button>
          <button
            type="button"
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all mr-2  rounded flex items-center justify-center h-7 w-7"
            aria-label="Switch to Dark Theme"
            onClick={() => handleSystemTheme("system")}
          >
            <FiMonitor />
          </button>
        </>
      )}
    </>
  );
}

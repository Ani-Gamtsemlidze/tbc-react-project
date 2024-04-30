"use client";
import { useState } from "react";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

interface ThemeUiProps {
  mounted: boolean;
  theme: string | undefined;
  isDarkTheme: boolean;
  activeItem: string;
  handleTheme: (newTheme: string, activeTheme: string) => void;
  handleSystemTheme: (newTheme: string, activeTheme: string) => void;
}

export default function ThemeUi({
  mounted,
  isDarkTheme,
  handleTheme,
  handleSystemTheme,
}: ThemeUiProps) {
  const [dropDown, setDropDown] = useState(false);

  function handleChangeButton() {
    setDropDown(!dropDown);
  }

  return (
    <>
      {mounted && (
        <div className="relative pl-4 ml-4 ">
          <button onClick={handleChangeButton}>
            {isDarkTheme ? <FiMoon /> : <FiSun />}
          </button>
          {dropDown && (
            <ul className="bg-white dark:bg-slate-800 border border-gray-500 rounded  absolute top-8 right-0  py-4 w-48">
              <li
                onClick={() => {
                  handleTheme("light", "light");
                  setDropDown(false);
                }}
                className={` text-black dark:text-[#CBD5E1] flex items-center cursor-pointer hover:bg-gray-500 pl-4 py-2   ${
                  localStorage.getItem("active") === "light"
                    ? "text-[#0EA5E9]"
                    : ""
                }`}
              >
                <FiSun />
                <span className="ml-4">Light</span>
              </li>
              <li
                onClick={() => {
                  handleTheme("dark", "dark");
                  setDropDown(false);
                }}
                className={`  text-black  dark:text-[#CBD5E1]  flex my-2 items-center cursor-pointer hover:bg-gray-500 pl-4 py-2   ${
                  localStorage.getItem("active") === "dark"
                    ? "text-[#0EA5E9]"
                    : ""
                }`}
              >
                <FiMoon />
                <span className="ml-4">Dark</span>
              </li>
              <li
                onClick={() => {
                  handleSystemTheme("system", "system");
                  setDropDown(false);
                }}
                className={`text-black dark:text-[#CBD5E1]  flex items-center cursor-pointer hover:bg-gray-500 pl-4 py-2 ${
                  localStorage.getItem("active") === "system"
                    ? "text-[#0EA5E9]"
                    : ""
                }`}
              >
                <FiMonitor />
                <span className="ml-4">System</span>
              </li>
            </ul>
          )}
        </div>
      )}
    </>
  );
}

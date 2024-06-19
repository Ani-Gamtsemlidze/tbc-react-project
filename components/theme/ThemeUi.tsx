"use client";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import useDropdown from "../../hooks";

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
  const { isDropDown, handleDropDown } = useDropdown();
  return (
    <>
      {mounted && (
        <div className="relative z-10">
          <button onClick={handleDropDown}>
            {isDarkTheme ? (
              <FiMoon className="text-2xl mt-2 dark:text-darkTextMain" />
            ) : (
              <FiSun className="text-2xl mt-2 dark:text-darkTextMain" />
            )}
          </button>
          {isDropDown && (
            <ul
              // ref={ulRef}
              id="dropdown"
              className=" bg-white dark:bg-slate-800 border border-gray-200  rounded  absolute top-12 left-[50%] translate-x-[-50%] py-4 w-48"
            >
              <li
                onClick={() => {
                  handleTheme("light", "light");
                  handleDropDown();
                }}
                className={` text-black dark:text-[#CBD5E1] flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 pl-4 py-2   ${
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
                  handleDropDown();
                }}
                className={`  text-black  dark:text-[#CBD5E1]  flex my-2 items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 pl-4 py-2   ${
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
                  handleDropDown();
                }}
                className={`text-black dark:text-[#CBD5E1]  flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 pl-4 py-2 ${
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

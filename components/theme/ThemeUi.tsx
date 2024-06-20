"use client";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

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
  return (
    <>
      {mounted && (
        <div className="relative z-10">
          <Menu as="div" className="relative">
            <MenuButton className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-black dark:text-darkTextMain">
              {isDarkTheme ? (
                <FiMoon className="text-2xl mt-2" />
              ) : (
                <FiSun className="text-2xl mt-2" />
              )}
            </MenuButton>
            <Transition
              enter="transition ease-out duration-75"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg py-1 z-50">
                <MenuItem>
                  {({ active }) => (
                    <li
                      onClick={() => {
                        handleTheme("light", "light");
                      }}
                      className={`text-black dark:text-[#CBD5E1] flex items-center cursor-pointer pl-4 py-2 ${
                        active ? "bg-gray-200 dark:bg-slate-700" : ""
                      } ${
                        localStorage.getItem("active") === "light"
                          ? "text-[#0EA5E9]"
                          : ""
                      }`}
                    >
                      <FiSun />
                      <span className="ml-4">Light</span>
                    </li>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <li
                      onClick={() => {
                        handleTheme("dark", "dark");
                      }}
                      className={`text-black dark:text-[#CBD5E1] flex items-center cursor-pointer pl-4 py-2 ${
                        active ? "bg-gray-200 dark:bg-slate-700" : ""
                      } ${
                        localStorage.getItem("active") === "dark"
                          ? "text-[#0EA5E9]"
                          : ""
                      }`}
                    >
                      <FiMoon />
                      <span className="ml-4">Dark</span>
                    </li>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <li
                      onClick={() => {
                        handleSystemTheme("system", "system");
                      }}
                      className={`text-black dark:text-[#CBD5E1] flex items-center cursor-pointer pl-4 py-2 ${
                        active ? "bg-gray-200 dark:bg-slate-700" : ""
                      } ${
                        localStorage.getItem("active") === "system"
                          ? "text-[#0EA5E9]"
                          : ""
                      }`}
                    >
                      <FiMonitor />
                      <span className="ml-4">System</span>
                    </li>
                  )}
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      )}
    </>
  );
}

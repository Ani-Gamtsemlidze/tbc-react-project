"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ThemeUi from "./ThemeUi";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  function checkUserPreference() {
    const prefersDarkMode =
      localStorage.theme === "dark" ||
      (localStorage.theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkTheme(prefersDarkMode);
    document.documentElement.classList.toggle("dark", prefersDarkMode);
  }

  function checkClass() {
    const darkClassName = document.querySelector(".dark");

    return darkClassName;
  }

  useEffect(() => {
    setMounted(true);
    checkUserPreference();
  }, [checkClass]);

  function handleTheme(newTheme: string, activeTheme: string) {
    setTheme(newTheme);
    setActiveItem(activeTheme);
    setIsDarkTheme(newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    localStorage.setItem("active", activeTheme);
  }

  function handleSystemTheme(newTheme: string, activeTheme: string) {
    setTheme(newTheme);
    setActiveItem(activeTheme);
    setIsDarkTheme(newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    localStorage.setItem("active", activeTheme);
  }

  return (
    <ThemeUi
      mounted={mounted}
      theme={theme}
      handleTheme={handleTheme}
      activeItem={activeItem}
      handleSystemTheme={handleSystemTheme}
      isDarkTheme={isDarkTheme}
    />
  );
}

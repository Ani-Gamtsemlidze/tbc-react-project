"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ThemeUi from "./ThemeUi";

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
    <ThemeUi
      mounted={mounted}
      theme={theme}
      handleTheme={handleTheme}
      handleSystemTheme={handleSystemTheme}
    />
  );
}

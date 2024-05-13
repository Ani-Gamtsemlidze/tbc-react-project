"use client"
import { useEffect, useState } from "react";

export function useLocalStorage(key: string, initialValue?: {}) {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const storedValue = window.localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
      } catch (error) {
        console.error("Error reading from localStorage:", error);
      }
    }
    return initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);


  return [value, setValue];
}
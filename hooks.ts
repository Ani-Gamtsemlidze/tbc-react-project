"use client"
import { useEffect, useState } from "react";

export function useLocalStorage (key : string, initialValue: any) {
    const [storedValue, setStoredValue] = useState(() => {
        if(typeof window === "undefined") return initialValue;

        try {

            const storedValue = window.localStorage.getItem(key)
            
            return storedValue ? JSON.parse(storedValue) : initialValue
        } catch (error){
            return initialValue
        }
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(storedValue));

    }, [key, storedValue])

    return [storedValue, setStoredValue]
}
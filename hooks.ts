import { useState, useEffect, useRef, useCallback } from "react";

const useDropdown = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const popupRef = useRef< HTMLDivElement | HTMLUListElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  // Handle body overflow class
  useEffect(() => {
    if (isDropDown) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isDropDown]);

  // Handle click outside for all dropdowns
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      console.log("Clicked outside, closing all dropdowns");
      setIsDropDown(false);
    }
    if (ulRef.current && !ulRef.current.contains(event.target as Node)) {
      console.log("Clicked outside, closing all dropdowns");
      setIsDropDown(false);
    }
  }, []);

  useEffect(() => {
    if (isDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropDown, handleClickOutside]);

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  return { isDropDown, handleDropDown, popupRef, ulRef };
};

export default useDropdown;

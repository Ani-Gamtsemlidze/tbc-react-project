"use client";
import { MdAddCircleOutline } from "react-icons/md";
import { monda } from "../../app/fonts";
import AddRecipe from "./AddRecipe";
import useDropdown from "../../hooks";

export default function AddRecipeForm() {
  const { isDropDown, handleDropDown, popupRef } = useDropdown();

  return (
    <div
      onClick={handleDropDown}
      className="bg-[#E895D0] mb-4 dark:bg-darkTextMain  justify-center w-52 h-[38px] flex items-center cursor-pointer rounded-md px-4 py-6"
    >
      <MdAddCircleOutline className="text-xl text-white dark:text-darkBgColor cursor-pointer" />
      <button
        className={`text-lg font-bold ml-4 text-white dark:text-darkBgColor ${monda.className}`}
      >
        Add Recipe
      </button>
      {isDropDown && (
        // <div className=" dropdown-recipe text-center my-4">
        // <div className="flex items-center justify-center">
        <div ref={popupRef}>
          <AddRecipe handleDropDown={handleDropDown} />
        </div>
        // </div>
        // </div>
      )}
    </div>
  );
}
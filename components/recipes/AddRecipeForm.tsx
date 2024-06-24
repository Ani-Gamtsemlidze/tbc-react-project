"use client";
import { MdAddCircleOutline } from "react-icons/md";
import { monda } from "../../app/fonts";
import AddRecipe from "./AddRecipe";
import useDropdown from "../../hooks";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import LoginPromptModal from "../products/LoginPromptModal";
import { useTranslations } from "next-intl";

export default function AddRecipeForm({ isDropDown, handleDropDown }: any) {
  const t = useTranslations("Recipes");
  const { popupRef } = useDropdown();
  const { user } = useUser();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const addRecipe = () => {
    if (!user) {
      setShowLoginPrompt(true);
    } else {
      handleDropDown();
    }
  };

  return (
    <div>
      {!user && (
        <LoginPromptModal
          show={showLoginPrompt}
          onClose={() => setShowLoginPrompt(false)}
        />
      )}
      {user && (
        <div
          onClick={handleDropDown}
          className="bg-[#E895D0] mb-4 dark:bg-darkTextMain justify-center w-52 dark:py-12 h-[38px] flex items-center rounded-md px-4 py-6 cursor-pointer"
        >
          <MdAddCircleOutline className="text-xl text-white dark:text-darkBgColor cursor-pointer" />
          <button
            onClick={addRecipe}
            className={`text-lg font-bold ml-4 text-white dark:text-darkBgColor ${monda.className}`}
          >
            {t("addRecipe")}
          </button>
          {isDropDown && (
            <div ref={popupRef}>
              <AddRecipe handleDropDown={handleDropDown} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

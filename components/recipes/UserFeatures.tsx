import { acme, adamina } from "../../app/fonts";
import useDropdown from "../../hooks";
import AllCategories from "../categories/AllCategories";
import { RecipesSearch } from "../search/RecipesSearch";
import AddRecipeForm from "./AddRecipeForm";
import { useTranslations } from "next-intl";

const UserFeatures = async () => {
  const t = useTranslations("Recipes");
  const { isDropDown, handleDropDown } = useDropdown();
  return (
    <div className="mr-4 max-lg:mb-4">
      <div className={`flex flex-col top-32 ${isDropDown ? " " : "sticky"}`}>
        <AddRecipeForm
          isDropDown={isDropDown}
          handleDropDown={handleDropDown}
        />
        <div className="flex flex-col  items-center justify-start">
          <div className="w-full">
            <RecipesSearch />
          </div>
        </div>

        <div className="mt-4">
          <h1
            className={`font-bold text-[#035C41] text-3xl ${acme.className} dark:text-darkTextColor`}
          >
            {t("categories")}
          </h1>
          <ul
            className={`flex flex-col text-xl ${adamina.className} dark:text-darkTextColor`}
          >
            <AllCategories />
          </ul>
        </div>
      </div>
    </div>
  );
};

export { UserFeatures };

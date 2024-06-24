import { acme, adamina } from "../../app/fonts";
import useDropdown from "../../hooks";
import AllCategories from "../categories/AllCategories";
import { RecipesSearch } from "../search/RecipesSearch";
import AddRecipeForm from "./AddRecipeForm";

const UserFeatures = () => {
  const { isDropDown, handleDropDown } = useDropdown();
  console.log(isDropDown);
  return (
    <div className="mr-4 max-lg:mb-4">
      <div className={`flex flex-col top-32 ${isDropDown ? " ts" : "sticky"}`}>
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
            Categories
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

import searchIcon from "../../images/search.png"
import { productsData } from "../../data/productsData";
import { useState } from "react";

function Search() {

  const [itemsData, setItemsData] = useState(productsData)

  const handleSort = () => {
    const sortedItems = [...itemsData].sort((a,b) => a.price - b.price)
       setItemsData(sortedItems)
  }
  console.log(itemsData)

  return (
    <div className="flex items-center justify-center bg-gray-100 py-4  ">
    
    <form>
        <input
          className="transition rounded-full cursor-pointer w-56 p-2 pl-8 bg-gray-200 placeholder-gray-500 focus:w-64 focus:outline-none text-gray-950 "
          id="search"
          type="text"
          placeholder="Search"
        />
        <label htmlFor="search" className="relative w-4 h-4">
          <img src={searchIcon} className="w-full h-full object-contain absolute top-0 right-8 cursor-pointer" alt="Search Icon" />
        </label>
    </form> 
        <button className="transition justify-center w-16 h-8 text-md rounded-full   ml-4 bg-gray-500 text-white"
         onClick={handleSort}
        >Sort</button>
    </div>
    );
  }

export default Search;



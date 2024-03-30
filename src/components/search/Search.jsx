import searchIcon from "../../images/search.png"

function Search({onSort, searchItem, onSearch}) {
  return (
    <div className="flex items-center justify-center bg-gray-100 py-4  ">
    
    <form>
        <input
          
          className="transition rounded-full cursor-pointer w-56 p-2 pl-8 bg-gray-200 placeholder-gray-500 focus:outline-none text-gray-950 "
          id="search"
          type="text"
          value={searchItem}
          onChange={onSearch}
          placeholder="Search"
        />
        <label htmlFor="search" className="relative w-4 h-4 inline-block">
          <img src={searchIcon} className="w-full h-full object-contain absolute top-0 right-8 cursor-pointer" alt="Search Icon" />
        </label>
    </form> 
        <button className="transition justify-center w-16 h-8 text-md rounded-full   ml-4 bg-gray-500 text-white"
        onClick={onSort}
        >Sort</button>
    </div>
    );
  }

export default Search;



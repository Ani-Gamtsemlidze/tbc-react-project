import searchIcon from "../../images/search.png"

function Search() {
  return (
    <form className="flex items-center justify-center bg-gray-950 py-4  ">
        <input
          className="transition rounded-full cursor-pointer w-56 p-2 pl-8 bg-gray-200 placeholder-gray-500 focus:w-64 focus:outline-none text-gray-950 "
          id="search"
          type="text"
          placeholder="Search"
        />
        <label htmlFor="search" className="relative w-4 h-4">
          <img src={searchIcon} className="w-full h-full object-contain absolute top-0 right-8 cursor-pointer" alt="Search Icon" />
        </label>
        <button className="transition justify-center text-white w-16 h-8 text-md rounded  hover:bg-gray-900 hover:text-white" type="submit">Search</button>
    </form> 
  );
}

export default Search;



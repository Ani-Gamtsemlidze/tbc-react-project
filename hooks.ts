// import { useCallback, useState } from "react";

// export function useSearch(recipesData: any[]) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredRecipes, setFilteredRecipes] = useState<any>([]);

//   const debounce = (func: (...args: any[]) => void, delay: number) => {
//     let timerId: ReturnType<typeof setTimeout>;
//     return (...args: any[]) => {
//       clearTimeout(timerId);
//       timerId = setTimeout(() => {
//         func(...args);
//       }, delay);
//     };
//   };

//   const debounceSearch = useCallback(
//     debounce((searchQuery: string) => {
//       console.log("Debounced search query:", searchQuery);
//       const filtered = recipesData?.filter((recipe: any) =>
//         recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredRecipes(filtered || []);
//     }, 500),
//     []
//   );

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const searchQuery = e.target.value;
//     console.log(searchQuery);
//     setSearchQuery(searchQuery);
//     debounceSearch(searchQuery);
//   };

//   return { searchQuery, filteredRecipes, handleSearch};
// }

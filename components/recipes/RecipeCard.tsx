import Image from "next/image";
import Link from "next/link";
import { Recipe } from "./RecipesPage";

// export default function RecipeCard({ data }: any) {
//   return (
//     <div className="flex flex-wrap justify-start ml-36">
//       {data &&
//         data.map((recipe: Recipe) => (
//           <div key={recipe.id} className="ml-8">
//             {recipe?.images?.length > 0 && (
//               <Image
//                 className="w-64 h-56 rounded-md object-cover"
//                 src={recipe.images}
//                 width={400}
//                 height={400}
//                 alt="recipe image"
//               />
//             )}
//             <div className="flex items-center justify-between">
//               <div className="bg-[#E895D0] min-w-24 rounded-2xl px-6 mt-4 py-1  ">
//                 <p className="text-[#27343A] text-center">{recipe.category}</p>
//               </div>
//               <div className=" mt-4">
//                 <p className="text-[#27343A] text-center">
//                   {recipe.preparation_time}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-4 w-48">
//               <Link href={`/recipes/${recipe.id}`} className="text-2xl">
//                 {recipe.title}
//               </Link>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// }

export default function RecipeCard({ data }: any) {
  return (
    <div className="flex flex-wrap justify-start ml-36">
      {data &&
        data.map((recipe: Recipe) => (
          <div key={recipe.id} className="ml-8">
            <Image
              className="w-64 h-56 rounded-md object-cover"
              src={recipe?.images?.[0] ?? "/images/dessert.jpg"}
              width={400}
              height={400}
              alt="recipe image"
            />

            <div className="flex items-center justify-between">
              <div className="bg-[#E895D0] min-w-24 rounded-2xl px-6 mt-4 py-1  ">
                <p className="text-[#27343A] text-center">{recipe.category}</p>
              </div>
              <div className=" mt-4">
                <p className="text-[#27343A] text-center">
                  {recipe.preparation_time}
                </p>
              </div>
            </div>

            <div className="mt-4 w-48">
              <Link href={`/recipes/${recipe.id}`} className="text-2xl">
                {recipe.title}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

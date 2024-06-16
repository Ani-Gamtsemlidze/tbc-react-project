// // ProductItem.tsx
// "use"
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Cart from "./Cart";
// import BasicRating from "./Rating";
// import { HiMiniStar } from "react-icons/hi";
// import { HiDotsHorizontal } from "react-icons/hi";
// import { AiFillEdit } from "react-icons/ai";
// import { RiDeleteBin3Fill } from "react-icons/ri";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   images: string[];
//   averageRating?: number;
// }

// interface ProductItemProps {
//   product: Product;
//   isAdmin: boolean;
//   isDropDown: boolean;
//   onAddToCart: (productId: number) => void;
//   onEditClick: (id: number) => void;
//   onEditFormOpen: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
//   onRatingChange: (productId: number, newValue: number | null) => void;
//   showEditForm: boolean;
//   selectedRecipeId: number | null;
//   averageRatings: { [productId: number]: number };
//   ratedProducts: Set<number>;
// }

// const ProductItem: React.FC<ProductItemProps> = ({
//   product,
//   isAdmin,
//   isDropDown,
//   onAddToCart,
//   onEditClick,
//   onEditFormOpen,
//   onRatingChange,
//   showEditForm,
//   selectedRecipeId,
//   averageRatings,
//   ratedProducts,
// }) => {
//   const handleEditClick = () => {
//     onEditClick(product.id);
//   };

//   const handleEditFormOpenLocal = (
//     e: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     onEditFormOpen(e, product.id);
//   };

//   const handleRatingChangeLocal = (newValue: number | null) => {
//     onRatingChange(product.id, newValue);
//   };

//   return (
//     <div className="border-gray-400 w-[400px] border rounded-md" key={product.id}>
//       <Link href={`/products/${product.id}`} passHref>
//         <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
//           <Image
//             className="peer absolute top-0 right-0 w-full h-full object-cover"
//             src={product.images[1]}
//             alt="product image"
//             width={400}
//             height={400}
//           />
//           <Image
//             className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-700 hover:right-0 peer-hover:right-0"
//             src={product.images[0]}
//             alt="product image"
//             width={400}
//             height={400}
//           />
//           <div className="absolute bg-[#035C41] top-0 left-0 m-2 rounded-full px-4 py-2 text-center text-sm font-medium text-white">
//             Veggie 100%
//           </div>
//         </div>
//       </Link>
//       <div className="mt-4 px-5 pb-5">
//         <Link href={`/products/${product.id}`} passHref>
//           <h5 className="text-xl tracking-tight text-slate-900">
//             {product.title}
//           </h5>
//         </Link>
//         <p className="text-dm text-slate-900 my-4">
//           {product.description.slice(0, 180)}...
//         </p>
//         <div className="mt-2 mb-5 flex items-center justify-between">
//           <p>
//             <span className="text-3xl font-bold text-slate-900">
//               ${product.price}
//             </span>
//           </p>
//         </div>
//         <div className="flex items-center justify-between">
//           <Cart addProduct={() => onAddToCart(product.id)} />
//           {ratedProducts.has(product.id) ? (
//             <div className="flex items-center">
//               <HiMiniStar className="text-3xl text-greenColor" />
//               <p className="text-lg text-gray-500">
//                 {averageRatings[product.id] !== undefined
//                   ? Math.floor(averageRatings[product.id])
//                   : "No ratings yet"}
//               </p>
//             </div>
//           ) : (
//             <BasicRating
//               value={product.id in ratedProducts ? averageRatings[product.id] : null}
//               setValue={handleRatingChangeLocal}
//             />
//           )}

//           {isAdmin && (
//             <HiDotsHorizontal
//               onClick={handleEditClick}
//               className="text-2xl text-greenColor font-bold"
//             />
//           )}

//           <div className="relative">
//             {selectedRecipeId === product.id && isDropDown && (
//               <ul
//                 onClick={(e) => e.stopPropagation()}
//                 id="dropdown"
//                 className="bg-white dark:bg-slate-800 border border-greenColor shadow-md rounded absolute top-0 right-[-40px] z-50 py-4 w-52 min-h-48"
//               >
//                 <li className="border-b border-b-gray-400 mx-3 text-[#64a643] dark:text-[#CBD5E1] flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 pl-4 py-2">
//                   <AiFillEdit className="text-lg" />
//                   <button
//                     onClick={handleEditFormOpenLocal}
//                     className="text-black dark:text-white px-2 py-1 rounded-sm transition dark:hover:border-[#B85042]"
//                   >
//                     Edit Recipe
//                   </button>
//                 </li>
//                 <li className="border-b border-b-gray-400 mx-3 text-[#B85042] dark:text-[#CBD5E1] flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 pl-4 py-2">
//                   <RiDeleteBin3Fill className="text-xl" />
//                   <button
//                     // onClick={(e) => handleDelete(e, recipe.id)}
//                     className="text-black dark:text-white px-2 py-1 rounded-sm transition dark:hover:border-[#B85042]"
//                   >
//                     Delete Recipe
//                   </button>
//                 </li>
//               </ul>
//             )}
//           </div>
//           {showEditForm && selectedRecipeId === product.id && (
//             <div
//               onClick={() => setShowEditForm(false)}
//               className="bg-[rgba(0,0,0,0.7)] flex items-center justify-center h-screen fixed top-0 w-screen right-0 z-50"
//             >
//               <div
//                 onClick={(e) => e.stopPropagation()}
//                 className="bg-white w-[650px] max-h-[700px] overflow-y-auto rounded-2xl fixed"
//               >
//                 {/* EditProductForm component goes here */}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductItem;

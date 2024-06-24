"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useCart } from "../../app/context/CartContext";
import { useAdmin } from "../../app/context/AdminContext";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin3Fill } from "react-icons/ri";
import useDropdown from "../../hooks";
import EditProductForm from "./EditProductForm";
import {
  addRating,
  addToCart,
  getAverageRating,
} from "../../products-api/products-api";
import BasicRating from "./Rating";
import { deleteProductAdmin } from "../../user-api";
import AddToCart from "./AddToCart";
import LoginPromptModal from "./LoginPromptModal";

export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string | undefined;
  images: string[];
  averageRating?: number;
}

interface ProductsCardProps {
  data: Product[];
}

export default function ProductsCard({ data }: ProductsCardProps) {
  const { user } = useUser();
  const { fetchCartData } = useCart();
  const { isAdmin } = useAdmin();
  const { isDropDown, handleDropDown } = useDropdown();
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const [ratings, setRatings] = useState<{
    [productId: number]: number | null;
  }>({});

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    await deleteProductAdmin(id, user?.sub as string);
  };

  useEffect(() => {
    const fetchInitialAverageRatings = async () => {
      const initialAverageRatings: { [productId: number]: number } = {};
      for (const product of data) {
        const avgRating = await getAverageRating(product.id);
        initialAverageRatings[product.id] = avgRating;
      }
    };

    fetchInitialAverageRatings();
  }, [data]);

  const handleAddToCart = async (productId: number) => {
    if (!user) {
      setShowLoginPrompt(true);
      return;
    }

    try {
      const quantity = 1;
      await addToCart(user.sub!, productId, quantity);
      fetchCartData();
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const handleAddRating = async (productId: number, ratingValue: number) => {
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    try {
      await addRating(user.sub!, productId, ratingValue);
      setRatings((prevRatings) => ({
        ...prevRatings,
        [productId]: ratingValue,
      }));
    } catch (error) {
      console.error("Error adding product rating:", error);
    }
  };

  useEffect(() => {
    const initialRatings: { [productId: number]: number | null } = {};
    data.forEach((product) => {
      const storedRating = localStorage.getItem(`rating_${product.id}`);
      initialRatings[product.id] = storedRating
        ? JSON.parse(storedRating)
        : null;
    });

    setRatings(initialRatings);
  }, [data]);

  const handleEditClick = (id: number) => {
    if (selectedRecipeId === id && isDropDown) {
      setSelectedRecipeId(null);
      handleDropDown();
    } else {
      setSelectedRecipeId(id);
      if (!isDropDown) {
        handleDropDown();
      }
    }
  };

  const handleEditFormOpen = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setShowEditForm(true);
    setSelectedRecipeId(id);
    handleDropDown();
  };

  const handleRatingChange = (productId: number, newValue: number | null) => {
    localStorage.setItem(`rating_${productId}`, JSON.stringify(newValue));
    setRatings((prevRatings) => ({
      ...prevRatings,
      [productId]: newValue,
    }));
    if (newValue !== null) {
      handleAddRating(productId, newValue);
    }
  };

  return (
    <div className="flex flex-wrap   gap-[0.6rem] max-sm:justify-center  w-full ">
      {data &&
        data.map((product) => (
          <div
            className="border-gray-400 grow-0 shrink-0 basis-[32%]  border rounded-md mb-4"
            key={product.id}
          >
            <Link
              className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
              href={`/products/${product.id}`}
            >
              <Image
                className="peer absolute top-0 right-0 w-full h-full object-cover"
                src={product.images[0]}
                alt="product image"
                width={400}
                height={400}
              />
              <Image
                className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-700 hover:right-0 peer-hover:right-0"
                src={product.images[1]}
                alt="product image"
                width={400}
                height={400}
              />

              <div className="absolute bg-[#035C41] top-0 left-0 m-2 rounded-full px-4 py-2 text-center text-sm font-medium text-white">
                Veggie 100%
              </div>
            </Link>
            <div className="mt-4 px-5 pb-5">
              <Link href={`/products/${product.id}`}>
                <h5 className="text-xl tracking-tight text-slate-900 dark:text-darkTextMain">
                  {product.title}
                </h5>
              </Link>
              <p className="text-dm text-slate-900 dark:text-darkTextMain my-4">
                {product?.description?.slice(0, 180)}...
              </p>

              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900 dark:text-darkTextMain">
                    ${product.price}
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-between">
                <AddToCart addProduct={() => handleAddToCart(product.id)} />
                <BasicRating
                  value={ratings[product.id] || 2}
                  setValue={(newValue: any) =>
                    handleRatingChange(product.id, newValue)
                  }
                />

                {isAdmin && (
                  <HiDotsHorizontal
                    onClick={() => handleEditClick(product.id)}
                    className="text-2xl text-greenColor font-bold"
                  />
                )}

                <div className="relative">
                  {selectedRecipeId === product.id && isDropDown && (
                    <ul
                      onClick={(e) => e.stopPropagation()}
                      id="dropdown"
                      className="bg-white dark:bg-slate-800 border border-greenColor shadow-md rounded absolute top-0 right-[-40px] z-50 py-4 w-52 min-h-48"
                    >
                      <li className="border-b border-b-gray-400 mx-3 text-[#64a643] dark:text-[#CBD5E1] flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 pl-4 py-2">
                        <AiFillEdit className="text-lg" />
                        <button
                          onClick={(e) => handleEditFormOpen(e, product.id)}
                          className="text-black dark:text-white px-2 py-1 rounded-sm transition dark:hover:border-[#B85042]"
                        >
                          Edit Product
                        </button>
                      </li>
                      <li className="border-b border-b-gray-400 mx-3 text-[#B85042] dark:text-[#CBD5E1] flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 pl-4 py-2">
                        <RiDeleteBin3Fill className="text-xl" />
                        <button
                          onClick={(e) => handleDelete(e, product.id)}
                          className="text-black dark:text-white px-2 py-1 rounded-sm transition dark:hover:border-[#B85042]"
                        >
                          Delete Product
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
                {showEditForm && selectedRecipeId === product.id && (
                  <div
                    onClick={() => setShowEditForm(false)}
                    className="bg-[rgba(0,0,0,0.7)] flex items-center justify-center h-screen fixed top-0 w-screen right-0 z-50"
                  >
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="bg-white w-[650px] max-h-[700px] overflow-y-auto rounded-2xl fixed"
                    >
                      <EditProductForm productId={selectedRecipeId} />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <LoginPromptModal
              show={showLoginPrompt}
              onClose={() => setShowLoginPrompt(false)}
            />
          </div>
        ))}
    </div>
  );
}

"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { editProductInfo, getProduct } from "../../user-api";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ProductData } from "./AddProduct";
import Loading from "../../app/[locale]/loading";

export default function EditProductForm({ productId }: { productId: number }) {
  const [editedProduct, setEditedProduct] = useState<ProductData | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const { user } = useUser();

  useEffect(() => {
    fetchProduct(productId);
  }, [productId]);

  const fetchProduct = async (id: number) => {
    try {
      const singleProduct = await getProduct(id);
      if (singleProduct && singleProduct[0]) {
        setEditedProduct(singleProduct[0]);
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editedProduct) return;
    try {
      await editProductInfo(user?.sub as string, editedProduct);
      setIsEditing(false);
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof ProductData
  ) => {
    const value = e.target.value;
    if (editedProduct) {
      if (field === "description" || field === "images") {
        setEditedProduct({
          ...editedProduct,
          [field]: value.split(",").map((item) => item.trim()),
        });
      } else {
        setEditedProduct({ ...editedProduct, [field]: value });
      }
    }
  };

  if (!editedProduct) {
    return <Loading />;
  }

  return (
    <div className="lg:m-10">
      <form
        onSubmit={handleSave}
        className="relative border ml-12 border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10"
      >
        <h1 className="mb-6 text-xl font-semibold lg:text-2xl">
          Edit Recipe: {editedProduct.title}
        </h1>

        <div>
          <label> Title </label>
          <input
            type="text"
            placeholder="Recipe Title"
            value={editedProduct.title}
            className={`mt-2 pl-4 h-12 w-full rounded-md bg-gray-100 px-31 ${
              !isEditing ? " text-gray-500" : "text-black"
            }`}
            onChange={(e) => handleInputChange(e, "title")}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <label> Introduction </label>
          <textarea
            placeholder="description"
            value={editedProduct.description}
            className={`mt-2 pl-4 h-12 w-full rounded-md bg-gray-100 px-31 ${
              !isEditing ? " text-gray-500" : "text-black"
            }`}
            onChange={(e) => handleInputChange(e, "description")}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <label> Ingredients </label>
          <textarea
            placeholder="Ingredients"
            value={editedProduct.ingredients.join("\n")}
            className={`mt-2 pl-4 h-12 w-full rounded-md bg-gray-100 px-31 ${
              !isEditing ? " text-gray-500" : "text-black"
            }`}
            onChange={(e) => handleInputChange(e, "ingredients")}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <label> Nutritional Information </label>
          <textarea
            placeholder="Nutritional Information"
            value={editedProduct.nutrients}
            className={`mt-2 pl-4 h-12 w-full rounded-md bg-gray-100 px-31 ${
              !isEditing ? " text-gray-500" : "text-black"
            }`}
            onChange={(e) => handleInputChange(e, "nutrients")}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <label> Images </label>
          <input
            type="text"
            placeholder="Image URL"
            value={
              (editedProduct.images && editedProduct.images.join(", ")) || ""
            }
            className={`mt-2 pl-4 h-12 w-full rounded-md bg-gray-100 px-31 ${
              !isEditing ? " text-gray-500" : "text-black"
            }`}
            onChange={(e) => handleInputChange(e, "images")}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <button
            type="button"
            onClick={handleEditClick}
            className={`mt-5 w-full rounded-md p-2 ${
              isEditing ? "bg-slate-500" : "bg-blue-600"
            } text-center font-semibold text-white`}
          >
            Edit
          </button>
          <button
            type="submit"
            disabled={!isEditing}
            className={`mt-5 w-full rounded-md p-2 ${
              isEditing ? "bg-blue-600" : "bg-slate-500"
            } text-center font-semibold text-white`}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

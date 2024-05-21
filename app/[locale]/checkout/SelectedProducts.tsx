"use client";
import { useState, useEffect, useReducer } from "react";
import { useLocalStorage } from "../../../hooks";
import Image from "next/image";
import Header from "../../../components/layout/Header";
import { initialState, reducer } from "../../../reducers";

interface SelectedProductsProps {
  ids: number[];
}

export default function SelectedProducts({ ids }: SelectedProductsProps) {
  const [products, setProducts] = useState<any[]>([]);
  const [items, setItems] = useLocalStorage("selectedProducts");
  const [isEmpty, setIsEmpty] = useState(false);

  const [selectedProducts, dispatch] = useReducer(
    reducer,
    items || initialState
  );

  const handleIncrement = (productId: number) => {
    dispatch({ type: "INCREMENT", payload: productId });
  };
  const handleDecrement = (productId: number) => {
    dispatch({ type: "DECREMENT", payload: productId });
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  useEffect(() => {
    setItems(selectedProducts);
  }, [selectedProducts, setItems]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!items || Object.keys(items).length === 0) {
        setProducts([]);
        setIsEmpty(true);
        return;
      }

      const uniqueIds = Array.from(new Set(ids));
      const productDataArray = await Promise.all(
        uniqueIds.map(async (id) => {
          try {
            const response = await fetch(
              `https://dummyjson.com/products/${id}`
            );
            if (!response.ok) {
              throw new Error(`Failed to fetch product with ID ${id}`);
            }
            return await response.json();
          } catch (error) {
            console.error(`Error fetching product with ID ${id}:`, error);
            return null;
          }
        })
      );

      const uniqueProducts = productDataArray.filter(
        (product, index, array) =>
          product && index === array.findIndex((p) => p && p.id === product.id)
      );

      const productsInLocalStorage = Object.keys(items).map(Number);
      const filteredProducts = uniqueProducts.filter((product) =>
        productsInLocalStorage.includes(product.id)
      );

      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [ids, setProducts, items]);

  return (
    <div className="bg-slate-300 min-h-screen pl-[220px] ">
      <Header />
      <h2 className="text-center pt-8 text-2xl font-bold">Selected Products</h2>
      {isEmpty ? (
        <p className="font-bold text-center text-2xl mt-4">Cart is Empty</p>
      ) : (
        <ul>
          {products.map((product: any, index: number) => (
            <div
              key={`${product.id}-${index}`}
              className="flex max-lg:flex-col items-center justify-between m-8 border p-4 max-lg:p-2 relative max-lg:h-96"
            >
              <div className="flex  items-center ">
                <div className="w-32 h-32 max-lg:w-full max-lg:h-36 ">
                  <Image
                    className="w-full h-full object-cover"
                    src={product?.images[0]}
                    alt={product.title}
                    width={300}
                    height={300}
                  />
                </div>
                <li className="ml-4 max-lg:ml-0 max-lg:mt-2 ">
                  {product.title} - ${product.price}
                </li>
                <span className="ml-4">
                  selected Items:{selectedProducts[product.id]}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  onClick={() => handleIncrement(product.id)}
                  className="cursor-pointer text-xl"
                >
                  +
                </div>
                <div
                  onClick={() => handleDecrement(product.id)}
                  className="cursor-pointer text-2xl"
                >
                  -
                </div>
              </div>
            </div>
          ))}
          <div
            className="font-bold py-3 ml-8 text-md  cursor-pointer bg-slate-700 text-center w-44 text-white rounded"
            onClick={handleReset}
          >
            Clear The Cart
          </div>
        </ul>
      )}
    </div>
  );
}

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
      setProducts(uniqueProducts);
    };

    fetchProducts();
  }, [ids, setProducts]);

  return (
    <div className="bg-slate-300 min-h-screen">
      <Header />
      <h2 className="text-center mt-4">Selected Products</h2>
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
            <div className="flex flex-col">
              <div
                onClick={() => handleIncrement(product.id)}
                className="cursor-pointer"
              >
                Add Item
              </div>
              <div
                onClick={() => handleDecrement(product.id)}
                className="cursor-pointer"
              >
                Remove Item
              </div>
            </div>
          </div>
        ))}
        <div
          className="font-bold py-4 ml-8 text-lg cursor-pointer flex"
          onClick={handleReset}
        >
          Clear The Cart
        </div>
      </ul>
    </div>
  );
}

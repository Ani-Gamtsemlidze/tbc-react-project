"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  deleteProducts,
  getCarts,
  getProduct,
  updateCart,
} from "../../user-api";

interface CartItem {
  product_id: number;
  quantity: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

interface CartContextProps {
  cartData: CartItem[];
  productsData: Product[];
  quantity: Record<number, number>;
  dataQuantity: number;
  totalPrice: number;
  fetchCartData: () => void;
  handleQuantityChange: (productId: number, change: number) => Promise<void>;
  handleRemoveProducts: () => Promise<void>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartData, setCartData] = useState<CartItem[]>([]);
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState<Record<number, number>>({});
  const { user } = useUser();

  useEffect(() => {
    fetchCartData();
  }, [user]);

  useEffect(() => {
    if (cartData.length > 0) {
      const initialQuantities = cartData.reduce((acc, item) => {
        acc[item.product_id] = item.quantity;
        return acc;
      }, {} as Record<number, number>);
      setQuantity(initialQuantities);
    }
  }, [cartData]);

  const fetchCartData = async () => {
    try {
      if (user) {
        const cart = await getCarts(user.sub!);
        setCartData(cart);
        if (cart.length > 0) {
          fetchProducts(cart);
        }
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  const fetchProducts = async (cart: CartItem[]) => {
    try {
      const productsId = cart.map((item) => item.product_id);
      const promises = productsId.map((productId) => getProduct(productId));
      const productsArray = await Promise.all(promises);
      const products = productsArray.flat();
      setProductsData(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleQuantityChange = async (productId: number, change: number) => {
    const newQuantity = (quantity[productId] || 0) + change;
    console.log(newQuantity);
    if (newQuantity >= 0) {
      try {
        const response = await updateCart(user!.sub!, productId, newQuantity);
        if (response.msg === "Product quantity changed!") {
          setQuantity((prevQuantity) => ({
            ...prevQuantity,
            [productId]: newQuantity,
          }));
          fetchCartData();
        } else {
          console.error("Failed to update product quantity:", response.msg);
        }
      } catch (error) {
        console.error("Error updating product quantity:", error);
      }
    }
  };

  const handleRemoveProducts = async () => {
    try {
      await deleteProducts(user?.sub!);
      // Reset state after deletion
      setCartData([]);
      setProductsData([]);
      setQuantity({});
    } catch (error) {
      console.error("Error removing products:", error);
    }
  };

  const dataQuantity = cartData.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartData
    .map((cartItem) => {
      const product = productsData.find(
        (product) => product.id === cartItem.product_id
      );
      return product ? product.price * cartItem.quantity : 0;
    })
    .reduce((total, price) => total + price, 0);

  return (
    <CartContext.Provider
      value={{
        cartData,
        productsData,
        quantity,
        dataQuantity,
        totalPrice,
        fetchCartData,
        handleQuantityChange,
        handleRemoveProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// // ItemBucket.tsx

// import { useState, useEffect } from 'react';
// import { useUser } from '@auth0/nextjs-auth0/client';
// import { BsCart } from 'react-icons/bs';
// import useDropdown from '../../hooks';
// import CartItems from './CartItems';
// import CartQuantity from './CartQuantity';
// import {
//   deleteProducts,
//   getCarts,
//   getProduct,
//   updateCart,
// } from '../../user-api';

// interface CartItem {
//   product_id: number;
//   quantity: number;
// }

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   images: string[];
// }

// const ItemBucket: React.FC = () => {
//   const [cartData, setCartData] = useState<CartItem[]>([]);
//   const [productsData, setProductsData] = useState<Product[]>([]);
//   const { isDropDown, handleDropDown, popupRef } = useDropdown();
//   const [quantity, setQuantity] = useState<Record<number, number>>({});
//   const { user } = useUser();

//   useEffect(() => {
//     fetchCartData();
//   }, []);

//   useEffect(() => {
//     if (cartData.length > 0) {
//       const initialQuantities = cartData.reduce((acc, item) => {
//         acc[item.product_id] = item.quantity;
//         return acc;
//       }, {} as Record<number, number>);
//       setQuantity(initialQuantities);
//     }
//   }, [cartData]);

//   const handleQuantityChange = async (
//     productId: number,
//     change: number
//   ) => {
//     const newQuantity = (quantity[productId] || 0) + change;
//     if (newQuantity >= 0) {
//       try {
//         const response = await updateCart(
//           user!.sub!,
//           productId,
//           newQuantity
//         );
//         if (response.msg === 'Product quantity changed!') {
//           setQuantity((prevQuantity) => ({
//             ...prevQuantity,
//             [productId]: newQuantity,
//           }));
//           fetchCartData();
//         } else {
//           console.error('Failed to update product quantity:', response.msg);
//         }
//       } catch (error) {
//         console.error('Error updating product quantity:', error);
//       }
//     }
//   };

//   useEffect(() => {
//     if (isDropDown) {
//       fetchCartData();
//     }
//   }, [isDropDown]);

//   const fetchCartData = async () => {
//     try {
//       const cart = await getCarts(user!.sub!);
//       setCartData(cart);
//       if (cart.length > 0) {
//         fetchProducts(cart);
//       }
//     } catch (error) {
//       console.error('Error fetching cart data:', error);
//     }
//   };

//   const dataQuantity = cartData.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   const totalPrice = cartData
//     .map((cartItem) => {
//       const product = productsData.find(
//         (product) => product.id === cartItem.product_id
//       );
//       return product ? product.price * cartItem.quantity : 0;
//     })
//     .reduce((total, price) => total + price, 0);

//   const fetchProducts = async (cart: CartItem[]) => {
//     try {
//       const productsId = cart.map((item) => item.product_id);
//       const promises = productsId.map((productId) => getProduct(productId));
//       const productsArray = await Promise.all(promises);
//       const products = productsArray.flat();
//       setProductsData(products);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const handleRemoveProducts = async () => {
//     return await deleteProducts(user?.sub!);
//   };

//   return (
//     <div className="flex relative mx-4" onClick={handleDropDown}>
//       <BsCart className="text-3xl cursor-pointer text-[#16442a]" />
//       <div className="relative cursor-pointer">
//         <CartQuantity quantity={dataQuantity} />
//       </div>
//       {isDropDown && (
//         <div ref={popupRef}>
//           <CartItems
//             productsData={productsData}
//             cartData={cartData}
//             handleQuantityChange={handleQuantityChange}
//             dataQuantity={dataQuantity}
//             isCartOpen={isDropDown}
//             totalPrice={totalPrice}
//             handleRemoveProducts={handleRemoveProducts}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ItemBucket;

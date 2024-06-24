import Image from "next/image";
import { AiTwotoneDelete } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { LuMinusCircle } from "react-icons/lu";
import { useCart } from "../../app/context/CartContext";

const CartItem = () => {
  const { cartData, productsData, handleQuantityChange, handleRemoveItem } =
    useCart();

  return (
    <div>
      {productsData.map((product) => {
        const cartItem = cartData.find(
          (item) => item.product_id === product.id
        );
        return (
          <div
            className="flex items-center shadow  dark:shadow-shadowDark py-6 w-[800px] my-8 px-6 transition hover:bg-[rgb(244,244,244)] dark:hover:bg-darkSecondaryColor rounded-lg"
            key={product.id}
          >
            <div className="pr-2">
              <Image
                className="w-20 h-20 object-cover rounded-lg"
                src={product.images[2]}
                alt="image"
                width={400}
                height={400}
              />
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="pl-4 border-l">
                <h1 className="text-[#16442a] dark:text-darkTextColor  font-bold text-xl mb-2 w-64">
                  {product.title}
                </h1>
                <p className="text-black dark:text-darkTextColor  text-xl">
                  $ {product.price}
                </p>
              </div>
              <button
                onClick={() => handleRemoveItem(product.id)}
                className="text-xl"
              >
                <AiTwotoneDelete />
              </button>
              <div className="border dark:border-darkTextMain rounded-lg w-32 py-2 flex items-center justify-between">
                <button
                  onClick={() => handleQuantityChange(product.id, -1)}
                  className="text-lg ml-3 cursor-pointer"
                  disabled={cartItem?.quantity === 1}
                >
                  <LuMinusCircle
                    className={
                      cartItem?.quantity === 1 ? "text-gray-500" : "text-black"
                    }
                  />
                </button>
                <p>{cartItem?.quantity}</p>
                <button
                  onClick={() => handleQuantityChange(product.id, 1)}
                  className="text-xl mr-3 cursor-pointer"
                >
                  <IoMdAddCircleOutline />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { CartItem };

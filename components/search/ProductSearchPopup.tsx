import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../products/ProductsCard";
import { arvo } from "../../app/fonts";
import { LuPartyPopper } from "react-icons/lu";

export default function ProductSearchPopUp({
  isOpen,
  handleOpenSearchBox,
  productsData,
}: any) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [data, setData] = useState<Product[]>([]);
  console.log(searchQuery);

  const debounce = useCallback(
    (func: (...args: any[]) => void, delay: number) => {
      let timerId: ReturnType<typeof setTimeout>;
      return (...args: any[]) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
          func(...args);
        }, delay);
      };
    },
    []
  );

  const debounceSearch = useCallback(
    debounce((searchQuery: string) => {
      const filtered = productsData?.filter((recipe: any) =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setData(filtered);
    }, 500),
    [productsData]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setSearchQuery(searchQuery);

    debounceSearch(searchQuery);
  };

  function handleClose() {
    handleOpenSearchBox();
    setData([]);
  }

  return (
    <div>
      {isOpen && (
        <div
          onClick={handleOpenSearchBox}
          className=" bg-[rgba(0,0,0,0.7)] flex items-center justify-center h-screen fixed top-0  w-screen right-0 z-50 "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-mainColor max-w-[1000px] w-full min-h-[80vh] overflow-y-auto rounded-2xl fixed"
          >
            <div
              onClick={handleClose}
              className="text-[#16442a]  text-3xl relative "
            >
              <IoMdClose className="absolute right-6 top-4 cursor-pointer" />
            </div>
            <form className="relative flex mx-12 mt-16 items-center">
              <input
                className="transition w-full py-3 font-bold text-2xl hover:placeholder-[#16442a] focus:border-[#16442a] hover:text-[#16442a] border-b-[rgb(227,227,227] hover:border-[#1b1b1b] rounded-md  border-b cursor-pointer p-2 bg-transparent placeholder-[#16442a] focus:outline-none pl-12 text-black "
                id="search"
                type="text"
                onChange={(e) => handleSearch(e)}
                placeholder="What would you want to search?"
              />

              <CiSearch className="absolute top-[50%] text-xl translate-y-[-50%] left-[18px]" />
            </form>
            <div className="">
              <div className="flex flex-wrap  items-center justify-center my-4 max-h-[400px]  overflow-y-auto">
                {searchQuery.length !== 0 && data.length > 0 ? (
                  data.map((product: any, index: number) => (
                    <Link
                      href={`/products/${product.id}`}
                      className="flex items-center mx-12 w-full my-4 transition hover:bg-[rgb(244,244,244)] rounded-lg"
                      key={index}
                    >
                      <div className="items-start">
                        <Image
                          className="w-20 h-20 object-cover rounded-lg"
                          src={product.images[2]}
                          alt="image"
                          width={400}
                          height={400}
                        />
                      </div>
                      <h1 className="text-[#16442a] font-bold text-xl ml-4">
                        {product.title}
                      </h1>
                      <p className="text-black text-xl border-l ml-3 pl-3">
                        {product.categories}
                      </p>
                      <p className="text-black text-xl border-l ml-3 pl-3">
                        $ {product.price}
                      </p>
                    </Link>
                  ))
                ) : searchQuery.length !== 0 && data.length === 0 ? (
                  <div className="flex flex-col items-center mt-4">
                    <LuPartyPopper className="text-4xl text-greenColor mb-4" />
                    <p className={`text-center  ${arvo.className} text-xl`}>
                      No Vegan products here...{" "}
                    </p>
                    <span>maybe they're having a Party elsewhere?</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

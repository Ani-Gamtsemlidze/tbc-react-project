"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cart from "./Cart";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

interface ProductsCardProps {
  itemsData: Product[];
  handleClick: (product: Product) => void;
}

export default function ProductsCard({
  itemsData,
  handleClick,
}: ProductsCardProps) {
  const router = useRouter();
  return (
    <div className="products-scroll flex justify-center flex-wrap px-10 py-4">
      {itemsData &&
        itemsData.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="border-[hsl(7,47%,49%)] border-2 dark:bg-slate-700 rounded-md flex grow-0 shrink-0 basis-[30%] mr-4 my-2">
              <div className="w-80 h-80">
                <Image
                  className="w-full h-full object-cover rounded"
                  src={product.images[0]}
                  alt={product.title}
                  width={200}
                  height={200}
                />
              </div>
              <div className="w-80">
                <div className="px-4 dark:text-[#94a3b8]">
                  <div className="my-4">
                    <h1 className="text-xl font-bold text-[#94a3b8]">
                      {product.title}
                    </h1>
                    <span className="text-sm font-bold">
                      Price: ${product.price}
                    </span>
                  </div>
                  <div className="mb-3">
                    <p className="text-sm text-black">
                      {product.description.slice(0, 180)}...
                    </p>
                  </div>
                </div>
                <div className="my-4 w-32">
                  <button
                    onClick={() => router.push(`products/${product.id}`)}
                    className="rounded py-2 mx-2 px-2 hover:border hover:border-[#B85042] text-[#B85042] dark:text-[#e2e8f0] dark:hover:bg-slate-800 font-bold flex flex-start cursor-pointer transition"
                  >
                    View More
                  </button>
                </div>
                <Cart handleClick={() => handleClick(product)} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
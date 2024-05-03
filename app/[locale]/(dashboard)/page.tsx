import HomeProducts from "../../../components/products/HomeProducts";
import ControlledCarousel from "../../../components/slider/slider";

export default async function Home() {
  return (
    <>
      <ControlledCarousel />
      {/* <div className=" bg-[#F6F3EC] px-4 pt-8">
        <h1>What's New.</h1>
        <div className=" w-60 mt-4 ">
          <div>
            <Image
              className="w-full"
              src="/images/blog-1.jpg"
              width={200}
              height={200}
              alt="blog"
            />
          </div>
          <div>
            <p>The Two Minute Review: Noisette Bakery</p>
          </div>
          <div className="flex">
            <span>2 minute</span>
            <span>2 days ago</span>
          </div>
        </div>
      </div> */}
      <div className="text-center bg-[#F6F3EC] pt-8">
        <h1>Shop Now</h1>
        <p>Pick our favourite Products</p>
      </div>
      <div>
        <HomeProducts />
      </div>
    </>
  );
}

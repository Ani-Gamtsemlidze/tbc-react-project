import HomeProducts from "../../../components/products/HomeProducts";

export default async function Home() {
  return (
    <div className="bg-gray-200 dark:bg-slate-500 ">
      {/* <div className="text-center  pt-8 dark:text-white ">
        <h1>Shop Now</h1>
        <p className="">Pick our favourite Products</p>
      </div> */}
      <div>
        <HomeProducts />
      </div>
    </div>
  );
}

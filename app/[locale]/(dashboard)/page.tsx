import HomeProducts from "../../../components/products/HomeProducts";
import ControlledCarousel from "../../../components/slider/slider";

export default async function Home() {
  return (
    <>
      <ControlledCarousel />
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

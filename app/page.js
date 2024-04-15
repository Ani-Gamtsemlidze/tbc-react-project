import HomePage from "@/components/home/HomePage";
import Error from "./(dashboard)/error";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

async function getProductsData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const productsData = await getProductsData();

  return (
    <>
      <Header />
      <HomePage productsData={productsData} />
      <Footer />
    </>
  );
}

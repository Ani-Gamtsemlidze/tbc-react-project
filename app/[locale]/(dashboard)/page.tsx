// import { getSession } from "@auth0/nextjs-auth0";
import HomeProducts from "../../../components/products/HomeProducts";

export default async function Home() {
  // const { user }: any = await getSession();
  // console.log(user, "useruser1");
  // const saveUser = async () => {
  //   if (user && !user?.sub) {
  //     try {
  //       const response = await fetch("/api/handle-login", {
  //         method: "GET",
  //       });
  //       const data = await response.json();
  //       if (response.ok) {
  //         console.log("User saved:", data);
  //       } else {
  //         console.error("Error saving user:", data.error);
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   }
  // };
  return (
    <div className="bg-gray-200 dark:bg-slate-500 ">
      <div className="text-center  pt-8 dark:text-white ">
        <h1>Shop Now</h1>
        <p className="">Pick our favourite Products</p>
      </div>
      <div>
        <HomeProducts />
      </div>
    </div>
  );
}

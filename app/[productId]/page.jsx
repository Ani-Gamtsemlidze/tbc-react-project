"use client";

import { useEffect, useState } from "react";


export default function Page({ params }) {
  const [innerProduct, setInnerProduct] = useState()

  useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.productId}`)
          .then((res) => res.json())
          .then((data) => setInnerProduct(data))
          .catch((error) => console.error("Error fetching data:", error));
    }, [params]);
  console.log(innerProduct)

  return <div>
    <h1>{innerProduct.title}</h1>
    <img src={innerProduct.thumbnail} />
  
  </div>;
}

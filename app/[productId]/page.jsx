
import Image from "next/image";

async function getInnerData({params}) {
    const res = await fetch(`https://dummyjson.com/products/${params.productId}`)
    
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }


export default async function Page({params}) {
    const data = await getInnerData({params})


  return <div className="h-screen  bg-gray-200">
    {data && 
    <div className="flex flex-col items-center">
    
    <h1>{data.title}</h1>
    <Image src={data.thumbnail} alt={data.title} width={100} height={100} />
    </div>
    }
  
  </div>;
}

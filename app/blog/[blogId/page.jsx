// async function blogsInnerData () {
//     const res = await fetch("https://dummyjson.com/posts/1")

//     if(!res.ok) {
//         throw new Error("Failed to fetch data");
//     }
//     return res.json()
// }

// export default async function Page () {
//     const blogsData = await blogsInnerData()

//     return (
//         <p>{blogsData.title}</p>
//     )
//     }
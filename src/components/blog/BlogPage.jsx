import data from "../../data.json";

function BlogPage() {
  return (
    <div className="flex justify-between px-8 bg-gray-300 ">
      {data.map((data) => (
        <>
          <div key={data.id} className=" flex flex-col items-center my-8  ">
            <img
              className="w-64 h-40 object-cover rounded mt-2"
              src={data.src}
              alt={data.title}
            />
            <div className="w-60 mt-2">
              <h1 className="text-lg text-green-800 font-semibold">
                {data.title}
              </h1>
            </div>
            <div className="w-60 text-sm my-2">
              <p>{data.text.slice(0, 170)}...</p>
            </div>
            <button className="w-24 border-solid border-2 border-gray-700 text-gray-950 rounded py-2 mt-8 transition hover:bg-green-800 hover:text-white">
              learn more
            </button>
          </div>
        </>
      ))}
    </div>
  );
}

export default BlogPage;

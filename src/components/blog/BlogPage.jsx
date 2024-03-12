import data from "../../data.json";

function BlogPage() {
  return (
    <div>
      {data.map((data) => (
        <div key={data.id}>
          <img
            className="w-40 h-40 object-cover rounded"
            src={data.src}
            alt={data.title}
          />
          <h1>{data.title}</h1>
          <p>{data.text}</p>
        </div>
      ))}
      {/* <img src="" /> */}
    </div>
  );
}

export default BlogPage;

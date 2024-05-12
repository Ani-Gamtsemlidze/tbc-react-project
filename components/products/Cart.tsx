export default function Cart({ handleClick }: { handleClick: () => void }) {
  return (
    <div className="my-4 w-32 ">
      <button
        onClick={handleClick}
        className="rounded py-2 mx-2 px-2 bg-gray-400  text-[#3a3a3a] dark:text-[#e2e8f0] font-bold flex flex-start cursor-pointer transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

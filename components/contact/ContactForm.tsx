export default function ContactForm({ id, label, placeholder, type }) {
  return (
    <div className=" flex flex-col mt-6">
      <label htmlFor={id} className="text-black text-lg font-medium">
        {label}
      </label>
      <input
        className="w-58 mr-12 mt-2 bg-transparent outline-none border-b border-b-gray-400 pb-2 text-black"
        id={id}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
      />
    </div>
  );
}

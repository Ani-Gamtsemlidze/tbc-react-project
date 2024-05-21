"use client";

export default function DeleteButton({
  id,
  handleDelete,
}: {
  id: number;
  handleDelete: (id: number) => void;
}) {
  return (
    <button className="dark:text-black" onClick={() => handleDelete(id)}>
      X
    </button>
  );
}

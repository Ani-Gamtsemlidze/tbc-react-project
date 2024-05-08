"use client";

export default function DeleteButton({
  id,
  handleDelete,
}: {
  id: number;
  handleDelete: (id: number) => void;
}) {
  return <button onClick={() => handleDelete(id)}>X</button>;
}

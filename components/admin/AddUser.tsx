"use client";
import { useEffect, useState } from "react";

interface AddUserProps {
  onAddUser: (formData: FormData) => void;
}
export default function AddUser({ onAddUser }: AddUserProps) {
  const [isAddUser, setIsAddUser] = useState(false);

  const [formData, setFormData] = useState<FormData>(new FormData());

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const saveModule = document.getElementById("form");
      if (saveModule && !saveModule.contains(event.target as Node)) {
        setIsAddUser(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleAddUser() {
    setIsAddUser(!isAddUser);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formData.set(name, value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAddUser(false);
    onAddUser(formData);
    setFormData(new FormData());
  };

  return (
    <>
      <div className="my-4 flex justify-between items-center  w-[800px]   ">
        <h1 className="font-bold text-xl">Users</h1>
        <div
          onClick={handleAddUser}
          className="bg-stone-400 hover:bg-stone-300 transition py-2 px-4 rounded cursor-pointer"
        >
          <button>Add User</button>
        </div>
      </div>
      <div className="bg-stone-400	justify-between flex w-[800px] py-4 px-8 relative">
        <div>Name</div>
        <div className="ml-8">Email</div>
        <div className="ml-32">Age</div>
        <div className="text-transparent">Delete</div>
        <div className="text-transparent">Edit</div>
        {isAddUser && (
          <form
            onSubmit={handleSubmit}
            id="form"
            name="userForm"
            className="flex flex-col items-center absolute right-[-30%] top-0"
          >
            <input
              onChange={handleChange}
              className="bg-stone-300	outline-none pl-2 py-2 rounded "
              type="text"
              name="name"
              id="name"
              placeholder="name"
              autoComplete="name"
              required
            />
            <input
              onChange={handleChange}
              className="bg-stone-300	outline-none pl-2 py-2 my-2 rounded"
              type="email"
              name="email"
              id="email"
              placeholder="email"
              required
              autoComplete="email"
            />
            <input
              onChange={handleChange}
              className="bg-stone-300	outline-none pl-2 py-2 rounded"
              type="text"
              name="age"
              id="age"
              placeholder="age"
              autoComplete="age"
              required
            />

            <button
              className="outline-none  mt-4 ml-2 bg-stone-400 py-2 px-8 rounded  "
              type="submit"
            >
              SAVE
            </button>
          </form>
        )}
      </div>
    </>
  );
}

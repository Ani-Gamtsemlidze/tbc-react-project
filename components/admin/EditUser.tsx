"use client";
import { useEffect, useState } from "react";
import { User } from "../../user-api";
import { FiEdit3 } from "react-icons/fi";
import { editUsersAction } from "../../actions";

interface EditUserProps {
  user: User;
  onUpdateUser: (updatedUser: User) => void;
}

export const EditUser: React.FC<EditUserProps> = ({ user, onUpdateUser }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedUser, setEditedUser] = useState<User>(user);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const editModule = document.getElementById("edit");
      if (editModule && !editModule.contains(event.target as Node)) {
        setIsEdit(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof User
  ) => {
    setEditedUser({ ...editedUser, [field]: e.target.value });
  };

  const saveEdit = async () => {
    try {
      await editUsersAction(editedUser.id, editedUser);
      onUpdateUser(editedUser);
      setIsEdit(false);
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  return (
    <>
      <div onClick={toggleEdit} className="cursor-pointer dark:text-black">
        <FiEdit3 />
      </div>

      {isEdit && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            saveEdit();
          }}
          id="edit"
          className="flex right-36 top-[90px] flex-col absolute z-[100]"
        >
          <input
            className="bg-stone-300 outline-none pl-2 py-2 rounded"
            type="text"
            value={editedUser.name}
            onChange={(e) => handleInputChange(e, "name")}
          />
          <input
            className="my-2 bg-stone-300 outline-none pl-2 py-2 rounded"
            type="text"
            value={editedUser.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
          <input
            className="bg-stone-300 outline-none pl-2 py-2 rounded"
            type="text"
            value={editedUser.age}
            onChange={(e) => handleInputChange(e, "age")}
          />
          <button
            type="submit"
            className="outline-none mt-4 bg-stone-400 py-2 px-8 mx-auto rounded w-32"
          >
            Save Edit
          </button>
        </form>
      )}
    </>
  );
};

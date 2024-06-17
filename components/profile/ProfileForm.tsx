"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useState, ChangeEvent, useEffect } from "react";
import { User } from "./UserInfo";
import { editUserInfo } from "../../user-api";

export default function ProfileForm({ userData }: any) {
  const { user }: any = useUser();

  const userInfo = userData[0] as User;
  const [editedUser, setEditedUser] = useState<any>(userInfo || {});
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await editUserInfo(user.sub, editedUser);
      setIsEditing(false);
      console.log("User updated successfully");
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof User
  ) => {
    setEditedUser({ ...editedUser, [field]: e.target.value });
  };
  useEffect(() => {
    if (userData && userData.length > 0) {
      setEditedUser(userData[0]);
    }
  }, [userData[0]]);

  return (
    <div className="lg:m-10">
      <form
        onSubmit={handleSave}
        className="relative border h-[600px] ml-12 border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10"
      >
        <h1 className="mb-6 text-xl font-semibold lg:text-2xl">
          Hello, {editedUser?.firstname?.toUpperCase()}
        </h1>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className=""> First Name </label>
            <input
              type="text"
              placeholder="Your Name"
              value={editedUser?.firstname}
              className={`mt-2 pl-4  h-12 w-full rounded-md bg-gray-100 px-31  ${
                !isEditing ? " text-gray-500" : "text-black"
              } `}
              onChange={(e) => handleInputChange(e, "firstname")}
              readOnly={!isEditing}
            />
          </div>
          <div>
            <label className=""> Last Name </label>
            <input
              type="text"
              placeholder="Last  Name"
              value={editedUser && editedUser?.lastname}
              className={`mt-2  pl-4  h-12 w-full rounded-md bg-gray-100 px-31  ${
                !isEditing ? " text-gray-500" : "text-black"
              } `}
              readOnly={!isEditing}
              onChange={(e) => handleInputChange(e, "lastname")}
            />
          </div>
        </div>
        <div>
          <label className=""> Nickname </label>
          <input
            type="text"
            placeholder="Nickname"
            onChange={(e) => handleInputChange(e, "nickname")}
            value={editedUser?.nickname}
            className={`mt-2 pl-4  h-12 w-full rounded-md bg-gray-100 px-31  ${
              !isEditing ? " text-gray-500" : "text-black"
            } `}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className=""> Email Address </label>
          <input
            type="email"
            placeholder="Info@example.com"
            value={editedUser?.email}
            className={`mt-2 pl-4  h-12 w-full rounded-md bg-gray-100 px-31  ${
              !isEditing ? " text-gray-500" : "text-black"
            } `}
            onChange={(e) => handleInputChange(e, "email")}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <button
            type="button"
            onClick={handleEditClick}
            className={`mt-5 w-full rounded-md p-2  ${
              isEditing ? "bg-slate-500" : "bg-blue-600"
            } text-center font-semibold text-white`}
          >
            Edit
          </button>
          <button
            type="submit"
            disabled={!isEditing}
            className={`mt-5 w-full rounded-md p-2  ${
              isEditing ? "bg-blue-600" : "bg-slate-500"
            } text-center font-semibold text-white`}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

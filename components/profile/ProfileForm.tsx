"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useState, ChangeEvent } from "react";
import { User } from "./UserInfo";
import { editUserInfo } from "../../user-api";

export default function ProfileForm({ userData }: any) {
  const { user }: any = useUser();

  const userInfo = userData[0] as User;
  const [editedUser, setEditedUser] = useState<any>(userInfo || {});
  // console.log(editedUser);

  // console.log("USEREDITNOTHAPPEN", user.sub, editedUser);
  const saveEdit = async () => {
    try {
      await editUserInfo(user.sub, editedUser);
      console.log("User email updated successfully");
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

  return (
    <div className="lg:m-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveEdit();
        }}
        className="relative border h-[600px] ml-12 border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10"
      >
        <h1 className="mb-6 text-xl font-semibold lg:text-2xl">
          Hello, {user?.given_name.toUpperCase()}
        </h1>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className=""> First Name </label>
            <input
              type="text"
              placeholder="Your Name"
              value={editedUser?.firstname}
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              onChange={(e) => handleInputChange(e, "firstname")}
            />
          </div>
          <div>
            <label className=""> Last Name </label>
            <input
              type="text"
              placeholder="Last  Name"
              value={editedUser && editedUser?.lastname}
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
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
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
          />
        </div>
        <div>
          <label className=""> Email Address </label>
          <input
            type="email"
            placeholder="Info@example.com"
            value={editedUser?.email}
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            onChange={(e) => handleInputChange(e, "email")}
          />
        </div>
        <div>
          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

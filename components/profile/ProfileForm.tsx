"use client";

import { useState, ChangeEvent, useEffect } from "react";
import { User } from "./UserInfo";
import { editUserInfo } from "../../user-api";
import { useTranslations } from "next-intl";

export default function ProfileForm({ userData, userId }: any) {
  // const { user } = useUser();
  const t = useTranslations("Profile");
  const userInfo = userData[0] as User;
  const [editedUser, setEditedUser] = useState<User>(userInfo || {});
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!userId) {
        throw new Error("User or user.sub is undefined");
      }

      await editUserInfo(userId, editedUser);
      setIsEditing(false);
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
        className="relative border h-[600px] ml-12  border-gray-100 dark:border-darkSecondaryColor dark:bg-darkBgColor space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 max-sm:ml-0 shadow-xl lg:p-10"
      >
        <h1 className="mb-6 text-xl dark:text-darkTextColor font-semibold lg:text-2xl">
          {t("hello")}, {editedUser?.firstname?.toUpperCase()}
        </h1>
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="dark:text-darkTextColor">
              {" "}
              {t("firstName")}{" "}
            </label>
            <input
              type="text"
              placeholder="Your Name"
              value={editedUser?.firstname}
              className={`mt-2 pl-4  h-12 w-full rounded-md bg-gray-100 dark:bg-darkSecondaryColor px-31  ${
                !isEditing
                  ? " text-gray-500 dark:text-gray-100"
                  : "text-black dark:text-darkTextColor"
              } `}
              onChange={(e) => handleInputChange(e, "firstname")}
              readOnly={!isEditing}
            />
          </div>
          <div>
            <label className="dark:text-darkTextColor"> {t("lastName")} </label>
            <input
              type="text"
              placeholder="Last  Name"
              value={editedUser && editedUser?.lastname}
              className={`mt-2  pl-4  h-12 w-full rounded-md bg-gray-100 dark:bg-darkSecondaryColor px-31  ${
                !isEditing
                  ? " text-gray-500 dark:text-gray-100"
                  : "text-black dark:text-darkTextColor"
              } `}
              readOnly={!isEditing}
              onChange={(e) => handleInputChange(e, "lastname")}
            />
          </div>
        </div>
        <div>
          <label className="dark:text-darkTextColor"> {t("nickname")} </label>
          <input
            type="text"
            placeholder="Nickname"
            onChange={(e) => handleInputChange(e, "nickname")}
            value={editedUser?.nickname}
            className={`mt-2 pl-4  h-12 w-full rounded-md bg-gray-100 dark:bg-darkSecondaryColor px-31  ${
              !isEditing
                ? " text-gray-500 dark:text-gray-100"
                : "text-black dark:text-darkTextColor"
            } `}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className="dark:text-darkTextColor"> {t("email")} </label>
          <input
            type="email"
            placeholder="Info@example.com"
            value={editedUser?.email}
            className={`mt-2 pl-4  h-12 w-full rounded-md bg-gray-100 dark:bg-darkSecondaryColor px-31  ${
              !isEditing
                ? " text-gray-500 dark:text-gray-100"
                : "text-black dark:text-darkTextColor"
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
              isEditing
                ? "bg-slate-500"
                : "bg-greenColor dark:bg-darkSecondaryColor"
            } text-center font-semibold text-white`}
          >
            {t("edit")}
          </button>
          <button
            type="submit"
            disabled={!isEditing}
            className={`mt-5 w-full rounded-md p-2  ${
              isEditing
                ? "bg-greenColor dark:bg-darkSecondaryColor "
                : "bg-slate-500"
            } text-center font-semibold text-white`}
          >
            {t("button")}
          </button>
        </div>
      </form>
    </div>
  );
}

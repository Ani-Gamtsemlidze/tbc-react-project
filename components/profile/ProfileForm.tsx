"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { editUsersAction } from "../../actions";
import { useState, ChangeEvent } from "react";
import { User } from "../../user-api";

export default function ProfileForm() {
  const { user }: any = useUser();
  // console.log("me", user);

  const [editedUser, setEditedUser] = useState<User>(user || {});
  // console.log(editedUser);

  const saveEdit = async () => {
    try {
      await editUsersAction(user.sub, editedUser.email);
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
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveEdit();
        }}
        className="flex flex-col"
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={user?.nickname}
          readOnly
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={user?.email}
          value={editedUser.email || ""}
          onChange={(e) => handleInputChange(e, "email")}
        />

        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          // value={editedUser.firstName || ""}
          // onChange={(e) => handleInputChange(e, "firstName")}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          // value={editedUser.lastName || ""}
          // onChange={(e) => handleInputChange(e, "lastName")}
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

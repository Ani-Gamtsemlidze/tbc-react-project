"use client";
import { useEffect, useState } from "react";
import AddUser from "../../../../components/admin/AddUser";
import { User, getUsers } from "../../../../user-api";
import { createUserAction } from "../../../../actions";
export default function AdminPage() {
  const [usersList, setUsersList] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const fetchedUsers = await getUsers();
      setUsersList(fetchedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleAddUser = async (formData: FormData) => {
    try {
      const { success, users } = await createUserAction(formData);
      if (success) {
        setUsersList(users);
      } else {
        console.error("Failed to add user");
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="flex flex-col  flex-1 bg-gray-200 dark:bg-slate-500 items-center p-4 ">
      <AddUser onAddUser={handleAddUser} />
      <ul className="flex flex-col justify-between w-[700px] max-h-[300px]  bg-stone-300 overflow-y-auto	 py-4 px-8 ">
        {usersList.map((user: User) => (
          <div
            key={user.id}
            className="flex w-full justify-between border-b py-2 "
          >
            <li className="">{user.name}</li>
            <li className="">{user.email}</li>
            <li className="">{user.age}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

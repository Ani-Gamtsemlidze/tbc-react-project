"use client";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfileForm() {
  const { user }: any = useUser();
  return (
    <div>
      <form className="flex flex-col">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder={user?.nickname} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder={user?.name} />

        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

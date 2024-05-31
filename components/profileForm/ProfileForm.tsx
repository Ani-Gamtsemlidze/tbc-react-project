"use client";
import { useUser } from "@auth0/nextjs-auth0/client";

interface User {
  given_name?: string;
  family_name?: string;
  email?: string;
  email_verified?: boolean;
  locale?: string;
  name?: string;
  nickname?: string;
  picture?: string;
  sid?: string;
  sub?: string;
  updated_at?: string;
}

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();
  console.log(user);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const typedUser = user as User;

  return (
    typedUser && (
      <div>
        <h2>{typedUser.given_name || user?.name?.split("@")[0]}</h2>
        <p>{typedUser.family_name}</p>
        <p>{typedUser.email}</p>
      </div>
    )
  );
}

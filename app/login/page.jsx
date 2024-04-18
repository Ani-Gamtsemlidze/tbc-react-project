import { cookies } from "next/headers";
import { AUTH_COOKIE } from "@/constants";
import { redirect } from "next/navigation";
import { login } from "../actions";
import LoginForm from "@/components/loginForm/LoginForm";

export default function Login() {
  const cookieStore = cookies();

  const cookie = cookieStore.get(AUTH_COOKIE);

  if (cookie?.value) {
    redirect("/");
  }

  const handleLogin = async (username, password) => {
    "use server";
    await login(username, password);
  };

  return <LoginForm handleLogin={handleLogin} />;
}

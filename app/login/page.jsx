import { cookies } from "next/headers";
import { AUTH_COOKIE_TOKEN } from "@/constants";
import { redirect } from "next/navigation";
import { login } from "../actions";
import LoginForm from "@/components/loginForm/LoginForm";
export default function Login() {
  const cookieStore = cookies();

  const cookie = cookieStore.get(AUTH_COOKIE_TOKEN);

  if (cookie) {
    return redirect("/");
  }

  const handleLogin = async (username, password) => {
    "use server"
    await login(username, password);
  };

  return <LoginForm handleLogin={handleLogin} />;
}

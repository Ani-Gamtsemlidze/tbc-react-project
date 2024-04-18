import { login } from "../actions";
import LoginForm from "@/components/loginForm/LoginForm";

export default function Login() {
  const handleLogin = async (username, password) => {
    "use server";
    await login(username, password);
  };

  return (
    <>
      <LoginForm handleLogin={handleLogin} />
    </>
  );
}

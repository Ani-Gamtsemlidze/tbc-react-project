import { cookies } from "next/headers";
import { AUTH_COOKIE_TOKEN } from "@/constants";
import { redirect } from "next/navigation";
export default function Login() {
  const cookieStore = cookies();

  const cookie = cookieStore.get(AUTH_COOKIE_TOKEN);

  if(cookie) {
    return redirect("/")
  }

//   const handleLogin = () => {

//   }

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="email" />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="password"
      />

      <button>Login</button>
    </form>
  );
}

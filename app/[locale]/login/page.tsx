// import LoginForm from "../../../components/loginForm/LoginForm";

export default function Login() {
  return (
    <div className="flex">
      <a className="ml-4" href="/api/auth/login">
        Login
      </a>
      <a className="ml-4" href="/api/auth/logout">
        Logout
      </a>
      {/* <LoginForm /> */}
    </div>
  );
}

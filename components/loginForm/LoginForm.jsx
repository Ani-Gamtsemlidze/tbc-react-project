"use client";
import Image from "next/image";

export default function LoginForm() {
  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const response = await fetch("/login/api", {
      method: "POST",
      body: formData,
    });
  }

  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center ">
      <div className=" flex flex-col items-center ">
        <div className="bg-black w-80 rounded-t-lg	 ">
          <Image
            className="mx-auto my-2"
            src="/images/X-Logo.png"
            width={40}
            height={40}
            alt="logo"
          />
        </div>

        <form
          onSubmit={onSubmit}
          autoComplete="off"
          className="flex flex-col items-center  bg-white w-80  rounded-b-lg	"
        >
          <div className="mt-10 mb-2 text-center">
            <h1 className="font-bold">LOGIN</h1>
            <p>Sign In to continue access</p>
          </div>
          <label className="relative" htmlFor="username">
            <div className="w-4 h-4 object-cover absolute top-9 right-24">
              <Image
                className=""
                src="/images/login/email.png"
                width={100}
                height={100}
                alt="email"
              />
            </div>
          </label>
          <input
            className="rounded w-60 outline-none transition hover:border-slate-900 pl-8 py-2  my-6 border "
            type="text"
            id="username"
            name="username"
            placeholder="username"
            spellCheck="off"
            autoComplete="off"
            required
          />
          <label className=" relative  " htmlFor="password">
            <div className="w-4 h-4 object-cover absolute top-3 right-24">
              <Image
                className=""
                src="/images/login/padlock.png"
                width={100}
                height={100}
                alt="name"
              />
            </div>
          </label>
          <input
            className="rounded w-60  outline-none pl-8 py-2 border transition hover:border-slate-900 "
            type="password"
            id="password"
            name="password"
            placeholder="password"
            autoComplete="off"
            required
          />

          <button
            className="bg-[#493e57] transition  py-2 w-48 rounded my-8 text-lg hover:bg-black text-white "
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

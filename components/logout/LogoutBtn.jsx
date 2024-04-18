"use client";
export default function LogoutBtn({ handleLogout }) {
  return (
    <div>
      <button
        className="text-white border px-2 py-1 rounded-sm  hover:text-[#f78181] transition hover:border-[#f78181]"
        onClick={() => handleLogout()}
      >
        Log Out
      </button>
    </div>
  );
}

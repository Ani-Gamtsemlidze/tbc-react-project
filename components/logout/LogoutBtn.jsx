"use client";
export default function LogoutBtn({ handleLogout }) {
  return (
    <div>
      <button className="text-black bg-white px-2 py-1 rounded-lg font-bold" onClick={() => handleLogout()}>
        Log Out
      </button>
    </div>
  );
}

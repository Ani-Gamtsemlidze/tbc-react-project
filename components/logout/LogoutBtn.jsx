"use client";
export default function LogoutBtn({ handleLogout }) {
  return (
    <div>
      <button className="text-white" onClick={() => handleLogout()}>
        Log Out
      </button>
    </div>
  );
}

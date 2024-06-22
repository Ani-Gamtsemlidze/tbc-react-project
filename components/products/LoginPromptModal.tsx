// components/LoginPromptModal.tsx
import React from "react";
import { useRouter } from "next/navigation";

interface LoginPromptModalProps {
  show: boolean;
  onClose: () => void;
}

const LoginPromptModal: React.FC<LoginPromptModalProps> = ({
  show,
  onClose,
}) => {
  const router = useRouter();

  if (!show) {
    return null;
  }

  const handleLogin = () => {
    router.push("/api/auth/login");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-mainColor">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">
          Hang on! Let's Get You Logged In
        </h2>
        <p className="mb-6">
          Oops! Looks like you need to log in first to add items to the cart.
        </p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPromptModal;

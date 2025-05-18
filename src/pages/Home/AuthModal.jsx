// src/pages/Home/AuthModal.js
import React from "react";
import AuthForm from "./AuthForm";

const AuthModal = ({ mode, onClose, onSwitchMode }) => {
  if (!mode) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-lg">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">
          {mode === "login" ? "Login to Candy Canvas" : "Register for Candy Canvas"}
        </h2>
        <AuthForm mode={mode} onSwitchMode={onSwitchMode} />
      </div>
    </div>
  );
};

export default AuthModal;

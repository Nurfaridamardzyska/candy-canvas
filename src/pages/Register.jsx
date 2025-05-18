// src/pages/Register.jsx
import React from "react";
import AuthForm from "./Home/AuthForm";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Daftar Akun Baru</h2>
        <AuthForm type="register" />
      </div>
    </div>
  );
};

export default Register;

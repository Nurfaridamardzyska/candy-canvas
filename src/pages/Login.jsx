// src/pages/Login.jsx
import React from "react";
import AuthForm from "./Home/AuthForm";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login ke Candy Canvas</h2>
        <AuthForm type="login" />
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";

const AuthForm = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    ...(type === "register" && { username: "" }),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {type === "register" && (
        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
      )}
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        required
      />
      <button
        type="submit"
        className={`w-full py-2 px-4 rounded-full text-white font-medium hover:opacity-90 transition ${
          type === "login"
            ? "bg-gradient-to-r from-purple-500 to-pink-500"
            : "bg-gradient-to-r from-green-500 to-blue-500"
        }`}
      >
        {type === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
};

export default AuthForm;

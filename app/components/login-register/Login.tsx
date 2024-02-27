"use client";

import { NextPage } from "next";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login: NextPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Fetch users from the API
      const response = await fetch(process.env.NEXT_PUBLIC_USERS!);
      const users = await response.json();

      // Find the user with the provided username
      const user = users.find(
        (u: { username: string; password: string }) =>
          u.username === formData.username
      );

      if (user && user.password === formData.password) {
        // Authentication successful, navigate to /forum
        router.push("/forum");
      } else {
        // Authentication failed
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form className="login-form" onSubmit={handleSubmit} method="post">
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <div className="login-button">
        <button className="btn btn-font-size-medium">Login</button>
      </div>
    </form>
  );
};

export default Login;

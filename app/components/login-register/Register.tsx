"use client";
import { NextPage } from "next";
import { useState } from "react";

const Register: NextPage = () => {
  const [userData, setUserData] = useState<User>({
    id: "",
    username: "",
    password: "",
    repeatPassword: "",
  });

  const users = process.env.NEXT_PUBLIC_USERS || "";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userData.password !== userData.repeatPassword) {
      console.error("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(users, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userData.username,
          password: userData.password,
        }),
      });
      if (response.ok) {
        console.log("Registration successful");

        setUserData({
          id: "",
          username: "",
          password: "",
          repeatPassword: "",
        });
      } else {
        console.error("Registration failed");
      }
    } catch (error: any) {
      console.error("Error occurred during registration:", error);
    }
  };
  return (
    <form className="register-form" onSubmit={handleSubmit} method="post">
      <input
        type="text"
        name="username"
        id="set-username"
        placeholder="Your Email"
        value={userData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        id="set-password"
        placeholder="Set Password"
        value={userData.password}
        onChange={handleChange}
      />
      <input
        type="password"
        name="repeatPassword"
        id="repeat-password"
        placeholder="Repeat Password"
        value={userData.repeatPassword}
        onChange={handleChange}
      />
      <div className="login-button">
        <button className="btn btn-font-size-medium">Register</button>
      </div>
    </form>
  );
};

export default Register;

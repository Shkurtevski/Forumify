import { NextPage } from "next";
import React from "react";
import Login from "./components/login-register/Login";
import Register from "./components/login-register/Register";

const Home: NextPage = async () => {
  return (
    <main className="home">
      <div className="wrapper">
        <div className="text-content">
          <h1>Welcome to Forumify.</h1>
          <h2>Join the conversation by signing up or logging in now!</h2>
        </div>
        <div className="login-register-wrapper">
          <Login />
          <h3>Or</h3>
          <Register />
        </div>
      </div>
    </main>
  );
};

export default Home;

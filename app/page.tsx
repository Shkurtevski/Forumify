import { NextPage } from "next";
import React from "react";
import Login from "./components/login-register/Login";

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
          <h2>Or</h2>
        </div>
      </div>
    </main>
  );
};

export default Home;

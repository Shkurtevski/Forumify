import { NextPage } from "next";
import React from "react";
import Login from "./components/login-register/Login";

const Home: NextPage = async () => {
  return (
    <main className="home">
      <div className="wrapper">
        <div className="text-content">
          <h1>Welcome to Forumify.</h1>
          <h2>Unlock endless discussions and insights by signing up now.</h2>
        </div>
        <div className="login">
          <Login />
        </div>
      </div>
    </main>
  );
};

export default Home;

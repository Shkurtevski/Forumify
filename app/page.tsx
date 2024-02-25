import { NextPage } from "next";
import React from "react";
import Login from "./components/login-register/Login";

const Home: NextPage = async () => {
  return (
    <main className="home">
      <div className="wrapper">
        <div className="text-content">
          <p>Connect with friends and the world around you on Facebook.</p>
        </div>
        <div className="login">
          <Login />
        </div>
      </div>
    </main>
  );
};

export default Home;

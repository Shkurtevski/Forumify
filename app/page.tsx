import { NextPage } from "next";
import React from "react";
import ForumContainer from "./components/ForumContainer";

const Home: NextPage = async () => {
  return (
    <main className="home">
      <div className="home-container">
        <ForumContainer />
      </div>
    </main>
  );
};

export default Home;

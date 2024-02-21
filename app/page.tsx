import { NextPage } from "next";
import React from "react";
import Banner from "./components/Banner";

const Home: NextPage = () => {
  return (
    <main className="home">
      <Banner />
    </main>
  );
};

export default Home;

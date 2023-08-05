import React from "react";
import MainContainer from "./components/MainContainer";
import Suggest from "./components/Suggest";

const Home = () => {
  return (
    <div className="flex pt-6">
      <MainContainer />
      <Suggest />
    </div>
  );
};

export default Home;

import React from "react";
import Post from "./Post";
import Story from "./Story";

const MainContainer = () => {
  return (
    <div className="w-[70%] max-xl:w-full">
      <div className="">
        <div className="flex">
          <Story />
          <Story />
        </div>
        <div className="ml-24 mt-10">
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;

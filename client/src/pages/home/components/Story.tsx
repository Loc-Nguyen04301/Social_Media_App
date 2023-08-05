import React from "react";
import profileImage from "../../../assets/images/profile.jpg";

const Story = () => {
  return (
    <div className="flex p-4">
      <button className="flex flex-col items-center">
        <img
          src={profileImage}
          className="h-[60px] w-[60px] rounded-[50%] hover:cursor-pointer"
        ></img>
        <div className="w-[60px] overflow-hidden text-ellipsis">
          loc_nguyen_43
        </div>
      </button>
    </div>
  );
};

export default Story;

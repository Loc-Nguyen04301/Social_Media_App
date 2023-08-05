import React from "react";
import profileImage from "../../../assets/images/profile.jpg";
import { Bookmark, MessageCircle, Send, Heart, MoreHorizontal } from "react-feather";

const Post = () => {
  return (
    <div className="mb-5 w-[470px] border-b-[1px] border-color-border">
      <div className="flex justify-between">
        <div className="flex">
          <img
            src={profileImage}
            className="mx-1 h-[32px] w-[32px] rounded-[50%] hover:cursor-pointer"
          ></img>
          <div className="mx-1">loc_nguyen_43</div>
          <span className="mx-1">•</span>
          <div className="mx-1">6 giờ</div>
        </div>
        <div>
          <MoreHorizontal />
        </div>
      </div>
      <div className="mt-3">
        <img src={profileImage}></img>
      </div>
      <div className="mt-3 flex justify-between">
        <div className="flex">
          <Heart className="mr-[7px]" />
          <MessageCircle className="mx-[7px]" />
          <Send className="mx-[7px]" />
        </div>
        <div>
          <Bookmark />
        </div>
      </div>
      <div className="mt-3">
        <div className=" text-sm">
          <span className="font-semibold text-main-color-text">
            loc_nguyen_43
          </span>
          <span className="ml-2 text-sub-color-text">
            Để trao giá trị, chúng ta cần tìm hiểu về nhu cầu và mong muốn của
            đối phương. Bằng cách lắng nghe và chia sẻ, chúng ta...
          </span>
        </div>
      </div>
      <div className="mt-3">
        <textarea
          placeholder="Thêm bình luận ..."
          className="h-auto w-full resize-none focus:outline-none"
          rows={4}
        ></textarea>
      </div>
    </div>
  );
};

export default Post;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import profileImage from "../../assets/images/profile.jpg";
import { Settings, Bookmark, Tag, Grid } from "react-feather";
import GridComponent from "./GridComponent";
import BookmarkComponent from "./BookmarkComponent";
import TagComponent from "./TagComponent";

interface IParams {
  id: string | undefined;
}

type chooseType = "grid" | "bookmark" | "tag";

const Profile = () => {
  const { id } = useParams<IParams>();

  const [choose, setChoose] = useState<chooseType>("grid");

  const handleClickGrid = () => {
    setChoose("grid");
  };

  const handleClickBookMark = () => {
    setChoose("bookmark");
  };

  const handleClickTag = () => {
    setChoose("tag");
  };
  return (
    <div>
      <div className="mt-6 ">
        <div className="mx-auto max-w-[935px] border-b-[1px] px-14 pb-8">
          <div className="flex">
            <div className="w-[30%]">
              <img
                src={profileImage}
                className="h-[150px] w-[150px] rounded-[50%]"
              ></img>
            </div>
            <div className="mt-2 w-[70%]">
              <div className="mb-4 flex items-center">
                <div className="text-xl">loc_nguyen_43</div>
                <div className="px-10">
                  <button className="rounded-[5px] bg-[#DBDBDB] px-4 py-1">
                    <a className="text-sm font-semibold">
                      Chỉnh sửa trang cá nhân
                    </a>
                  </button>
                </div>
                <div>
                  <Settings />
                </div>
              </div>
              <div className="mb-3 flex items-center">
                <div>
                  <span className="font-semibold">1</span> bài viết
                </div>
                <div className="px-10">
                  <span className="font-semibold">1</span> theo dõi
                </div>
                <div>
                  Đang theo dõi <span className="font-semibold">1</span> người
                  dùng
                </div>
              </div>
              <div className="flex items-center">
                <div className="font-semibold">Nguyen Gia Loc</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[935px] px-14">
        <div className="flex h-[50px] justify-center">
          <div className="flex">
            <div
              className={`mr-10 flex h-full items-center ${
                choose == "grid"
                  ? "border-t-[1px] border-t-main-color-text"
                  : ""
              }  `}
            >
              <div
                className={`flex items-center text-sub-color-text hover:cursor-pointer ${
                  choose == "grid" ? "!text-main-color-text " : ""
                }`}
                onClick={handleClickGrid}
              >
                <Grid />
                <span className="ml-1 text-xs font-medium uppercase tracking-widest">
                  Bài viết
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div
              className={`mr-10 flex h-full items-center ${
                choose == "bookmark"
                  ? "border-t-[1px] border-t-main-color-text"
                  : ""
              }  `}
            >
              <div
                className={`flex items-center text-sub-color-text hover:cursor-pointer ${
                  choose == "bookmark" ? "!text-main-color-text " : ""
                }`}
                onClick={handleClickBookMark}
              >
                <Bookmark />
                <span className="ml-1 text-xs font-medium uppercase tracking-widest ">
                  Đã lưu
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div
              className={`mr-10 flex h-full items-center ${
                choose == "tag" ? "border-t-[1px] border-t-main-color-text" : ""
              }  `}
            >
              <div
                className={`flex items-center text-sub-color-text hover:cursor-pointer ${
                  choose == "tag" ? "!text-main-color-text " : ""
                }`}
                onClick={handleClickTag}
              >
                <Tag />
                <span className="ml-1 text-xs font-medium uppercase tracking-widest">
                  Được gán thẻ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {choose === "grid" && <GridComponent />}
      {choose === "bookmark" && <BookmarkComponent />}
      {choose === "tag" && <TagComponent />}
      <div className="container m-auto my-10 max-md:hidden">
        <div className="flex flex-1 flex-wrap justify-center">
          <div className="mx-[10px] text-xs text-sub-color-text">Meta</div>
          <div className="mx-[10px] text-xs text-sub-color-text">
            Giới thiệu
          </div>
          <div className="mx-[10px] text-xs text-sub-color-text">Blog</div>
          <div className="mx-[10px] text-xs text-sub-color-text">Việc làm</div>
          <div className="mx-[10px] text-xs text-sub-color-text">Trợ giúp</div>
          <div className="mx-[10px] text-xs text-sub-color-text">API</div>
          <div className="mx-[10px] text-xs text-sub-color-text">
            Quyền riêng tư
          </div>
          <div className="mx-[10px] text-xs text-sub-color-text">
            Điều khoản
          </div>
          <div className="mx-[10px] text-xs text-sub-color-text">
            Tài khoản liên quan nhất
          </div>
          <div className="mx-[10px] text-xs text-sub-color-text">Vị trí</div>
          <div className="mx-[10px] text-xs text-sub-color-text">
            Instagram Lite
          </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-center">
          <div className="mx-[10px]  text-xs text-sub-color-text">
            Tải thông tin người liên hệ lên & người không phải người dùng
          </div>
          <div className="mx-[10px]  text-xs text-sub-color-text">
            Meta đã xác minh
          </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-center pt-[30px]">
          <div className="mx-[10px] my-[10px] text-xs text-sub-color-text">
            Tiếng Việt <i className="fa-solid fa-chevron-down ml-1"></i>
          </div>
          <div className="mx-[10px] my-[10px]  text-xs text-sub-color-text">
            © 2023 Instagram from Meta
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

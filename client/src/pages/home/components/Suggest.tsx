import React from "react";
import profileImage from "../../../assets/images/profile.jpg";

const Suggest = () => {
  return (
    <div className="w-[30%] p-4 max-xl:hidden">
      <div className="header pb-7">
        <div className="flex">
          <a className="flex w-full">
            <img
              src={profileImage}
              className="h-[44px] w-[44px] rounded-[50%] hover:cursor-pointer"
            ></img>
            <div className="ml-3 w-[220px]">
              <div className="font-semibold leading-7 text-main-color-text hover:cursor-pointer">
                loc_nguyen_43
              </div>
              <div className="leading-3 text-sub-color-text">
                Nguyen Gia Loc
              </div>
            </div>
            <div className="self-center text-sm font-semibold text-blue-text hover:cursor-pointer">
              Chuyển
            </div>
          </a>
        </div>
      </div>
      <div className="suggest">
        <div className="flex justify-between pb-3">
          <div className="font-semibold text-sub-color-text">Gợi ý cho bạn</div>
          <div className="text-sm font-semibold text-main-color-text">
            Xem tất cả
          </div>
        </div>

        <ul>
          {Array.from({ length: 5 }, () => (
            <li className="py-2">
              <div className="flex">
                <a className="flex w-full justify-between">
                  <div className="flex">
                    <img
                      src={profileImage}
                      className="h-[44px] w-[44px] rounded-[50%] hover:cursor-pointer"
                    ></img>
                    <div className="ml-3 w-[220px]">
                      <div className="font-semibold leading-7 text-main-color-text hover:cursor-pointer">
                        loc_nguyen_43
                      </div>
                      <div className="leading-3 text-sub-color-text">
                        Nguyen Gia Loc
                      </div>
                    </div>
                  </div>
                  <div className="self-center text-sm font-semibold text-blue-text hover:cursor-pointer hover:text-color-hover-blue-text">
                    Theo dõi
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer pt-10">
        <div className="mb-7">
          <ul className="flex flex-wrap">
            <li className="mx-[3px] text-sm text-[#c7c7c7] hover:cursor-pointer">
              Giới thiệu
            </li>
            <li className="mx-[3px] text-sm text-[#c7c7c7] hover:cursor-pointer">
              Trợ giúp
            </li>
            <li className="mx-[3px] text-sm text-[#c7c7c7] hover:cursor-pointer">
              Báo chí
            </li>
            <li className="mx-[3px] text-sm text-[#c7c7c7] hover:cursor-pointer">
              API
            </li>
            <li className="mx-[3px] text-sm text-[#c7c7c7] hover:cursor-pointer">
              Việc làm
            </li>
            <li className="mx-[3px] text-sm text-[#c7c7c7] hover:cursor-pointer">
              Quyền riêng tư
            </li>
            <li className="mx-[3px] text-sm text-[#c7c7c7] hover:cursor-pointer">
              Điều khoản
            </li>
            <li className="mx-[3px] text-sm text-[#c7c7c7] hover:cursor-pointer">
              Vị trí
            </li>
            <li className="mx-[3px] text-sm text-[#c7c7c7] hover:cursor-pointer">
              Ngôn ngữ
            </li>
            <li className="mx-[3px] text-sm text-[#c7c7c7] hover:cursor-pointer">
              Meta đã xác định
            </li>
          </ul>
        </div>
        <div>
          <div className="mx-[3px] text-sm text-[#c7c7c7]">
            © 2023 INSTAGRAM FROM META
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggest;

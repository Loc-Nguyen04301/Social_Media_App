import React, { MouseEventHandler, useState } from "react";
import { InputChange } from "../utils/TypeScript";
import { SearchIcon } from "./Icon";
import profileImage from "../assets/images/profile.jpg";

interface SearchBoxProps {
  shrink: boolean;
}
const SearchBox = ({ shrink }: SearchBoxProps) => {
  const [search, setSearch] = useState("");
  const [isTriggerInput, setTriggerInput] = useState<boolean>(false);

  const handleChangeSearch = (e: InputChange) => {
    setSearch(e.target.value);
  };

  const handleDeleteSearch = (e: any) => {
    e.stopPropagation();
    setSearch("");
    setTriggerInput(false);
  };

  return (
    <div
      className={`${
        shrink === true ? "fixed" : "hidden"
      } left-[72px] top-0 z-[100] h-full min-w-[400px] rounded-r-xl bg-inherit shadow-2xl`}
    >
      <div className="border-b-[1px] border-color-border p-6">
        <h1 className="text-2xl font-semibold">Tìm kiếm</h1>
        <div className="mt-8">
          <div
            className="relative cursor-text rounded-lg bg-[#EFEFEF] px-4 py-[3px]"
            onClick={() => setTriggerInput(true)}
          >
            {isTriggerInput ? (
              <input
                value={search}
                placeholder="Tìm kiếm"
                onChange={handleChangeSearch}
                className="h-8 w-full bg-inherit text-base font-light text-[#737373]"
              />
            ) : (
              <div className="flex h-8 items-center gap-3">
                <SearchIcon />
                <span className="bg-inherit text-base font-light text-[#737373]">
                  Tìm kiếm
                </span>
              </div>
            )}
            {isTriggerInput ? (
              <button
                className="absolute right-4 top-1 h-5 w-5"
                onClick={handleDeleteSearch}
              >
                x
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="max-h-[548px] overflow-y-scroll px-6 pb-1 pt-6">
        <div className="mb-3 flex justify-between">
          <div className="font-semibold">Gần đây</div>
          <div className="self-center text-sm font-semibold text-blue-text hover:cursor-pointer hover:text-color-hover-blue-text">
            Xóa tất cả
          </div>
        </div>
        <div>
          <ul>
            {Array.from({ length: 12 }, () => (
              <li className="py-2">
                <div className="w-full">
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
                    <div className="self-center text-sm font-semibold hover:cursor-pointer">
                      X
                    </div>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

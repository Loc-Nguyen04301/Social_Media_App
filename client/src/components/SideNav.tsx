import React, { useState } from "react";
import SideNavItem from "./SideNavItem";
import {
  Heart,
  Compass,
  Search,
  MessageCircle,
  PlusSquare,
  Film,
  AlignJustify,
  Home as HomeIcon,
} from "react-feather";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation } from "react-router-dom";
import LogoComponent from "./LogoComponent";
import useBoundStore from "../store";
import AccountTransferModal from "./modal/AccountTransferModal";
import SearchBox from "./SearchBox";

export enum TABS {
  HOME = "HOME",
  SEARCH = "SEARCH",
  COMPASS = "COMPASS",
  FILM = "FILM",
  MESSAGE = "MESSAGE",
  HEART = "HEART",
  PLUSSQUARE = "PLUSSQUARE",
}

const SideNav = () => {
  const { user } = React.useContext(AuthContext);
  const [currentTab, setCurrentTab] = useState<TABS>(TABS.HOME);
  const setListSeeMore = useBoundStore((state) => state.setListSeeMore);
  const location = useLocation();

  return (
    <div
      className={`${
        currentTab === TABS.SEARCH ? "w-[72px] " : " "
      }fixed z-10 flex h-full w-[250px] flex-col justify-between border-r-[1px] border-r-color-border bg-white px-3 pb-5 pt-2 max-lg:w-[72px]`}
    >
      <div className="sideNav-list">
        <LogoComponent shrink={currentTab === TABS.SEARCH ? true : false} />
        <div className="w-full">
          <SideNavItem
            icon={HomeIcon}
            title="Trang chủ"
            className={currentTab === TABS.HOME ? "active font-bold" : ""}
            setCurrentTab={() => setCurrentTab(TABS.HOME)}
            shrink={currentTab === TABS.SEARCH ? true : false}
          />
          <SideNavItem
            icon={Search}
            title="Tìm kiếm"
            className={currentTab === TABS.SEARCH ? "active font-bold" : ""}
            setCurrentTab={() => setCurrentTab(TABS.SEARCH)}
            shrink={currentTab === TABS.SEARCH ? true : false}
          />
          <SideNavItem
            icon={Compass}
            title="Khám phá"
            className={currentTab === TABS.COMPASS ? "active font-bold" : ""}
            setCurrentTab={() => setCurrentTab(TABS.COMPASS)}
            shrink={currentTab === TABS.SEARCH ? true : false}
          />
          <SideNavItem
            icon={Film}
            title="Reels"
            className={currentTab === TABS.FILM ? "active font-bold" : ""}
            setCurrentTab={() => setCurrentTab(TABS.FILM)}
            shrink={currentTab === TABS.SEARCH ? true : false}
          />
          <SideNavItem
            icon={MessageCircle}
            title="Tin nhắn"
            className={currentTab === TABS.MESSAGE ? "active font-bold" : ""}
            setCurrentTab={() => setCurrentTab(TABS.MESSAGE)}
            shrink={currentTab === TABS.SEARCH ? true : false}
          />
          <SideNavItem
            icon={Heart}
            title="Thông báo"
            className={currentTab === TABS.HEART ? "active font-bold" : ""}
            setCurrentTab={() => setCurrentTab(TABS.HEART)}
            shrink={currentTab === TABS.SEARCH ? true : false}
          />
          <SideNavItem
            icon={PlusSquare}
            title="Tạo"
            className={currentTab === TABS.PLUSSQUARE ? "active font-bold" : ""}
            setCurrentTab={() => setCurrentTab(TABS.PLUSSQUARE)}
            shrink={currentTab === TABS.SEARCH ? true : false}
          />
          <a href={`/profile/${user.name}`}>
            <SideNavItem
              profileImage={user.avatar}
              title="Trang cá nhân"
              className={
                location.pathname.startsWith("/profile")
                  ? "bg-white font-bold"
                  : ""
              }
              shrink={currentTab === TABS.SEARCH ? true : false}
            />
          </a>
        </div>
      </div>
      <SideNavItem
        icon={AlignJustify}
        title="Xem thêm"
        setListSeeMore={() => setListSeeMore()}
        shrink={currentTab === TABS.SEARCH ? true : false}
      />
      <AccountTransferModal />
      <SearchBox shrink={currentTab === TABS.SEARCH ? true : false} />
    </div>
  );
};

export default SideNav;

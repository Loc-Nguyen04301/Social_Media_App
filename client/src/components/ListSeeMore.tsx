import React from "react";
import { SettingIcon, ThemeIcon, TimerIcon, WarningIcon } from "./Icon";
import { Bookmark } from "react-feather";
import SideNavItem from "./SideNavItem";
import { AlertContext } from "../contexts/AlertContext";
import { ERROR, LOADING } from "../reducers/type";
import { postAPI } from "../utils/FetchData";

const ListSeeMore = () => {
  const { dispatch: dispatchAlert } = React.useContext(AlertContext);

  const handleLogOut = async () => {
    try {
      dispatchAlert({ type: LOADING, payload: { loading: true } });
      await postAPI("auth/logout");
      localStorage.removeItem("logged");
      dispatchAlert({ type: LOADING, payload: { loading: false } });
      window.location.href = "/";
    } catch (error: any) {
      dispatchAlert({
        type: ERROR,
        payload: { errors: error.response.data.message },
      });
    }
  };

  return (
    <div className="fixed bottom-[70px] left-3 min-w-[268px] rounded-[16px] bg-white p-2 shadow-2xl">
      <SideNavItem title="Cài đặt" icon={SettingIcon} />
      <SideNavItem title="Hoạt động của bạn" icon={TimerIcon} />
      <SideNavItem title="Đã lưu" icon={Bookmark} />
      <SideNavItem title="Chuyển chế độ" icon={ThemeIcon} />
      <SideNavItem title="Báo cáo sự cố" icon={WarningIcon} />
      <div className="after:inline-block after:h-[3px] after:w-full after:bg-color-border after:content-['']"></div>
      <SideNavItem title="Chuyển tài khoản" />
      <SideNavItem title="Đăng xuất" handleLogOut={handleLogOut} />
    </div>
  );
};

export default ListSeeMore;

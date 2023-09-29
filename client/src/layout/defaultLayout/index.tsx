import React, { useEffect } from "react";
import SideNav from "../../components/SideNav";
import useBoundStore from "../../store";
import ListSeeMore from "../../components/ListSeeMore";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const listSeeMore = useBoundStore((state) => state.listSeeMore);

  return (
    <div className="flex w-full">
      <SideNav />
      <div className="ml-[250px] w-full p-5 max-lg:ml-[72px]">{children}</div>
      {listSeeMore && <ListSeeMore />}
    </div>
  );
};

export default DefaultLayout;

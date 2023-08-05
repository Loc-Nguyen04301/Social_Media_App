import React from "react";
import SideNav from "../../components/SideNav";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full">
      <SideNav />
      <div className="ml-[250px] w-full p-5 max-lg:ml-[72px]">{children}</div>
    </div>
  );
};

export default DefaultLayout;

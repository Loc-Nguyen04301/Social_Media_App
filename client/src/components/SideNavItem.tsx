import { Icon } from "react-feather";
interface SideNavItemProps {
  icon?: Icon;
  profileImage?: string;
  title?: string;
  className?: string;
  setCurrentTab?: () => void;
  setListSeeMore?: () => void;
  handleLogOut?: () => void;
}

const SideNavItem = ({
  icon: Icon,
  profileImage,
  title,
  className,
  setCurrentTab,
  setListSeeMore,
  handleLogOut,
}: SideNavItemProps) => {
  return (
    <div
      className={`sidenav-item ${className} my-1 rounded-[10px] p-3 hover:cursor-pointer hover:bg-[#f1f0f0] active:opacity-40`}
      onClick={
        setCurrentTab
          ? setCurrentTab
          : setListSeeMore
          ? setListSeeMore
          : handleLogOut
      }
    >
      <div className="flex items-center">
        {Icon && (
          <div className="sidenav-item__icon">
            <Icon />
          </div>
        )}
        {profileImage && (
          <div className="rounded-full border-[1px] border-solid">
            <img
              src={profileImage}
              className="image-icon-sidenav w-6 rounded-full hover:cursor-pointer"
            ></img>
          </div>
        )}
        <div className="ml-4 text-base max-lg:hidden">{title}</div>
      </div>
    </div>
  );
};

export default SideNavItem;

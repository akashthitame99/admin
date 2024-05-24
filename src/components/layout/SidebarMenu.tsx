import { ISidebarMenu } from "models/LayoutModel";
import { useState, useCallback, useMemo } from "react";
import { SidebarSubMenu } from "./SidebarSubMenu";
import { useNavigate, useLocation } from "react-router-dom";
import whiteDownArrowIcon from "assests/icons/whiteDownArrowIcon.svg";

interface Props {
  menu: ISidebarMenu;
  collapsed: boolean;
}

export const SidebarMenu: React.FC<Props> = ({ menu, collapsed }) => {
  const { label, icon, subMenu, path } = menu;
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const handleNavigate = useCallback(() => {
    if (subMenu && subMenu.length > 0) {
      setExpanded((prevState) => !prevState);
    } else if (path) {
      navigate(path);
    }
  }, [path, navigate, subMenu]);

  const isActive = useMemo(() => {
    if (subMenu && subMenu.length > 0) {
      return subMenu.some((subItem) => subItem.path === pathname);
    }
    return path === pathname;
  }, [subMenu, path, pathname]);

  return (
    <>
      <div
        className={`flex items-center p-3 cursor-pointer transition-all ease-in-out duration-200 delay-[200ms] hover:bg-hover ${
          isActive ? "bg-hover" : ""
        } ${collapsed ? " justify-center" : " justify-between"}`}
        onClick={handleNavigate}
      >
        <div
          className={`flex items-center justify-center  ${
            collapsed ? " " : "pl-2"
          }`}
        >
          {icon}
          <p
            className={`text-base font-normal text-white pl-2 pr-6 ${
              collapsed ? "hidden" : "block"
            }`}
          >
            {label}
          </p>
          {!collapsed && subMenu && subMenu.length > 0 && (
            <img
              height={10}
              width={10}
              src={whiteDownArrowIcon}
              alt=""
              className={`transition-transform transform ${
                expanded ? "rotate-180" : ""
              }`}
            />
          )}
        </div>
      </div>
      {expanded && subMenu && subMenu.length > 0 && (
        <div
          className={`flex flex-col space-y-2 ${
            collapsed ? "hidden" : "block"
          }`}
        >
          {subMenu.map((item) => (
            <SidebarSubMenu key={item.path} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

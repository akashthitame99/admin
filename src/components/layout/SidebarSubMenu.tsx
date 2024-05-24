import { ISidebarSubMenu } from "models/LayoutModel";
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const SidebarSubMenu = ({ item }: { item: ISidebarSubMenu }) => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const isActive = useMemo(() => item.path === pathname, [item.path, pathname]);

  return (
    <div
      className={`text-base font-normal text-white cursor-pointer pl-[46px] p-3 transition-all ease-in duration-300 delay-[200ms] hover:bg-[#0075A1] ${
        isActive ? "hover:bg-[#0075A1]" : ""
      }`}
      onClick={() => navigate(item.path)}
    >
      {item.label}
    </div>
  );
};

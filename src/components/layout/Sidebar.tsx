
import React from "react";
import { SidebarMenu } from "./SidebarMenu";
import logoutIcon from "assests/icons/logoutIcon.svg"
import { sideBarMenuList } from "./Routes";

interface Props {
  collapsed: boolean;
  className?: string;
}

export const Sidebar: React.FC<Props> = ({ collapsed, className }) => {
  

  return (
    <section
      id="sidebar"
      className={`bg-primary ${
        collapsed ? "w-20" : "w-64"
      } flex-1 fixed overflow-hidden transition-all duration-200 ${className}`}
    >
      <div className="relative h-full">
        <div className="flex w-full  py-6">
          <div
            className={`text-white text-3xl font-bold pl-7 ${
              collapsed ? "hidden" : "block"
            }`}
          >
            Akash
          </div>
        </div>

        <div className="flex flex-col w-full">
          {sideBarMenuList.map((menu, index) => (
            <SidebarMenu key={index} menu={menu} collapsed={collapsed} />
          ))}
        </div>
        <div
          className={`flex py-3 hover:bg-[#0075A1] w-full cursor-pointer lg:absolute bottom-5  ${
            collapsed ? " justify-center" : "pl-4"
          }`}
          onClick={() => {}}
        >
          <img
            src={logoutIcon}
            height={18}
            width={18}
            alt="logoutIcon"
            className="py-[6px]"
          />
          <div className={`text-white pl-2 ${collapsed ? "hidden" : "block"}`}>
            Log out
          </div>
        </div>
      </div>
    </section>
  );
};

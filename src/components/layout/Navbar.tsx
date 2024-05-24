import { useState, useCallback } from "react";
import { Sidebar } from "./Sidebar";
import hamburgurIcon from "assests/icons/hamburgurIcon.svg";
import Avatar from "assests/images/Avtar.jpeg";

export const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCollapseSidebar = useCallback(() => {
    setIsSidebarOpen((isOpen) => !isOpen);
  }, []);

  return (
    <section
      id="navbar"
      className="bg-gray-900 min-h-16 px-4 shadow-lg sticky inset-x-0 top-0 z-30 bg-white w-full"
    >
      <div className="flex justify-between items-center h-full  ">
        <div>
          <img
            src={hamburgurIcon}
            height={26}
            width={26}
            alt="navHamburgurIcon"
            className="cursor-pointer lg:hidden"
            onClick={handleCollapseSidebar}
          />
        </div>
        <div className="flex justify-end items-center gap-2">
          <div>
            <div className="text-base font-semibold text-end">Akash</div>
            <div className="text-xs text-[#6B7280] text-end">
              Akash@gmail.com
            </div>
          </div>
          <img
            className="inline-block h-9 w-9 rounded-full ring-2 ring-white cursor-pointer"
            src={Avatar}
            alt=""
          />
        </div>
      </div>
      <Sidebar
        collapsed={false}
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:hidden absolute -left-3`}
      />
    </section>
  );
};

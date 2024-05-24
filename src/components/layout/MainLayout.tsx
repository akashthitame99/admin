import Snackbar from "common/snackbar/Snackbar";
import { SnackbarContext } from "common/snackbar/SnackbarContext";
import collapsedIcon from "assests/icons/collapsedIcon.svg";

import { useContext, useState, useCallback } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  const snackbarCtx = useContext(SnackbarContext);
  const [collapsed, setIsSidebarCollapsed] = useState(false);

  const handleCollapseSidebar = useCallback(() => {
    setIsSidebarCollapsed((prevCollapsed) => !prevCollapsed);
  }, []);

  return (
    <div className="flex lg:block">
      {snackbarCtx.open && <Snackbar />}

      <>
        <div
          className={`bg-[#0075A1] hidden lg:flex justify-center items-center fixed mt-4 z-50 h-8 w-5 rounded-e-lg cursor-pointer transition-all duration-200 ${
            collapsed ? "ml-20" : "ml-64"
          } `}
          onClick={handleCollapseSidebar}
        >
          <img
            src={collapsedIcon}
            height={10}
            width={10}
            alt="collapsedIcon"
            className={`${collapsed ? "rotate-180" : ""}`}
          />
        </div>
        <Sidebar collapsed={collapsed} className="hidden lg:block h-screen " />
        <div
          className={`flex flex-col flex-1 h-screen relative transition-all duration-200 ${
            collapsed ? "lg:ml-20" : "lg:ml-64"
          }`}
        >
          <Navbar />
          <main className="p-4 flex-1 ">
            <Outlet />
          </main>
        </div>
      </>
    </div>
  );
};

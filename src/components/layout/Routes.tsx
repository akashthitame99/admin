import { RouteObject } from "react-router-dom";
import userManagementIcon from "assests/icons/userManagementIcon.svg";

import async from "common/Async";
const DashboardPage = async(
  () => import("../../Pages/dashboard/DashboardPage")
);
const ManageUserPage = async(
  () => import("../../Pages/manage-users/ManageUsersPage")
);
const CreateUserPage = async(
  () => import("../../Pages/manage-users/CreateUserPage")
);
const SignInPage = async(() => import("../../Pages/authentication/SigninPage"));
const ForgotPasswordPage = async(
  () => import("../../Pages/authentication/ForgotPasswordPage")
);

export const DashboardRoutes = (
  isAuthenticated: Boolean
): Array<RouteObject> => {
  return [
    {
      id: "dashboard-route",
      path: "/",
      Component: isAuthenticated ? DashboardPage : SignInPage,
    },
    {
      id: "manage-users-route",
      path: "/manage-users",
      Component: isAuthenticated ? ManageUserPage : SignInPage,
    },
    {
      id: "create-users-route",
      path: "manage-users/create-user",
      Component: isAuthenticated ? CreateUserPage : SignInPage,
    },
  ];
};

export const authRoutes: Array<RouteObject> = [
  {
    id: "signin-route",
    path: "/",
    Component: SignInPage,
  },
  {
    id: "forgot-password-route",
    path: "auth/forgotF-password",
    Component: ForgotPasswordPage,
  },
];

export const sideBarMenuList = [
  {
    label: "Dashboard",
    path: "/",
    icon: (
      <img
        src={userManagementIcon}
        height={18}
        width={18}
        alt="userManagementIcon"
        className="py-[6px]"
      />
    ),
  },
  {
    label: "User Management",
    path: "/manage-users",
    icon: (
      <img
        src={userManagementIcon}
        height={18}
        width={18}
        alt="userManagementIcon"
        className="py-[6px]"
      />
    ),
  },
];

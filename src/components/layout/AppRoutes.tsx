import { FC } from "react";
import { MainLayout } from "./MainLayout";
import AuthLayout from "./AuthLayout";
import { authRoutes } from "./Routes";
import { useRoutes } from "react-router-dom";
import { DashboardRoutes } from "./Routes";

const AuthenticationRoutes = {
  path: "/",
  element: <AuthLayout />,
  children: authRoutes,
};

const MainRoutes = (isAuthenticated: Boolean) => {
  return {
    path: "/",
    element: isAuthenticated ? <MainLayout /> : <AuthLayout />,
    children: DashboardRoutes(isAuthenticated),
  };
};

const AppRoutes: FC = () => {
// Check is authenticated
  return useRoutes([MainRoutes(true), AuthenticationRoutes]);
};

export default AppRoutes;

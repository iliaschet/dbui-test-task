import React from "react";
import {
  RouteObject,
  useRoutes,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { Dashboard } from "../pages/Dashboard";
import TestTasks from "../pages/TestTasks";

export const ROUTES: any = {
  DASHBOARD: "/",
  TASKS: "/test-tasks",
};

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: ROUTES.TASKS,
          element: <TestTasks />,
        },
        {
          path: "*",
          element: <Navigate to="/" replace />,
        },
      ],
    },
  ];

  const element = useRoutes(routes);

  return element;
};

export default Router;

import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { AppLayout } from "@/app/layouts";
import { AppRouteObject } from "@/shared/types";
import { ProtectedRoute } from "@/shared/hocs";
import { transactionRoutes } from "@/modules/Transaction";
import { dashboardRoutes } from "@/modules/Dashboard";
import LoginPage from "@/modules/Auth/page";
import { AuthLayout } from "@/modules/Auth/layout";
import { companyRoutes } from "@/modules/Company";

export const pagesRoutes: AppRouteObject[] = [
  ...dashboardRoutes,
  ...transactionRoutes,
  ...companyRoutes,
];

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute roles={[]}>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: pagesRoutes,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

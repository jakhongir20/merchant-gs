import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { AppLayout } from "@/app/layouts";
import { AppRouteObject } from "@/shared/types";
import { ProtectedRoute } from "@/shared/hocs";
import { transactionRoutes } from "@/modules/Transaction";
import { dashboardRoutes } from "@/modules/Dashboard";

export const pagesRoutes: AppRouteObject[] = [
  ...dashboardRoutes,
  ...transactionRoutes,
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
  // {
  //     path: "/Auth",
  //     element: <AuthLayout/>,
  //     children: [
  //         {
  //             path: "/Auth/login",
  //             element: <LoginPage/>,
  //         },
  //     ],
  // },
];

export const router = createBrowserRouter(routes);

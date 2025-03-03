import { AppRouteObject } from "@/shared/types";
import { withLazyLoad } from "@/shared/hocs";
import { DashboardLayout } from "@/modules/Dashboard";

const routes: AppRouteObject[] = [
  {
    path: "dashboard",
    meta: {
      title: "Sidebar.Dashboard",
      icon: "home",
    },
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: withLazyLoad(() => import("@/modules/Dashboard/page")),
      },
    ],
  },
];

export default routes;

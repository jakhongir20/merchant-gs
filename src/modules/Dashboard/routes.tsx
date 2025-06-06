import { AppRouteObject } from "@/shared/types";
import { withLazyLoad } from "@/shared/hocs";

const routes: AppRouteObject[] = [
  {
    path: "dashboard",
    meta: {
      title: "Sidebar.Dashboard",
      icon: "home",
    },
    children: [
      {
        index: true,
        element: withLazyLoad(() => import("@/modules/Dashboard/page")),
      },
    ],
  },
];

export default routes;

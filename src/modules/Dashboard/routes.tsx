import { AppRouteObject } from "@/shared/types";
import { withLazyLoad } from "@/shared/hocs";

const routes: AppRouteObject[] = [
  {
    path: "dashboard",
    meta: {
      title: "Sidebar.Dashboard",
      icon: "home",
    },
    element: withLazyLoad(() => import("@/modules/Transaction/pages/Page")),
  },
];

export default routes;

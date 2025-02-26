import { AppRouteObject } from "@/shared/types";
import { withLazyLoad } from "@/shared/hocs";

const routes: AppRouteObject[] = [
  {
    path: "transaction",
    meta: {
      title: "Sidebar.Transaction",
      icon: "finance",
    },
    element: withLazyLoad(() => import("@/modules/Transaction/pages/Page")),
  },
];

export default routes;

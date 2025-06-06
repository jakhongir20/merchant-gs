import { withLazyLoad } from "@/shared/hocs";
import { AppRouteObject } from "@/shared/types";

const routes: AppRouteObject[] = [
  {
    path: "company",
    meta: {
      title: "Sidebar.Company",
      icon: "education",
    },
    children: [
      {
        index: true,
        element: withLazyLoad(() => import("@/modules/Company/page")),
      },
    ],
  },
];

export default routes;

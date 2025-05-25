import { withLazyLoad } from "@/shared/hocs";
import { AppRouteObject } from "@/shared/types";
import { CompanyLayout } from "@/modules/Company";

const routes: AppRouteObject[] = [
  {
    path: "company",
    meta: {
      title: "Sidebar.Company",
      icon: "education",
    },
    element: <CompanyLayout />,
    children: [
      {
        index: true,
        element: withLazyLoad(() => import("@/modules/Company/page")),
      },
    ],
  },
];

export default routes;

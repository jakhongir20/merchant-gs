import { TransactionLayout } from "@/modules/Transaction";
import { withLazyLoad } from "@/shared/hocs";
import { AppRouteObject } from "@/shared/types";

const routes: AppRouteObject[] = [
  {
    path: "transaction",
    meta: {
      title: "Sidebar.Transaction",
      icon: "finance",
    },
    element: <TransactionLayout />,
    children: [
      {
        index: true,
        element: withLazyLoad(() => import("@/modules/Transaction/page")),
      },
    ],
  },
];

export default routes;

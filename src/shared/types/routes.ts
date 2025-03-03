import { RouteObject } from "react-router-dom";
import { IconType } from "@/shared/types";

export type AppRouteObject = RouteObject & {
  path: RouteObject["path"];
  meta: {
    title: string;
    icon: IconType;
  };
  children?: RouteObject["children"];
};

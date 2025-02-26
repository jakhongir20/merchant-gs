import { RouteObject } from "react-router-dom";
import { IconType } from "@/shared/types";

export type AppRouteObject = RouteObject & {
  path: string;
  meta: {
    title: string;
    icon: IconType;
  };
  children?: AppRouteObject[];
};

export type MenuData = {
  title: string;
  icon: IconType;
  path: string;
};

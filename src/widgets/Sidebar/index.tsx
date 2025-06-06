import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppRouteObject } from "@/shared/types";
import { pagesRoutes } from "@/app/routes";
import { useTranslation } from "react-i18next";
import { Icon } from "@/shared/ui";
import { cn } from "@/shared/helpers";

interface Props {
  className?: string;
  collapsed: boolean;
}

export const Sidebar: FC<Props> = ({ collapsed }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const width = collapsed ? 100 : 265;

  return (
    <Sider
      theme="light"
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="h-screen border-r border-gray-300 px-[15px]"
      width={width}
    >
      <div>
        <div
          className={cn(
            "mb-10 mt-5 flex h-10 items-center justify-start transition-all",
            collapsed ? "px-2" : "px-4",
          )}
        >
          <img
            className="mr-auto h-full"
            src={collapsed ? "/logo-circle.svg" : "/logo.svg"}
            alt="Logo"
          />
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname]}
          className="!border-0"
          items={
            pagesRoutes.map((item: AppRouteObject) => {
              const key = `/${item.path}`;
              const isActive = location.pathname === key;

              return {
                key,
                label: (
                  <span
                    className={cn(
                      "!d-table font-medium !opacity-100",
                      !collapsed && (isActive ? "text-red" : "text-gray"),
                    )}
                  >
                    {t(item.meta.title)}
                  </span>
                ),
                icon: (
                  <Icon
                    name={item.meta.icon}
                    color={isActive ? "!text-red" : "!text-gray"}
                    width={20}
                    className={cn("block h-[inherit]")}
                  />
                ),
                onClick: () => {
                  navigate(key);
                },
                className: cn(
                  "!pl-[15px] !h-11 !m-0 !w-full !mb-1 sidebar-item",
                  isActive ? "!bg-red-10" : "",
                ),
              };
            }) as unknown as MenuProps["items"]
          }
        />
      </div>
    </Sider>
  );
};

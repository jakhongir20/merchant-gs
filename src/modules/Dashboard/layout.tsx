import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

interface Props {}

export const DashboardLayout: FC<Props> = () => {
  return (
    <Layout.Content className="p-[30px]">
      <Outlet />
    </Layout.Content>
  );
};

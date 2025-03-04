import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

interface Props {}

export const AuthLayout: FC<Props> = () => {
  return (
    <Layout.Content className="">
      <Outlet />
    </Layout.Content>
  );
};

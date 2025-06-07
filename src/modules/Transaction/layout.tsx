import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";

interface Props {}

export const TransactionLayout: FC<Props> = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout.Content
      className="rounded-xl p-30px"
      style={{
        background: colorBgContainer,
      }}
    >
      <Outlet />
    </Layout.Content>
  );
};

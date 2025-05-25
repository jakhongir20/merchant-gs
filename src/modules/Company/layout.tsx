import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";

interface Props {}

export const CompanyLayout: FC<Props> = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout.Content
      className="m-[30px] rounded-xl p-[30px]"
      style={{
        background: colorBgContainer,
      }}
    >
      <Outlet />
    </Layout.Content>
  );
};

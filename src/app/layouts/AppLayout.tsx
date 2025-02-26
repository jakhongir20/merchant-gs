import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";
import { Header, Sidebar } from "@/widgets";

interface Props {
  className?: string;
}

export const AppLayout: FC<Props> = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout.Content
          className="m-[30px] max-h-[100vh] rounded-xl p-[30px]"
          style={{
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

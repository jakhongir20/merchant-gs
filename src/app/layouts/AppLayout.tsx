import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Header, Sidebar } from "@/widgets";

interface Props {
  className?: string;
}

export const AppLayout: FC<Props> = () => {
  const [collapsed, setCollapsed] = useState(true);
  /* eslint-disable @typescript-eslint/no-unused-vars */

  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout style={{ backgroundColor: "#f3f6f9" }}>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Outlet />
      </Layout>
    </Layout>
  );
};

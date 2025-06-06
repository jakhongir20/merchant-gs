import React, { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Footer, Header, Sidebar } from "@/widgets";

interface Props {
  className?: string;
}

export const AppLayout: FC<Props> = () => {
  const [collapsed, setCollapsed] = useState(() => {
    const stored = localStorage.getItem("sidebar-collapsed");
    return stored !== null ? JSON.parse(stored) : true;
  });

  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout style={{ backgroundColor: "#f3f6f9" }}>
        <Header
          collapsed={collapsed}
          setCollapsed={(value) => {
            setCollapsed(value);
            localStorage.setItem("sidebar-collapsed", JSON.stringify(value));
          }}
        />
        <Layout.Content className="h-[calc(100vh-138px)] overflow-y-auto p-5 xl:p-[30px]">
          <Outlet />
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

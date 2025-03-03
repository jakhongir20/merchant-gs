import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Tabs as AntTabs, TabsProps } from "antd";
import { cn } from "@/shared/helpers";

interface Props {
  className?: string;
  items: TabsProps["items"];
  activeTabKey?: string;
  setQuery?: boolean;
  onChange?: (key: string) => void;
}

export const Tabs: FC<Props> = ({
  className,
  items = [],
  activeTabKey = "1",
  setQuery = true,
  onChange,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tabQuery = setQuery
    ? searchParams.get("tab") || activeTabKey
    : activeTabKey;

  const [activeTab, setActiveTab] = useState(tabQuery);

  useEffect(() => {
    if (setQuery) {
      setActiveTab(tabQuery);
    }
  }, [tabQuery, setQuery]);

  const handleChange = (key: string) => {
    setActiveTab(key);
    onChange?.(key);

    if (setQuery) {
      searchParams.set("tab", key);
      setSearchParams((prevParams) => ({
        ...prevParams,
        tab: key,
      }));
    }
  };

  const updatedItems: TabsProps["items"] = items.map((item) => ({
    ...item,
    label: (
      <div className="flex items-center gap-2 px-0 text-sm">{item.label}</div>
    ),
    children: <div className="p-5">{item.children}</div>,
    forceRender: true,
    className: "[&_.ant-tabs-tab]:!mx-4",
  }));

  return (
    <AntTabs
      activeKey={activeTab}
      items={updatedItems}
      onChange={handleChange}
      tabBarGutter={0}
      destroyInactiveTabPane={false}
      tabBarStyle={{
        margin: "0",
        borderBottom: "1px solid #D8D8E5",
      }}
      rootClassName={"[&_.ant-tabs-nav-list]:!mx-3 [&_.ant-tabs-tab]:!mx-2"}
      className={cn(className)}
    />
  );
};

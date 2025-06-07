import { FC } from "react";
import { Avatar, Badge, Flex, Layout, Row, Switch, theme, Tooltip } from "antd";
import { Button, Icon } from "@/shared/ui";
import { cn } from "@/shared/helpers";

interface Props {
  className?: string;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const Header: FC<Props> = ({ collapsed, setCollapsed }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout.Header
      className="relative flex h-20 items-center justify-between border-b border-gray-300 px-[30px]"
      style={{
        background: colorBgContainer,
      }}
    >
      <Button
        type={"link"}
        className="top-[calc(50% - 17px)] absolute left-[-17px] z-20 flex h-8 !w-8 items-center justify-center gap-4 rounded-md border border-gray-300 bg-white hover:!bg-gray-300"
        icon={
          <Icon
            name="arrow-double"
            width={13}
            className={cn(collapsed ? "rotate-180" : "")}
          />
        }
        onClick={() => setCollapsed(!collapsed)}
      />

      <Row
        wrap={false}
        align="middle"
        justify="space-between"
        className="h-full w-full"
      >
        <Flex align="center">
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-md bg-red-500">
            <img src="/test-brand.svg" alt="Brand" />
          </div>
          <div className="ml-3 text-lg">
            <div className="mb-1 flex items-center gap-2 text-xl font-bold text-gray-500">
              <span>OOO “Anglesey food”</span>
              <Icon name="arrow-up-s" width={18} />
            </div>
            <p className="text-xs font-semibold text-gray">Кассы</p>
          </div>
        </Flex>
        <Flex align="center">
          <Flex
            align="center"
            className="relative mr-5 h-11 gap-2.5 rounded-[10px] border border-dashed border-gray-400 px-3.5 py-2.5"
          >
            <Switch size="default" />
            <span className="">Без % Global Pay</span>
            <Tooltip title={"Платежи без комиссии"} placement={"bottom"}>
              <p>
                <Icon name="info" color="text-gray" className="" />
              </p>
            </Tooltip>
          </Flex>
          <div className="h-26px w-[1px] bg-gray-400"></div>
          <Flex align="center" className="ml-5 cursor-pointer">
            <Icon name="sun" />
          </Flex>
          <Flex align="center" className="ml-8 mr-5 cursor-pointer">
            <Badge
              count={5}
              styles={{
                indicator: {
                  width: 16,
                  height: 16,
                },
              }}
              color={"#F1416C"}
            >
              <p>
                <Icon name="notification" />
              </p>
            </Badge>
          </Flex>
          <Avatar
            alt="avatar"
            shape="circle"
            size={40}
            className="bg-[#EEE5FF] text-[#7239EA]"
          >
            <span>G</span>
          </Avatar>
        </Flex>
      </Row>
    </Layout.Header>
  );
};

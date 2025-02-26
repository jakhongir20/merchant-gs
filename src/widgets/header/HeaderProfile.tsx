import React, { FC, useState } from "react";
import { cn, rotateIcon } from "@/shared/helpers";
// import { Dropdown, Icon } from "@/shared/ui";
import { useNavigate } from "react-router-dom";
import { ApiService } from "@/shared/lib/services";
import { Dropdown, MenuProps } from "antd";
import { Icon } from "@/shared/ui";

interface Props {
  className?: string;
}

export const HeaderProfile: FC<Props> = ({}) => {
  const navigate = useNavigate();
  const [openUser, setOpenUser] = useState(false);

  const handleLogout = () => {
    ApiService.deleteCredientials();
    navigate("/auth/login", { replace: true });
  };

  const handleOpenUser = () => {
    setOpenUser(!openUser);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex h-26px items-center gap-1.5">
          <Icon icon="home" />
          <span className="text-black-100">Profile</span>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex h-26px items-center gap-1.5">
          <Icon icon="setting" />
          <span className="text-black-100">Test</span>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div
          className="flex h-26px items-center gap-1.5"
          onClick={handleLogout}
        >
          <Icon icon="setting" />
          <span className="text-black-100">Logout</span>
        </div>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }} open={openUser} onOpenChange={handleOpenUser}>
      <div className="flex h-6 w-11 cursor-pointer items-center rounded-md bg-violet">
        <div className="flex h-full w-6 items-center justify-center rounded-md bg-white text-xs font-semibold text-black">
          SB
        </div>
        <div className="mx-auto flex justify-center">
          <Icon
            icon="chevron-down"
            color="text-white"
            className={cn(rotateIcon(openUser))}
            height={12}
          />
        </div>
      </div>
    </Dropdown>
  );
};

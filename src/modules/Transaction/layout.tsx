import React, { FC } from "react";
import { cn } from "@/shared/helpers";
import { Outlet } from "react-router-dom";

interface Props {
  className?: string;
}

export const TransactionLayout: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Outlet />
    </div>
  );
};

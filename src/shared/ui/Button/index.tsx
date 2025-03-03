import { FC, ReactNode } from "react";
import { Button as AntButton, ButtonProps } from "antd";
import { cn } from "@/shared/helpers";

interface Props extends ButtonProps {
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  loading?: boolean;
  variant?: "filled" | "outlined";
}

/* eslint-disable @typescript-eslint/no-unused-vars */

export const Button: FC<Props> = ({
  className,
  children,
  icon,
  loading = false,
  variant = "filled",
  ...rest
}) => {
  return (
    <AntButton
      loading={loading}
      className={cn(className)}
      variant={variant}
      // className={`flex h-10 items-center !gap-1 px-6 py-2.5 leading-[18.2px] shadow-none ${className}`}
      {...rest}
      icon={
        icon ? (
          <span className="flex items-center justify-center">{icon}</span>
        ) : null
      }
    >
      {children}
    </AntButton>
  );
};

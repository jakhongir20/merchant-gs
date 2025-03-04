import { FC, ReactNode } from "react";
import { cn } from "@/shared/helpers";
import { Divider as AntDivider, type DividerProps } from "antd";

interface Props extends DividerProps {
  className?: string;
  children?: ReactNode;
  size?: "default" | "small";
}

export const Divider: FC<Props> = ({
  className,
  children,
  size = "default",
  ...rest
}) => {
  return (
    <AntDivider
      style={{
        borderTopColor: "#E1E3EA",
        margin: size === "default" ? "22px 0" : "16px 0",
      }}
      className={cn("", className)}
      {...rest}
    >
      {children}
    </AntDivider>
  );
};

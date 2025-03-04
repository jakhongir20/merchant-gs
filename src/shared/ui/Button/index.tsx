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
  const textColor = rest.color === "danger" ? "text-red-300" : "";
  return (
    <AntButton
      loading={loading}
      className={cn(className)}
      variant={variant}
      {...rest}
      icon={
        icon ? (
          <span
            className={cn(
              "flex items-center justify-center",
              rest.color === "danger"
                ? "[&_.base-index]:!text-red-300"
                : "[&_.base-index]:!text-gray-900",
            )}
          >
            {icon}
          </span>
        ) : null
      }
    >
      <span className={textColor}>{children}</span>
    </AntButton>
  );
};

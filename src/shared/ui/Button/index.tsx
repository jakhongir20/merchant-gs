import React, { FC, ReactNode } from "react";
import { Button as AntButton, ButtonProps } from "antd";

interface Props extends ButtonProps {
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  loading?: boolean;
}

/* eslint-disable @typescript-eslint/no-unused-vars */

export const Button: FC<Props> = ({
  className,
  children,
  icon,
  loading = false,
  ...rest
}) => {
  // let rootClassName = "";
  // switch (color) {
  //   case "red":
  //     rootClassName = "!bg-red hover:!bg-red-200";
  //     break;
  //   case "blue":
  //     rootClassName = "!bg-blue hover:!bg-blue-200";
  //     break;
  //   default:
  //     rootClassName = "";
  //     break;
  // }

  return (
    <AntButton
      loading={loading}
      // className={`flex h-10 items-center !gap-1 px-6 py-2.5 leading-[18.2px] shadow-none ${className}`}
      // rootClassName={rootClassName}
      {...rest}
      icon={
        (icon ??= (
          <span className="flex items-center justify-center">{icon}</span>
        ))
      }
    >
      {children}
    </AntButton>
  );
};

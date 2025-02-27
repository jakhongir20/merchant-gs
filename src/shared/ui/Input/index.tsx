/* eslint-disable @typescript-eslint/no-unused-vars */

import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Input as AntInput, InputProps as AntDInputProps } from "antd";
import { cn } from "@/shared/helpers";

interface Props extends AntDInputProps {
  className?: string;
  suffix?: ReactNode;
  prefix?: ReactNode;
  addonAfter?: ReactNode;
  addonClassName?: string;
}

export const Input: FC<Props> = ({
  className,
  placeholder,
  suffix,
  prefix,
  addonAfter,
  size = "middle",
  addonClassName = "",
  width = 300,
  ...rest
}) => {
  const { t } = useTranslation();

  return (
    <AntInput
      style={{ width }}
      variant="filled"
      className={cn(
        "px-3 py-2",
        prefix ? "[&_.ant-input-prefix]:!mr-1.5" : "",
        className,
      )}
      placeholder={placeholder || t("Common.Input.Enter")}
      addonAfter={
        addonAfter && (
          <div className={cn("flex-center h-6 w-6", addonClassName)}>
            {addonAfter}
          </div>
        )
      }
      prefix={prefix}
      suffix={
        suffix && (
          <div className="flex h-[30px] w-8 cursor-pointer items-center rounded-md bg-gray-800 p-1.5">
            {suffix}
          </div>
        )
      }
      {...rest}
    />
  );
};

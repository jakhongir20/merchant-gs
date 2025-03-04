import React, { FC, ReactNode } from "react";
import { Select } from "antd";
import { Icon } from "@/shared/ui";

interface Props {
  label: string;
  labelIcon?: ReactNode;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

export const LabeledSelect: FC<Props> = ({
  label,
  labelIcon,
  value,
  options,
  onChange,
}) => {
  return (
    <div className="flex items-center">
      <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-100">
        {(labelIcon ??= labelIcon)}
        {label}
      </span>
      <Select
        value={value}
        onChange={onChange}
        options={options}
        className="text-xs font-semibold text-gray-600 [&_.ant-select-selection-item]:!text-xs [&_.ant-select-selection-item]:!font-semibold"
        rootClassName="[&_.ant-select-item-option-content]:!text-xs [&_.ant-select-item]:!min-h-max [&_.ant-select-item]:!my-[1px]"
        variant={"borderless"}
        suffixIcon={<Icon name="arrow" />}
        popupMatchSelectWidth={false}
      />
    </div>
  );
};

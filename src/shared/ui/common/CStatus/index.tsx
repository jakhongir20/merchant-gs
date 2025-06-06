import { FC } from "react";
import { cn } from "@/shared/helpers";
import { Icon } from "@/shared/ui";
import { getStatusLabel, StatusCode } from "@/shared/utils";

interface Props {
  className?: string;
  value: StatusCode;
  size?: "default" | "small";
}

type StatusData = {
  label: string;
  color: string;
  iconElement: JSX.Element;
};

const generateStatus = (status: StatusCode): StatusData | undefined => {
  switch (status) {
    case 1:
      return {
        label: getStatusLabel(status),
        color: "bg-green-300 text-green-400",
        iconElement: <Icon name="check" color="text-green-500" width={12} />,
      };
    case 2:
      return {
        label: getStatusLabel(status),
        color: "bg-orange-200 text-orange",
        iconElement: <Icon name="refresh" color="text-orange-100" width={12} />,
      };
    case 3:
      return {
        label: getStatusLabel(status),
        color: "bg-gray-1000 text-gray-800",
        iconElement: <Icon name="reverse" color="text-gray-900" width={12} />,
      };
    case 4:
      return {
        label: getStatusLabel(status),
        color: "bg-red-600 text-red-200",
        iconElement: <Icon name="cross" color="text-red-200" width={12} />,
      };
    case 5:
      return {
        label: getStatusLabel(status),
        color: "bg-green-300 text-green-400",
        iconElement: <Icon name="dot-active" color="text-red-200" width={10} />,
      };
    case 6:
      return {
        label: getStatusLabel(status),
        color: "bg-red-600 text-red-200",
        iconElement: <Icon name="cross" color="text-red-200" width={12} />,
      };
  }
};

export const CStatus: FC<Props> = ({ className, value, size = "default" }) => {
  const { label, color, iconElement } = generateStatus(value) ?? {
    label: "",
    color: "",
    iconElement: null,
  };

  return (
    <div
      className={cn(
        color,
        "flex max-w-max items-center gap-1 rounded-md px-2 py-[5px] font-medium",
        size === "small" ? "h-5 text-xs" : "h-[22px]",
        className,
      )}
    >
      {iconElement}
      {label}
    </div>
  );
};

import { FC } from "react";
import { cn } from "@/shared/helpers";
import { Icon } from "@/shared/ui";
import { getStatusLabel } from "@/shared/utils";

interface Props {
  className?: string;
  value: number;
  size?: "default" | "small";
}

const generateStatus = (status: number) => {
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
    default:
      return {
        label: getStatusLabel(status),
        color: "bg-red-600 text-red-200",
        iconElement: <Icon name="cross" color="text-red-200" width={12} />,
      };
  }
};

export const CStatus: FC<Props> = ({ className, value, size = "default" }) => {
  const { label, color, iconElement } = generateStatus(Number(value));

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

import { FC } from "react";
import { cn } from "@/shared/helpers";
import { Icon } from "@/shared/ui";

interface Props {
  className?: string;
  status: "up" | "down";
  value: number | string;
}

export const CTrendBadge: FC<Props> = ({ className, value, status }) => {
  return (
    <div
      className={cn(
        "flex h-[22px] items-center gap-1 rounded p-[5px]",
        status === "up" ? "bg-green-700" : "bg-red-500",
        className,
      )}
    >
      <Icon
        name="arrow-line"
        className={
          status === "up" ? "text-green-600" : "rotate-180 text-red-100"
        }
        width={10}
      />
      <span
        className={cn(
          "text-xs font-semibold",
          status === "up" ? "text-green-600" : "text-red-100",
        )}
      >
        {value}%
      </span>
    </div>
  );
};

import { FC } from "react";
import { cn } from "@/shared/helpers";
import { Icon } from "@/shared/ui";

interface Props {
  className?: string;
  status: "in" | "out";
  size?: "small" | "large";
}

/* eslint-disable @typescript-eslint/no-unused-vars */

export const CIndicator: FC<Props> = ({
  className,
  status,
  size = "large",
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full",
        size === "small" ? "h-5 w-5" : "h-[50px] w-[50px]",
        status === "in" ? "rotate-180 bg-green-200" : "bg-blue-200",
        className,
      )}
    >
      <Icon
        name="arrow-indicator"
        width={size === "small" ? 6 : 14}
        color={status === "out" ? "text-blue-100" : "text-green-100"}
      />
    </div>
  );
};

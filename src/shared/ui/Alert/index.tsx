import { FC } from "react";
import { cn } from "@/shared/helpers";
import { Icon } from "@/shared/ui";

interface Props {
  className?: string;
  type: "info" | "warning";
  message: string;
}

export const Alert: FC<Props> = ({ className, type, message }) => {
  const iconTextColor = type === "info" ? "text-orange" : "text-red-300";

  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-lg px-4 py-2",
        type === "info" ? "bg-orange-200" : "bg-red-400",
        className,
      )}
    >
      <Icon name={type} className={iconTextColor} width={24} />
      <span className={cn("text-[13px] font-medium leading-4", iconTextColor)}>
        {message}
      </span>
    </div>
  );
};

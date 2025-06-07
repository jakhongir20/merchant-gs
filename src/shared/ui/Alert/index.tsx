import { FC } from "react";
import { cn } from "@/shared/helpers";
import { Icon } from "@/shared/ui";

interface Props {
  className?: string;
  type: "info" | "warning" | "success";
  message: string;
  typeColor?: "success";
}

export const Alert: FC<Props> = ({ className, type, message, typeColor }) => {
  let iconTextColor: string | undefined;
  let bgColor: string | undefined;

  switch (type) {
    case "info":
      bgColor = "bg-orange-200";
      iconTextColor = "text-orange";
      break;
    case "warning":
      bgColor = "bg-red-400";
      iconTextColor = "text-red-300";
      break;
    case "success":
      bgColor = "bg-green-200";
      iconTextColor = "text-green-100";
      break;
    default:
      bgColor = undefined;
      iconTextColor = undefined;
  }

  if (typeColor === "success") {
    bgColor = "bg-green-200";
    iconTextColor = "text-green-100";
  }

  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-lg px-4 py-2",
        bgColor,
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

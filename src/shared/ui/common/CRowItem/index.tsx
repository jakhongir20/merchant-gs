import { FC } from "react";
import { cn } from "@/shared/helpers";

interface Props {
  className?: string;
  value: string;
}

export const CRowItem: FC<Props> = ({ className, value }) => {
  return (
    <span
      className={cn(
        "text-sm font-normal tracking-[0.6px] text-gray-700",
        className,
      )}
    >
      {value}
    </span>
  );
};

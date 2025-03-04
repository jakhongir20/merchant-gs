import { FC, ReactNode } from "react";
import { cn } from "@/shared/helpers";

interface Props {
  className?: string;
  children: ReactNode;
}

export const DottedTag: FC<Props> = ({ className, children }) => {
  return (
    <span
      className={cn(
        "inline-block flex h-9 items-baseline rounded-[30px] border border-dashed border-gray-400 px-3 py-2 text-xs font-medium text-gray-500",
        className,
      )}
    >
      {children}
    </span>
  );
};

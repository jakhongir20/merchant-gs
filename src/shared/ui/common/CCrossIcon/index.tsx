import { FC } from "react";
import { Icon } from "@/shared/ui";
import { cn } from "@/shared/helpers";

interface Props {
  className?: string;
  onClick: () => void;
}

export const CCrossIcon: FC<Props> = ({ className, onClick }) => {
  return (
    <div
      className={cn("group cursor-pointer transition-all", className)}
      onClick={onClick}
    >
      <Icon
        name="cross-rounded"
        className="transition-all group-hover:text-gray-100"
      />
    </div>
  );
};

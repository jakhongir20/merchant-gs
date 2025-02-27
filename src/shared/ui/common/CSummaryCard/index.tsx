import { FC } from "react";
import { cn } from "@/shared/helpers";
import { Icon } from "@/shared/ui";

interface Props {
  className?: string;
  label: string;
  value: string;
  status?: boolean;
}

export const CSummaryCard: FC<Props> = ({
  className,
  label,
  value,
  status = true,
}) => {
  return (
    <div
      className={cn(
        "flex h-10 items-center justify-between gap-2.5 rounded-[10px] border border-dashed border-gray-400 p-3 font-semibold",
        className,
      )}
    >
      <p className="text-sm text-gray">{label}:</p>
      <Icon
        name="arrow-line"
        width={10}
        className={status ? "text-green-200" : "rotate-180 text-red-100"}
      />
      <p className="text-base text-gray-600">{value} </p>
    </div>
  );
};

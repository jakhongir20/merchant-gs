import { FC } from "react";
import { cn } from "@/shared/helpers";
import { CSummaryCard } from "@/shared/ui";

interface Props {
  className?: string;
}

export const TableHeader: FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <CSummaryCard label={"cумма"} value={"1 345 500 000 UZS"} />
      <CSummaryCard label={"кол-во:"} value={"7 895 шт"} status={false} />
    </div>
  );
};

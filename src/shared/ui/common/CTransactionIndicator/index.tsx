import { FC } from "react";
import { cn } from "@/shared/helpers";
import { Icon } from "@/shared/ui";
import { TransactionRow } from "@/modules/Transaction/page";

interface Props {
  className?: string;
  status: TransactionRow["direction"];
}

/* eslint-disable @typescript-eslint/no-unused-vars */

export const CTransactionIndicator: FC<Props> = ({ className, status }) => {
  return (
    <div
      className={cn(
        "flex h-[50px] w-[50px] items-center justify-center rounded-full",
        status === "in" ? "rotate-180 bg-green-200" : "bg-blue-200",
        className,
      )}
    >
      {status === "out" ? (
        <Icon name="arrow-indicator" width={14} color="text-blue-100" />
      ) : (
        <Icon name="arrow-indicator" width={14} color="text-green-100" />
      )}
    </div>
  );
};

import { FC, ReactNode } from "react";
import { cn, formatAmount } from "@/shared/helpers";
import { Status } from "@/shared/types";

interface Props {
  className?: string;
  amount: number;
  status: Status;
}

export const CTablePrice: FC<Props> = ({ className, amount, status }) => {
  let formattedAmount: string | ReactNode = formatAmount(amount);

  switch (status) {
    case Status.Success:
      formattedAmount = `+${formattedAmount}`;
      break;
    case Status.InProgress:
      formattedAmount = `-${formattedAmount}`;
      break;
    case Status.Refund:
    case Status.Rejected:
      formattedAmount = <span className="line-through">{formattedAmount}</span>;
      break;
    default:
      formattedAmount = `${formattedAmount}`;
      break;
  }

  return (
    <div className={cn("font-semibold text-black", className)}>
      {formattedAmount}
    </div>
  );
};

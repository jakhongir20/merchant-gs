import { FC } from "react";
import { cn, maskCardNumber } from "@/shared/helpers";
import { PaymentType } from "@/shared/types";

interface Props {
  className?: string;
  type: PaymentType;
  number: string;
}

export const CCardNumber: FC<Props> = ({ className, type, number }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="max-w-8">
        <img src={`/svg/payment/${type}.svg`} alt="" />
      </div>
      <span className="text-sm font-normal text-gray-700">
        {maskCardNumber(number)}
      </span>
    </div>
  );
};

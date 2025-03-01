import { FC } from "react";
import { cn } from "@/shared/helpers";

export type PaymentType = "humo" | "uzcard" | "visa" | "mastercard";

interface Props {
  className?: string;
  type: PaymentType;
  number: string;
}

const maskCardNumber = (cardNumber: string): string => {
  return `**** ${cardNumber.slice(-4)}`;
};

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

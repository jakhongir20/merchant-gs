import React, { FC, ReactNode } from "react";
import { cn, formatAmount } from "@/shared/helpers";
import { CTrendBadge } from "@/shared/ui";

export interface Props {
  className?: string;
  title: string;
  amount: string | number;
  percentageChange: string;
  percentageChangeStatus: "up" | "down";
  titleSize?: "default" | "small";
  chartContent?: ReactNode;
  currency?: "UZS" | "USD";
}

export const DashboardCard: FC<Props> = ({
  className,
  title,
  amount,
  percentageChange,
  percentageChangeStatus,
  titleSize = "default",
  currency,
  chartContent,
}) => {
  return (
    <div
      className={cn(
        "relative flex h-60 w-full flex-col justify-between rounded-xl bg-white p-6",
        className,
      )}
    >
      <div>
        <div
          className={cn(
            "flex items-center justify-between",
            titleSize === "small" ? "mb-0.5" : "mb-1",
          )}
        >
          <h3
            className={cn(
              "font-semibold text-gray",
              titleSize === "small" ? "text-sm" : "text-base",
            )}
          >
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex items-baseline gap-1 font-bold text-gray-500",
              titleSize === "small" ? "text-xl" : "text-2xl",
            )}
          >
            {formatAmount(amount)}
            {currency && (
              <span className="text-base font-semibold text-gray">
                {currency}
              </span>
            )}
          </div>
          {percentageChange && (
            <CTrendBadge
              value={percentageChange}
              status={percentageChangeStatus}
            />
          )}
        </div>
      </div>
      {(chartContent ??= chartContent)}
    </div>
  );
};

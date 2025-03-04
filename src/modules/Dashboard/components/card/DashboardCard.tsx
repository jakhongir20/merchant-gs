import React, { FC, ReactNode } from "react";
import { cn, formatAmount } from "@/shared/helpers";
import { CTrendBadge } from "@/shared/ui";
import { Currency } from "@/shared/types";

export interface Props {
  className?: string;
  title: string;
  amount?: string | number;
  percentageChange?: string;
  percentageChangeStatus?: "up" | "down";
  titleSize?: "default" | "small";
  chartContent?: ReactNode;
  titleRightContent?: ReactNode;
  currency?: Currency;
  titleClassName?: string;
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
  titleClassName = "",
  titleRightContent,
}) => {
  return (
    <div
      className={cn(
        "relative flex h-52 w-full flex-col justify-between overflow-hidden rounded-xl bg-white p-4 xl:h-60 xl:p-6",
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
          <div className="flex w-full items-center justify-between">
            <h3
              className={cn(
                "font-semibold text-gray",
                titleSize === "small" ? "text-sm" : "text-base",
                titleClassName,
              )}
            >
              {title}
            </h3>
            {(titleRightContent ??= titleRightContent)}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex items-baseline gap-1 font-bold text-gray-500",
              titleSize === "small" ? "text-xl" : "text-2xl",
            )}
          >
            {amount && formatAmount(amount)}
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

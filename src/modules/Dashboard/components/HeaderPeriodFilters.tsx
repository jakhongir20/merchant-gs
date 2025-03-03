import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { cn } from "@/shared/helpers";
import { Button, RangePicker } from "@/shared/ui";
import { Divider } from "antd";
import { useAppConstants } from "@/shared/hooks";

interface Props {
  className?: string;
}

export const HeaderPeriodFilters: FC<Props> = ({ className }) => {
  const { PERIODS } = useAppConstants();

  const [searchParams, setSearchParams] = useSearchParams();
  const activePeriod = searchParams.get("period") || "day";

  const handleClick = (periodValue: string) => {
    setSearchParams({ period: periodValue });
  };
  return (
    <div className={cn("flex items-center justify-end", className)}>
      <div className="flex items-center gap-1.5">
        {PERIODS.map(({ label, value }) => {
          const isActive = value === activePeriod;
          const baseClasses = "!bg-transparent text-gray-100";
          const activeClasses = "!bg-white px-4 !text-blue-100";

          return (
            <Button
              key={value}
              type={isActive ? "text" : "text"}
              color="default"
              className={`${baseClasses} ${isActive ? activeClasses : ""}`}
              onClick={() => handleClick(value)}
            >
              {label}
            </Button>
          );
        })}
      </div>
      <Divider type="vertical" className="!mx-4 h-8" />
      <div>
        <RangePicker />
      </div>
    </div>
  );
};

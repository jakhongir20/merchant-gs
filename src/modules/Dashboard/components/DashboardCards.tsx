import { FC } from "react";
import { cn } from "@/shared/helpers";
import { DashboardCard } from "@/modules/Dashboard/components/card";
import { PieChart } from "@/modules/Dashboard/components/chart";

interface Props {
  className?: string;
}

export const DashboardCards: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "grid gap-4 lg:grid-cols-2 xl:grid-cols-3 xl:gap-[26px]",
        className,
      )}
    >
      <DashboardCard
        title="Доход компании"
        amount="1256890"
        percentageChange="2.2"
        percentageChangeStatus="up"
        currency="UZS"
        chartContent={
          <div className="absolute bottom-0 right-0 flex items-center justify-center">
            <img
              src="/dashboard/profit-image.svg"
              alt="profit-image"
              className=""
            />
          </div>
        }
      />

      <DashboardCard
        titleSize="small"
        title="Все транзакции"
        amount="4146000"
        percentageChange="1.2"
        percentageChangeStatus="up"
        chartContent={
          <PieChart
            data={[
              { label: "Успешные", value: 40, color: "#50CD89" },
              { label: "Отклоненные", value: 30, color: "#F1416C" },
              { label: "Возврат", value: 30, color: "#F1F1F2" },
            ]}
          />
        }
      />

      <DashboardCard
        className=""
        titleSize="small"
        title="Успешные"
        amount="38 250"
        percentageChange="3.2"
        percentageChangeStatus="down"
        chartContent={
          <PieChart
            data={[
              { label: "Uzcard", value: 60, color: "#0044AA" },
              { label: "Humo", value: 20, color: "#F6C602" },
              { label: "Visa", value: 20, color: "#3E97FF" },
              { label: "Mastercard", value: 10, color: "#7239EA" },
            ]}
          />
        }
      />
    </div>
  );
};

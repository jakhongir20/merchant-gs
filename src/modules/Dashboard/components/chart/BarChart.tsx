import React, { FC } from "react";
import {
  Bar,
  BarChart as BarChartUI,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "@/shared/helpers";
import { CustomTooltip } from "@/modules/Dashboard/components/chart";
import "./index.css";

const data = [
  { month: "Янв", amount: 42 },
  { month: "Фев", amount: 35 },
  { month: "Мар", amount: 32 },
  { month: "Апр", amount: 15 },
  { month: "Май", amount: 18 },
  { month: "Июн", amount: 44 },
  { month: "Июл", amount: 0 },
  { month: "Авг", amount: 0 },
  { month: "Сен", amount: 0 },
  { month: "Окт", amount: 0 },
  { month: "Ноя", amount: 0 },
  { month: "Дек", amount: 0 },
];

interface Props {
  className?: string;
}

export const BarChart: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("rounded-xl bg-white p-4 xl:h-[430px] xl:p-6", className)}
    >
      <ResponsiveContainer>
        <BarChartUI
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E1E3EA"
          />

          <XAxis
            dataKey="month"
            axisLine={{
              stroke: "#D8D8E5",
              strokeWidth: 1,
              strokeDasharray: "3 3",
            }}
            tickLine={false}
            tick={{ fill: "#7E8299", fontSize: 14, fontWeight: 600, dy: 8 }}
          />
          <YAxis
            axisLine={{
              strokeWidth: 0,
            }}
            tickLine={false}
            tick={{ fill: "#7E8299", fontSize: 14, fontWeight: 600 }}
            tickFormatter={(tick) => `${tick} ${tick ? "млн" : ""}`}
          />

          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="amount"
            stroke="transparent"
            activeDot={{
              stroke: "#50CD89",
              strokeWidth: 2,
              r: 5,
              fill: "white",
            }}
          />

          <defs>
            <clipPath id="clip-bar">
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                rx="5"
                ry="5"
                style={{ transition: "none" }}
              />
            </clipPath>
          </defs>

          <Bar
            dataKey="amount"
            fill="#50CD89"
            barSize={18}
            radius={[5, 5, 0, 0]}
            clipPath="url(#clip-bar)"
            isAnimationActive={false} // Optional: Disable animation if you want a static bar
          />
        </BarChartUI>
      </ResponsiveContainer>
    </div>
  );
};

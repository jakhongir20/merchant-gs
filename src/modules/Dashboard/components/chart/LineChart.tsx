import React, { FC, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Dot,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "@/shared/helpers";

// Sample Data (Dates & Amounts)
const data = [
  { date: "2 Апр", amount: 10 },
  { date: "5 Апр", amount: 35 },
  { date: "8 Апр", amount: 35 },
  { date: "11 Апр", amount: 25 },
  { date: "14 Апр", amount: 25 },
  { date: "17 Апр", amount: 15 },
  { date: "20 Апр", amount: 15 },
  { date: "23 Апр", amount: 30 },
  { date: "26 Апр", amount: 30 },
  { date: "29 Апр", amount: 18 },
  { date: "2 Мая", amount: 18 },
];

/* eslint-disable @typescript-eslint/no-unused-vars */

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number | undefined }[];
  label?: string;
}

const CustomTooltip: FC<CustomTooltipProps> = ({ active, payload, label }) => {
  return (
    <div className="min-w-[150px] rounded-lg border border-gray-300 bg-white drop-shadow-[0px_3px_4px_rgba(0,0,0,0.03)]">
      <p className="border-b border-gray-300 px-3 py-2.5 text-sm font-medium text-gray-500">
        {label}
      </p>
      <div className="flex flex-col px-3 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-green-100"></span>
          <p className="text-sm font-medium text-gray">Успешные:</p>
        </div>
        <p className="font-medium text-black">{payload?.[0]?.value} млн UZS</p>
      </div>
    </div>
  );
};

interface Props {
  className?: string;
}

// Main Component
export const LineChart: FC<Props> = ({ className }) => {
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className={cn("rounded-xl bg-white p-4 xl:h-[430px] xl:p-6", className)}
    >
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          onMouseMove={(e) => {
            if (e.isTooltipActive && e.activeCoordinate) {
              setTooltipPosition({
                x: e.activeCoordinate.x, // Set X position
                y: e.chartHeight, // Get total height for bottom marker
              });
            }
          }}
        >
          <defs>
            <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#50CD89" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#50CD89" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E1E3EA"
          />

          <XAxis
            dataKey="date"
            axisLine={{
              stroke: "#D8D8E5",
              strokeWidth: 1,
              strokeDasharray: "3 3",
            }}
            tickLine={false}
            padding={{ top: 20 }} // Adds horizontal padding
            tick={{ fill: "#7E8299", fontSize: 14, fontWeight: 600, dy: 8 }}
          />
          <YAxis
            axisLine={{
              strokeWidth: 0,
            }}
            // padding={{ top: 20, bottom: 20 }} // Adds vertical padding
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
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#50CD89"
            strokeWidth={2}
            fill="url(#colorGreen)"
            activeDot={{
              r: 7,
              stroke: "white",
              strokeWidth: 2.5,
              fill: "#50CD89",
            }}
          />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="rgba(40, 199, 111, 0.5)"
            strokeWidth={2}
            strokeDasharray="6 6"
            dot={false}
          />

          <Dot
            cx={tooltipPosition.x} // Dynamic X position
            cy={tooltipPosition.y} // Dynamic Y position (bottom)
            r={6}
            fill="black"
            transform="rotate(180)" // Rotate for downward triangle
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

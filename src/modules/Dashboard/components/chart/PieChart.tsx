import React, { FC } from "react";
import {
  Cell,
  Pie,
  PieChart as RCPieChart,
  ResponsiveContainer,
} from "recharts";
import { type ChartItem } from "@/modules/Dashboard/model";
import { cn } from "@/shared/helpers";
import "./index.css";

interface Props {
  className?: string;
  data: ChartItem[];
}

export const PieChart: FC<Props> = ({ className, data }) => {
  return (
    <div
      className={cn(
        "pie-chart flex h-[110px] items-center justify-between",
        className,
      )}
    >
      <ResponsiveContainer>
        <RCPieChart>
          <Pie
            data={data}
            labelLine
            dataKey="value"
            nameKey="name"
            innerRadius={36}
            outerRadius={54}
            stroke="none"
            strokeWidth={0}
            paddingAngle={0}
            style={{ padding: 0, maxWidth: 110 }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </RCPieChart>
      </ResponsiveContainer>

      <ul>
        {data.map((entry) => (
          <li
            key={entry.label}
            className="mb-2 grid grid-cols-[auto_1fr_auto] items-center gap-2 last:mb-0"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="font-medium text-gray">{entry.label}</span>
            </div>
            <div className="border-gray-1200 mr-3 w-full border-b border-dashed" />
            <span className="ml-0 text-sm font-semibold text-gray-500">
              {entry.value}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

import React, { FC, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "@/shared/helpers";
import { CustomTooltip } from "@/modules/Dashboard/components/chart";
import { Icon, LabeledSelect } from "@/shared/ui";
import { Switch } from "antd";

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

interface Props {
  className?: string;
}

// Main Component
export const LineChart: FC<Props> = ({ className }) => {
  const options = [
    { label: "Успешные", value: "successful" },
    { label: "Отклоненные", value: "rejected" },
    { label: "Возврат", value: "refund" },
  ];
  const [status, setStatus] = useState("successful");

  return (
    <div
      className={cn(
        "flex flex-col gap-7 rounded-xl bg-white p-4 xl:p-6",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-500">
          Динамика транзакций (UZS)
        </h2>
        <div className="flex items-center gap-2">
          <LabeledSelect
            label={"Статус"}
            value={status}
            options={options}
            onChange={setStatus}
          />
          <div className="flex items-center gap-2.5">
            <Switch />
            <LabeledSelect
              label={"Платежные системы"}
              value={status}
              options={[
                { label: "Все", value: "all" },
                { label: "Отклоненные", value: "rejected" },
                { label: "Возврат", value: "refund" },
              ]}
              onChange={setStatus}
            />
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
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
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-2.5">
        <Switch />
        <LabeledSelect
          label={"Сравнивать с"}
          labelIcon={<Icon name="chart" color="text-gray-100" />}
          value={status}
          options={[
            { label: "Все", value: "all" },
            { label: "Отклоненные", value: "rejected" },
            { label: "Возврат", value: "refund" },
          ]}
          onChange={setStatus}
        />
      </div>
    </div>
  );
};

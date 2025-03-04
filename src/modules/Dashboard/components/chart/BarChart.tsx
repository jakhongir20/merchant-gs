import React, { FC, useState } from "react";
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
import { CustomTooltip, tick } from "@/modules/Dashboard/components/chart";
import "./index.css";
import { Icon, LabeledSelect } from "@/shared/ui";
import { Switch } from "antd";

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
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold text-gray-500">
            Динамика транзакций{" "}
            <span className="text-blue-300">за текущий год</span> (UZS)
          </h2>
          <Icon
            name="arrow-up-s"
            color="text-gray"
            className="cursor-pointer"
            width={24}
          />
        </div>
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
            tick={{ ...tick, dy: 8 }}
          />
          <YAxis
            axisLine={{
              strokeWidth: 0,
            }}
            tickLine={false}
            tick={tick}
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
                rx="6"
                ry="6"
                style={{ transition: "none" }}
              />
            </clipPath>
          </defs>

          <Bar
            dataKey="amount"
            fill="#50CD89"
            barSize={18}
            radius={[6, 6, 0, 0]}
            clipPath="url(#clip-bar)"
            isAnimationActive={false}
          />
        </BarChartUI>
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

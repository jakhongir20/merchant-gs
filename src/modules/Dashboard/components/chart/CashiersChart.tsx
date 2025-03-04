import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomTooltip, tick } from "@/modules/Dashboard/components/chart";

// Example data: rank, store name, and value in millions
const data = [
  {
    name: "Корзинка Миробод",
    value: 60,
    brandImage:
      "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg", // or any brand icon
  },
  {
    name: "Корзинка Чирчик",
    value: 47.82,
    brandImage:
      "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg", // or any brand icon
  },
  {
    name: "Корзинка Яшнобод",
    value: 30.5,
    brandImage:
      "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg", // or any brand icon
  },
  {
    name: "Корзинка Ракат",
    value: 28.2,
    brandImage:
      "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg", // or any brand icon
  },
  {
    name: "Корзинка Чилонзор",
    value: 22.1,
    brandImage:
      "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg", // or any brand icon
  },
];
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// Assign each bar a unique color (adjust as needed)
const barColors = ["#A855F7", "#EC4899", "#F87171", "#FB923C", "#FACC15"];

/**
 * CustomTooltip: shows store name and value in UZS.
 */
// function CustomTooltip({ active, payload }: any) {
//   if (active && payload && payload.length) {
//     const { name, value } = payload[0].payload;
//     return (
//       <div className="rounded-md border bg-white p-3 shadow-md">
//         <p className="text-gray-600">{name}</p>
//         <div className="mt-1 flex items-center gap-2">
//           <span
//             className="inline-block h-2 w-2 rounded-full"
//             style={{ backgroundColor: payload[0].color }}
//           />
//           <p className="font-medium text-black">
//             {value.toLocaleString("ru-RU")} млн UZS
//           </p>
//         </div>
//       </div>
//     );
//   }
//   return null;
// }

/**
 * CustomYAxisTick: draws rank, icon, and store name.
 * - rank: plain text
 * - icon: red background with cart emoji
 * - store name: next to the icon
 */
function CustomYAxisTick(props: any) {
  const { x, y, payload, data } = props;
  if (!payload) {
    return null;
  }

  const index = payload.index;
  const item = data[index];
  if (!item) return null;

  const { value } = payload;

  return (
    <g transform={`translate(${x}, ${y})`}>
      <text
        x={-210}
        y={0}
        fill="#000"
        fontSize={13}
        fontWeight={500}
        textAnchor="start"
        dominantBaseline="middle"
      >
        {index + 1}
      </text>

      <image
        x={-190}
        y={-10}
        width={18}
        height={18}
        xlinkHref={
          "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        } // The brand logo
      />

      <text
        x={-162}
        y={0}
        fill="#7E8299"
        fontSize={13}
        fontWeight={500}
        textAnchor="start"
        dominantBaseline="middle"
      >
        {value}
      </text>
    </g>
  );
}

export function CashiersChart() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="w-full rounded-lg bg-white">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            barCategoryGap={24}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E1E3EA"
              horizontal={false}
              vertical={true}
            />
            <XAxis
              type="number"
              tickFormatter={(tick) => `${tick} млн`}
              axisLine={false}
              tickLine={false}
              tick={tick}
            />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              axisLine={{
                stroke: "#E1E3EA",
                strokeWidth: 1,
                strokeDasharray: "3 3",
              }}
              width={220}
              interval={0}
              tick={<CustomYAxisTick data={data} />}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />
            <Bar dataKey="value" barSize={8} radius={[0, 8, 8, 0]}>
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={barColors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

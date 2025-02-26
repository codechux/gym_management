"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Jan",
    total: 167,
  },
  {
    name: "Feb",
    total: 182,
  },
  {
    name: "Mar",
    total: 197,
  },
  {
    name: "Apr",
    total: 205,
  },
  {
    name: "May",
    total: 212,
  },
  {
    name: "Jun",
    total: 219,
  },
  {
    name: "Jul",
    total: 228,
  },
  {
    name: "Aug",
    total: 235,
  },
  {
    name: "Sep",
    total: 240,
  },
  {
    name: "Oct",
    total: 245,
  },
  {
    name: "Nov",
    total: 0,
  },
  {
    name: "Dec",
    total: 0,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip 
          formatter={(value) => [`${value} members`, 'Total']}
          labelFormatter={(label) => `${label}`}
        />
        <Bar
          dataKey="total"
          fill="hsl(var(--chart-1))"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
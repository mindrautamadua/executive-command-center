"use client";

import { useState } from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChevronDown } from "lucide-react";
import { trendKeuangan } from "@/lib/data";

const CHIPS = ["Pendapatan", "EBITDA", "Laba Bersih"];

export function TrendKeuangan() {
  const [chip, setChip] = useState(CHIPS[0]);
  const scale = chip === "Pendapatan" ? 1 : chip === "EBITDA" ? 0.19 : 0.088;
  const data = trendKeuangan.map((d) => ({
    ...d,
    bar1: (d.bar1 + d.bar2) * 0.8 * scale,
    bar2: (d.bar1 + d.bar2) * 0.2 * scale,
    line: d.line * scale,
  }));
  const max = chip === "Pendapatan" ? 60 : chip === "EBITDA" ? 12 : 6;
  const ticks =
    chip === "Pendapatan"
      ? [0, 15, 30, 45, 60]
      : chip === "EBITDA"
        ? [0, 3, 6, 9, 12]
        : [0, 1.5, 3, 4.5, 6];

  return (
    <div className="card flex h-full flex-col px-3.5 pb-2 pt-3">
      <div className="flex items-center justify-between gap-1">
        <h3 className="card-title whitespace-nowrap">TREND KINERJA KEUANGAN</h3>
        <button className="select-chip whitespace-nowrap">
          YTD 2025 <ChevronDown size={11} />
        </button>
      </div>

      <div className="mt-2 flex gap-1.5">
        {CHIPS.map((c) => (
          <button
            key={c}
            onClick={() => setChip(c)}
            className={`rounded-md px-2.5 py-[4px] text-[9.5px] font-semibold transition-colors ${
              c === chip
                ? "bg-ptpn-greenLight text-ptpn-green"
                : "bg-[#f5f8fa] text-ink-500 hover:text-ink-700"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-1.5 text-[8.5px] text-ink-400">(Triliun Rupiah)</div>

      <div className="mt-0.5 min-h-0 w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 6, right: 2, bottom: 0, left: -22 }}>
            <CartesianGrid stroke="#f0f3f6" vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={{ stroke: "#e8edf2" }}
              tick={{ fontSize: 8, fill: "#98a4b2" }}
              interval={0}
            />
            <YAxis
              domain={[0, max]}
              ticks={ticks}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 8, fill: "#98a4b2" }}
              tickFormatter={(v: number) => (v === 0 ? "0" : `${v} T`)}
              width={44}
            />
            <Tooltip
              cursor={{ fill: "rgba(34,164,93,0.06)" }}
              contentStyle={{
                fontSize: 10,
                borderRadius: 8,
                border: "1px solid #e8edf2",
                boxShadow: "0 4px 12px rgba(16,24,40,.08)",
              }}
            />
            <Bar dataKey="bar1" stackId="a" fill="#159c8e" barSize={13} />
            <Bar dataKey="bar2" stackId="a" fill="#7ed957" barSize={13} radius={[2, 2, 0, 0]} />
            <Line
              type="monotone"
              dataKey="line"
              stroke="#9be36a"
              strokeWidth={1.6}
              dot={{ r: 2.6, fill: "#2f9bf5", stroke: "#fff", strokeWidth: 1 }}
              activeDot={{ r: 4 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

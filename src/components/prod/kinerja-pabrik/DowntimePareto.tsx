"use client";

import {
  Bar,
  CartesianGrid,
  ComposedChart,
  LabelList,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { downtimePareto } from "@/lib/pabrik-data";
import { CHART_AXIS, CHART_TOOLTIP_STYLE, PALETTE } from "@/lib/chart-palette";
import { SectionHead } from "../../hc/SectionHead";

const ribuan = (v: number) => v.toLocaleString("id-ID");

export function DowntimePareto() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <SectionHead title="Downtime Pareto" action="Lihat Detail" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Jam Downtime Tak Terencana YTD per Penyebab · 64% dari 2 penyebab teratas
      </p>

      <div className="mt-1.5 min-h-0 w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={downtimePareto} margin={{ top: 14, right: -8, bottom: 0, left: -16 }}>
            <CartesianGrid stroke={CHART_AXIS.grid} vertical={false} />
            <XAxis
              dataKey="penyebab"
              tickLine={false}
              axisLine={{ stroke: CHART_AXIS.axis }}
              tick={{ fontSize: 7, fill: CHART_AXIS.tick }}
              interval={0}
            />
            <YAxis
              yAxisId="jam"
              domain={[0, 2800]}
              ticks={[0, 700, 1400, 2100, 2800]}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 7.5, fill: CHART_AXIS.tick }}
              tickFormatter={(v: number) => ribuan(v)}
            />
            <YAxis
              yAxisId="kum"
              orientation="right"
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 7.5, fill: CHART_AXIS.tick }}
              tickFormatter={(v: number) => `${v}%`}
            />
            <Tooltip
              cursor={{ fill: "rgba(148,163,184,0.08)" }}
              formatter={(v: number, name: string) =>
                name === "jam" ? [`${ribuan(v)} jam`, "Downtime"] : [`${v}%`, "Kumulatif"]
              }
              contentStyle={CHART_TOOLTIP_STYLE}
            />
            <Bar yAxisId="jam" dataKey="jam" fill={PALETTE.red} fillOpacity={0.85} radius={[3, 3, 0, 0]}>
              <LabelList
                dataKey="jam"
                position="top"
                offset={4}
                formatter={(v: number) => ribuan(v)}
                style={{ fontSize: 7.5, fill: "var(--text-1)", fontWeight: 700 }}
              />
            </Bar>
            <Line
              yAxisId="kum"
              type="linear"
              dataKey="kumulatifPct"
              stroke={PALETTE.navy}
              strokeWidth={1.8}
              dot={{ r: 2.4, fill: PALETTE.navy, strokeWidth: 0 }}
              activeDot={{ r: 4 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-1 truncate text-[8px] text-ink-400">
        Total 6.400 jam YTD · garis = kumulatif Pareto (%)
      </p>
    </div>
  );
}

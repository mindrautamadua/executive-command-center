"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChevronRight } from "lucide-react";
import { workforce } from "@/lib/sdm-data";
import { CHART_AXIS, CHART_TOOLTIP_STYLE, PALETTE } from "@/lib/chart-palette";

export function WorkforcePlanning() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "600ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">WORKFORCE PLANNING INSIGHT</h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">Prediksi Kebutuhan SDM</p>
      <p className="mt-1 text-[9px] text-ink-400">
        Garis putus-putus = proyeksi kebutuhan 2026-2028
      </p>

      <div className="mt-1 min-h-0 w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={workforce} margin={{ top: 14, right: 24, bottom: 0, left: -14 }}>
            <defs>
              <linearGradient id="wf-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={PALETTE.blue} stopOpacity="0.22" />
                <stop offset="100%" stopColor={PALETTE.blue} stopOpacity="0" />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={CHART_AXIS.grid} vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={{ stroke: CHART_AXIS.axis }}
              tick={{ fontSize: 8.5, fill: CHART_AXIS.tick }}
            />
            <YAxis
              domain={[60000, 80000]}
              ticks={[60000, 65000, 70000, 75000, 80000]}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 8, fill: CHART_AXIS.tick }}
              tickFormatter={(v: number) => `${v / 1000}K`}
              width={34}
            />
            <Tooltip
              formatter={(v: number, n: string) => [
                v.toLocaleString("id-ID"),
                n === "proyeksi" ? "Proyeksi" : "Aktual",
              ]}
              contentStyle={CHART_TOOLTIP_STYLE}
            />
            {/* aktual: garis solid */}
            <Area
              type="monotone"
              dataKey="aktual"
              stroke={PALETTE.blue}
              strokeWidth={1.8}
              fill="url(#wf-fill)"
              dot={{ r: 3, fill: PALETTE.blue, strokeWidth: 0 }}
              activeDot={{ r: 4.5 }}
            />
            {/* proyeksi: garis putus-putus, tanpa isian pekat */}
            <Area
              type="monotone"
              dataKey="proyeksi"
              stroke={PALETTE.blue}
              strokeWidth={1.6}
              strokeDasharray="5 4"
              strokeOpacity={0.75}
              fill="none"
              dot={{ r: 2.6, fill: "#fff", stroke: PALETTE.blue, strokeWidth: 1.4 }}
              activeDot={{ r: 4.5 }}
            />
            {/* anotasi proyeksi 2027 pada koordinat data */}
            <ReferenceDot
              x="2027"
              y={76500}
              r={4}
              fill={PALETTE.blue}
              stroke="#fff"
              strokeWidth={1.5}
              label={{
                value: "76.500",
                position: "top",
                offset: 8,
                fontSize: 9,
                fontWeight: 700,
                fill: PALETTE.blue,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <button className="link-more mt-1 flex cursor-pointer items-center gap-0.5">
        Lihat workforce planning <ChevronRight size={12} />
      </button>
    </div>
  );
}

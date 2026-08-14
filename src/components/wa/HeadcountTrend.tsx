"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { headcountTrend } from "@/lib/wa-data";
import { CHART_AXIS, CHART_TOOLTIP_STYLE, PALETTE } from "@/lib/chart-palette";
import { SectionHead } from "../hc/SectionHead";

const ribuan = (v: number) => v.toLocaleString("id-ID");

export function HeadcountTrend() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "60ms" } as React.CSSProperties}
    >
      <SectionHead no="1" title="Headcount Trend" action="Lihat Detail" />
      <p className="mt-[3px] text-[9px] text-ink-500">Perkembangan Headcount 12 Bulan Terakhir</p>

      <div className="mt-1.5 min-h-0 w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={headcountTrend} margin={{ top: 20, right: 14, bottom: 0, left: -6 }}>
            <defs>
              <linearGradient id="wa-hc-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={PALETTE.green} stopOpacity="0.18" />
                <stop offset="100%" stopColor={PALETTE.green} stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={CHART_AXIS.grid} vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={{ stroke: CHART_AXIS.axis }}
              tick={{ fontSize: 7.5, fill: CHART_AXIS.tick }}
              interval={0}
              tickFormatter={(v: string) => v.replace(" 20", " ")}
            />
            <YAxis
              domain={[60000, 72000]}
              ticks={[60000, 62000, 64000, 66000, 68000, 70000, 72000]}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 8.5, fill: CHART_AXIS.tick }}
              tickFormatter={(v: number) => `${v / 1000}K`}
              width={38}
            />
            <Tooltip
              formatter={(v: number) => [ribuan(v), "Headcount"]}
              contentStyle={CHART_TOOLTIP_STYLE}
            />
            <Area
              type="linear"
              dataKey="value"
              stroke={PALETTE.green}
              strokeWidth={1.8}
              fill="url(#wa-hc-fill)"
              dot={{ r: 2.5, fill: "#fff", stroke: PALETTE.green, strokeWidth: 1.8 }}
              activeDot={{ r: 4 }}
            >
              <LabelList
                dataKey="value"
                position="top"
                offset={8}
                formatter={ribuan}
                style={{ fontSize: 7.5, fill: "#334155", fontWeight: 700 }}
              />
            </Area>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

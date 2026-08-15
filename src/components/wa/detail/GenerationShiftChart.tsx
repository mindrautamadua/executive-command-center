"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SectionHead } from "@/components/hc/SectionHead";
import { CHART_AXIS, CHART_TOOLTIP_STYLE, PALETTE } from "@/lib/chart-palette";
import { generationShift } from "@/lib/wa-detail-demografi";

const SERIES = [
  { key: "Gen Z", color: PALETTE.green },
  { key: "Milenial", color: PALETTE.blue },
  { key: "Gen X", color: PALETTE.amber },
  { key: "Boomers", color: PALETTE.purple },
];

/** Pergeseran porsi generasi 2022 – 2026 (100% stacked). */
export function GenerationShiftChart() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "40ms" } as React.CSSProperties}
    >
      <SectionHead title="Pergeseran Generasi (5 Tahun)" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Gen X + Boomers turun <span className="font-bold text-[#d98b06]">8,9 pp</span> sejak 2022
      </p>

      <div className="mt-1 min-h-0 w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={generationShift} margin={{ top: 10, right: 8, bottom: 0, left: -18 }} barSize={26}>
            <CartesianGrid stroke={CHART_AXIS.grid} vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={{ stroke: CHART_AXIS.axis }}
              tick={{ fontSize: 8, fill: CHART_AXIS.tick }}
            />
            <YAxis
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 8, fill: CHART_AXIS.tick }}
              unit="%"
            />
            <Tooltip
              contentStyle={CHART_TOOLTIP_STYLE}
              formatter={(v: number, n: string) => [`${v.toString().replace(".", ",")}%`, n]}
            />
            <Legend verticalAlign="bottom" height={18} iconSize={7} wrapperStyle={{ fontSize: 8 }} />
            {SERIES.map((s, i) => (
              <Bar
                key={s.key}
                dataKey={s.key}
                stackId="g"
                fill={s.color}
                radius={i === SERIES.length - 1 ? [2, 2, 0, 0] : undefined}
                isAnimationActive={false}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

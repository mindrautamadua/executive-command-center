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
import { CHART_AXIS, CHART_TOOLTIP_STYLE } from "@/lib/chart-palette";
import { retirementForecast } from "@/lib/wa-detail-demografi";

/** Proyeksi pensiun 2026 – 2031, dipisah antara total dan posisi kritis. */
export function RetirementForecastChart() {
  const total = retirementForecast.reduce((s, r) => s + r.jumlah, 0);

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "80ms" } as React.CSSProperties}
    >
      <SectionHead title="Proyeksi Pensiun 2026 – 2031" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        <span className="font-bold text-ink-900">{total.toLocaleString("id-ID")} pekerja</span> ·
        puncak 2030
      </p>

      <div className="mt-1 min-h-0 w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={retirementForecast} margin={{ top: 10, right: 8, bottom: 0, left: -20 }} barSize={20}>
            <CartesianGrid stroke={CHART_AXIS.grid} vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={{ stroke: CHART_AXIS.axis }}
              tick={{ fontSize: 8, fill: CHART_AXIS.tick }}
            />
            <YAxis
              domain={[0, 1600]}
              ticks={[0, 400, 800, 1200, 1600]}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 8, fill: CHART_AXIS.tick }}
            />
            <Tooltip
              contentStyle={CHART_TOOLTIP_STYLE}
              formatter={(v: number, n: string) => [
                v.toLocaleString("id-ID"),
                n === "jumlah" ? "Total pensiun" : "Posisi kritis",
              ]}
            />
            <Legend
              verticalAlign="bottom"
              height={18}
              iconSize={7}
              wrapperStyle={{ fontSize: 8 }}
              formatter={(v: string) => (v === "jumlah" ? "Total pensiun" : "Posisi kritis")}
            />
            <Bar dataKey="jumlah" fill="#94a3b8" radius={[2, 2, 0, 0]} isAnimationActive={false} />
            <Bar dataKey="kritis" fill="#ef4444" radius={[2, 2, 0, 0]} isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

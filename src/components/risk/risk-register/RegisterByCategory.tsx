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
import { byCategory } from "@/lib/risk-data";
import { CHART_AXIS, CHART_TOOLTIP_STYLE, PALETTE } from "@/lib/chart-palette";
import { SectionHead } from "@/components/hc/SectionHead";

const SERIES = [
  { key: "palmco", name: "PalmCo", color: PALETTE.green },
  { key: "sgn", name: "SGN", color: PALETTE.blue },
  { key: "ptpn1", name: "PTPN I", color: PALETTE.teal },
  { key: "holding", name: "Holding", color: PALETTE.slate },
];

/** Komposisi register per kategori risiko, ditumpuk per subholding. */
export function RegisterByCategory() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2 pt-3"
      style={{ "--d": "60ms" } as React.CSSProperties}
    >
      <SectionHead title="Register per Kategori & Subholding" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        142 Risiko — PalmCo 50 · SGN 39 · PTPN I 23 · Holding 30
      </p>

      <div className="mt-1.5 min-h-0 w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={byCategory} margin={{ top: 8, right: 10, bottom: 0, left: -14 }}>
            <CartesianGrid stroke={CHART_AXIS.grid} vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              axisLine={{ stroke: CHART_AXIS.axis }}
              tick={{ fontSize: 8, fill: CHART_AXIS.tick }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 8.5, fill: CHART_AXIS.tick }}
              width={34}
            />
            <Tooltip contentStyle={CHART_TOOLTIP_STYLE} cursor={{ fill: "var(--chart-grid)" }} />
            <Legend
              verticalAlign="bottom"
              height={18}
              iconSize={7}
              wrapperStyle={{ fontSize: 8.5, color: "var(--chart-tick)" }}
            />
            {SERIES.map((s, i) => (
              <Bar
                key={s.key}
                dataKey={s.key}
                name={s.name}
                stackId="reg"
                fill={s.color}
                radius={i === SERIES.length - 1 ? [3, 3, 0, 0] : undefined}
                maxBarSize={44}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

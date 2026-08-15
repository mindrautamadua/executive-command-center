"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { digitalMaturity } from "@/lib/stf-data";
import { CHART_AXIS, CHART_TOOLTIP_STYLE, PALETTE } from "@/lib/chart-palette";
import { SectionHead } from "@/components/hc/SectionHead";

const TARGET_ADOPSI_PCT = 80;

/** Adopsi digital per subholding vs target 80% (label maturitas 1-5). */
export function DigitalMaturity() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "240ms" } as React.CSSProperties}
    >
      <SectionHead title="Digital Maturity" action="Lihat Detail" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Adopsi Tools Digital per Subholding vs Target {TARGET_ADOPSI_PCT}% · Blended Group 68%
      </p>

      <div className="mt-1.5 min-h-0 w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={digitalMaturity} margin={{ top: 18, right: 14, bottom: 0, left: -18 }}>
            <CartesianGrid stroke={CHART_AXIS.grid} vertical={false} />
            <XAxis
              dataKey="entity"
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
              tickFormatter={(v: number) => `${v}%`}
              width={34}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={CHART_TOOLTIP_STYLE}
              formatter={(v: number) => [`${v}%`, "Adopsi Digital"]}
            />
            <ReferenceLine
              y={TARGET_ADOPSI_PCT}
              stroke={PALETTE.navy}
              strokeDasharray="5 4"
              strokeWidth={1.2}
            />
            <Bar dataKey="adoptionPct" radius={[4, 4, 0, 0]} barSize={28}>
              {digitalMaturity.map((d) => (
                <Cell
                  key={d.entity}
                  fill={d.adoptionPct >= TARGET_ADOPSI_PCT ? PALETTE.green : PALETTE.amber}
                />
              ))}
              <LabelList
                dataKey="adoptionPct"
                position="top"
                offset={5}
                style={{ fontSize: 8, fill: "var(--text-1)", fontWeight: 700 }}
                formatter={(v: number) => `${v}%`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <ul className="mt-1 flex items-center justify-between gap-1">
        {digitalMaturity.map((d) => (
          <li key={d.entity} className="min-w-0 flex-1 text-center text-[8px] text-ink-400">
            Maturity {d.maturity.toLocaleString("id-ID", { minimumFractionDigits: 1 })}/5
          </li>
        ))}
      </ul>
    </div>
  );
}

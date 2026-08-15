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
import { psrProgress } from "@/lib/esg-data-detail";
import { CHART_AXIS, CHART_TOOLTIP_STYLE, PALETTE } from "@/lib/chart-palette";
import { SectionHead } from "@/components/hc/SectionHead";

const data = psrProgress.map((r) => ({
  ...r,
  label: r.regional.replace(/ \(.*\)$/, "").replace("Regional ", "R"),
}));

const ha = (v: number) => `${v.toLocaleString("id-ID", { minimumFractionDigits: 1 })} rb ha`;

/** Realisasi kumulatif PSR plasma per regional terhadap target program. */
export function PsrProgress() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <SectionHead title="Progres PSR per Regional" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Realisasi Kumulatif vs Target · Total 14,2 rb ha
      </p>

      <div className="mt-1.5 min-h-0 w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 12, right: 10, bottom: 0, left: -18 }}
            barCategoryGap="26%"
          >
            <CartesianGrid stroke={CHART_AXIS.grid} vertical={false} />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={{ stroke: CHART_AXIS.axis }}
              tick={{ fontSize: 8, fill: CHART_AXIS.tick }}
              interval={0}
            />
            <YAxis
              domain={[0, 4]}
              ticks={[0, 1, 2, 3, 4]}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 8.5, fill: CHART_AXIS.tick }}
              width={28}
            />
            <Tooltip
              formatter={(v: number) => ha(v)}
              labelFormatter={(_, p) => (p?.[0]?.payload as { regional: string })?.regional ?? ""}
              contentStyle={CHART_TOOLTIP_STYLE}
            />
            <Legend
              verticalAlign="top"
              align="right"
              height={16}
              iconType="circle"
              iconSize={7}
              wrapperStyle={{ fontSize: 8.5, color: CHART_AXIS.tick }}
            />
            <Bar dataKey="targetRbHa" name="Target" fill={PALETTE.slate} radius={[3, 3, 0, 0]} />
            <Bar
              dataKey="realisasiRbHa"
              name="Realisasi"
              fill={PALETTE.green}
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

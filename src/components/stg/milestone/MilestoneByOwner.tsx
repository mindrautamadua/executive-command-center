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
import { byOwner } from "@/lib/sms-data";
import { CHART_AXIS, CHART_TOOLTIP_STYLE, PALETTE } from "@/lib/chart-palette";
import { SectionHead } from "@/components/hc/SectionHead";

/** Komposisi status 142 milestone per owner (selesai / on track / terlambat). */
export function MilestoneByOwner() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "180ms" } as React.CSSProperties}
    >
      <SectionHead title="Milestone per Owner" action="Lihat Detail" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Komposisi Status 142 Milestone per Subholding
      </p>

      <div className="mt-1.5 min-h-0 w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={byOwner} margin={{ top: 6, right: 14, bottom: 0, left: -18 }}>
            <CartesianGrid stroke={CHART_AXIS.grid} vertical={false} />
            <XAxis
              dataKey="owner"
              tickLine={false}
              axisLine={{ stroke: CHART_AXIS.axis }}
              tick={{ fontSize: 8, fill: CHART_AXIS.tick }}
            />
            <YAxis
              domain={[0, 70]}
              ticks={[0, 20, 40, 60]}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 8, fill: CHART_AXIS.tick }}
              width={32}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={CHART_TOOLTIP_STYLE}
              formatter={(v: number, name: string) => [`${v} milestone`, name]}
            />
            <Legend
              verticalAlign="top"
              align="right"
              height={18}
              iconType="circle"
              iconSize={7}
              wrapperStyle={{ fontSize: 8.5, color: CHART_AXIS.tick }}
            />
            <Bar dataKey="done" name="Selesai" stackId="m" fill={PALETTE.green} barSize={30} />
            <Bar dataKey="onTrack" name="On Track" stackId="m" fill={PALETTE.blue} />
            <Bar
              dataKey="late"
              name="Terlambat"
              stackId="m"
              fill={PALETTE.red}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-1 truncate text-[8px] text-ink-400">
        SGN: 8 dari 40 milestone terlambat (20%) — rasio tertinggi lintas subholding.
      </p>
    </div>
  );
}

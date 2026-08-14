"use client";

import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { capability } from "@/lib/talent-data";
import { CHART_AXIS, CHART_TOOLTIP_STYLE, PALETTE } from "@/lib/chart-palette";

/** Radar overlay: kondisi saat ini vs target 2026. */
export function CapabilityDistribution() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "660ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Talent Capability Distribution</h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">
        Top 6 Kompetensi Utama — Saat Ini vs Target
      </p>

      <div className="-mx-2 min-h-0 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={capability} outerRadius="70%">
            <PolarGrid stroke={CHART_AXIS.grid} />
            <PolarAngleAxis
              dataKey="label"
              tick={{ fontSize: 9, fill: CHART_AXIS.tick }}
            />
            <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
            <Tooltip
              contentStyle={CHART_TOOLTIP_STYLE}
              formatter={(v: number, name: string) => [
                `${v}%`,
                name === "pct" ? "Saat Ini" : "Target",
              ]}
            />
            <Radar
              dataKey="target"
              stroke={PALETTE.green}
              strokeWidth={1.4}
              strokeDasharray="4 3"
              fill={PALETTE.green}
              fillOpacity={0.06}
              animationDuration={900}
            />
            <Radar
              dataKey="pct"
              stroke={PALETTE.blue}
              strokeWidth={1.8}
              fill={PALETTE.blue}
              fillOpacity={0.2}
              dot={{ r: 2, fill: PALETTE.blue, strokeWidth: 0 }}
              animationDuration={900}
            />
            <Legend
              verticalAlign="bottom"
              height={16}
              iconSize={8}
              formatter={(v: string) => (
                <span style={{ fontSize: 9 }}>{v === "pct" ? "Saat Ini" : "Target"}</span>
              )}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

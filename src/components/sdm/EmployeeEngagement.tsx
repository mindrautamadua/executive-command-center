"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ChevronDown, ChevronRight } from "lucide-react";
import { dimensiEngagement } from "@/lib/sdm-data";
import { CHART_AXIS, CHART_TOOLTIP_STYLE, PALETTE } from "@/lib/chart-palette";

const satu = (v: number) => v.toFixed(2).replace(".", ",");

export function EmployeeEngagement() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-3 pb-2.5 pt-3"
      style={{ "--d": "420ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-1">
        <div>
          <h3 className="card-title-navy whitespace-nowrap">EMPLOYEE ENGAGEMENT</h3>
          <p className="mt-[3px] text-[9.5px] text-ink-500">Dimensi Engagement</p>
        </div>
        <button className="select-chip-sm">
          YTD 2026 <ChevronDown size={10} />
        </button>
      </div>

      <div className="-mx-1 min-h-0 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={dimensiEngagement} outerRadius="72%">
            <PolarGrid stroke={CHART_AXIS.grid} />
            <PolarAngleAxis
              dataKey="label"
              tick={{ fontSize: 9, fill: CHART_AXIS.tick }}
            />
            <PolarRadiusAxis domain={[0, 5]} tick={false} axisLine={false} />
            <Tooltip
              contentStyle={CHART_TOOLTIP_STYLE}
              formatter={(v: number) => [`${satu(v)} / 5`, "Skor"]}
            />
            <Radar
              dataKey="value"
              stroke={PALETTE.green}
              strokeWidth={1.8}
              fill={PALETTE.green}
              fillOpacity={0.18}
              dot={{ r: 2.2, fill: PALETTE.green, strokeWidth: 0 }}
              animationDuration={900}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <button className="link-more mt-1.5 flex cursor-pointer items-center gap-0.5">
        Lihat survei lengkap <ChevronRight size={12} />
      </button>
    </div>
  );
}

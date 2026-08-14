"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ReferenceArea,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CHART_AXIS, CHART_TOOLTIP_STYLE, PALETTE, SEMANTIC } from "@/lib/chart-palette";
import { spanHighlight, spanOfControl, spanOptimal } from "@/lib/org-data";

const fmt = (n: number) => n.toFixed(1).replace(".", ",");

export function SpanOfControl() {
  return (
    <div className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="card-title-navy">Span of Control</h3>
          <p className="mt-[3px] text-[9.5px] text-ink-500">Rasio Rata-rata per Level Organisasi</p>
        </div>
        <button className="select-chip whitespace-nowrap px-2.5 py-[5px] text-[9.5px] transition-colors hover:bg-[#f7f9fb]">
          Semua Unit <ChevronDown size={11} />
        </button>
      </div>

      <div className="mt-1 min-h-0 w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={spanOfControl}
            margin={{ top: 16, right: 8, bottom: 0, left: -18 }}
            barCategoryGap="30%"
          >
            <CartesianGrid stroke={CHART_AXIS.grid} vertical={false} />
            <XAxis
              dataKey="level"
              tickLine={false}
              axisLine={{ stroke: CHART_AXIS.axis }}
              tick={{ fontSize: 9, fill: CHART_AXIS.tick }}
              interval={0}
            />
            <YAxis
              domain={[0, 15]}
              ticks={[0, 3, 6, 9, 12, 15]}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 9, fill: CHART_AXIS.tick }}
              width={30}
            />
            {/* pita rentang optimal 5–8 */}
            <ReferenceArea
              y1={spanOptimal.min}
              y2={spanOptimal.max}
              fill={SEMANTIC.good}
              fillOpacity={0.08}
              stroke={SEMANTIC.good}
              strokeOpacity={0.35}
              strokeDasharray="4 3"
              label={{
                value: `Optimal ${spanOptimal.min}–${spanOptimal.max}`,
                position: "insideTopRight",
                fontSize: 9,
                fill: SEMANTIC.good,
                fontWeight: 600,
              }}
            />
            <Tooltip
              contentStyle={CHART_TOOLTIP_STYLE}
              cursor={{ fill: "var(--surface-2)" }}
              formatter={(v: number) => [fmt(v), "Rasio"]}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={26}>
              {spanOfControl.map((d) => (
                <Cell
                  key={d.level}
                  fill={d.level === spanHighlight ? SEMANTIC.good : PALETTE.blue}
                />
              ))}
              <LabelList
                dataKey="value"
                position="top"
                formatter={(v: number) => fmt(v)}
                style={{ fontSize: 9, fontWeight: 700, fill: "var(--text-2)" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <button className="link-more mt-1 flex items-center gap-1 self-start">
        Lihat analisis lengkap <ChevronRight size={11} />
      </button>
    </div>
  );
}

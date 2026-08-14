"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowRight, ChevronDown } from "lucide-react";
import { distribusiGaji } from "@/lib/comp-data";
import { CHART_AXIS, CHART_TOOLTIP_STYLE, PALETTE } from "@/lib/chart-palette";

export function DistribusiGaji() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "340ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="card-title-navy">Distribusi Gaji (Posisi di Rentang Gaji)</h3>
          <p className="mt-[3px] text-[9.5px] text-ink-500">Berdasarkan Persentil</p>
        </div>
        <button className="select-chip whitespace-nowrap px-2.5 py-[5px] text-[9.5px]">
          Semua Level <ChevronDown size={11} />
        </button>
      </div>

      <div className="mt-1.5 text-[9px] text-ink-400">% Karyawan</div>

      <div className="min-h-0 w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={distribusiGaji} margin={{ top: 16, right: 6, bottom: 0, left: -18 }}>
            <CartesianGrid stroke={CHART_AXIS.grid} vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={{ stroke: CHART_AXIS.axis }}
              tick={{ fontSize: 9, fill: CHART_AXIS.tick }}
              interval={0}
            />
            <YAxis
              domain={[0, 40]}
              ticks={[0, 10, 20, 30, 40]}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 9, fill: CHART_AXIS.tick }}
              tickFormatter={(v: number) => `${v}%`}
              width={34}
            />
            <Tooltip
              formatter={(v: number) => [`${v}%`, "Karyawan"]}
              contentStyle={CHART_TOOLTIP_STYLE}
              cursor={{ fill: "var(--surface-2)" }}
            />
            <Bar
              dataKey="value"
              fill={PALETTE.blueSoft}
              radius={[3, 3, 0, 0]}
              barSize={30}
              animationDuration={800}
            >
              <LabelList
                dataKey="value"
                position="top"
                offset={5}
                formatter={(v: number) => `${v}%`}
                style={{ fontSize: 9, fill: "#334155", fontWeight: 700 }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat distribusi lengkap <ArrowRight size={11} />
      </button>
    </div>
  );
}

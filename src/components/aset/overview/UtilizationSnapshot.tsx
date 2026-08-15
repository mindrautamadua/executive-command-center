"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { utilizationSnapshot } from "@/lib/ast-data";
import { CHART_AXIS, CHART_TOOLTIP_STYLE, PALETTE } from "@/lib/chart-palette";
import { SectionHead } from "@/components/hc/SectionHead";

const num = (v: number) =>
  v.toLocaleString("id-ID", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

const data = utilizationSnapshot.map((u) => ({
  ...u,
  short: u.fasilitas.replace(/ \(.*\)/, ""),
}));

/** Utilisasi fasilitas olah (PKS, PG, refinery, karet, teh) vs target. */
export function UtilizationSnapshot() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "150ms" } as React.CSSProperties}
    >
      <SectionHead title="Utilization Snapshot" action="Lihat Detail" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Utilisasi Kapasitas Terpasang per Jenis Fasilitas (%) vs Target RKAP
      </p>

      <div className="mt-1.5 min-h-0 w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 16, right: 8, bottom: 0, left: -16 }}>
            <CartesianGrid stroke={CHART_AXIS.grid} vertical={false} />
            <XAxis
              dataKey="short"
              tickLine={false}
              axisLine={{ stroke: CHART_AXIS.axis }}
              tick={{ fontSize: 7.5, fill: CHART_AXIS.tick }}
              interval={0}
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
              cursor={{ fill: "rgba(148,163,184,0.08)" }}
              formatter={(v: number, name: string) => [`${num(v)}%`, name]}
              contentStyle={CHART_TOOLTIP_STYLE}
            />
            <Bar name="Utilisasi" dataKey="utilisasiPct" barSize={30} radius={[3, 3, 0, 0]}>
              {data.map((d) => (
                <Cell
                  key={d.fasilitas}
                  fill={d.utilisasiPct >= d.targetPct ? PALETTE.green : PALETTE.amber}
                  fillOpacity={0.9}
                />
              ))}
              <LabelList
                dataKey="utilisasiPct"
                position="top"
                offset={4}
                formatter={(v: number) => `${num(v)}%`}
                style={{ fontSize: 7.5, fill: "var(--text-1)", fontWeight: 700 }}
              />
            </Bar>
            <Bar name="Target" dataKey="targetPct" barSize={30} radius={[3, 3, 0, 0]} fill={PALETTE.slate} fillOpacity={0.28} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-1 truncate text-[8px] text-ink-400">
        Seluruh jenis fasilitas berada di bawah target; gap terbesar pada PG (-13,8 ppt) dan karet
        (-10,2 ppt).
      </p>
    </div>
  );
}

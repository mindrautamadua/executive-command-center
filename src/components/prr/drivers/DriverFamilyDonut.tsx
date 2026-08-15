"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { SectionHead } from "@/components/hc/SectionHead";
import { CHART_TOOLTIP_STYLE } from "@/lib/chart-palette";
import { allDrivers, driversByFamily, FAMILY_COLOR } from "@/lib/prr-drivers";

/** Sebaran kontribusi driver per family — dasar pembagian fokus mitigasi. */
export function DriverFamilyDonut() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "80ms" } as React.CSSProperties}
    >
      <SectionHead title="Kontribusi per Family" />

      <div className="mt-1 flex min-h-0 flex-1 items-center gap-2">
        <div className="relative min-h-0 w-[44%] flex-1 self-stretch">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={driversByFamily}
                dataKey="pct"
                nameKey="family"
                innerRadius="58%"
                outerRadius="88%"
                paddingAngle={1.5}
                stroke="none"
                isAnimationActive={false}
              >
                {driversByFamily.map((f) => (
                  <Cell key={f.family} fill={FAMILY_COLOR[f.family]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(v: number, name: string) => [`${v}% eksposur`, name]}
                contentStyle={CHART_TOOLTIP_STYLE}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[22px] font-extrabold leading-none text-ink-900">
              {allDrivers.length}
            </span>
            <span className="mt-[2px] text-[8.5px] font-semibold text-ink-400">Driver</span>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-[5px]">
          {driversByFamily.map((f) => (
            <div key={f.family} className="flex items-center gap-1.5">
              <span
                className="h-[7px] w-[7px] shrink-0 rounded-full"
                style={{ background: FAMILY_COLOR[f.family] }}
              />
              <span className="min-w-0 flex-1 truncate text-[9px] text-ink-700">{f.family}</span>
              <span className="shrink-0 text-[9px] font-bold text-ink-900">{f.pct}%</span>
              <span className="shrink-0 text-[8.5px] text-ink-400">({f.count})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

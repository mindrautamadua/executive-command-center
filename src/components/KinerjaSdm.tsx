"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChevronDown, ChevronRight } from "lucide-react";
import { komposisiKaryawan, sdmKpi } from "@/lib/data";
import { CHART_TOOLTIP_STYLE } from "@/lib/chart-palette";
import { Delta } from "./ui/Delta";

export function KinerjaSdm() {
  return (
    <div className="card flex h-full flex-col px-3.5 pb-2.5 pt-3">
      <div className="flex items-center justify-between gap-1">
        <h3 className="card-title-navy whitespace-nowrap">KINERJA SDM</h3>
        <button className="select-chip whitespace-nowrap">
          YTD 2026 <ChevronDown size={11} />
        </button>
      </div>

      <div className="mt-2.5 grid grid-cols-3 gap-1">
        {sdmKpi.map((k) => (
          <div key={k.label}>
            <div className="text-[9px] font-medium text-ink-500">{k.label}</div>
            <div className="mt-[3px] text-[14px] font-extrabold leading-none text-ink-900">
              {k.value}
            </div>
            <Delta value={k.delta} trend={k.trend} size={9} className="mt-[4px]" />
          </div>
        ))}
      </div>

      <div className="mt-2 text-[9px] font-medium text-ink-500">
        Komposisi Karyawan
      </div>

      <div className="flex min-h-0 flex-1 items-center">
        <div className="h-[88px] w-[88px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={komposisiKaryawan}
                dataKey="value"
                innerRadius={27}
                outerRadius={42}
                paddingAngle={1}
                startAngle={90}
                endAngle={-270}
                stroke="none"
              >
                {komposisiKaryawan.map((d) => (
                  <Cell key={d.name} fill={d.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(v: number, n: string) => [`${v}%`, n]}
                contentStyle={CHART_TOOLTIP_STYLE}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="ml-1 flex min-w-0 flex-1 flex-col gap-[8px]">
          {komposisiKaryawan.map((d) => (
            <div key={d.name} className="flex items-center gap-1.5">
              <span
                className="h-[7px] w-[7px] shrink-0 rounded-[2px]"
                style={{ background: d.color }}
              />
              <span className="truncate text-[9px] text-ink-700">{d.name}</span>
              <span className="ml-auto shrink-0 text-[9px] font-bold tabular-nums text-ink-900">
                {d.value}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="link-more mt-1 flex cursor-pointer items-center gap-0.5">
        Lihat detail SDM <ChevronRight size={12} />
      </button>
    </div>
  );
}

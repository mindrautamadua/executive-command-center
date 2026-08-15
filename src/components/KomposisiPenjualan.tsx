"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ArrowRight } from "lucide-react";
import { komposisiPenjualan } from "@/lib/data";
import { Delta } from "./ui/Delta";
import { DetailLink } from "./DetailLink";

export function KomposisiPenjualan() {
  return (
    <div className="card flex h-full flex-col px-3.5 pb-2.5 pt-3">
      <div className="flex items-baseline gap-1.5">
        <h3 className="card-title whitespace-nowrap">KOMPOSISI PENJUALAN</h3>
        <span className="text-[9px] text-ink-400">(YTD 2026)</span>
        <span className="ml-auto">
          <DetailLink href="/pemasaran-penjualan" />
        </span>
      </div>

      <div className="flex min-h-0 flex-1 items-center">
        <div className="relative h-[122px] w-[122px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={komposisiPenjualan}
                dataKey="value"
                innerRadius={41}
                outerRadius={61}
                paddingAngle={1}
                startAngle={90}
                endAngle={-270}
                stroke="none"
              >
                {komposisiPenjualan.map((d) => (
                  <Cell key={d.name} fill={d.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(v: number, n: string) => [`${v}%`, n]}
                contentStyle={{
                  fontSize: 10,
                  borderRadius: 8,
                  border: "1px solid #e8edf2",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[8.5px] text-ink-500">Total Penjualan</span>
            <span className="mt-[2px] text-[13.5px] font-extrabold text-ink-900">
              Rp 19,90 T
            </span>
            <Delta value="13,10%" trend="up" size={9.5} className="mt-[3px]" />
          </div>
        </div>

        <div className="ml-1 flex flex-1 flex-col gap-[7px]">
          {komposisiPenjualan.map((d) => (
            <div key={d.name} className="flex items-center gap-2">
              <span
                className="h-[8px] w-[8px] rounded-[2px]"
                style={{ background: d.color }}
              />
              <span className="text-[10px] text-ink-700">{d.name}</span>
              <span className="ml-auto text-[10px] font-bold tabular-nums text-ink-900">
                {d.value}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-[#2f9bf5] hover:underline">
        Lihat detail <ArrowRight size={11} />
      </button>
    </div>
  );
}

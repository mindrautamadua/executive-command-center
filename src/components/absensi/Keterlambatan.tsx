"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { DonutChart } from "../ui/DonutChart";
import { keterlambatan, totalTerlambat } from "@/lib/absensi-data";

export function Keterlambatan() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "300ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Keterlambatan (Terlambat Masuk)</h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">Berdasarkan Rentang Keterlambatan</p>

      <div className="flex min-h-0 flex-1 items-center">
        <DonutChart
          data={keterlambatan.map((d) => ({
            name: d.name,
            value: d.jumlah,
            color: d.color,
          }))}
          size={150}
          centerValue={totalTerlambat.toLocaleString("id-ID")}
          centerCaption="Karyawan"
          onHover={setActive}
        />

        <div className="ml-1.5 flex min-w-0 flex-1 flex-col gap-[9px]">
          {keterlambatan.map((d, i) => (
            <div
              key={d.name}
              className="flex items-center gap-2 whitespace-nowrap transition-opacity"
              style={{ opacity: active === null || active === i ? 1 : 0.35 }}
            >
              <span
                className="h-[8px] w-[8px] shrink-0 rounded-[2px]"
                style={{ background: d.color }}
              />
              <span className="text-[9.5px] text-ink-700">{d.name}</span>
              <span className="ml-auto text-[9.5px] tabular-nums text-ink-900">{d.label}</span>
              <span className="w-[40px] text-right text-[9.5px] tabular-nums text-ink-400">
                {d.pct}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat detail keterlambatan <ArrowRight size={11} />
      </button>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { programTipe } from "@/lib/lnd-data";
import { DonutChart } from "../ui/DonutChart";

export function ProgramTipe() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "280ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Program Berdasarkan Tipe</h3>

      <div className="flex min-h-0 flex-1 items-center">
        <DonutChart
          data={programTipe.map((d) => ({ name: d.name, value: d.share, color: d.color }))}
          size={128}
          thickness={22}
          centerValue="248"
          centerCaption="Program"
          valueFormatter={(v) => `${v.toLocaleString("id-ID", { minimumFractionDigits: 1 })}%`}
          onHover={setActive}
        />

        <div className="ml-2 flex flex-1 flex-col gap-[7px]">
          {programTipe.map((d, i) => (
            <div
              key={d.name}
              className="flex items-center gap-2 whitespace-nowrap transition-opacity"
              style={{ opacity: active === null || active === i ? 1 : 0.4 }}
            >
              <span
                className="h-[8px] w-[8px] shrink-0 rounded-[2px]"
                style={{ background: d.color }}
              />
              <span className="w-[58px] text-[9.5px] text-ink-700">{d.name}</span>
              <span className="ml-auto text-[9.5px] font-semibold tabular-nums text-ink-900">
                {d.jumlah}
              </span>
              <span className="w-[42px] text-right text-[9.5px] tabular-nums text-ink-400">
                ({d.pct})
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat detail program <ArrowRight size={11} />
      </button>
    </div>
  );
}

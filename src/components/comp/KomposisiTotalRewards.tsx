"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { komposisiRewards } from "@/lib/comp-data";
import { DonutChart } from "../ui/DonutChart";

export function KomposisiTotalRewards() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "100ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Komposisi Total Rewards</h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">Berdasarkan Komponen</p>

      <div className="flex min-h-0 flex-1 items-center">
        <DonutChart
          data={komposisiRewards.map((d) => ({ name: d.name, value: d.share, color: d.color }))}
          size={158}
          thickness={27}
          centerValue="Rp 2,48 T"
          centerCaption="Total"
          valueFormatter={(v) => `${v.toLocaleString("id-ID", { minimumFractionDigits: 1 })}%`}
          onHover={setActive}
        />

        <div className="ml-2 flex flex-1 flex-col gap-[9px]">
          {komposisiRewards.map((d, i) => (
            <div
              key={d.name}
              className="flex items-start gap-2 transition-opacity"
              style={{ opacity: active === null || active === i ? 1 : 0.4 }}
            >
              <span
                className="mt-[3px] h-[8px] w-[8px] shrink-0 rounded-[2px]"
                style={{ background: d.color }}
              />
              <span className="w-[70px] text-[9.5px] leading-[1.25] text-ink-700">{d.name}</span>
              <span className="ml-auto text-[9.5px] font-semibold tabular-nums text-ink-900">
                {d.pct}
              </span>
              <span className="w-[52px] text-right text-[9.5px] tabular-nums text-ink-400">
                ({d.nominal})
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat detail komposisi <ArrowRight size={11} />
      </button>
    </div>
  );
}

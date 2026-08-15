"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { komposisiBenefits } from "@/lib/comp-data";
import { DonutChart } from "../ui/DonutChart";
import { ScopeNote } from "@/components/ui/ScopeNote";

export function KomposisiBenefits() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "460ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy flex min-w-0 items-center gap-1.5"><span>Komposisi Employee Benefits</span><ScopeNote /></h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">Berdasarkan Jenis Benefit</p>

      <div className="flex min-h-0 flex-1 items-center">
        <DonutChart
          data={komposisiBenefits.map((d) => ({ name: d.name, value: d.share, color: d.color }))}
          size={132}
          thickness={20}
          centerValue="Rp 356 M"
          centerCaption="Total"
          valueFormatter={(v) => `${v.toLocaleString("id-ID", { minimumFractionDigits: 1 })}%`}
          onHover={setActive}
        />

        <div className="ml-2 flex flex-1 flex-col gap-[8px]">
          {komposisiBenefits.map((d, i) => (
            <div
              key={d.name}
              className="flex items-center gap-1.5 whitespace-nowrap transition-opacity"
              style={{ opacity: active === null || active === i ? 1 : 0.4 }}
            >
              <span
                className="h-[8px] w-[8px] shrink-0 rounded-[2px]"
                style={{ background: d.color }}
              />
              <span className="text-[9px] text-ink-700">{d.name}</span>
              <span className="ml-auto text-[9px] font-semibold tabular-nums text-ink-900">
                {d.pct}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat detail benefit <ArrowRight size={11} />
      </button>
    </div>
  );
}

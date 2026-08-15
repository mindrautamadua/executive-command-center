"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { analisisJabatan } from "@/lib/org-data";
import { DonutChart } from "../ui/DonutChart";

export function AnalisisJabatan() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="card anim-rise flex min-h-0 flex-1 flex-col px-4 pb-2.5 pt-3" style={{ "--d": "120ms" } as React.CSSProperties}>
      <div className="flex items-start justify-between gap-2">
        <h3 className="card-title-navy">Analisis Jabatan</h3>
        <button className="select-chip whitespace-nowrap px-2.5 py-[5px] text-[9.5px] transition-colors hover:bg-[#f7f9fb]">
          Semua <ChevronDown size={11} />
        </button>
      </div>

      <div className="mt-1 flex min-h-0 flex-1 items-center justify-center gap-3">
        <DonutChart
          data={analisisJabatan}
          size={116}
          thickness={20}
          centerCaption="Total Jabatan"
          onHover={setActive}
        />

        <div className="flex w-[110px] shrink-0 flex-col gap-1">
          {analisisJabatan.map((s, i) => (
            <div
              key={s.name}
              className="flex items-baseline gap-1.5 leading-tight transition-opacity duration-150"
              style={{ opacity: active === null || active === i ? 1 : 0.4 }}
            >
              <span
                className="h-[8px] w-[8px] shrink-0 self-center rounded-[2px]"
                style={{ background: s.color }}
              />
              <span className="text-[9.5px] font-medium text-ink-700">{s.name}</span>
              <span className="ml-auto whitespace-nowrap text-[9px] tabular-nums text-ink-500">
                {s.value} ({s.pct})
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="link-more mt-1 flex items-center gap-1 self-start">
        Lihat struktur jabatan <ChevronRight size={11} />
      </button>
    </div>
  );
}

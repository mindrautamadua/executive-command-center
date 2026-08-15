"use client";

import { useState } from "react";
import { byCategory } from "@/lib/sbd-data";
import { CATEGORICAL } from "@/lib/chart-palette";
import { DonutChart } from "@/components/ui/DonutChart";
import { SectionHead } from "@/components/hc/SectionHead";

const DATA = byCategory.map((c, i) => ({
  name: c.category,
  value: c.pct,
  color: CATEGORICAL[i % CATEGORICAL.length],
}));

/** Komposisi 46 keputusan YTD menurut klasifikasi. */
export function DecisionByCategory() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "240ms" } as React.CSSProperties}
    >
      <SectionHead title="Keputusan per Klasifikasi" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Porsi 46 Keputusan YTD · Investasi Dominan 35%
      </p>

      <div className="flex min-h-0 flex-1 items-center gap-3">
        <DonutChart
          data={DATA}
          size={138}
          thickness={23}
          centerValue="46"
          centerCaption="Keputusan"
          valueFormatter={(v) => `${v}%`}
          onHover={setActive}
        />
        <div className="min-w-0 flex-1">
          {byCategory.map((c, i) => (
            <div
              key={c.category}
              className="flex items-center gap-1.5 py-[3px] transition-opacity"
              style={{ opacity: active === null || active === i ? 1 : 0.4 }}
            >
              <span
                className="h-[8px] w-[8px] shrink-0 rounded-[2px]"
                style={{ backgroundColor: CATEGORICAL[i % CATEGORICAL.length] }}
              />
              <span className="min-w-0 flex-1 truncate text-[9px] font-medium text-ink-700">
                {c.category}
              </span>
              <span className="shrink-0 text-[9.5px] font-bold tabular-nums text-ink-900">
                {c.jumlah}
              </span>
              <span className="w-[30px] shrink-0 text-right text-[9px] tabular-nums text-ink-400">
                {c.pct}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

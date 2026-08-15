"use client";

import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { DonutChart } from "../ui/DonutChart";
import { SectionHead } from "../hc/SectionHead";
import { gapAnalysis } from "@/lib/pm-data";

export function PerformanceGapCard() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "160ms" } as React.CSSProperties}
    >
      <SectionHead title="Performance Opportunity Gap (Top Level)" />

      <div className="flex min-h-0 flex-1 items-center gap-4 px-1">
        <DonutChart
          data={gapAnalysis.rows.map((r) => ({ name: r.name, value: r.value, color: r.color }))}
          size={158}
          thickness={26}
          centerValue={gapAnalysis.avg}
          centerCaption="Avg. Gap"
          valueFormatter={(v) => `${v.toLocaleString("id-ID", { minimumFractionDigits: 1 })}%`}
          onHover={setActive}
        />
        <div className="min-w-0 flex-1 space-y-2.5">
          {gapAnalysis.rows.map((r, i) => (
            <div
              key={r.name}
              className="flex items-center gap-2 transition-opacity"
              style={{ opacity: active === null || active === i ? 1 : 0.4 }}
            >
              <span className="h-[9px] w-[9px] shrink-0 rounded-[2px]" style={{ background: r.color }} />
              <span className="min-w-0 flex-1 truncate text-[9.5px] font-medium text-ink-700">
                {r.name}
              </span>
              <span className="shrink-0 text-[9.5px] font-bold text-ink-900">{r.pct}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-lg border border-[#f8e3bd] bg-[#fdf3e0] px-3 py-2">
        <AlertCircle size={13} className="shrink-0 text-[#d98b06]" />
        <span className="text-[9px] font-medium text-ink-700">
          <span className="font-bold text-[#d98b06]">{gapAnalysis.catatanHighlight}</span>{" "}
          {gapAnalysis.catatan}
        </span>
      </div>
    </div>
  );
}

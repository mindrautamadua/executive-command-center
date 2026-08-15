"use client";

import { useState } from "react";
import { exportExposure, exportExposureNote } from "@/lib/esg-data-detail";
import { DonutChart } from "@/components/ui/DonutChart";
import { SectionHead } from "@/components/hc/SectionHead";

/** Donut destinasi akhir volume CPO; menyoroti eksposur Uni Eropa Rp 4,1 T. */
export function ExportExposure() {
  const [active, setActive] = useState<number | null>(null);
  const data = exportExposure.map((d) => ({ name: d.name, value: d.pct, color: d.color }));

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "180ms" } as React.CSSProperties}
    >
      <SectionHead title="Eksposur Ekspor per Destinasi" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Uni Eropa 18% volume · nilai terpapar Rp 4,1 T setahun
      </p>

      <div className="flex min-h-0 flex-1 items-center gap-3">
        <DonutChart
          data={data}
          size={118}
          thickness={21}
          centerValue="18"
          centerCaption="% ke UE"
          valueFormatter={(v) => `${v}%`}
          onHover={setActive}
        />
        <div className="min-w-0 flex-1">
          {exportExposure.map((d, i) => (
            <div
              key={d.name}
              className="flex items-center gap-1.5 py-[2px] transition-opacity"
              style={{ opacity: active === null || active === i ? 1 : 0.4 }}
            >
              <span
                className="h-[8px] w-[8px] shrink-0 rounded-[2px]"
                style={{ backgroundColor: d.color }}
              />
              <span className="min-w-0 flex-1 truncate text-[9px] font-medium text-ink-700">
                {d.name}
              </span>
              <span className="shrink-0 text-[9.5px] font-bold tabular-nums text-ink-900">
                {d.pct}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-1 border-t border-[#f5f8fa] pt-1.5 text-[8px] leading-snug text-ink-500">
        {exportExposureNote}
      </p>
    </div>
  );
}

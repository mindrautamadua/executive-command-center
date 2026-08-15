"use client";

import { wasteCircularity } from "@/lib/esg-data-detail";
import { SectionHead } from "@/components/hc/SectionHead";
import { useSubholding } from "@/components/SubholdingProvider";

/** Tingkat pemanfaatan limbah utama: tankos, cangkang, dan POME. */
export function WasteCircularity() {
  const { active, def } = useSubholding();
  // Tankos, cangkang, dan POME adalah limbah proses PKS (sawit) — cakupan PalmCo.
  const outOfScope = active !== "all" && active !== "palmco";

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "180ms" } as React.CSSProperties}
    >
      <SectionHead title="Sirkularitas Limbah" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        {outOfScope
          ? `Jalur limbah tankos/cangkang/POME khas PKS sawit — di luar cakupan ${def.label}`
          : "% Volume Termanfaatkan per Jalur Limbah"}
      </p>

      <div
        className="mt-2 flex min-h-0 flex-1 flex-col justify-between transition-opacity"
        style={{ opacity: outOfScope ? 0.25 : 1 }}
      >
        {wasteCircularity.map((w) => (
          <div key={w.jalur}>
            <div className="flex items-baseline justify-between gap-2">
              <span className="truncate text-[9.5px] font-bold text-ink-900">{w.jalur}</span>
              <span className="shrink-0 text-[12px] font-extrabold tabular-nums text-ink-900">
                {w.pct}%
              </span>
            </div>
            <div className="mt-[5px] h-[7px] w-full overflow-hidden rounded-full bg-[#eef2f6]">
              <div
                className="h-full rounded-full"
                style={{ width: `${w.pct}%`, backgroundColor: w.color }}
              />
            </div>
            <p className="mt-[3px] truncate text-[8.5px] text-ink-500" title={w.pemanfaatan}>
              {w.pemanfaatan}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-1 border-t border-[#f5f8fa] pt-1.5 text-[8.5px] leading-snug text-ink-500">
        Limbah B3 100% dikelola melalui pengelola berizin KLHK.
      </p>
    </div>
  );
}

"use client";

import { SectionHead } from "@/components/hc/SectionHead";
import { impactRanking, LEVEL_COLOR, totalImpactRp, type PriorityLevel } from "@/lib/prr-priority";

const MAX = Math.max(...impactRanking.map((r) => r.impactRp));

/** Peringkat potensi dampak finansial — dasar alokasi anggaran mitigasi. */
export function ImpactRanking() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "80ms" } as React.CSSProperties}
    >
      <SectionHead title="Potensi Dampak (Rp M)" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        8 teratas ={" "}
        <span className="font-bold text-ink-900">
          {((impactRanking.reduce((s, r) => s + r.impactRp, 0) / totalImpactRp) * 100).toFixed(0)}%
        </span>{" "}
        total eksposur
      </p>

      <div className="scroll-thin mt-2 flex min-h-0 flex-1 flex-col justify-between gap-1 overflow-y-auto">
        {impactRanking.map((r) => (
          <div key={r.full} className="shrink-0">
            <div className="flex items-center justify-between gap-2">
              <span className="min-w-0 truncate text-[9px] text-ink-700" title={r.full}>
                {r.name}
              </span>
              <span className="shrink-0 text-[9px] font-extrabold text-ink-900">
                {r.impactRp.toString().replace(".", ",")}
              </span>
            </div>
            <div className="mt-[3px] h-[5px] w-full overflow-hidden rounded-full bg-[#eef2f6]">
              <div
                className="anim-grow-x h-full rounded-full"
                style={{
                  width: `${(r.impactRp / MAX) * 100}%`,
                  background: LEVEL_COLOR[r.level as PriorityLevel],
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

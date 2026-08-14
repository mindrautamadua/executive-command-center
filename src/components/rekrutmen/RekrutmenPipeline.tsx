"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { conversionRate, rekrutmenPipeline } from "@/lib/rekrutmen-data";

const fmtId = (n: number) => n.toLocaleString("id-ID");
const fmtPct = (n: number) => n.toFixed(1).replace(".", ",");

const maxValue = Math.max(...rekrutmenPipeline.map((s) => s.valueNum));

export function RekrutmenPipeline() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="card-title-navy">Rekrutmen Pipeline</h3>
        <button className="select-chip whitespace-nowrap px-2.5 py-[5px] text-[9.5px] transition-colors hover:bg-[#f7f9fb]">
          Semua Pipeline <ChevronDown size={11} />
        </button>
      </div>

      <div className="mt-2 flex min-h-0 flex-1 flex-col justify-between">
        {rekrutmenPipeline.map((s, i) => {
          const prev = rekrutmenPipeline[i - 1];
          // konversi antar tahap (bukan kumulatif dari Applied)
          const conv = prev ? (s.valueNum / prev.valueNum) * 100 : null;
          const dropOff = prev ? prev.valueNum - s.valueNum : 0;
          return (
            <div key={s.stage}>
              {conv !== null && (
                <div className="flex justify-center py-[2px]">
                  <span className="tone-slate rounded-full px-2 py-[1px] text-[9px] font-semibold">
                    → {fmtPct(conv)}%
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className="w-[80px] shrink-0 text-[9px] text-ink-700">{s.stage}</span>
                <div className="relative min-w-0 flex-1">
                  <div className="flex h-[20px] items-center justify-center">
                    <div
                      className="anim-grow-x h-full rounded-[4px] transition-opacity duration-150"
                      style={
                        {
                          width: `${(s.valueNum / maxValue) * 100}%`,
                          minWidth: 10,
                          background: s.color,
                          transformOrigin: "center",
                          opacity: active === null || active === i ? 1 : 0.4,
                          "--d": `${i * 90}ms`,
                        } as React.CSSProperties
                      }
                      onMouseEnter={() => setActive(i)}
                      onMouseLeave={() => setActive(null)}
                    />
                  </div>
                  {/* tooltip drop-off per tahap */}
                  {active === i && (
                    <div className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md border border-[#e3e9ef] bg-white px-2 py-1 text-[9px] shadow-cardHover">
                      <span className="font-bold text-ink-900">{s.stage}</span>{" "}
                      <span className="text-ink-700">{fmtId(s.valueNum)} kandidat</span>
                      {prev && (
                        <span className="text-ink-500">
                          {" "}
                          · drop-off {fmtId(dropOff)} dari {prev.stage}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <span className="flex w-[96px] shrink-0 items-baseline gap-1.5 whitespace-nowrap">
                  <span className="text-[10px] font-bold text-ink-900">{s.value}</span>
                  <span className="text-[9px] text-ink-500">({s.pct})</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-1 flex items-center justify-between border-t border-[#f2f5f8] pt-1.5">
        <span className="text-[10px] text-ink-700">Conversion Rate (Applied → Hire)</span>
        <span className="text-[13px] font-extrabold text-ptpn-green">{conversionRate}</span>
      </div>

      <button className="link-more mt-1 flex items-center gap-1 self-start">
        Lihat detail pipeline <ChevronRight size={11} />
      </button>
    </div>
  );
}

import { Info } from "lucide-react";
import { outcomeNote, outcomeRanges } from "@/lib/ss-data";
import { SectionHead } from "../hc/SectionHead";

/**
 * Range of outcomes P10/P50/P90 per metrik kunci — BOD melihat rentang
 * hasil yang mungkin, bukan single-point forecast.
 */
export function OutcomeRange() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "360ms" } as React.CSSProperties}
    >
      <SectionHead title="Range of Outcomes (P10-P90)" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Distribusi probabilistik hasil Skenario C
      </p>

      <ul className="mt-2 flex min-h-0 flex-1 flex-col justify-between gap-1.5">
        {outcomeRanges.map((r) => (
          <li key={r.metric} className="shrink-0">
            <div className="flex items-center justify-between">
              <span className="truncate text-[8.5px] font-bold text-ink-900">{r.metric}</span>
              <span className="shrink-0 text-[9px] font-extrabold text-ink-900">
                P50 {r.p50}
              </span>
            </div>
            <div className="relative mt-[3px] h-[8px] overflow-hidden rounded-full bg-[var(--chart-grid)]">
              <div
                className="absolute inset-y-0 rounded-full bg-[#aecdf8]"
                style={{ left: "8%", right: "8%" }}
              />
              <div
                className="absolute inset-y-0 w-[3px] rounded-full bg-[#1b3a6b]"
                style={{ left: `${r.pos}%` }}
              />
            </div>
            <div className="mt-[2px] flex items-center justify-between text-[7.5px] font-semibold text-ink-400">
              <span>P10 {r.p10}</span>
              <span>P90 {r.p90}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex shrink-0 items-start gap-1.5 rounded-lg bg-[#e8f1fd] px-2.5 py-1.5">
        <Info size={11} className="mt-[1px] shrink-0 text-[#2f6fe4]" />
        <p className="text-[8.5px] font-bold leading-snug text-[#1d4ed8]">{outcomeNote}</p>
      </div>
    </div>
  );
}

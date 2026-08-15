import { agingBuckets, agingStats } from "@/lib/ir-intel-data";
import { SectionHead } from "../hc/SectionHead";
import { PanelFooterLink } from "./PanelFooterLink";

const STAT_TONE: Record<"good" | "warn" | "bad", string> = {
  good: "text-ink-900",
  warn: "text-[#d98b06]",
  bad: "text-[#ef4444]",
};

const MAX_BUCKET = Math.max(...agingBuckets.map((b) => b.count));

/**
 * Case Aging: distribusi umur kasus aktif + metrik efektivitas penyelesaian
 * (avg/median, first-time resolution, repeat rate).
 */
export function CaseAging() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <div className="flex items-baseline gap-1.5">
        <SectionHead title="Case Aging & Efektivitas" />
        <span className="shrink-0 text-[8.5px] text-ink-400">(Kasus Aktif)</span>
      </div>

      <ul className="mt-2 flex flex-col gap-1.5">
        {agingBuckets.map((b) => (
          <li key={b.label} className="flex items-center gap-2">
            <span className="w-[46px] shrink-0 text-[8.5px] font-semibold text-ink-700">
              {b.label}
            </span>
            <span className="h-[7px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#eef2f6]">
              <span
                className="anim-grow-x block h-full rounded-full"
                style={{ width: `${(b.count / MAX_BUCKET) * 100}%`, background: b.color }}
              />
            </span>
            <span className="w-[18px] shrink-0 text-right text-[9px] font-extrabold text-ink-900">
              {b.count}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-2.5 flex min-h-0 flex-1 flex-col justify-around border-t border-[#eef2f6] pt-1.5">
        {agingStats.map((s) => (
          <div key={s.label} className="flex items-center justify-between gap-2">
            <span className="text-[8.5px] font-medium text-ink-600">{s.label}</span>
            <span className={`text-[9.5px] font-extrabold ${STAT_TONE[s.tone]}`}>{s.value}</span>
          </div>
        ))}
      </div>

      <PanelFooterLink label="Lihat Detail Aging" />
    </div>
  );
}

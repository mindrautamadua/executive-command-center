import { lateMilestones } from "@/lib/sms-data";
import { SectionHead } from "@/components/hc/SectionHead";
import { ToneBadge, type BadgeTone } from "@/components/shared/ToneBadge";

const lateTone = (hari: number): BadgeTone => (hari >= 30 ? "bad" : hari >= 20 ? "warn" : "neutral");

const COLS =
  "grid-cols-[minmax(0,1.9fr)_minmax(0,1.2fr)_58px_60px_minmax(0,1.6fr)_minmax(0,1.1fr)] items-center gap-x-2";

/** 19 milestone terlambat: hari keterlambatan, dampak, dan PIC. */
export function LateMilestones() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <SectionHead title="Milestone Terlambat" action="Lihat Semua" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        19 Milestone Terlambat dari Baseline RKAP 2026 — Diurutkan per Owner
      </p>

      <div
        className={`mt-2 grid ${COLS} border-b border-[#eef2f6] pb-1 text-[7.5px] font-semibold uppercase tracking-[0.04em] text-ink-400`}
      >
        <span>Milestone</span>
        <span>Program</span>
        <span>Owner</span>
        <span className="text-center">Terlambat</span>
        <span>Dampak</span>
        <span>PIC</span>
      </div>

      <ul className="scroll-thin mt-1 min-h-0 flex-1 overflow-y-auto">
        {lateMilestones.map((m) => (
          <li key={m.milestone} className={`grid ${COLS} border-b border-[#f4f7fa] py-[5px]`}>
            <span className="truncate text-[9.5px] font-bold text-ink-900" title={m.milestone}>
              {m.milestone}
            </span>
            <span className="truncate text-[8.5px] text-ink-500" title={m.program}>
              {m.program}
            </span>
            <span className="truncate text-[8.5px] text-ink-500">{m.owner}</span>
            <span className="flex justify-center">
              <ToneBadge label={`${m.hariTerlambat} hari`} tone={lateTone(m.hariTerlambat)} />
            </span>
            <span className="truncate text-[8.5px] text-ink-500" title={m.dampak}>
              {m.dampak}
            </span>
            <span className="truncate text-[8.5px] text-ink-400" title={m.pic}>
              {m.pic}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

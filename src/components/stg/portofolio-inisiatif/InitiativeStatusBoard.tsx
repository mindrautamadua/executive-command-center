"use client";

import { statusBoard } from "@/lib/spi-data";
import type { InitiativeStatus } from "@/lib/stg-core";
import { SectionHead } from "@/components/hc/SectionHead";
import { ToneBadge, type BadgeTone } from "@/components/shared/ToneBadge";
import { useSubholding } from "@/components/SubholdingProvider";
import { filterBySubholding } from "@/lib/subholding";

const STATUS_TONE: Record<InitiativeStatus, BadgeTone> = {
  "On Track": "good",
  "At Risk": "warn",
  "Off Track": "bad",
};

const BAR_CLS: Record<InitiativeStatus, string> = {
  "On Track": "bg-ptpn-green",
  "At Risk": "bg-[#f5a524]",
  "Off Track": "bg-[#ef4444]",
};

const COLS =
  "grid-cols-[46px_minmax(0,2fr)_60px_minmax(0,1.3fr)_74px_minmax(0,1.9fr)] items-center gap-x-2";

/** Papan status 10 inisiatif prioritas: progres, status, milestone berikutnya. */
export function InitiativeStatusBoard() {
  const { active } = useSubholding();
  // `owner` (PalmCo / SGN / PTPN I / Holding) adalah dimensi subholding baris ini.
  const rows = filterBySubholding(statusBoard, active, (r) => r.owner);

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <SectionHead title="Initiative Status Board" action="Lihat Semua" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        {rows.length} Inisiatif Prioritas — Progres Fisik, Status &amp; Milestone Berikutnya
      </p>

      <div
        className={`mt-2 grid ${COLS} border-b border-[#eef2f6] pb-1 text-[7.5px] font-semibold uppercase tracking-[0.04em] text-ink-400`}
      >
        <span>ID</span>
        <span>Inisiatif</span>
        <span>Owner</span>
        <span>Progres</span>
        <span className="text-center">Status</span>
        <span>Milestone Berikutnya</span>
      </div>

      {rows.length === 0 && (
        <p className="mt-2 text-[9px] text-ink-500">Tidak ada inisiatif untuk cakupan ini.</p>
      )}

      <ul className="mt-1 flex min-h-0 flex-1 flex-col justify-between">
        {rows.map((r) => (
          <li key={r.id} className={`grid ${COLS} border-b border-[#f4f7fa] py-[5px]`}>
            <span className="text-[8.5px] font-bold text-ink-400">{r.id}</span>
            <span className="truncate text-[9.5px] font-bold text-ink-900" title={r.name}>
              {r.name}
            </span>
            <span className="truncate text-[8.5px] text-ink-500">{r.owner}</span>
            <span className="flex items-center gap-1.5">
              <span className="h-[6px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#eef2f6]">
                <span
                  className={`block h-full rounded-full ${BAR_CLS[r.status]}`}
                  style={{ width: `${r.progress}%` }}
                />
              </span>
              <span className="w-[26px] shrink-0 text-right text-[9px] font-extrabold text-ink-900">
                {r.progress}%
              </span>
            </span>
            <span className="flex justify-center">
              <ToneBadge label={r.status} tone={STATUS_TONE[r.status]} />
            </span>
            <span className="truncate text-[8.5px] text-ink-500" title={r.nextMilestone}>
              {r.nextMilestone}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

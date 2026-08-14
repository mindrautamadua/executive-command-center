"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { governanceItems, governanceScore } from "@/lib/data-analytics";
import { SEMANTIC } from "@/lib/chart-palette";
import { CountUp } from "../ui/CountUp";

/** Tone % per item: hijau ≥95, amber 90-94, merah <90. */
const toneItem = (v: number) => {
  if (v >= 95) return "tone-green";
  if (v >= 90) return "tone-amber";
  return "tone-red";
};

/** Busur setengah lingkaran 180° dengan animasi sweep saat mount. */
function HalfGauge({ pct }: { pct: number }) {
  const r = 62;
  const len = Math.PI * r;
  // sweep: offset penuh → offset akhir setelah mount (transition CSS)
  const [siap, setSiap] = useState(false);
  useEffect(() => setSiap(true), []);

  return (
    <div className="relative h-[86px] w-[152px]">
      <svg viewBox="0 0 152 84" className="h-full w-full">
        <path
          d={`M 14 76 A ${r} ${r} 0 0 1 138 76`}
          fill="none"
          stroke="var(--surface-3)"
          strokeWidth={13}
          strokeLinecap="round"
        />
        <path
          d={`M 14 76 A ${r} ${r} 0 0 1 138 76`}
          fill="none"
          stroke={SEMANTIC.good}
          strokeWidth={13}
          strokeLinecap="round"
          strokeDasharray={len}
          strokeDashoffset={siap ? len * (1 - pct / 100) : len}
          style={{ transition: "stroke-dashoffset 1s cubic-bezier(0.22, 1, 0.36, 1)" }}
        />
      </svg>
      <div className="absolute inset-x-0 bottom-[6px] flex flex-col items-center">
        <CountUp
          value={governanceScore.label}
          className="text-[20px] font-extrabold leading-none text-ink-900"
        />
        <span className="mt-[3px] text-[9px] text-ink-500">Governance Score</span>
        <span className="mt-[2px] text-[9px] font-semibold text-ptpn-green">
          {governanceScore.status}
        </span>
      </div>
    </div>
  );
}

export function GovernanceStatus() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "480ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Data Governance Status</h3>

      <div className="flex min-h-0 flex-1 items-center gap-3">
        <div className="flex shrink-0 items-center justify-center pl-2">
          <HalfGauge pct={governanceScore.pct} />
        </div>

        <div className="flex flex-1 flex-col gap-[8px]">
          {governanceItems.map((g) => (
            <div key={g.label} className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-[9.5px] text-ink-700">{g.label}</span>
              <span
                className={`${toneItem(
                  g.value,
                )} ml-auto inline-block min-w-[38px] rounded-md px-1.5 py-[2px] text-center text-[9.5px] font-bold tabular-nums`}
              >
                {g.pct}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat governance detail <ArrowRight size={11} />
      </button>
    </div>
  );
}

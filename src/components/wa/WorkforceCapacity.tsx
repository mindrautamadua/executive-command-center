"use client";

import Link from "next/link";
import { BookText, Gauge } from "lucide-react";
import { workforceCapacity } from "@/lib/wa-data";
import { ScopeNote } from "../ui/ScopeNote";

/** Kapasitas efektif workforce vs FTE teoritis + faktor pengurangnya. */
export function WorkforceCapacity() {
  const wc = workforceCapacity;
  const maxPct = Math.max(...wc.factors.map((f) => f.pct));

  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <h3 className="flex min-w-0 items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.05em] text-ink-900">
        <span>
          Workforce Capacity{" "}
          <span className="font-semibold normal-case tracking-normal text-ink-400">
            (Effective vs Theoretical)
          </span>
        </span>
        <ScopeNote />
      </h3>

      <div className="mt-2 flex items-center gap-3">
        <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-xl bg-ptpn-greenLight text-ptpn-green">
          <Gauge size={18} strokeWidth={1.9} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-[20px] font-extrabold leading-none text-ink-900">
              {wc.effectivePct.toFixed(0)}%
            </span>
            <span className="text-[9px] font-semibold text-ink-500">
              Effective Capacity — {wc.effectiveFte} dari {wc.theoreticalFte} FTE
            </span>
          </div>
          <div className="mt-1.5 h-[6px] w-full overflow-hidden rounded-full bg-[#e8edf2]">
            <div
              className="h-full rounded-full bg-ptpn-green"
              style={{ width: `${wc.effectivePct}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-2 text-[8.5px] font-bold uppercase tracking-[0.05em] text-ink-400">
        Capacity Loss Drivers (-18,0%)
      </div>
      <div className="mt-1 flex min-h-0 flex-1 flex-col justify-between">
        {wc.factors.map((f) => (
          <div key={f.label} className="flex items-center gap-2">
            <span className="w-[55%] truncate text-[8.5px] font-medium text-ink-500">
              {f.label}
            </span>
            <div className="h-[5px] flex-1 overflow-hidden rounded-full bg-[#e8edf2]">
              <div
                className="h-full rounded-full bg-[#f5a524]"
                style={{ width: `${(f.pct / maxPct) * 100}%` }}
              />
            </div>
            <span className="w-[34px] text-right text-[9px] font-bold text-ink-900">
              -{f.pct.toFixed(1).replace(".", ",")}%
            </span>
          </div>
        ))}
      </div>

      <Link
        href="/data-dictionary"
        className="mt-2 flex items-center gap-1.5 rounded-lg bg-[#f8fafc] px-3 py-[6px] text-[8.5px] font-medium text-ink-500 transition-colors hover:text-ptpn-green"
      >
        <BookText size={11} className="shrink-0 text-ptpn-green" />
        {wc.note}
      </Link>
    </div>
  );
}

"use client";

import { ArrowRight, BadgeCheck, Info, TrendingUp, TriangleAlert } from "lucide-react";
import { compInsight } from "@/lib/comp-data";
import { CoachRobot } from "../kinerja/CoachRobot";
import { ScopeNote } from "@/components/ui/ScopeNote";

const ICONS = {
  trend: TrendingUp,
  check: BadgeCheck,
  warning: TriangleAlert,
  info: Info,
} as const;

export function InsightComp() {
  return (
    <div
      className="card anim-rise relative flex h-full flex-col overflow-hidden px-4 pb-2.5 pt-3"
      style={{ "--d": "640ms" } as React.CSSProperties}
    >
      <div className="flex items-center gap-1.5">
        <h3 className="card-title-navy flex min-w-0 items-center gap-1.5"><span>Insight &amp; Rekomendasi AI</span><ScopeNote /></h3>
        <span className="rounded bg-[#dbe9fb] px-1.5 py-[1px] text-[9px] font-bold leading-none text-[#2f6fe4]">
          Beta
        </span>
      </div>

      <div className="relative z-10 mt-2 flex min-h-0 flex-1 flex-col justify-around pr-[86px]">
        {compInsight.map((it) => {
          const Icon = ICONS[it.icon];
          return (
            <div key={it.highlight} className="flex gap-2">
              <span
                className={`tone-${it.tone} mt-[1px] flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-md`}
              >
                <Icon size={11} strokeWidth={2} />
              </span>
              <p className="min-w-0 text-[9px] leading-[1.4] text-ink-500">
                <span className="font-bold text-ink-900">{it.highlight}</span>
                {it.isi}
              </p>
            </div>
          );
        })}
      </div>

      <button className="relative z-10 mt-2 flex w-[196px] items-center justify-between rounded-lg bg-ptpn-green px-3 py-[7px] text-[10px] font-semibold text-white shadow-pill transition-opacity hover:opacity-90">
        Lihat Rekomendasi Lengkap
        <ArrowRight size={12} />
      </button>

      {/* maskot */}
      <div className="pointer-events-none absolute -bottom-1 right-1 h-[124px] w-[112px] animate-floaty">
        <CoachRobot waving className="h-full w-full" />
      </div>
    </div>
  );
}

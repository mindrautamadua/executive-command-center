import { ArrowRight, CircleCheck, Info, TrendingUp, TriangleAlert } from "lucide-react";
import { insightEngagement } from "@/lib/engagement-data";
import { CoachRobot } from "../kinerja/CoachRobot";

const ICONS = {
  check: CircleCheck,
  warning: TriangleAlert,
  info: Info,
  trend: TrendingUp,
} as const;

export function InsightEngagement() {
  return (
    <div
      className="card anim-rise relative flex h-full flex-col overflow-hidden px-4 pb-2.5 pt-3"
      style={{ "--d": "640ms" } as React.CSSProperties}
    >
      <div className="flex items-center gap-1.5">
        <h3 className="card-title-navy">Insight &amp; Rekomendasi AI</h3>
        <span className="rounded bg-[#dbe9fb] px-1.5 py-[1px] text-[9px] font-bold leading-none text-[#2f6fe4]">
          Beta
        </span>
      </div>

      <div className="relative z-10 mt-2 flex min-h-0 flex-1 flex-col justify-around pr-[130px]">
        {insightEngagement.map((it) => {
          const Icon = ICONS[it.icon];
          return (
            <div key={it.isi} className="flex gap-2">
              <span
                className={`tone-${it.tone} mt-[1px] flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-md`}
              >
                <Icon size={11} strokeWidth={2} />
              </span>
              <p className="min-w-0 text-[9px] leading-[1.4] text-ink-700">{it.isi}</p>
            </div>
          );
        })}
      </div>

      <button className="relative z-10 mt-2 flex w-[196px] items-center justify-between rounded-lg bg-gradient-to-r from-[#3fae63] to-[#1a9c5b] px-3 py-[7px] text-[10px] font-semibold text-white shadow-pill transition-opacity hover:opacity-90">
        Lihat Rekomendasi Lengkap
        <ArrowRight size={12} />
      </button>

      {/* maskot + gelembung grafik */}
      <div className="pointer-events-none absolute bottom-1 right-2 h-[132px] w-[118px] animate-floaty">
        <CoachRobot waving className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute right-[104px] top-8 flex h-[34px] w-[42px] items-center justify-center rounded-lg border border-[#dbeafe] bg-white shadow-card">
        <svg viewBox="0 0 24 18" className="h-[14px] w-[18px]">
          <rect x="1" y="9" width="4.5" height="8" rx="1.2" fill="#3b7ded" />
          <rect x="8" y="5" width="4.5" height="12" rx="1.2" fill="#1a9c5b" />
          <rect x="15" y="1" width="4.5" height="16" rx="1.2" fill="#f5a524" />
        </svg>
      </div>
    </div>
  );
}

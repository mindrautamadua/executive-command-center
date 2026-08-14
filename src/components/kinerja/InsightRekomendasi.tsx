import { ArrowRight, CircleCheck, TriangleAlert, Info } from "lucide-react";
import { insightKinerja } from "@/lib/kinerja-data";
import { CoachRobot } from "./CoachRobot";

/* chip pastel dark-mode-safe per tone insight */
const TONE = {
  success: { chip: "tone-green", Icon: CircleCheck },
  warning: { chip: "tone-amber", Icon: TriangleAlert },
  info: { chip: "tone-blue", Icon: Info },
} as const;

export function InsightRekomendasi() {
  return (
    <div
      className="card anim-rise relative flex h-full flex-col overflow-hidden px-4 pb-2.5 pt-3"
      style={{ "--d": "60ms" } as React.CSSProperties}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <h3 className="card-title-navy">INSIGHT &amp; REKOMENDASI AI</h3>
          <span className="tone-blue rounded px-1.5 py-[1px] text-[9px] font-bold">
            Beta
          </span>
        </span>
        <button className="link-more">Lihat semua</button>
      </div>

      <div className="relative z-10 mt-2 flex min-h-0 flex-1 flex-col justify-around pr-[92px]">
        {insightKinerja.map((it) => {
          const t = TONE[it.tone];
          return (
            <div key={it.judul} className="flex gap-2">
              <span
                className={`${t.chip} mt-[1px] flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-md`}
              >
                <t.Icon size={12} strokeWidth={2} />
              </span>
              <div className="min-w-0">
                <div className="text-[10px] font-bold text-ink-900">{it.judul}</div>
                <p className="mt-[2px] text-[9px] leading-[1.4] text-ink-500">{it.isi}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="relative z-10 mt-2 flex w-[190px] items-center justify-between rounded-lg bg-[#e8f7ef] px-3 py-[7px] text-[10px] font-semibold text-ptpn-green transition-colors hover:bg-[#ddf2e6]">
        Lihat rekomendasi lengkap
        <ArrowRight size={12} />
      </button>

      {/* maskot */}
      <div className="pointer-events-none absolute -bottom-1 right-1 h-[112px] w-[104px] animate-floaty">
        <CoachRobot waving className="h-full w-full" />
      </div>
    </div>
  );
}

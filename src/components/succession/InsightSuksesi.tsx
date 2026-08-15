import Link from "next/link";
import { ArrowRight, CircleCheck, Lightbulb, ShieldAlert, TriangleAlert } from "lucide-react";
import { suksesiInsight } from "@/lib/succession-data";
import { SuksesiIlustrasi } from "./SuksesiIlustrasi";

/** Chip memakai kelas tone (globals.css) agar aman dark mode. */
const TONE = {
  danger: { chip: "tone-red", Icon: ShieldAlert },
  warning: { chip: "tone-amber", Icon: TriangleAlert },
  success: { chip: "tone-green", Icon: CircleCheck },
  info: { chip: "tone-teal", Icon: Lightbulb },
} as const;

export function InsightSuksesi() {
  return (
    <div
      className="card anim-rise relative flex h-full flex-col overflow-hidden px-4 pb-2.5 pt-3"
      style={{ "--d": "900ms" } as React.CSSProperties}
    >
      <div className="flex items-center gap-1.5">
        <h3 className="card-title-navy">Insight &amp; Rekomendasi AI</h3>
        <span className="tone-blue rounded px-1.5 py-[1px] text-[9px] font-bold">Beta</span>
      </div>

      <div className="relative z-10 mt-2 flex min-h-0 flex-1 flex-col justify-around pr-[156px]">
        {suksesiInsight.map((it) => {
          const t = TONE[it.tone];
          return (
            <div key={it.isi} className="flex gap-2">
              <span
                className={`${t.chip} mt-[1px] flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-md`}
              >
                <t.Icon size={11} strokeWidth={2} />
              </span>
              <p className="min-w-0 text-[9px] leading-[1.4] text-ink-700">{it.isi}</p>
            </div>
          );
        })}
      </div>

      <Link
        href="/succession-planning/rekomendasi"
        className="relative z-10 mt-2 flex w-[196px] cursor-pointer items-center justify-between rounded-lg bg-gradient-to-r from-[#3fae63] to-[#1a9c5b] px-3 py-[7px] text-[10px] font-semibold text-white shadow-pill transition-opacity hover:opacity-90"
      >
        Lihat Rekomendasi Lengkap
        <ArrowRight size={12} />
      </Link>

      <div className="pointer-events-none absolute bottom-1 right-2 w-[150px]">
        <SuksesiIlustrasi className="h-[124px] w-full" />
      </div>
    </div>
  );
}

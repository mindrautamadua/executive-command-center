import { ArrowRight, CircleCheck, Clock, TrendingUp, TriangleAlert } from "lucide-react";
import { absensiInsight } from "@/lib/absensi-data";

/** Tone chip dark-safe dari globals.css — bukan pastel inline. */
const TONE = {
  success: { chip: "tone-green", Icon: CircleCheck },
  info: { chip: "tone-blue", Icon: TrendingUp },
  warning: { chip: "tone-amber", Icon: TriangleAlert },
  neutral: { chip: "tone-teal", Icon: Clock },
} as const;

export function InsightAbsensi() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "480ms" } as React.CSSProperties}
    >
      <div className="flex items-center gap-1.5">
        <h3 className="card-title-navy">Insight &amp; Rekomendasi AI</h3>
        <span className="tone-blue rounded px-1.5 py-[1px] text-[9px] font-bold">Beta</span>
      </div>

      <div className="mt-2 flex min-h-0 flex-1 flex-col justify-around">
        {absensiInsight.map((it) => {
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

      <button className="mt-2 flex w-[196px] items-center justify-between rounded-lg bg-gradient-to-r from-[#3fae63] to-[#1a9c5b] px-3 py-[7px] text-[10px] font-semibold text-white shadow-pill transition-opacity hover:opacity-90">
        Lihat Rekomendasi Lengkap
        <ArrowRight size={12} />
      </button>
    </div>
  );
}

import { ArrowRight, CircleCheck, Clock, TrendingUp, TriangleAlert } from "lucide-react";
import { topInsight } from "@/lib/data-analytics";

/** Tone chip dark-safe dari globals.css — bukan pastel inline. */
const TONE = {
  info: { chip: "tone-blue", Icon: TrendingUp },
  success: { chip: "tone-green", Icon: CircleCheck },
  warning: { chip: "tone-amber", Icon: TriangleAlert },
  neutral: { chip: "tone-teal", Icon: Clock },
} as const;

export function TopInsightData() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "420ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">
        Top 5 Insight dari Data{" "}
        <span className="text-[9.5px] font-medium normal-case tracking-normal text-ink-400">
          (dengan confidence)
        </span>
      </h3>

      <div className="mt-2 flex min-h-0 flex-1 flex-col justify-around">
        {topInsight.map((it) => {
          const t = TONE[it.tone];
          return (
            <div key={it.isi} className="flex items-start gap-2">
              <span
                className={`${t.chip} mt-[1px] flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-md`}
              >
                <t.Icon size={11} strokeWidth={2} />
              </span>
              <p className="min-w-0 flex-1 text-[9px] leading-[1.4] text-ink-700">{it.isi}</p>
              <span
                className="mt-[1px] shrink-0 rounded-md bg-[#f1f5f9] px-1.5 py-[2px] text-[8.5px] font-bold tabular-nums text-ink-500"
                title="Insight confidence — kelengkapan sumber, n, dan signifikansi statistik"
              >
                {it.conf}
              </span>
            </div>
          );
        })}
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat semua insight <ArrowRight size={11} />
      </button>
    </div>
  );
}

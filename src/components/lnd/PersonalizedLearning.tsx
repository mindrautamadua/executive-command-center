import { ArrowRight, Route, Sparkles, UsersRound, Zap } from "lucide-react";
import { personalized } from "@/lib/lnd-data";

const STEPS = [
  {
    Icon: UsersRound,
    label: "Karyawan dengan Skill Gap",
    value: personalized.gapEmployees,
    pct: 100,
    chip: "tone-slate" as const,
  },
  {
    Icon: Route,
    label: "Punya Learning Path Personal",
    value: personalized.paths,
    pct: personalized.pathsPct,
    chip: "tone-blue" as const,
  },
  {
    Icon: Zap,
    label: "Aktif Belajar (30 Hari)",
    value: personalized.active,
    pct: personalized.activePct,
    chip: "tone-green" as const,
  },
];

/**
 * Personalized learning untuk populasi ber-gap kritis — menggantikan view
 * generasi (turun ke drill-down): siapa yang paling butuh, apakah terjangkau.
 */
export function PersonalizedLearning() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "520ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="card-title-navy">Personalized Learning — Populasi Skill Gap</h3>
        <span className="flex items-center gap-1 whitespace-nowrap rounded bg-[#eaf7ef] px-1.5 py-[2px] text-[8.5px] font-bold text-[#0f7a44]">
          <Sparkles size={9} /> Skill {personalized.improvement}
        </span>
      </div>

      <div className="mt-1 flex min-h-0 flex-1 flex-col justify-around">
        {STEPS.map((s, i) => (
          <div key={s.label} className="flex items-center gap-2">
            <span
              className={`${s.chip} flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-md`}
            >
              <s.Icon size={11} strokeWidth={2} />
            </span>
            <span className="w-[136px] shrink-0 text-[9px] leading-[1.25] text-ink-700">
              {s.label}
            </span>
            <span className="h-[9px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#f2f5f8]">
              <span
                className="anim-grow-x block h-full rounded-full bg-[#3b7ded]"
                style={
                  {
                    width: `${s.pct}%`,
                    opacity: 1 - i * 0.28,
                    "--d": `${110 * i}ms`,
                  } as React.CSSProperties
                }
              />
            </span>
            <span className="w-[42px] shrink-0 text-right text-[10px] font-bold tabular-nums text-ink-900">
              {s.value}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-1 text-[8.5px] leading-[1.35] text-ink-400">{personalized.note}</p>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat learning path aktif <ArrowRight size={11} />
      </button>
    </div>
  );
}

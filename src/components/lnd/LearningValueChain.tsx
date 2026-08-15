import { ArrowRight, Banknote } from "lucide-react";
import { chainInsight, chainReaction, chainValue, learningChain } from "@/lib/lnd-data";

/**
 * Funnel nilai pembelajaran: Enrollment → Completion → Kirkpatrick L2–L4
 * → estimasi business value. Drop-off antar tahap ditampilkan supaya
 * constraint transfer-to-job langsung terlihat.
 */
export function LearningValueChain() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "220ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="card-title-navy">Learning Value Chain</h3>
        <span className="whitespace-nowrap rounded bg-[#eaf7ef] px-1.5 py-[2px] text-[8.5px] font-bold text-[#1a9c5b]">
          {chainReaction.label} {chainReaction.pct}%
        </span>
      </div>

      <div className="mt-1.5 flex min-h-0 flex-1 flex-col justify-around">
        {learningChain.map((s, i) => {
          const prev = i > 0 ? learningChain[i - 1].pct : null;
          const drop = prev !== null ? Math.round((prev - s.pct) * 10) / 10 : null;
          return (
            <div key={s.label} className="group relative flex items-center gap-2">
              <span className="w-[104px] shrink-0 whitespace-nowrap text-[9.5px] leading-[1.2]">
                <span className="font-semibold text-ink-700">{s.label}</span>
              </span>

              <span className="relative h-[13px] min-w-0 flex-1 overflow-hidden rounded-[4px] bg-[#f2f5f8]">
                <span
                  className="anim-grow-x block h-full rounded-[4px]"
                  style={
                    {
                      width: `${s.pct}%`,
                      background: s.color,
                      "--d": `${120 * i}ms`,
                    } as React.CSSProperties
                  }
                />
              </span>

              <span className="w-[38px] shrink-0 text-right text-[10px] font-bold tabular-nums text-ink-900">
                {s.pct.toLocaleString("id-ID", { maximumFractionDigits: 1 })}%
              </span>
              <span className="w-[44px] shrink-0 whitespace-nowrap text-right text-[9px] font-semibold tabular-nums text-ink-500">
                {drop !== null ? `▼ ${drop.toLocaleString("id-ID")} pts` : ""}
              </span>

              {/* tooltip per tahap */}
              <div className="pointer-events-none absolute left-[110px] top-[16px] z-20 hidden whitespace-nowrap rounded-lg border border-[#e3e9ef] bg-white px-2.5 py-1.5 shadow-cardHover group-hover:block">
                <div className="text-[9.5px] font-bold text-ink-900">
                  {s.label} · {s.aspek}
                </div>
                <div className="mt-[2px] max-w-[280px] whitespace-normal text-[9px] text-ink-500">
                  {s.detail}
                </div>
              </div>
            </div>
          );
        })}

        {/* muara funnel: estimasi business value */}
        <div className="flex items-center gap-2 rounded-lg border border-[#d9ead4] bg-[#f4faf3] px-2.5 py-[5px]">
          <Banknote size={13} className="shrink-0 text-[#1a9c5b]" />
          <span className="text-[9.5px] font-semibold text-ink-700">{chainValue.label}</span>
          <span className="ml-auto text-[11px] font-extrabold tabular-nums text-[#0f7a44]">
            {chainValue.value}
          </span>
        </div>
      </div>

      <p className="mt-1.5 text-[8.5px] leading-[1.35] text-ink-400">{chainInsight}</p>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat metodologi estimasi <ArrowRight size={11} />
      </button>
    </div>
  );
}

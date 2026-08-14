import { ArrowRight } from "lucide-react";
import { kirkpatrick } from "@/lib/lnd-data";

/**
 * Funnel kaskade Kirkpatrick: bar menurun L1→L4 supaya drop-off
 * antar level terlihat (ring terpisah menyembunyikan urutannya).
 */
export function CapaianKirkpatrick() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "340ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">Capaian Pembelajaran (Level Evaluasi Kirkpatrick)</h3>

      <div className="mt-1.5 flex min-h-0 flex-1 flex-col justify-around">
        {kirkpatrick.map((k, i) => {
          const prev = i > 0 ? kirkpatrick[i - 1].pct : null;
          const drop = prev !== null ? prev - k.pct : null;
          return (
            <div key={k.level} className="group relative flex items-center gap-2">
              <span className="w-[112px] shrink-0 whitespace-nowrap text-[9.5px] leading-[1.2]">
                <span className="font-semibold text-ink-700">{k.level}</span>
                <span className="text-ink-400"> · {k.aspek}</span>
              </span>

              <span className="relative h-[14px] min-w-0 flex-1 overflow-hidden rounded-[4px] bg-[#f2f5f8]">
                <span
                  className="anim-grow-x block h-full rounded-[4px]"
                  style={
                    {
                      width: `${k.pct}%`,
                      background: k.color,
                      "--d": `${140 * i}ms`,
                    } as React.CSSProperties
                  }
                />
              </span>

              <span className="w-[30px] shrink-0 text-right text-[10px] font-bold tabular-nums text-ink-900">
                {k.pct}%
              </span>
              <span className="w-[46px] shrink-0 whitespace-nowrap text-right text-[9px] font-semibold tabular-nums text-ink-500">
                {drop !== null ? `▼ ${drop} pts` : ""}
              </span>

              {/* tooltip per level */}
              <div className="pointer-events-none absolute left-[118px] top-[17px] z-20 hidden whitespace-nowrap rounded-lg border border-[#e3e9ef] bg-white px-2.5 py-1.5 shadow-cardHover group-hover:block">
                <div className="text-[9.5px] font-bold text-ink-900">
                  {k.level} — {k.aspek}
                </div>
                <div className="mt-[2px] text-[9px] text-ink-500">
                  Capaian: <span className="font-bold tabular-nums text-ink-900">{k.pct}%</span>
                  {" · "}Status: <span className="font-semibold text-ink-700">{k.status}</span>
                  {drop !== null && (
                    <>
                      {" · "}Drop-off dari {kirkpatrick[i - 1].level}:{" "}
                      <span className="font-semibold tabular-nums text-ink-700">-{drop} pts</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat evaluasi lengkap <ArrowRight size={11} />
      </button>
    </div>
  );
}

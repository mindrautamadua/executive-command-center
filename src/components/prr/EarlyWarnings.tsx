import Link from "next/link";
import { ArrowRight, Siren } from "lucide-react";
import { earlyWarnings } from "@/lib/prr-data";
import { SectionHead } from "../hc/SectionHead";
import { LevelBadge } from "./LevelBadge";

/**
 * Early Warning Indicators: sinyal prekursor (leading indicators) sebelum
 * risiko benar-benar terealisasi, plus prediksi dampaknya.
 */
export function EarlyWarnings() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "300ms" } as React.CSSProperties}
    >
      <SectionHead title="Early Warning Indicators" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Sinyal Prekursor Sebelum Risiko Terealisasi
      </p>

      <ul className="scroll-thin mt-2 flex min-h-0 flex-1 flex-col justify-between gap-1.5 overflow-y-auto">
        {earlyWarnings.map((w) => (
          <li
            key={w.risk}
            className="shrink-0 rounded-lg border border-[#f6dede] bg-[#fdf7f7] px-2.5 py-1.5"
          >
            <div className="flex items-center gap-1.5">
              <Siren size={11} className="shrink-0 text-[#ef4444]" />
              <span className="min-w-0 flex-1 truncate text-[9.5px] font-extrabold text-ink-900">
                {w.risk}
              </span>
              <LevelBadge level={w.level} />
            </div>
            <div className="mt-1 flex flex-wrap gap-1">
              {w.signals.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-[#fdecec] px-1.5 py-[2px] text-[7.5px] font-bold text-[#c03434]"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-1 text-[8.5px] leading-[1.35] text-ink-700">{w.headline}</div>
            <div className="text-[8.5px] font-extrabold leading-[1.35] text-[#ef4444]">
              {w.prediction}
            </div>
          </li>
        ))}
      </ul>
      <Link href="/people-risk-radar/early-warning" className="mt-2 flex w-full items-center justify-center gap-1 rounded-lg border border-[#e3e9ef] bg-[#f8fafc] py-[7px] text-[9.5px] font-semibold text-ptpn-greenDark transition-colors hover:bg-[#eef4f0]">
        Lihat Semua Sinyal Dini <ArrowRight size={11} />
      </Link>
    </div>
  );
}

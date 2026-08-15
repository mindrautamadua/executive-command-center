import Link from "next/link";
import { ArrowUpRight, Minus, Siren, TrendingDown, TrendingUp } from "lucide-react";
import { earlyWarnings, type EarlyWarningKri } from "@/lib/risk-data";
import { SectionHead } from "@/components/hc/SectionHead";
import { ScopeNote } from "@/components/ui/ScopeNote";
import { ToneBadge, type BadgeTone } from "@/components/shared/ToneBadge";

const STATUS_TONE: Record<EarlyWarningKri["status"], BadgeTone> = {
  Merah: "bad",
  Kuning: "warn",
  Hijau: "good",
};

const WRAP: Record<EarlyWarningKri["status"], string> = {
  Merah: "border-[#f6dede] bg-[#fdf7f7]",
  Kuning: "border-[#f3e3c3] bg-[#fdf9f0]",
  Hijau: "border-[#d6ecdf] bg-[#f4faf6]",
};

const TREND_CLS: Record<EarlyWarningKri["trendTone"], string> = {
  good: "text-ptpn-green",
  bad: "text-[#ef4444]",
  neutral: "text-ink-400",
};

function TrendMark({ w }: { w: EarlyWarningKri }) {
  const Icon = w.trend === "flat" ? Minus : w.trend === "up" ? TrendingUp : TrendingDown;
  return <Icon size={11} className={`shrink-0 ${TREND_CLS[w.trendTone]}`} />;
}

/** 6 Key Risk Indicator leading beserta ambang eskalasi dan statusnya. */
export function EarlyWarningIndicators() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "240ms" } as React.CSSProperties}
    >
      <SectionHead title="Early Warning Indicators (KRI)" badge={<ScopeNote />} />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Sinyal Prekursor Sebelum Risiko Terealisasi — 1 Merah · 3 Kuning · 2 Hijau
      </p>

      <ul className="scroll-thin mt-2 flex min-h-0 flex-1 flex-col justify-between gap-1.5 overflow-y-auto">
        {earlyWarnings.map((w) => {
          const body = (
            <>
              <div className="flex items-center gap-1.5">
                <Siren size={11} className={`shrink-0 ${TREND_CLS[w.trendTone]}`} />
                <span className="min-w-0 flex-1 truncate text-[9.5px] font-extrabold text-ink-900">
                  {w.indikator}
                </span>
                {w.href && <ArrowUpRight size={10} className="shrink-0 text-ink-400" />}
                <ToneBadge label={w.status} tone={STATUS_TONE[w.status]} />
              </div>
              <div className="mt-1 flex items-center gap-1.5">
                <TrendMark w={w} />
                <span className="text-[9.5px] font-extrabold text-ink-900">{w.nilai}</span>
                <span className="truncate text-[8.5px] text-ink-500">{w.ambang}</span>
              </div>
            </>
          );
          return (
            <li key={w.indikator} className={`shrink-0 rounded-lg border px-2.5 py-1.5 ${WRAP[w.status]}`}>
              {w.href ? (
                <Link href={w.href} className="block">
                  {body}
                </Link>
              ) : (
                body
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

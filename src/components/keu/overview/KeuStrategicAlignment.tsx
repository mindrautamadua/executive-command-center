import { keuAlignment, type KeuAlignmentTarget } from "@/lib/keu-data";
import { fmtId } from "@/lib/keu-core";
import { SectionHead } from "@/components/hc/SectionHead";
import { ToneBadge, type BadgeTone } from "@/components/shared/ToneBadge";
import { ScopeNote } from "@/components/ui/ScopeNote";

const FILL: Record<KeuAlignmentTarget["tone"], string> = {
  good: "bg-ptpn-green",
  warn: "bg-[#f5a524]",
  bad: "bg-[#ef4444]",
};

const BADGE: Record<KeuAlignmentTarget["tone"], { label: string; tone: BadgeTone }> = {
  good: { label: "On Track", tone: "good" },
  warn: { label: "Behind", tone: "warn" },
  bad: { label: "Off Track", tone: "bad" },
};

/** Progress realisasi YTD vs target RKAP FY, dengan penanda prorata waktu berjalan. */
export function KeuStrategicAlignment() {
  return (
    <div className="card anim-rise px-4 pb-4 pt-3" style={{ "--d": "60ms" } as React.CSSProperties}>
      <SectionHead title="Strategic Alignment" action="Lihat Detail" badge={<ScopeNote />} />
      <p className="mt-[3px] text-[9px] text-ink-500">Realisasi YTD vs Target RKAP 2026</p>

      <div className="mt-3 flex flex-col gap-3">
        {keuAlignment.map((t) => {
          const badge = BADGE[t.tone];
          return (
            <div key={t.label}>
              <div className="flex items-center justify-between gap-2">
                <span className="flex min-w-0 items-center gap-1.5">
                  <span className="truncate text-[10px] font-bold text-ink-900">{t.label}</span>
                  <ToneBadge label={badge.label} tone={badge.tone} />
                </span>
                <span className="shrink-0 text-[8.5px] font-semibold text-ink-500">
                  {t.realisasi} <span className="font-normal text-ink-400">/ {t.targetFy}</span>
                </span>
              </div>
              <div className="relative mt-1.5 h-[6px] w-full overflow-hidden rounded-full bg-[#eef2f6]">
                <div
                  className={`h-full rounded-full ${FILL[t.tone]}`}
                  style={{ width: `${Math.min(t.progressPct, 100)}%` }}
                />
                {/* penanda prorata waktu berjalan */}
                <span
                  className="absolute top-0 h-full w-[2px] bg-[#1b3a6b]"
                  style={{ left: `${t.prorataPct}%` }}
                />
              </div>
              <div className="mt-1 flex items-center justify-between text-[7.5px] text-ink-400">
                <span>
                  <span className="font-bold text-ink-700">{fmtId(t.progressPct, 1)}%</span> RKAP FY
                </span>
                <span>Prorata {fmtId(t.prorataPct, 1)}%</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 rounded-lg bg-[#f8fafc] px-3 py-2 text-[7.5px] leading-[1.4] text-ink-400">
        Garis navy = prorata waktu berjalan (5/12 bulan). Progress di atas garis berarti lebih cepat
        dari jadwal RKAP.
      </div>
    </div>
  );
}

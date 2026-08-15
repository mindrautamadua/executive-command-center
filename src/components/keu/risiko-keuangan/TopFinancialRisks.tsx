import { topFinancialRisks, type FinRiskLevel } from "@/lib/krk-data";
import { SectionHead } from "@/components/hc/SectionHead";
import { ToneBadge, type BadgeTone } from "@/components/shared/ToneBadge";

const LEVEL_TONE: Record<FinRiskLevel, BadgeTone> = {
  Tinggi: "bad",
  Sedang: "warn",
  Rendah: "good",
};

export function TopFinancialRisks() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "300ms" } as React.CSSProperties}
    >
      <SectionHead title="Top Financial Risks" action="Risk Register" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        8 Risiko Keuangan Utama — Eksposur &amp; Mitigasi
      </p>

      <div className="mt-2 flex min-h-0 flex-1 flex-col">
        {topFinancialRisks.map((r, i) => (
          <div
            key={r.name}
            className="flex items-start gap-2.5 border-b border-[#f5f8fa] py-[6px] last:border-0"
          >
            <span className="mt-[1px] w-[14px] shrink-0 text-[9px] font-extrabold text-ink-400">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="min-w-0 truncate text-[9.5px] font-bold text-ink-900">
                  {r.name}
                </span>
                <ToneBadge label={r.level} tone={LEVEL_TONE[r.level]} />
              </div>
              <p className="mt-[2px] truncate text-[8.5px] text-ink-500" title={r.mitigasi}>
                <span className="font-semibold text-ink-700">Mitigasi:</span> {r.mitigasi}
              </p>
            </div>
            <span className="mt-[1px] w-[150px] shrink-0 text-right text-[8.5px] font-semibold leading-snug text-ink-700">
              {r.exposure}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

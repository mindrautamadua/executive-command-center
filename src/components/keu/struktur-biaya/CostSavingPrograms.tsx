import { savingPrograms, savingSummary } from "@/lib/ksb-data";
import { fmtId } from "@/lib/keu-core";
import { ToneBadge, type BadgeTone } from "@/components/shared/ToneBadge";
import { SectionHead } from "../../hc/SectionHead";
import { ScopeNote } from "@/components/ui/ScopeNote";
import { SEMANTIC } from "@/lib/chart-palette";

const STATUS_TONE: Record<string, BadgeTone> = {
  "On Track": "good",
  "At Risk": "warn",
  "Off Track": "bad",
};

const STATUS_COLOR: Record<string, string> = {
  "On Track": SEMANTIC.good,
  "At Risk": SEMANTIC.warn,
  "Off Track": SEMANTIC.bad,
};

/** Progress 5 program efisiensi biaya vs target FY Rp 840 M. */
export function CostSavingPrograms() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "300ms" } as React.CSSProperties}
    >
      <SectionHead title="Cost Saving Programs" action="Lihat Detail" badge={<ScopeNote />} />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Realisasi Rp {savingSummary.realisasiYtdRpM} M dari target FY Rp{" "}
        {savingSummary.targetFyRpM} M ({fmtId(savingSummary.progressPct, 1)}%)
      </p>

      <div className="mt-2 flex min-h-0 flex-1 flex-col justify-between">
        {savingPrograms.map((p) => (
          <div key={p.program} className="py-[3px]">
            <div className="flex items-center gap-2">
              <span className="min-w-0 flex-1 truncate text-[9px] font-semibold text-ink-900">
                {p.program}
              </span>
              <span className="shrink-0 text-[8.5px] tabular-nums text-ink-500">
                {p.realisasiRpM}/{p.targetRpM} M
              </span>
              <ToneBadge label={p.status} tone={STATUS_TONE[p.status]} />
            </div>
            <div className="mt-[4px] flex items-center gap-2">
              <span className="h-[5px] w-full overflow-hidden rounded-full bg-[#eef2f6]">
                <span
                  className="block h-full rounded-full"
                  style={{
                    width: `${Math.min(p.progressPct, 100)}%`,
                    backgroundColor: STATUS_COLOR[p.status],
                  }}
                />
              </span>
              <span className="w-[34px] shrink-0 text-right text-[8.5px] font-bold tabular-nums text-ink-900">
                {fmtId(p.progressPct, 1)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

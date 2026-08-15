import { ArrowDown, TrendingUp } from "lucide-react";
import { wpFulfillment, wpFulfillmentChain } from "@/lib/rekrutmen-data";
import { PALETTE } from "@/lib/chart-palette";

/**
 * Linkage Workforce Planning → eksekusi rekrutmen: seberapa jauh kebutuhan
 * eksternal 2026 (928) sudah terpenuhi oleh offer accepted & onboard.
 */
export function WorkforcePlanFulfillment() {
  return (
    <div className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="card-title-navy">Workforce Plan → Recruitment</h3>
        <span className="tone-amber shrink-0 rounded px-1.5 py-[2px] text-[8.5px] font-extrabold uppercase tracking-[0.03em]">
          Fulfillment 33,6%
        </span>
      </div>

      <div className="mt-2 flex min-h-0 flex-1 flex-col justify-between">
        {wpFulfillmentChain.map((s, i) => (
          <div key={s.label}>
            {i > 0 && (
              <div className="flex justify-center py-[1px]">
                <ArrowDown size={10} className="text-ink-400" />
              </div>
            )}
            <div className="flex items-center justify-between gap-2 rounded-lg border border-[#eef2f6] bg-[#f9fbfc] px-2.5 py-[5px]">
              <span className="min-w-0">
                <span className="block truncate text-[9.5px] font-semibold text-ink-900">
                  {s.label}
                </span>
                {s.sub && (
                  <span className="block truncate text-[8.5px] text-ink-500">{s.sub}</span>
                )}
              </span>
              <span className="shrink-0 text-[14px] font-extrabold tabular-nums text-ink-900">
                {s.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 flex flex-col gap-1.5">
        <div className="flex items-center gap-2" title="Fulfillment committed: offer accepted / 928">
          <span className="w-[64px] shrink-0 text-[8.5px] text-ink-500">Committed</span>
          <span className="h-[7px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#eef2f6]">
            <span
              className="anim-grow-x block h-full rounded-full"
              style={{ width: `${wpFulfillment.committedPct}%`, background: PALETTE.amber }}
            />
          </span>
          <span className="w-[38px] shrink-0 text-right text-[9px] font-bold tabular-nums text-ink-900">
            33,6%
          </span>
        </div>
        <div className="flex items-center gap-2" title="Fulfillment onboard: onboard / 928">
          <span className="w-[64px] shrink-0 text-[8.5px] text-ink-500">Onboard</span>
          <span className="h-[7px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#eef2f6]">
            <span
              className="anim-grow-x block h-full rounded-full"
              style={
                {
                  width: `${wpFulfillment.onboardPct}%`,
                  background: PALETTE.green,
                  "--d": "120ms",
                } as React.CSSProperties
              }
            />
          </span>
          <span className="w-[38px] shrink-0 text-right text-[9px] font-bold tabular-nums text-ink-900">
            25,9%
          </span>
        </div>
      </div>

      <p className="mt-2 flex items-start gap-1.5 border-t border-[#f2f5f8] pt-1.5 text-[8.5px] leading-[1.45] text-ink-500">
        <TrendingUp size={11} className="mt-[1px] shrink-0 text-[#d98b06]" />
        Gap {wpFulfillment.gap} posisi. {wpFulfillment.proyeksi}
      </p>
    </div>
  );
}

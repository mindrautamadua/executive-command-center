import { AlertCircle } from "lucide-react";
import { criticalFunnel, criticalHiring } from "@/lib/rekrutmen-data";

const maxValue = Math.max(...criticalFunnel.map((s) => s.valueNum));

/**
 * Funnel khusus critical role — indikator risiko rekrutmen: apakah posisi
 * yang paling menentukan bisnis benar-benar terisi.
 */
export function CriticalRoleHiring() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "60ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="card-title-navy">Critical Role Hiring</h3>
        <span className="tone-red shrink-0 rounded px-1.5 py-[2px] text-[8.5px] font-extrabold uppercase tracking-[0.03em]">
          Fulfillment {criticalHiring.fulfillment}
        </span>
      </div>

      <div className="mt-2 flex min-h-0 flex-1 flex-col justify-between">
        {criticalFunnel.map((s, i) => (
          <div key={s.stage} className="flex items-center gap-2">
            <span className="w-[112px] shrink-0 truncate text-[9px] text-ink-700">{s.stage}</span>
            <div className="flex h-[16px] min-w-0 flex-1 items-center">
              <span
                className="anim-grow-x block h-full rounded-[4px]"
                title={`${s.stage}: ${s.value} (${s.pct})`}
                style={
                  {
                    width: `${(s.valueNum / maxValue) * 100}%`,
                    minWidth: 8,
                    background: s.color,
                    "--d": `${i * 90}ms`,
                  } as React.CSSProperties
                }
              />
            </div>
            <span className="flex w-[72px] shrink-0 items-baseline gap-1.5 whitespace-nowrap">
              <span className="text-[10px] font-bold tabular-nums text-ink-900">{s.value}</span>
              <span className="text-[8.5px] text-ink-500">({s.pct})</span>
            </span>
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between rounded-lg border border-[#f6d5d5] bg-[#fdf5f5] px-2.5 py-[5px]">
        <span className="text-[9px] font-semibold text-ink-900">
          Kosong &gt; 3 bulan
        </span>
        <span className="text-[13px] font-extrabold tabular-nums text-[#ef4444]">
          {criticalHiring.vacantLama} posisi
        </span>
      </div>

      <p className="mt-1.5 flex items-start gap-1.5 text-[8.5px] leading-[1.45] text-ink-500">
        <AlertCircle size={11} className="mt-[1px] shrink-0 text-[#ef4444]" />
        {criticalHiring.catatan}
      </p>
    </div>
  );
}

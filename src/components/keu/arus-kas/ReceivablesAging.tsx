import { receivablesAging, topDebtors } from "@/lib/kas-data";
import { fmtId } from "@/lib/keu-core";
import { SEMANTIC } from "@/lib/chart-palette";
import { ToneBadge } from "@/components/shared/ToneBadge";
import { SectionHead } from "../../hc/SectionHead";

/** Aging piutang usaha Rp 3,4 T (bar tersegmentasi) + top 5 debitur. */
export function ReceivablesAging() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "240ms" } as React.CSSProperties}
    >
      <SectionHead title="Receivables Aging" action="Lihat Detail" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Piutang Usaha Rp 3,4 T · bucket &gt; 90 hari Rp 680 M (20%)
      </p>

      <div className="mt-2 flex h-[14px] w-full overflow-hidden rounded-lg">
        {receivablesAging.map((b) => (
          <div
            key={b.bucket}
            className="h-full"
            style={{ width: `${b.pct}%`, backgroundColor: SEMANTIC[b.tone] }}
            title={`${b.bucket} · Rp ${fmtId(b.valueRpT, 2)} T (${fmtId(b.pct, 1)}%)`}
          />
        ))}
      </div>
      <div className="mt-1 flex items-center gap-3">
        {receivablesAging.map((b) => (
          <span key={b.bucket} className="flex items-center gap-1 text-[7.5px] font-semibold text-ink-500">
            <span
              className="h-[6px] w-[6px] rounded-[2px]"
              style={{ backgroundColor: SEMANTIC[b.tone] }}
            />
            {b.bucket.replace("Belum jatuh tempo ", "")} · {fmtId(b.pct, 0)}%
          </span>
        ))}
      </div>

      <div className="mt-2 flex min-h-0 flex-1 flex-col justify-between border-t border-[#f5f8fa] pt-1.5">
        {topDebtors.map((d) => (
          <div key={d.name} className="flex items-center gap-2 py-[2px]" title={d.keterangan}>
            <span className="min-w-0 flex-1 truncate text-[9px] font-semibold text-ink-900">
              {d.name}
            </span>
            <span className="shrink-0 text-[9px] font-bold tabular-nums text-ink-900">
              Rp {d.saldoRpM} M
            </span>
            <ToneBadge
              label={`Overdue ${d.overduePct}%`}
              tone={d.overduePct > 30 ? "bad" : d.overduePct > 15 ? "warn" : "good"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

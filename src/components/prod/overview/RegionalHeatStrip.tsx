import { regionalHeat } from "@/lib/produksi-data";
import { SectionHead } from "@/components/hc/SectionHead";

/** Klasifikasi capaian: ≥100% hijau, 98–100% amber, <98% merah. */
const heatCls = (pct: number) =>
  pct >= 100
    ? "border-[#d6ecdf] bg-[#f4faf6] text-ptpn-green"
    : pct >= 98
      ? "border-[#f3e3c3] bg-[#fdf9f0] text-[#d98b06]"
      : "border-[#f6d5d5] bg-[#fdf5f5] text-[#ef4444]";

const barCls = (pct: number) =>
  pct >= 100 ? "bg-ptpn-green" : pct >= 98 ? "bg-[#f5a524]" : "bg-[#ef4444]";

const pctLabel = (v: number) => `${v.toLocaleString("id-ID", { minimumFractionDigits: 1 })}%`;

/** Heat strip capaian produksi TBS 7 regional PalmCo vs target YTD. */
export function RegionalHeatStrip() {
  return (
    <div className="card anim-rise px-4 pb-3.5 pt-3" style={{ "--d": "160ms" } as React.CSSProperties}>
      <SectionHead title="Regional Heat Strip" action="Lihat Detail" />
      <p className="mt-[3px] text-[9px] text-ink-500">Capaian TBS vs Target YTD — 7 Regional</p>

      <div className="mt-2.5 flex flex-col gap-[6px]">
        {regionalHeat.map((r) => (
          <div
            key={r.regional}
            className={`rounded-lg border px-2.5 py-[6px] ${heatCls(r.capaianPct)}`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="min-w-0 truncate text-[9.5px] font-bold text-ink-900">
                {r.regional}
              </span>
              <span className="shrink-0 text-[9.5px] font-extrabold">{pctLabel(r.capaianPct)}</span>
            </div>
            <div className="mt-[4px] h-[4px] overflow-hidden rounded-full bg-[#eef2f6]">
              <div
                className={`h-full rounded-full ${barCls(r.capaianPct)}`}
                style={{ width: `${Math.min(r.capaianPct, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2.5 flex items-center justify-center gap-3 text-[8.5px] text-ink-500">
        <span className="flex items-center gap-1">
          <span className="h-[7px] w-[7px] rounded-full bg-ptpn-green" /> ≥100%
        </span>
        <span className="flex items-center gap-1">
          <span className="h-[7px] w-[7px] rounded-full bg-[#f5a524]" /> 98–100%
        </span>
        <span className="flex items-center gap-1">
          <span className="h-[7px] w-[7px] rounded-full bg-[#ef4444]" /> &lt;98%
        </span>
      </div>
    </div>
  );
}

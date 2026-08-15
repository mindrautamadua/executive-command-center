import { Banknote, Percent, PiggyBank } from "lucide-react";
import { workingCapitalImpact } from "@/lib/hilir-stok-margin-data";
import { ScopeNote } from "@/components/ui/ScopeNote";
import { SectionHead } from "../../hc/SectionHead";

const ROWS = [
  { icon: PiggyBank, label: "Nilai Inventori", value: workingCapitalImpact.nilaiStok },
  { icon: Percent, label: "Bunga Pembiayaan", value: workingCapitalImpact.bungaPembiayaan },
  {
    icon: Banknote,
    label: "Carrying Cost / Bulan",
    value: workingCapitalImpact.carryingCostPerBulan,
  },
] as const;

/**
 * Dampak posisi inventori ke modal kerja & cash conversion cycle.
 * Modal kerja dibukukan konsolidasi grup (lintas komoditas & subholding),
 * tidak ada pecahan per subholding — ditandai <ScopeNote /> saat filter aktif.
 */
export function WorkingCapitalImpact() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "300ms" } as React.CSSProperties}
    >
      <SectionHead title="Dampak Modal Kerja" badge={<ScopeNote />} />
      <p className="mt-[3px] text-[9px] text-ink-500">Carrying cost inventori &amp; potensi pelepasan kas</p>

      <div className="mt-2 flex min-h-0 flex-1 flex-col justify-center gap-1.5">
        {ROWS.map((r) => {
          const Icon = r.icon;
          return (
            <div
              key={r.label}
              className="flex items-center gap-2.5 rounded-lg border border-[#eef2f6] bg-[#fbfcfd] px-2.5 py-2"
            >
              <span className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-lg bg-[#e8f1fd] text-[#2f6fe4]">
                <Icon size={13} strokeWidth={1.9} />
              </span>
              <span className="min-w-0 flex-1 text-[8.5px] font-semibold text-ink-500">
                {r.label}
              </span>
              <span className="shrink-0 text-[11px] font-extrabold text-ink-900">{r.value}</span>
            </div>
          );
        })}
      </div>

      <p className="mt-2 text-[8.5px] leading-snug text-ink-500">{workingCapitalImpact.narasi}</p>
    </div>
  );
}

import { Info } from "lucide-react";
import { SectionHead } from "../hc/SectionHead";
import { BEM_SEL, intervensiPortfolioCatatan, intervensiPriority } from "@/lib/pm-data";

/** Biru/amber = Environmental Supports, hijau = Person's Repertory. */
const DIMENSI_CHIP: Record<string, string> = {
  DAT: "bg-[#e8f1fd] text-[#2f6fe4]",
  INS: "bg-[#fdecec] text-[#ef4444]",
  INC: "bg-[#fdf3e0] text-[#d98b06]",
  KNW: "bg-ptpn-greenLight text-ptpn-green",
  CAP: "bg-ptpn-greenLight text-ptpn-green",
  MOT: "bg-ptpn-greenLight text-ptpn-green",
};

const CONFIDENCE_BADGE: Record<string, string> = {
  High: "bg-ptpn-greenLight text-ptpn-green",
  Medium: "bg-[#fdf3e0] text-[#d98b06]",
  Low: "bg-[#eef2f6] text-ink-500",
};

const STATUS_BADGE: Record<string, string> = {
  Berjalan: "bg-ptpn-greenLight text-ptpn-green",
  Pilot: "bg-[#e8f1fd] text-[#2f6fe4]",
  Perencanaan: "bg-[#eef2f6] text-ink-500",
};

const VALUE_COST_TONE: Record<string, string> = {
  "Sangat Tinggi": "text-ptpn-greenDark",
  Tinggi: "text-ptpn-green",
  Sedang: "text-[#d98b06]",
};

const GRID =
  "grid grid-cols-[44px_minmax(0,1fr)_52px_72px_64px_76px_76px_88px_86px] items-center";

/** Portfolio intervensi: prioritas + populasi + cost + expected impact + confidence + status + value/cost. */
export function InterventionPortfolioCard() {
  return (
    <div
      className="card anim-rise px-4 pb-3 pt-3"
      style={{ "--d": "80ms" } as React.CSSProperties}
    >
      <SectionHead title="Intervention Portfolio" />

      <div className="mt-2.5">
        <div
          className={`${GRID} border-b border-[#f0f3f6] pb-1.5 text-[8.5px] font-bold uppercase tracking-[0.04em] text-ink-400`}
        >
          <span>Prioritas</span>
          <span>Intervensi</span>
          <span className="text-center">Sel BEM</span>
          <span className="text-right">Populasi</span>
          <span className="text-right">Est. Cost</span>
          <span className="text-right">Exp. Impact</span>
          <span className="text-center">Confidence</span>
          <span className="text-center">Status</span>
          <span className="text-right">Value / Cost</span>
        </div>
        <div className="divide-y divide-[#f6f8fa]">
          {intervensiPriority.map((r) => (
            <div key={r.prioritas} className={`${GRID} py-[7.5px]`}>
              <span className="pl-2 text-[9.5px] font-bold text-ink-900">{r.prioritas}</span>
              <span className="truncate pr-2 text-[9.5px] font-medium text-ink-700">
                {r.intervensi}
              </span>
              <span className="flex justify-center">
                <span
                  title={BEM_SEL[r.dimensi].nama}
                  className={`flex h-[18px] items-center justify-center rounded-md px-1.5 text-[8.5px] font-bold ${DIMENSI_CHIP[r.dimensi]}`}
                >
                  {r.dimensi}
                </span>
              </span>
              <span className="text-right text-[9.5px] font-bold text-ink-900">{r.populasi}</span>
              <span className="text-right text-[9.5px] font-semibold text-ink-700">{r.cost}</span>
              <span className="text-right text-[9.5px] font-bold text-ptpn-greenDark">
                {r.impact}
              </span>
              <span className="flex justify-center">
                <span
                  className={`rounded-md px-1.5 py-[2px] text-[8.5px] font-bold ${CONFIDENCE_BADGE[r.confidence]}`}
                >
                  {r.confidence}
                </span>
              </span>
              <span className="flex justify-center">
                <span
                  className={`rounded-md px-1.5 py-[2px] text-[8.5px] font-bold ${STATUS_BADGE[r.status]}`}
                >
                  {r.status}
                </span>
              </span>
              <span
                className={`text-right text-[9.5px] font-extrabold ${VALUE_COST_TONE[r.valueCost]}`}
              >
                {r.valueCost}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2 rounded-lg border border-[#eef2f6] bg-[#f8fafb] px-3 py-2">
        <Info size={12} className="shrink-0 text-ink-500" />
        <span className="text-[8.5px] font-medium text-ink-500">{intervensiPortfolioCatatan}</span>
      </div>
    </div>
  );
}

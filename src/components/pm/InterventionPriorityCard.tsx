import { ArrowRight } from "lucide-react";
import { SectionHead } from "../hc/SectionHead";
import { intervensiPriority } from "@/lib/pm-data";

const DIMENSI_CHIP: Record<string, string> = {
  B: "bg-[#e8f1fd] text-[#2f6fe4]",
  E: "bg-[#fdf3e0] text-[#d98b06]",
  M: "bg-ptpn-greenLight text-ptpn-green",
};

export function InterventionPriorityCard() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "180ms" } as React.CSSProperties}
    >
      <SectionHead no="6" title="HPI Intervention Priority" />

      <div className="mt-2.5 min-h-0 flex-1">
        <div className="grid grid-cols-[44px_minmax(0,1fr)_48px_74px_52px] items-center border-b border-[#f0f3f6] pb-1.5 text-[8.5px] font-bold uppercase tracking-[0.04em] text-ink-400">
          <span>Prioritas</span>
          <span>Intervensi</span>
          <span className="text-center">Dimensi</span>
          <span className="text-right">Potential Impact</span>
          <span className="text-right">Populasi</span>
        </div>
        <div className="divide-y divide-[#f6f8fa]">
          {intervensiPriority.map((r) => (
            <div
              key={r.prioritas}
              className="grid grid-cols-[44px_minmax(0,1fr)_48px_74px_52px] items-center py-[7.5px]"
            >
              <span className="pl-2 text-[9.5px] font-bold text-ink-900">{r.prioritas}</span>
              <span className="truncate pr-2 text-[9.5px] font-medium text-ink-700">
                {r.intervensi}
              </span>
              <span className="flex justify-center">
                <span
                  className={`flex h-[18px] w-[18px] items-center justify-center rounded-md text-[8.5px] font-bold ${DIMENSI_CHIP[r.dimensi]}`}
                >
                  {r.dimensi}
                </span>
              </span>
              <span className="text-right text-[9.5px] font-bold text-ptpn-greenDark">
                {r.impact}
              </span>
              <span className="text-right text-[9.5px] font-bold text-ink-900">{r.populasi}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-[#e3e9ef] bg-white py-[7px] text-[9.5px] font-semibold text-ink-700 transition-colors hover:border-ptpn-green hover:text-ptpn-green">
        Lihat Semua Intervensi <ArrowRight size={11} />
      </button>
    </div>
  );
}

import { ArrowRight, ChevronRight } from "lucide-react";
import { assumptions } from "@/lib/ss-data";
import { SectionHead } from "../hc/SectionHead";

export function ScenarioAssumptions() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "60ms" } as React.CSSProperties}
    >
      <SectionHead title="Asumsi Skenario Terpilih (Skenario C)" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Parameter utama yang digunakan dalam simulasi
      </p>

      <ul className="scroll-thin mt-2 flex min-h-0 flex-1 flex-col justify-between gap-1.5 overflow-y-auto">
        {assumptions.map((a) => (
          <li
            key={a.label}
            className="flex shrink-0 items-center gap-2 rounded-lg border border-[#eef2f6] bg-[#fbfcfd] px-2.5 py-1.5"
          >
            <span className="w-[112px] shrink-0 text-[9px] font-bold text-ink-900">{a.label}</span>
            <span className="min-w-0 flex-1 truncate text-right text-[9px] font-semibold text-ink-600">
              {a.value}
            </span>
            <ChevronRight size={11} className="shrink-0 text-ink-400" />
          </li>
        ))}
      </ul>

      <button className="mt-2 flex w-full shrink-0 items-center justify-center gap-1 rounded-lg border border-[#e3e9ef] bg-[#f8fafc] py-[7px] text-[9.5px] font-semibold text-ptpn-greenDark transition-colors hover:bg-[#eef4f0]">
        Edit Asumsi <ArrowRight size={11} />
      </button>
    </div>
  );
}

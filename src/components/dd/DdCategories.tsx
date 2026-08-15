import { ShieldCheck } from "lucide-react";
import { ddCategories, ddTotalMetrics } from "@/lib/dd-data";
import { SectionHead } from "../hc/SectionHead";

const MAX_COUNT = 24;

export function DdCategories() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <SectionHead title="Kategori Metrik" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        Sebaran {ddTotalMetrics} metrik tergovernance per domain
      </p>

      <ul className="scroll-thin flex min-h-0 flex-1 flex-col justify-around gap-y-1 overflow-y-auto py-1">
        {ddCategories.map((c) => (
          <li key={c.name} className="flex shrink-0 items-center gap-2">
            <span className="w-[118px] shrink-0 truncate text-[8.5px] font-semibold text-ink-700">
              {c.name}
            </span>
            <span className="h-[7px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#eef2f6]">
              <span
                className="anim-grow-x block h-full rounded-full"
                style={{ width: `${(c.count / MAX_COUNT) * 100}%`, background: c.color }}
              />
            </span>
            <span className="w-[20px] shrink-0 text-right text-[9px] font-extrabold text-ink-900">
              {c.count}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-1 flex shrink-0 items-center gap-2 rounded-lg bg-[#f8fafc] px-3 py-[7px]">
        <ShieldCheck size={12} className="shrink-0 text-ptpn-green" />
        <span className="text-[8.5px] font-medium leading-[1.35] text-ink-700">
          Definisi dikelola Data Governance Committee; perubahan lewat review triwulanan.
        </span>
      </div>
    </div>
  );
}

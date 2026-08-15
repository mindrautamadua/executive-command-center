"use client";

import type { LucideIcon } from "lucide-react";
import type { EsgPageKpi } from "@/lib/esg-data";
import { Delta } from "../ui/Delta";
import { useSubholding } from "@/components/SubholdingProvider";
import { ScopeNote } from "@/components/ui/ScopeNote";

/** Item KPI halaman detail ESG: data dari esg-data + ikon lucide dari halaman. */
export type EsgKpiCardItem = EsgPageKpi & { icon: LucideIcon };

const TONES: Record<EsgPageKpi["tone"], string> = {
  green: "bg-ptpn-greenLight text-ptpn-green",
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
  teal: "bg-[#e6f6f5] text-[#0d9488]",
  amber: "bg-[#fdf3e0] text-[#d98b06]",
  red: "bg-[#fdecec] text-[#ef4444]",
  purple: "bg-[#f1ecfd] text-[#8b5cf6]",
};

/** Renderer KPI strip halaman detail ESG & Sustainability (mirror MktKpiCards). */
export function EsgKpiCards({ items, cols }: { items: EsgKpiCardItem[]; cols: string }) {
  const { isFiltered } = useSubholding();
  return (
    <>
      {isFiltered && (
        <div className="mb-2 flex justify-end">
          <ScopeNote />
        </div>
      )}
      <div className={`grid gap-3 ${cols}`}>
        {items.map((k, i) => {
          const Icon = k.icon;
          return (
            <div
              key={k.label}
              className="card anim-rise px-3 pb-3 pt-3"
              style={{ "--d": `${40 * i}ms` } as React.CSSProperties}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg ${TONES[k.tone]}`}
                >
                  <Icon size={14} strokeWidth={1.9} />
                </span>
                <span className="min-w-0 text-[9px] font-semibold leading-[1.25] text-ink-500">
                  {k.label}
                </span>
              </div>
              <div className="mt-2.5 whitespace-nowrap text-[19px] font-extrabold leading-none tracking-[-0.01em] text-ink-900">
                {k.value}
                {k.valueSuffix && (
                  <span className="text-[9.5px] font-bold text-ink-400">{k.valueSuffix}</span>
                )}
              </div>
              <div className="mt-[4px] truncate text-[8.5px] text-ink-500" title={k.sub}>
                {k.sub}
              </div>
              <div className="mt-2 flex h-[13px] items-center gap-1.5">
                {k.delta && k.trend && (
                  <Delta value={k.delta} trend={k.trend} tone={k.deltaTone} size={10} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

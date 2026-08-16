"use client";

import { Banknote, Factory, Package, Percent, Ship, Tag } from "lucide-react";
import { mktKpi } from "@/lib/pemasaran-data";
import { useSubholding } from "@/components/SubholdingProvider";
import { commodityScope, inScope } from "@/components/ui/CommodityScope";
import { ScopeNote } from "@/components/ui/ScopeNote";
import { Delta } from "@/components/ui/Delta";

const ICONS = {
  revenue: Banknote,
  price: Tag,
  volume: Package,
  export: Ship,
  downstream: Factory,
  margin: Percent,
};

const TONES: Record<string, string> = {
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
  green: "bg-ptpn-greenLight text-ptpn-green",
  teal: "bg-[#e6f6f5] text-[#0d9488]",
  red: "bg-[#fdecec] text-[#ef4444]",
  pink: "bg-[#fdeef2] text-[#ec4899]",
  amber: "bg-[#fdf3e0] text-[#d98b06]",
};

export function MktKpiStrip() {
  const { active } = useSubholding();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
      {mktKpi.map((k, i) => {
        const Icon = ICONS[k.icon];
        // Tile terikat komoditas (CPO → PalmCo, gula → SugarCo, karet/teh →
        // SupportingCo) diredupkan bila di luar cakupan; tile konsolidasi grup
        // (nilai penjualan, margin blended) tetap penuh dan ditandai ScopeNote.
        const owner = commodityScope(`${k.label} ${k.sub}`);
        const dim = !!owner && !inScope(active, owner);
        return (
          <div
            key={k.label}
            className="card anim-rise px-3 pb-3 pt-3"
            style={
              {
                "--d": `${40 * i}ms`,
                opacity: dim ? 0.25 : undefined,
              } as React.CSSProperties
            }
          >
            <div className="flex items-center gap-2">
              <span
                className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg ${TONES[k.tone]}`}
              >
                <Icon size={14} strokeWidth={1.9} />
              </span>
              <span
                className="min-w-0 text-[9px] font-semibold leading-[1.25] text-ink-500"
                title={k.metric}
              >
                {k.label}
              </span>
              {!owner && <ScopeNote />}
            </div>
            <div className="mt-2.5 whitespace-nowrap text-[19px] font-extrabold leading-none tracking-[-0.01em] text-ink-900">
              {k.value}
            </div>
            <div className="mt-[4px] truncate text-[8.5px] text-ink-500" title={k.sub}>
              {k.sub}
            </div>
            <div className="mt-2 flex items-center gap-1.5">
              <Delta value={k.delta} trend={k.trend} tone={k.deltaTone} size={10} />
              <span className="truncate text-[8.5px] text-ink-400">{k.compare}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

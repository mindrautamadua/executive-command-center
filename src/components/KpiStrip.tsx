"use client";

import {
  Banknote,
  CircleDollarSign,
  Coins,
  Factory,
  Gauge,
  Leaf,
  TrendingUp,
} from "lucide-react";
import { kpiStrip } from "@/lib/data";
import { Sparkline } from "./ui/Sparkline";
import { Delta } from "./ui/Delta";

/** Ikon + nada lencana per KPI, meniru pola kartu KPI HC ECC (HcKpiStrip). */
const BADGES: { Icon: typeof Banknote; cls: string }[] = [
  { Icon: Banknote, cls: "bg-ptpn-greenLight text-ptpn-green" },
  { Icon: TrendingUp, cls: "bg-[#e8f1fd] text-[#2f6fe4]" },
  { Icon: Coins, cls: "bg-[#f3eefd] text-[#8b5cf6]" },
  { Icon: Gauge, cls: "bg-[#e6f6f5] text-[#0d9488]" },
  { Icon: Factory, cls: "bg-[#fdf3e0] text-[#d98b06]" },
  { Icon: Leaf, cls: "bg-ptpn-greenLight text-ptpn-green" },
  { Icon: CircleDollarSign, cls: "bg-[#fdecec] text-[#ef4444]" },
];

/**
 * KPI strip dashboard utama, mengikuti bahasa kartu HcKpiStrip di modul
 * SDM & Talenta: kartu terpisah per KPI dengan lencana ikon, nilai 22px,
 * dan entrance anim-rise berjenjang — bukan lagi satu strip bersekat yang
 * digulir. Baris RKAP dan sparkline dipertahankan karena menjawab "tercapai
 * atau tidak" dan "arahnya ke mana".
 */
export function KpiStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
      {kpiStrip.map((k, i) => {
        const { Icon, cls } = BADGES[i % BADGES.length];
        return (
          <div
            key={k.label}
            className="card anim-rise px-3 pb-2.5 pt-2.5"
            style={{ "--d": `${50 * i}ms` } as React.CSSProperties}
          >
            <div className="flex items-center gap-1.5">
              <span
                className={`flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-lg ${cls}`}
              >
                <Icon size={13} strokeWidth={1.9} />
              </span>
              <span className="min-w-0 text-[8.5px] font-semibold leading-[1.25] text-ink-500">
                {k.label}
              </span>
            </div>

            <div className="mt-2 flex items-baseline gap-1 whitespace-nowrap">
              <span className="text-[19px] font-extrabold leading-none tracking-[-0.01em] text-ink-900">
                {k.value}
              </span>
              {k.unit && (
                <span className="text-[9px] font-medium text-ink-500">{k.unit}</span>
              )}
            </div>

            <div className="mt-[5px] flex items-center gap-1.5">
              <Delta value={k.delta} trend={k.trend} size={9.5} />
              <span className="truncate text-[8px] text-ink-400">{k.compare}</span>
            </div>

            {k.target && (
              <div className="mt-[3px] flex items-baseline gap-1 whitespace-nowrap text-[8px] leading-tight text-ink-400">
                <span className="truncate">RKAP YTD {k.target.label}</span>
                <span
                  className={`shrink-0 font-bold ${
                    k.target.onTrack ? "delta-good" : "delta-bad"
                  }`}
                >
                  {k.target.gap}
                </span>
              </div>
            )}

            <div className="-mx-1 mt-1">
              <Sparkline data={k.series} color={k.color} height={22} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

import { Briefcase, Factory, FileText, ShieldAlert, Sprout, Wallet } from "lucide-react";
import { aopKpi } from "@/lib/aop-data";
import type { AstKpi } from "@/lib/ast-core";
import { Delta } from "@/components/ui/Delta";
import { ScopeNote } from "@/components/ui/ScopeNote";

const ICONS: Record<AstKpi["icon"], typeof Sprout> = {
  land: Sprout,
  sengketa: ShieldAlert,
  hgu: FileText,
  nilai: Wallet,
  pabrik: Factory,
  investasi: Briefcase,
};

const TONES: Record<AstKpi["tone"], string> = {
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
  green: "bg-ptpn-greenLight text-ptpn-green",
  teal: "bg-[#e6f6f5] text-[#0d9488]",
  amber: "bg-[#fdf3e0] text-[#d98b06]",
  red: "bg-[#fdecec] text-[#ef4444]",
  pink: "bg-[#fdeef2] text-[#ec4899]",
};

/** KPI strip halaman Optimalisasi Aset (6 kartu). */
export function AopKpiStrip() {
  const grid = (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
      {aopKpi.map((k, i) => {
        const Icon = ICONS[k.icon];
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

  return (
    <div className="flex flex-col gap-1.5">
      {/* Target & realisasi divestasi ditetapkan pada tingkat grup. */}
      <ScopeNote className="self-start" />
      {grid}
    </div>
  );
}

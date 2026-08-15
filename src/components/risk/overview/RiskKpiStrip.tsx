import {
  FileSearch,
  Gauge,
  Landmark,
  Layers,
  Scale,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";
import { riskKpi, type RiskKpi } from "@/lib/risk-data";
import { Delta } from "@/components/ui/Delta";

const ICONS: Record<RiskKpi["icon"], typeof Gauge> = {
  eri: TrendingUp,
  highrisk: ShieldAlert,
  limit: Gauge,
  compliance: Scale,
  audit: FileSearch,
  maturity: Layers,
  legal: Landmark,
};

const TONES: Record<RiskKpi["tone"], string> = {
  green: "bg-ptpn-greenLight text-ptpn-green",
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
  teal: "bg-[#e6f6f5] text-[#0d9488]",
  amber: "bg-[#fdf3e0] text-[#d98b06]",
  red: "bg-[#fdecec] text-[#ef4444]",
};

/** Strip 7 KPI enterprise risk (mirror WaKpiStrip). */
export function RiskKpiStrip() {
  return (
    <div className="grid grid-cols-7 gap-3">
      {riskKpi.map((k, i) => {
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
              {k.valueSuffix && (
                <span className="text-[9.5px] font-bold text-ink-400">{k.valueSuffix}</span>
              )}
            </div>
            <div
              className={`mt-[4px] truncate text-[8.5px] ${
                k.subDanger ? "font-semibold text-[#ef4444]" : "text-ink-500"
              }`}
              title={k.sub}
            >
              {k.sub}
            </div>
            <div className="mt-2 flex items-center gap-1.5">
              {k.delta && k.trend ? (
                <>
                  <Delta value={k.delta} trend={k.trend} tone={k.deltaTone} size={10} />
                  <span className="truncate text-[8.5px] text-ink-400">{k.compare}</span>
                </>
              ) : (
                <span className="truncate text-[8.5px] font-semibold text-ink-400">
                  {k.compare}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

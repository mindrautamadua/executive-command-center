import {
  AlertOctagon,
  AlertTriangle,
  Banknote,
  CircleCheck,
  Radar,
  TriangleAlert,
  UsersRound,
} from "lucide-react";
import { prrKpi } from "@/lib/prr-data";
import { Delta } from "../ui/Delta";

const ICONS = {
  score: Radar,
  high: TriangleAlert,
  medium: AlertTriangle,
  low: CircleCheck,
  impacted: UsersRound,
  financial: Banknote,
  critical: AlertOctagon,
};

const TONES: Record<string, string> = {
  green: "bg-ptpn-greenLight text-ptpn-green",
  red: "bg-[#fdecec] text-[#ef4444]",
  amber: "bg-[#fdf3e0] text-[#d98b06]",
  teal: "bg-[#e6f6f5] text-[#0d9488]",
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
};

export function PrrKpiStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
      {prrKpi.map((k, i) => {
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
                <span className="ml-[2px] text-[11px] font-bold text-ink-400">{k.valueSuffix}</span>
              )}
            </div>
            <div
              className={`mt-[4px] truncate text-[8.5px] ${
                k.subDanger ? "font-bold text-[#ef4444]" : "text-ink-500"
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

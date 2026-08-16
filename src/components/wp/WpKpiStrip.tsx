import {
  CircleDollarSign,
  Layers,
  Puzzle,
  ShieldAlert,
  Target,
  Users,
  UsersRound,
} from "lucide-react";
import { wpKpi } from "@/lib/wp-data";
import { Delta } from "../ui/Delta";

const ICONS = {
  users: Users,
  projection: UsersRound,
  net: Layers,
  vacant: ShieldAlert,
  skillgap: Puzzle,
  ready: Target,
  cost: CircleDollarSign,
};

const TONES: Record<string, string> = {
  blue: "bg-[#e8f1fd] text-[#2f6fe4]",
  green: "bg-ptpn-greenLight text-ptpn-green",
  teal: "bg-[#e6f6f5] text-[#0d9488]",
  red: "bg-[#fdecec] text-[#ef4444]",
  purple: "bg-[#f1ecfd] text-[#8b5cf6]",
  amber: "bg-[#fdf3e0] text-[#d98b06]",
};

export function WpKpiStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
      {wpKpi.map((k, i) => {
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
            <div className="mt-3 flex items-baseline gap-1.5 whitespace-nowrap">
              <span className="text-[19px] font-extrabold leading-none tracking-[-0.01em] text-ink-900">
                {k.value}
              </span>
              {k.sub && <span className="text-[9px] font-medium text-ink-500">{k.sub}</span>}
            </div>
            <div className="mt-2.5 flex items-center gap-1.5">
              {k.alertDot ? (
                <>
                  <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#ef4444]" />
                  <span className="truncate text-[8.5px] font-semibold text-[#ef4444]">
                    {k.compare}
                  </span>
                </>
              ) : k.delta && k.trend ? (
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

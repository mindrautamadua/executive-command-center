import {
  BarChart3,
  Clock4,
  Database,
  Droplets,
  Factory,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { produktivitasKpi } from "@/lib/produktivitas-data";
import { CountUp } from "@/components/ui/CountUp";
import { Delta } from "@/components/ui/Delta";

const ICONS = {
  users: UsersRound,
  chart: BarChart3,
  factory: Factory,
  database: Database,
  droplet: Droplets,
  clock: Clock4,
  trending: TrendingUp,
};

export function ProduktivitasKpiStrip() {
  return (
    <div className="grid grid-cols-7 gap-3">
      {produktivitasKpi.map((k, i) => {
        const Icon = ICONS[k.icon];
        return (
          <div
            key={k.label}
            className="card anim-rise flex flex-col px-3 pb-2.5 pt-3"
            style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
          >
            <div className="flex items-center gap-1.5">
              <span
                className={`tone-${k.tone} flex h-6 w-6 shrink-0 items-center justify-center rounded-md`}
              >
                <Icon size={13} strokeWidth={1.9} />
              </span>
              <span className="text-[9px] font-bold leading-[1.25] text-ink-700">
                {k.label}
              </span>
            </div>
            <CountUp
              value={k.value}
              className="mt-2 text-[18px] font-bold leading-none text-ink-900"
            />
            <span className="mt-1.5 text-[9px] font-medium text-ink-400">{k.periode}</span>
            <div className="mt-1 flex items-center gap-1">
              <Delta value={k.delta} trend={k.trend} tone={k.deltaTone} size={9.5} />
              <span className="text-[9px] font-medium text-ink-400">{k.compare}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

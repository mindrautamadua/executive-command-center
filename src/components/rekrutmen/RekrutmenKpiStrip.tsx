import {
  BadgeCheck,
  CircleDollarSign,
  ClipboardList,
  Clock,
  Target,
  UserCheck,
  UsersRound,
} from "lucide-react";
import { rekrutmenKpi } from "@/lib/rekrutmen-data";
import { KpiCard } from "../ui/KpiCard";
import { RingGauge } from "../org/RingGauge";

const ICONS = {
  requisition: ClipboardList,
  kandidat: UsersRound,
  seleksi: UserCheck,
  offer: BadgeCheck,
  ttf: Clock,
  rate: Target,
  cost: CircleDollarSign,
};

export function RekrutmenKpiStrip() {
  return (
    <div className="grid grid-cols-7 gap-3">
      {rekrutmenKpi.map((k, i) => {
        const Icon = ICONS[k.icon];
        return (
          <KpiCard
            key={k.label}
            icon={<Icon size={13} strokeWidth={1.9} />}
            tone={k.tone}
            label={k.label}
            value={k.value}
            delta={
              k.delta && k.trend
                ? { value: k.delta, trend: k.trend, tone: k.deltaTone }
                : undefined
            }
            compare={k.compare}
            spark={k.gauge ? undefined : { data: k.series, color: k.line }}
            chart={
              k.gauge ? (
                <RingGauge pct={k.gauge.pct} color={k.gauge.color} size={40} animate />
              ) : undefined
            }
            delay={i * 60}
          />
        );
      })}
    </div>
  );
}

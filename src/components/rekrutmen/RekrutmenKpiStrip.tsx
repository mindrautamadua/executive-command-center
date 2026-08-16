import {
  AlertTriangle,
  BadgeCheck,
  CircleDollarSign,
  Clock,
  ShieldAlert,
  Star,
  Target,
  UserCheck,
} from "lucide-react";
import { rekrutmenKpi } from "@/lib/rekrutmen-data";
import { KpiCard } from "../ui/KpiCard";
import { RingGauge } from "../org/RingGauge";

const ICONS = {
  fulfillment: Target,
  critical: AlertTriangle,
  quality: Star,
  retensi: UserCheck,
  ttf: Clock,
  rate: BadgeCheck,
  cost: CircleDollarSign,
  risk: ShieldAlert,
};

/** Executive Scorecard: urutan Quality/Demand → Speed → Cost → Risk. */
export function RekrutmenKpiStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-3">
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
            info={k.info}
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

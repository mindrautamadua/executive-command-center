import {
  Accessibility,
  HeartHandshake,
  Ribbon,
  Scale,
  Sprout,
  UsersRound,
} from "lucide-react";
import { diKpi } from "@/lib/di-data";
import { KpiCard } from "../ui/KpiCard";

const ICONS = {
  index: HeartHandshake,
  perempuan: Ribbon,
  manajemen: UsersRound,
  muda: Sprout,
  disabilitas: Accessibility,
  payratio: Scale,
};

export function DiKpiStrip() {
  return (
    <div className="grid grid-cols-6 gap-3">
      {diKpi.map((k, i) => {
        const Icon = ICONS[k.icon];
        return (
          <KpiCard
            key={k.label}
            icon={<Icon size={14} strokeWidth={1.9} />}
            tone={k.tone}
            label={k.label}
            value={k.unit ? `${k.value}${k.unit}` : k.value}
            delta={{ value: k.delta, trend: k.trend, tone: k.deltaTone }}
            compare={k.compare}
            spark={{ data: k.series, color: k.line }}
            delay={i * 60}
          />
        );
      })}
    </div>
  );
}

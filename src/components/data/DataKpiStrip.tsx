import { Clock, Database, TriangleAlert, UsersRound, Share2, BadgeCheck } from "lucide-react";
import { dataKpi } from "@/lib/data-analytics";
import { KpiCard } from "../ui/KpiCard";

const ICONS = {
  employee: UsersRound,
  kelengkapan: Database,
  kualitas: BadgeCheck,
  tepatWaktu: Clock,
  sumber: Share2,
  anomali: TriangleAlert,
};

export function DataKpiStrip() {
  return (
    <div className="grid grid-cols-6 gap-3">
      {dataKpi.map((k, i) => {
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

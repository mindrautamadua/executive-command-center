import {
  ArrowLeftRight,
  BookOpenCheck,
  Crosshair,
  Gauge,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { lndKpi } from "@/lib/lnd-data";
import { KpiCard } from "../ui/KpiCard";

const ICONS = {
  gap: Crosshair,
  transfer: ArrowLeftRight,
  impact: Gauge,
  roi: TrendingUp,
  jam: BookOpenCheck,
  investasi: Wallet,
};

/** Hierarki capability-first: gap closure → transfer → results → ROI, baru aktivitas. */
export function LndKpiStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
      {lndKpi.map((k, i) => {
        const Icon = ICONS[k.icon];
        return (
          <KpiCard
            key={k.label}
            icon={<Icon size={13} strokeWidth={1.9} />}
            tone={k.tone}
            label={k.label}
            value={k.value}
            delta={{ value: k.delta, trend: k.trend }}
            compare={k.compare}
            info={k.info}
            spark={{ data: k.series, color: k.line }}
            delay={60 * i}
          />
        );
      })}
    </div>
  );
}

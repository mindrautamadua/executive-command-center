import {
  BookOpenCheck,
  UsersRound,
  Package,
  BadgeCheck,
  Timer,
  Wallet,
} from "lucide-react";
import { lndKpi } from "@/lib/lnd-data";
import { KpiCard } from "../ui/KpiCard";

const ICONS = {
  jam: BookOpenCheck,
  peserta: UsersRound,
  program: Package,
  completion: BadgeCheck,
  rata: Timer,
  investasi: Wallet,
};

export function LndKpiStrip() {
  return (
    <div className="grid grid-cols-6 gap-3">
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
            spark={{ data: k.series, color: k.line }}
            delay={60 * i}
          />
        );
      })}
    </div>
  );
}

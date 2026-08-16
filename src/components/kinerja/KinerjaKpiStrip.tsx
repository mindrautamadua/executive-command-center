"use client";

import {
  ClipboardCheck,
  UsersRound,
  Target,
  Star,
  AlertTriangle,
  Clock,
} from "lucide-react";
import { kinerjaKpi } from "@/lib/kinerja-data";
import { KpiCard } from "../ui/KpiCard";
import { ScopeNote } from "../ui/ScopeNote";

const ICONS = {
  score: ClipboardCheck,
  users: UsersRound,
  target: Target,
  star: Star,
  warn: AlertTriangle,
  clock: Clock,
};

export function KinerjaKpiStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
      {kinerjaKpi.map((k, i) => {
        const Icon = ICONS[k.icon];
        return (
          <KpiCard
            key={k.label}
            icon={<Icon size={13} strokeWidth={1.9} />}
            tone={k.tone}
            label={k.label}
            badge={<ScopeNote />}
            value={k.unit ? `${k.value}${k.unit}` : k.value}
            delta={
              k.delta && k.trend
                ? { value: k.delta, trend: k.trend, tone: k.deltaTone }
                : undefined
            }
            compare={k.compare}
            spark={{ data: k.series, color: k.line }}
            delay={i * 60}
          />
        );
      })}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import {
  Gauge,
  Heart,
  MessageSquareHeart,
  Smile,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { engagementKpi } from "@/lib/engagement-data";
import { KpiCard } from "../ui/KpiCard";

const ICONS = {
  score: Gauge,
  enps: MessageSquareHeart,
  response: Sparkles,
  engaged: Smile,
  trend: TrendingUp,
  satisfaction: Heart,
};

/** Ring mini (Satisfaction Index) — sweep saat mount. */
function MiniRing({ pct, color }: { pct: number; color: string }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setOn(true));
    return () => cancelAnimationFrame(t);
  }, []);
  const size = 30;
  const sw = 5;
  const r = (size - sw) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#eef2f6" strokeWidth={sw} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={sw}
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={on ? c * (1 - pct / 100) : c}
        style={{ transition: "stroke-dashoffset 1s cubic-bezier(0.22, 1, 0.36, 1)" }}
      />
    </svg>
  );
}

export function EngagementKpiStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
      {engagementKpi.map((k, i) => {
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
            spark={k.gauge ? undefined : { data: k.series, color: k.line }}
            chart={
              k.gauge ? (
                <div className="flex h-[26px] items-center justify-center">
                  <MiniRing pct={k.gauge.pct} color={k.gauge.color} />
                </div>
              ) : undefined
            }
            delay={60 * i}
          />
        );
      })}
    </div>
  );
}

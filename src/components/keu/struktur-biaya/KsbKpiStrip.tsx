"use client";

import { Gauge, Layers, TrendingDown, Wallet } from "lucide-react";
import { ksbKpi } from "@/lib/ksb-data";
import { KeuKpiGrid, type KeuKpiItem } from "../KeuKpiGrid";

const ICONS = [Wallet, Gauge, Layers, TrendingDown];

const ITEMS: KeuKpiItem[] = ksbKpi.map((k, i) => ({
  icon: ICONS[i % ICONS.length],
  tone: k.tone,
  label: k.label,
  value: k.value,
  sub: k.sub,
  delta: k.delta,
  trend: k.trend,
  deltaTone: k.deltaTone,
  compare: k.compare,
}));

export function KsbKpiStrip() {
  return <KeuKpiGrid items={ITEMS} cols={4} />;
}

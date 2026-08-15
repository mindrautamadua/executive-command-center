import { Activity, Banknote, CalendarClock, CalendarCheck2, RefreshCw, Wallet } from "lucide-react";
import { kasKpi } from "@/lib/kas-data";
import { KeuKpiGrid, type KeuKpiItem } from "../KeuKpiGrid";

const ICONS = [Wallet, Activity, Banknote, RefreshCw, CalendarClock, CalendarCheck2];

const ITEMS: KeuKpiItem[] = kasKpi.map((k, i) => ({
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

export function KasKpiStrip() {
  return <KeuKpiGrid items={ITEMS} cols={6} />;
}

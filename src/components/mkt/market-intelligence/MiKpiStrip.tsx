import { Globe2, Radar, TrendingDown, TrendingUp } from "lucide-react";
import { miKpi } from "@/lib/hilir-stok-margin-data";
import { MktKpiCards, type MktKpiCardItem } from "../MktKpiCards";

const ICONS = [Radar, TrendingUp, Globe2, TrendingDown] as const;

const items: MktKpiCardItem[] = miKpi.map((k, i) => ({
  label: k.label,
  value: k.value,
  sub: k.sub,
  tone: k.tone,
  icon: ICONS[i],
}));

export function MiKpiStrip() {
  return <MktKpiCards items={items} cols="grid-cols-4" />;
}

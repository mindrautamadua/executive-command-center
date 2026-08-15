import { Droplets, Factory, Fuel, TrendingUp } from "lucide-react";
import { hilirKpi } from "@/lib/hilir-stok-margin-data";
import { MktKpiCards, type MktKpiCardItem } from "../MktKpiCards";

const ICONS = [TrendingUp, Droplets, Fuel, Factory] as const;

const items: MktKpiCardItem[] = hilirKpi.map((k, i) => ({
  label: k.label,
  value: k.value,
  sub: k.sub,
  tone: k.tone,
  icon: ICONS[i],
}));

export function HilirKpiStrip() {
  return <MktKpiCards items={items} cols="grid-cols-4" />;
}

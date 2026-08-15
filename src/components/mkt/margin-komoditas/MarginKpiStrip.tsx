import { Candy, Coffee, Droplets, FlaskConical, Gauge, Trees } from "lucide-react";
import { marginKpi } from "@/lib/hilir-stok-margin-data";
import { MktKpiCards, type MktKpiCardItem } from "../MktKpiCards";

const ICONS = [Gauge, Droplets, Candy, Trees, Coffee, FlaskConical] as const;

const items: MktKpiCardItem[] = marginKpi.map((k, i) => ({
  label: k.label,
  value: k.value,
  sub: k.sub,
  tone: k.tone,
  icon: ICONS[i],
}));

export function MarginKpiStrip() {
  return <MktKpiCards items={items} cols="grid-cols-6" />;
}

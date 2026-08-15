import { Candy, Droplets, Trees, Wallet } from "lucide-react";
import { stokKpi } from "@/lib/hilir-stok-margin-data";
import { MktKpiCards, type MktKpiCardItem } from "../MktKpiCards";

const ICONS = [Droplets, Candy, Trees, Wallet] as const;

const items: MktKpiCardItem[] = stokKpi.map((k, i) => ({
  label: k.label,
  value: k.value,
  sub: k.sub,
  tone: k.tone,
  icon: ICONS[i],
}));

export function StokKpiStrip() {
  return <MktKpiCards items={items} cols="grid-cols-4" />;
}

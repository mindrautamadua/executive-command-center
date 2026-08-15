import { CalendarCheck2, FileSignature, Gavel, TrendingUp, type LucideIcon } from "lucide-react";
import { kontrakKpi } from "@/lib/kontrak-buyer-data";
import { MktKpiCards, type MktKpiCardItem } from "../MktKpiCards";

const ICONS: LucideIcon[] = [FileSignature, CalendarCheck2, Gavel, TrendingUp];

const items: MktKpiCardItem[] = kontrakKpi.map((k, i) => ({
  label: k.label,
  value: k.value,
  sub: k.sub,
  tone: k.tone,
  icon: ICONS[i],
}));

export function KontrakKpiStrip() {
  return <MktKpiCards items={items} cols="grid-cols-4" />;
}

import { Globe2, Ship, ShieldCheck, UsersRound, type LucideIcon } from "lucide-react";
import { buyerKpi } from "@/lib/kontrak-buyer-data";
import { MktKpiCards, type MktKpiCardItem } from "../MktKpiCards";

const ICONS: LucideIcon[] = [Ship, UsersRound, Globe2, ShieldCheck];

const items: MktKpiCardItem[] = buyerKpi.map((k, i) => ({
  label: k.label,
  value: k.value,
  sub: k.sub,
  tone: k.tone,
  icon: ICONS[i],
}));

export function BuyerKpiStrip() {
  return <MktKpiCards items={items} cols="grid-cols-4" />;
}

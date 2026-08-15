"use client";

import { Building2, Factory, Gauge, Leaf, Percent, Sprout } from "lucide-react";
import { segmentFinancials, fmtId, fmtRpT } from "@/lib/keu-core";
import { useSubholding } from "@/components/SubholdingProvider";
import { filterBySubholding } from "@/lib/subholding";
import { KeuKpiGrid, type KeuKpiItem } from "../KeuKpiGrid";

const palmco = segmentFinancials[0];
const sgn = segmentFinancials[1];
const ptpn1 = segmentFinancials[2];

const ITEMS: KeuKpiItem[] = [
  {
    icon: Gauge,
    tone: "blue",
    label: "EBITDA Grup",
    value: "Rp 6,82 T",
    sub: "Termasuk holding & eliminasi Rp 0,25 T",
    delta: "8,3%",
    trend: "up",
    deltaTone: "good",
    compare: "vs RKAP YTD",
  },
  {
    icon: Leaf,
    tone: "green",
    label: "EBITDA PalmCo",
    value: fmtRpT(palmco.ebitdaRpT, 2),
    sub: `Margin ${fmtId(palmco.ebitdaMarginPct, 1)}% · ROIC ${fmtId(palmco.roicPct, 1)}%`,
    delta: "10,6%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
  },
  {
    icon: Factory,
    tone: "red",
    label: "EBITDA SGN",
    value: fmtRpT(sgn.ebitdaRpT, 2),
    sub: `Margin ${fmtId(sgn.ebitdaMarginPct, 1)}% · ROIC ${fmtId(sgn.roicPct, 1)}%`,
    delta: "-4,2%",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Mei 2025",
  },
  {
    icon: Sprout,
    tone: "teal",
    label: "EBITDA PTPN I",
    value: fmtRpT(ptpn1.ebitdaRpT, 2),
    sub: `Margin ${fmtId(ptpn1.ebitdaMarginPct, 1)}% · ROIC ${fmtId(ptpn1.roicPct, 1)}%`,
    delta: "6,8%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
  },
  {
    icon: Building2,
    tone: "purple",
    label: "Kontribusi PalmCo",
    value: "70,7%",
    sub: "Porsi pendapatan grup Rp 17,4 T",
    delta: "+1,2 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs FY 2025",
  },
  {
    icon: Percent,
    tone: "amber",
    label: "Spread ROIC",
    value: "7,1 pts",
    sub: "PalmCo 11,2% vs SGN 4,1%",
    delta: "+0,8 pts",
    trend: "up",
    deltaTone: "bad",
    compare: "vs FY 2025",
  },
];

export function KpsKpiStrip() {
  const { active, isFiltered } = useSubholding();
  // Label KPI menyebut subholding (mis. "EBITDA SGN"); KPI tingkat grup
  // seperti "EBITDA Grup" dan "Spread ROIC" berlaku untuk semua cakupan.
  const items = filterBySubholding(ITEMS, active, (k) => k.label);

  return <KeuKpiGrid items={items} cols={isFiltered ? 4 : 6} />;
}

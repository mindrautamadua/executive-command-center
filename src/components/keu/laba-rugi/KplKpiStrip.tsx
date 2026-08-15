"use client";

import { Banknote, Coins, Gauge, Layers, Percent, TrendingUp } from "lucide-react";
import { KeuKpiGrid, type KeuKpiItem } from "../KeuKpiGrid";
import { ScopeNote } from "@/components/ui/ScopeNote";

const ITEMS: KeuKpiItem[] = [
  {
    icon: Banknote,
    tone: "blue",
    label: "Pendapatan",
    value: "Rp 24,6 T",
    sub: "YTD · CPO 58% dari pendapatan",
    delta: "9,8%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
  },
  {
    icon: Layers,
    tone: "teal",
    label: "Laba Kotor",
    value: "Rp 8,8 T",
    sub: "GPM 35,8% YTD",
    delta: "12,4%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
  },
  {
    icon: Gauge,
    tone: "green",
    label: "EBITDA",
    value: "Rp 6,82 T",
    sub: "Margin 27,7% · RKAP YTD Rp 6,30 T",
    delta: "8,3%",
    trend: "up",
    deltaTone: "good",
    compare: "vs RKAP YTD",
  },
  {
    icon: TrendingUp,
    tone: "purple",
    label: "EBIT",
    value: "Rp 5,1 T",
    sub: "Setelah D&A Rp 1,72 T",
    delta: "13,6%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
  },
  {
    icon: Coins,
    tone: "amber",
    label: "Laba Bersih",
    value: "Rp 2,94 T",
    sub: "Setelah bunga & pajak Rp 2,16 T",
    delta: "18,5%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
  },
  {
    icon: Percent,
    tone: "red",
    label: "Margin Bersih",
    value: "12,0%",
    sub: "NPM YTD · Mei bulanan 12,5%",
    delta: "+1,3 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs FY 2025",
  },
];

export function KplKpiStrip() {
  // P&L KPI di sini seluruhnya angka konsolidasi grup — tidak ada pecahan
  // subholding, jadi hanya ditandai saat filter aktif.
  return (
    <div className="flex flex-col gap-1.5">
      <ScopeNote className="self-start" />
      <KeuKpiGrid items={ITEMS} cols={6} />
    </div>
  );
}

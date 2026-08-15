import { Banknote, Gauge, Landmark, Percent, Scale, Wallet } from "lucide-react";
import { balanceSummary, leverageTrend } from "@/lib/knl-data";
import { fmtId, fmtRpT } from "@/lib/keu-core";
import { KeuKpiGrid, type KeuKpiItem } from "../KeuKpiGrid";

const latest = leverageTrend[leverageTrend.length - 1];

const ITEMS: KeuKpiItem[] = [
  {
    icon: Landmark,
    tone: "blue",
    label: "Total Aset",
    value: fmtRpT(balanceSummary.totalAsetRpT, 1),
    sub: "Aset tetap 59% dari total",
    delta: "3,4%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
  },
  {
    icon: Scale,
    tone: "green",
    label: "Ekuitas",
    value: fmtRpT(balanceSummary.ekuitasRpT, 1),
    sub: "44,3% dari total pendanaan",
    delta: "5,2%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
  },
  {
    icon: Banknote,
    tone: "amber",
    label: "Utang Berbunga",
    value: fmtRpT(balanceSummary.utangBerbungaRpT, 1),
    sub: "IDR 74% · USD 26%",
    delta: "-2,1%",
    trend: "down",
    deltaTone: "good",
    compare: "vs Des 2025",
  },
  {
    icon: Wallet,
    tone: "teal",
    label: "Net Debt",
    value: fmtRpT(balanceSummary.netDebtRpT, 1),
    sub: `Utang berbunga − kas Rp ${fmtId(balanceSummary.kasRpT, 1)} T`,
    delta: "-6,4%",
    trend: "down",
    deltaTone: "good",
    compare: "vs Des 2025",
  },
  {
    icon: Percent,
    tone: "purple",
    label: "DER",
    value: `${fmtId(latest.der, 2)}x`,
    sub: "Covenant ≤ 1,5x",
    delta: "-0,02x",
    trend: "down",
    deltaTone: "good",
    compare: "vs Q4 2025",
  },
  {
    icon: Gauge,
    tone: "red",
    label: "Net Debt / EBITDA",
    value: `${fmtId(latest.netDebtEbitda, 2)}x`,
    sub: "Covenant ≤ 2,5x · headroom 1,12x",
    delta: "-0,14x",
    trend: "down",
    deltaTone: "good",
    compare: "vs Q4 2025",
  },
];

export function KnlKpiStrip() {
  return <KeuKpiGrid items={ITEMS} cols={6} />;
}

import type { ProdKpi } from "@/lib/produksi-data";
import { komoditasScoreboard } from "@/lib/produksi-data";
import { ProdKpiCards } from "../ProdKpiCards";

const ICONS: ProdKpi["icon"][] = ["tbs", "cpo", "gula", "karet", "tbs"];
const TONES: ProdKpi["tone"][] = ["green", "blue", "teal", "pink", "amber"];

const pct = (v: number) =>
  `${v.toLocaleString("id-ID", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`;

/** KPI strip komoditas — diturunkan dari komoditasScoreboard (capaian vs target YTD). */
const items: ProdKpi[] = komoditasScoreboard.map((k, i) => ({
  label: k.komoditas,
  value: k.realisasiYtd,
  sub: `${k.satuan} · Target YTD ${k.targetYtd} · FY ${k.targetFy}`,
  delta: pct(k.capaianPct),
  trend: k.capaianPct >= 100 ? "up" : "down",
  deltaTone: k.capaianPct >= 100 ? "good" : "bad",
  compare: "vs Target YTD",
  icon: ICONS[i],
  tone: TONES[i],
  metric: k.komoditas,
}));

export function PkomKpiStrip() {
  return <ProdKpiCards items={items} cols="grid-cols-5" />;
}

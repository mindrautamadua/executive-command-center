/**
 * Data statis halaman Value Creation (/strategi-kinerja/value-creation).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk: STRATEGI (group-baseline)
 * — realisasi YTD Rp 1,86 T · target FY Rp 4,2 T · target 2029 Rp 12,4 T.
 */

import type { StgInsight, StgKpi } from "./stg-core";

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export const svcKpi: StgKpi[] = [
  {
    label: "Value Creation YTD",
    value: "Rp 1,86 T",
    sub: "EBITDA Uplift Terealisasi",
    delta: "+Rp 0,45 T",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "value",
    tone: "teal",
  },
  {
    label: "Target FY 2026",
    value: "Rp 4,2 T",
    sub: "Butuh Rp 2,34 T di Sisa Tahun",
    compare: "Baseline RKAP 2026",
    icon: "target",
    tone: "blue",
  },
  {
    label: "Target Kumulatif 2029",
    value: "Rp 12,4 T",
    sub: "EBITDA Uplift RJPP",
    compare: "Baseline RJPP 2025-2029",
    icon: "invest",
    tone: "purple",
  },
  {
    label: "Run-Rate vs Target",
    value: "44%",
    sub: "Rencana s.d. Mei: 48%",
    subDanger: true,
    delta: "-4 pts vs rencana",
    trend: "down",
    deltaTone: "bad",
    compare: "Jalur target FY",
    icon: "score",
    tone: "amber",
  },
];

/* ── 2. Value Bridge (waterfall per pengungkit) ───────────────────── */

export interface ValueBridgeStep {
  name: string;
  /** Kontribusi YTD (Rp T) — jumlah = 1,86. */
  valueRpT: number;
}

export const valueBridge: ValueBridgeStep[] = [
  { name: "Efisiensi Biaya", valueRpT: 0.62 },
  { name: "Yield & Rendemen", valueRpT: 0.48 },
  { name: "Hilirisasi", valueRpT: 0.39 },
  { name: "Optimalisasi Aset", valueRpT: 0.24 },
  { name: "Digital", valueRpT: 0.13 },
];

/* ── 3. Value by Subholding (stacked per pengungkit) ──────────────── */

export interface SubholdingValueRow {
  entity: string;
  efisiensi: number;
  yieldRendemen: number;
  hilirisasi: number;
  aset: number;
  digital: number;
  /** Total baris (Rp T) — jumlah kolom = valueBridge, jumlah baris = 1,86. */
  totalRpT: number;
}

export const bySubholding: SubholdingValueRow[] = [
  {
    entity: "PalmCo",
    efisiensi: 0.38,
    yieldRendemen: 0.34,
    hilirisasi: 0.27,
    aset: 0.08,
    digital: 0.05,
    totalRpT: 1.12,
  },
  {
    entity: "SGN",
    efisiensi: 0.1,
    yieldRendemen: 0.08,
    hilirisasi: 0.05,
    aset: 0.05,
    digital: 0.03,
    totalRpT: 0.31,
  },
  {
    entity: "PTPN I",
    efisiensi: 0.08,
    yieldRendemen: 0.06,
    hilirisasi: 0.02,
    aset: 0.06,
    digital: 0.02,
    totalRpT: 0.24,
  },
  {
    entity: "Holding",
    efisiensi: 0.06,
    yieldRendemen: 0,
    hilirisasi: 0.05,
    aset: 0.05,
    digital: 0.03,
    totalRpT: 0.19,
  },
];

/* ── 4. Value Trajectory 2029 (area kumulatif) ────────────────────── */

export interface TrajectoryPoint {
  year: string;
  /** Jalur target kumulatif (Rp T). */
  target: number;
  /** Realisasi kumulatif; 2026 = posisi YTD Mei. */
  realisasi?: number;
}

export const trajectory2029: TrajectoryPoint[] = [
  { year: "2025", target: 0.9, realisasi: 0.9 },
  { year: "2026", target: 4.2, realisasi: 1.86 },
  { year: "2027", target: 7.0 },
  { year: "2028", target: 9.8 },
  { year: "2029", target: 12.4 },
];

/* ── 5. Top Value Drivers — 8 inisiatif ───────────────────────────── */

export interface TopDriver {
  id: string;
  name: string;
  /** Target uplift 2029 (Rp T) — dari register stg-core. */
  target2029RpT: number;
  /** Realisasi YTD 2026 (Rp T). */
  realisasiYtdRpT: number;
  owner: string;
}

/** 8 inisiatif bernilai target terbesar di register (Σ realisasi = 1,10 T). */
export const topDrivers: TopDriver[] = [
  {
    id: "STG-15",
    name: "Revitalisasi 5 PG Prioritas",
    target2029RpT: 0.78,
    realisasiYtdRpT: 0.03,
    owner: "SGN",
  },
  {
    id: "STG-09",
    name: "Refinery CPO Terintegrasi",
    target2029RpT: 0.72,
    realisasiYtdRpT: 0.14,
    owner: "PalmCo",
  },
  {
    id: "STG-10",
    name: "Ekspansi Minyak Goreng Kemasan",
    target2029RpT: 0.64,
    realisasiYtdRpT: 0.19,
    owner: "PalmCo",
  },
  {
    id: "STG-01",
    name: "Ekselensi Operasional PKS",
    target2029RpT: 0.62,
    realisasiYtdRpT: 0.24,
    owner: "PalmCo",
  },
  {
    id: "STG-16",
    name: "Perluasan Areal Tebu 60 Rb Ha",
    target2029RpT: 0.62,
    realisasiYtdRpT: 0.02,
    owner: "SGN",
  },
  {
    id: "STG-02",
    name: "Intensifikasi Pemupukan Presisi",
    target2029RpT: 0.55,
    realisasiYtdRpT: 0.21,
    owner: "PalmCo",
  },
  {
    id: "STG-11",
    name: "Kemitraan Bioetanol Tebu",
    target2029RpT: 0.55,
    realisasiYtdRpT: 0.02,
    owner: "SGN",
  },
  {
    id: "STG-24",
    name: "Biogas 18 PKS (POME-to-Power)",
    target2029RpT: 0.52,
    realisasiYtdRpT: 0.09,
    owner: "PalmCo",
  },
];

/* ── 6. Economic Profit (ROIC vs WACC, EVA per subholding) ────────── */

export interface EvaRow {
  entity: string;
  roicPct: number;
  /** Spread vs WACC 9,1% (pts). */
  spreadPts: number;
  /** EVA (Rp T, disetahunkan) — jumlah baris = -0,74. */
  evaRpT: number;
}

export const economicProfit = {
  roicPct: 7.8,
  waccPct: 9.1,
  spreadPts: -1.3,
  catatan:
    "ROIC Group 7,8% masih 1,3 pts di bawah WACC 9,1% — value creation akuntansi belum menutup biaya modal; jalur RJPP menargetkan ROIC > WACC pada 2028.",
  evaRows: [
    { entity: "PalmCo", roicPct: 11.2, spreadPts: 2.1, evaRpT: 0.52 },
    { entity: "SGN", roicPct: 4.6, spreadPts: -4.5, evaRpT: -0.71 },
    { entity: "PTPN I", roicPct: 6.4, spreadPts: -2.7, evaRpT: -0.34 },
    { entity: "Holding & Lainnya", roicPct: 5.9, spreadPts: -3.2, evaRpT: -0.21 },
  ] as EvaRow[],
};

/* ── 7. Insight & rekomendasi ─────────────────────────────────────── */

export const svcInsights: StgInsight[] = [
  {
    title: "Run-rate 44% — sedikit di bawah jalur",
    text: "Gap 4 pts vs rencana ditanggung penuh oleh tema gula & digital. Recovery Rp 2,34 T sisa tahun realistis bila komisioning minyak goreng & biogas tepat waktu.",
    tone: "warn",
  },
  {
    title: "EVA negatif terkonsentrasi di SGN",
    text: "Spread ROIC SGN -4,5 pts (EVA -Rp 0,71 T). Restrukturisasi 11 PG adalah pengungkit EVA tunggal terbesar Group — melebihi seluruh inisiatif digital digabung.",
    tone: "bad",
  },
  {
    title: "Efisiensi & yield = 59% realisasi dengan capex minim",
    text: "Dua pengungkit ini paling cepat dikonversi. Amankan dulu benefit run-rate 2026 sebelum menggantungkan target pada proyek hilirisasi multi-tahun.",
    tone: "good",
  },
];

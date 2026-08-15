/**
 * Data statis halaman Capex & Pendanaan (/keuangan/capex-pendanaan).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts.
 */

import { PALETTE } from "./chart-palette";

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export interface KcxKpi {
  label: string;
  value: string;
  sub: string;
  delta: string;
  trend: "up" | "down";
  deltaTone: "good" | "bad";
  compare: string;
  tone: "blue" | "green" | "amber" | "red";
}

export const kcxKpi: KcxKpi[] = [
  {
    label: "RKAP Capex FY",
    value: "Rp 9,6 T",
    sub: "6 kategori · 3 subholding",
    delta: "18,5%",
    trend: "up",
    deltaTone: "good",
    compare: "vs RKAP 2025",
    tone: "blue",
  },
  {
    label: "Realisasi YTD",
    value: "Rp 3,08 T",
    sub: "32,1% RKAP",
    delta: "-9,6 pts",
    trend: "down",
    deltaTone: "bad",
    compare: "vs prorata 41,7%",
    tone: "red",
  },
  {
    label: "Komitmen Kontrak",
    value: "Rp 5,4 T",
    sub: "56,3% RKAP terkontrak",
    delta: "12,4%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Q1 2026",
    tone: "green",
  },
  {
    label: "Capex / EBITDA",
    value: "45%",
    sub: "Rp 3,08 T / Rp 6,82 T YTD",
    delta: "-6 pts",
    trend: "down",
    deltaTone: "good",
    compare: "vs 2025",
    tone: "amber",
  },
];

/* ── 2. Capex per Kategori (plan vs actual, Rp T) ─────────────────── */

export interface CapexCategory {
  name: string;
  /** Plafon RKAP FY (Rp T). */
  plan: number;
  /** Realisasi YTD (Rp T). */
  actual: number;
  /** Progress vs plafon (%). */
  progressPct: number;
  color: string;
}

/** Plan menjumlah 9,6; actual menjumlah 3,08. */
export const capexByCategory: CapexCategory[] = [
  { name: "Replanting", plan: 3.2, actual: 0.86, progressPct: 26.9, color: PALETTE.green },
  { name: "Pabrik & Revitalisasi", plan: 2.1, actual: 0.78, progressPct: 37.1, color: PALETTE.blue },
  { name: "Hilirisasi", plan: 1.8, actual: 0.62, progressPct: 34.4, color: PALETTE.teal },
  { name: "Infrastruktur", plan: 1.4, actual: 0.52, progressPct: 37.1, color: PALETTE.amber },
  { name: "Digital & IT", plan: 0.5, actual: 0.16, progressPct: 32.0, color: PALETTE.purple },
  { name: "Lainnya", plan: 0.6, actual: 0.14, progressPct: 23.3, color: PALETTE.slate },
];

/* ── 3. Capex per Subholding (Rp T) ───────────────────────────────── */

export interface CapexSubholding {
  segment: "PalmCo" | "SGN" | "PTPN I";
  plan: number;
  actual: number;
  progressPct: number;
  fokus: string;
}

/** Plan 6,4 + 2,4 + 0,8 = 9,6; actual 2,05 + 0,79 + 0,24 = 3,08. */
export const capexBySubholding: CapexSubholding[] = [
  { segment: "PalmCo", plan: 6.4, actual: 2.05, progressPct: 32.0, fokus: "Replanting, PKS & biogas" },
  { segment: "SGN", plan: 2.4, actual: 0.79, progressPct: 32.9, fokus: "Revitalisasi PG & bioetanol" },
  { segment: "PTPN I", plan: 0.8, actual: 0.24, progressPct: 30.0, fokus: "Infrastruktur & optimalisasi aset" },
];

/* ── 4. Funding Mix ───────────────────────────────────────────────── */

export interface FundingSlice {
  name: string;
  /** Porsi pendanaan capex FY (%), total 100. */
  pct: number;
  /** Nilai (Rp T) dari RKAP 9,6 T. */
  valueRpT: number;
  color: string;
}

/** 58 + 32 + 10 = 100%. */
export const fundingMix: FundingSlice[] = [
  { name: "Kas Internal", pct: 58, valueRpT: 5.6, color: PALETTE.green },
  { name: "Pinjaman Perbankan", pct: 32, valueRpT: 3.1, color: PALETTE.blue },
  { name: "PMN & Lainnya", pct: 10, valueRpT: 0.9, color: PALETTE.amber },
];

/* ── 5. S-Curve Kumulatif 2026 (Rp T) ─────────────────────────────── */

export interface SCurvePoint {
  month: string;
  /** Rencana kumulatif (Rp T). */
  plan: number;
  /** Realisasi kumulatif (Rp T); null = belum terjadi. */
  actual: number | null;
}

/** Plan kumulatif menuju 9,6; realisasi s.d. Mei 3,08. */
export const capexSCurve: SCurvePoint[] = [
  { month: "Jan", plan: 0.5, actual: 0.38 },
  { month: "Feb", plan: 1.2, actual: 0.92 },
  { month: "Mar", plan: 2.0, actual: 1.55 },
  { month: "Apr", plan: 2.9, actual: 2.28 },
  { month: "Mei", plan: 4.0, actual: 3.08 },
  { month: "Jun", plan: 4.8, actual: null },
  { month: "Jul", plan: 5.7, actual: null },
  { month: "Agu", plan: 6.6, actual: null },
  { month: "Sep", plan: 7.5, actual: null },
  { month: "Okt", plan: 8.3, actual: null },
  { month: "Nov", plan: 9.0, actual: null },
  { month: "Des", plan: 9.6, actual: null },
];

/* ── 6. Top Capex Variance ────────────────────────────────────────── */

export interface CapexVariance {
  project: string;
  kategori: string;
  /** Plafon RKAP FY (Rp T). */
  planRpT: number;
  /** Realisasi YTD (Rp T). */
  actualRpT: number;
  /** Progress (%). */
  progressPct: number;
  /** Penyebab utama deviasi. */
  keterangan: string;
  tone: "good" | "warn" | "bad";
}

export const topVariance: CapexVariance[] = [
  { project: "Replanting PalmCo Regional 4-5", kategori: "Replanting", planRpT: 1.4, actualRpT: 0.31, progressPct: 22.1, keterangan: "Keterlambatan pembebasan areal & bibit bersertifikat.", tone: "bad" },
  { project: "Revitalisasi 5 PG Prioritas", kategori: "Pabrik & Revitalisasi", planRpT: 1.1, actualRpT: 0.34, progressPct: 30.9, keterangan: "Lelang EPC 2 PG mundur satu kuartal.", tone: "warn" },
  { project: "Pabrik Minyak Goreng (Hilirisasi)", kategori: "Hilirisasi", planRpT: 0.9, actualRpT: 0.38, progressPct: 42.2, keterangan: "On track; konstruksi sesuai kurva.", tone: "good" },
  { project: "Biogas 6 PKS (co-firing)", kategori: "Pabrik & Revitalisasi", planRpT: 0.6, actualRpT: 0.17, progressPct: 28.3, keterangan: "Menunggu finalisasi PPA offtaker listrik.", tone: "warn" },
  { project: "Jalan produksi & jembatan", kategori: "Infrastruktur", planRpT: 0.8, actualRpT: 0.33, progressPct: 41.3, keterangan: "On track; memanfaatkan musim kering.", tone: "good" },
  { project: "ERP & digital kebun", kategori: "Digital & IT", planRpT: 0.5, actualRpT: 0.16, progressPct: 32.0, keterangan: "Rollout modul kebun mundur ke Q3.", tone: "warn" },
];

/* ── 7. Insight & Rekomendasi ─────────────────────────────────────── */

export interface KcxInsight {
  insight: string;
  rekomendasi: string;
}

export const kcxInsights: KcxInsight[] = [
  {
    insight:
      "Realisasi 32,1% vs prorata 41,7% — gap Rp 0,92 T; replanting (26,9%) dan kategori lainnya (23,3%) paling tertinggal.",
    rekomendasi:
      "Bentuk war room percepatan replanting; target catch-up kurva mulai Agustus sebelum musim hujan.",
  },
  {
    insight:
      "Komitmen kontrak Rp 5,4 T (56,3% RKAP) — pipeline eksekusi H2 sebenarnya siap; hambatan ada di pra-konstruksi, bukan pendanaan.",
    rekomendasi:
      "Delegasikan approval pra-konstruksi < Rp 100 M ke subholding untuk memangkas siklus persetujuan.",
  },
  {
    insight:
      "Funding mix 58% kas internal aman selama FCF positif; penarikan pinjaman capex baru 40% dari plafon.",
    rekomendasi:
      "Sinkronkan penarikan pinjaman dengan S-curve H2 agar tidak menumpuk kas menganggur berbunga.",
  },
];

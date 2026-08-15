/**
 * Data statis halaman Laba Rugi & EBITDA (/keuangan/laba-rugi).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts.
 */

import { PALETTE } from "./chart-palette";
import { segmentFinancials } from "./keu-core";

/* ── 1. P&L Waterfall (YTD, Rp T) ─────────────────────────────────── */

export interface PnlLine {
  label: string;
  /** Nilai langkah (Rp T); negatif = pengurang. */
  value: number;
  type: "start" | "minus" | "subtotal" | "total";
}

/** 24,6 − 15,8 = 8,8 − 3,7 = 5,1 (EBIT) − 1,05 − 1,11 = 2,94. */
export const pnlWaterfall: PnlLine[] = [
  { label: "Pendapatan", value: 24.6, type: "start" },
  { label: "HPP", value: -15.8, type: "minus" },
  { label: "Laba Kotor", value: 8.8, type: "subtotal" },
  { label: "Opex", value: -3.7, type: "minus" },
  { label: "EBIT", value: 5.1, type: "subtotal" },
  { label: "Beban Bunga (neto)", value: -1.05, type: "minus" },
  { label: "Pajak", value: -1.11, type: "minus" },
  { label: "Laba Bersih", value: 2.94, type: "total" },
];

/** EBITDA YTD = EBIT 5,1 + D&A 1,72 = 6,82 (Rp T). */
export const pnlDepresiasiAmortisasi = 1.72;

/* ── 2. EBITDA Bridge vs RKAP YTD (Rp T) ──────────────────────────── */

export interface EbitdaBridgeStep {
  label: string;
  value: number;
  type: "start" | "plus" | "minus" | "total";
}

/** 6,30 + 0,42 + 0,61 − 0,28 − 0,23 = 6,82. */
export const ebitdaBridge: EbitdaBridgeStep[] = [
  { label: "RKAP Prorata YTD", value: 6.3, type: "start" },
  { label: "Volume", value: 0.42, type: "plus" },
  { label: "Harga Jual", value: 0.61, type: "plus" },
  { label: "Biaya", value: -0.28, type: "minus" },
  { label: "Mix & Lainnya", value: -0.23, type: "minus" },
  { label: "Realisasi YTD", value: 6.82, type: "total" },
];

/* ── 3. Margin Trend 24 bulan ─────────────────────────────────────── */

export interface MarginTrendPoint {
  month: string;
  /** Gross profit margin (%). */
  gpm: number;
  /** EBITDA margin (%). */
  ebitda: number;
  /** Net profit margin (%). */
  npm: number;
}

/** Jun'24–Mei'26; berakhir konsisten YTD 2026: GPM 35,8 · EBITDA 27,7 · NPM 12,0. */
export const marginTrend: MarginTrendPoint[] = [
  { month: "Jun'24", gpm: 32.1, ebitda: 23.8, npm: 9.2 },
  { month: "Jul'24", gpm: 32.6, ebitda: 24.2, npm: 9.5 },
  { month: "Agu'24", gpm: 33.0, ebitda: 24.6, npm: 9.8 },
  { month: "Sep'24", gpm: 32.4, ebitda: 24.0, npm: 9.4 },
  { month: "Okt'24", gpm: 33.4, ebitda: 24.9, npm: 10.1 },
  { month: "Nov'24", gpm: 32.8, ebitda: 24.3, npm: 9.6 },
  { month: "Des'24", gpm: 33.8, ebitda: 25.2, npm: 10.4 },
  { month: "Jan'25", gpm: 33.2, ebitda: 24.7, npm: 10.0 },
  { month: "Feb'25", gpm: 33.6, ebitda: 25.0, npm: 10.2 },
  { month: "Mar'25", gpm: 34.0, ebitda: 25.4, npm: 10.6 },
  { month: "Apr'25", gpm: 34.3, ebitda: 25.7, npm: 10.8 },
  { month: "Mei'25", gpm: 34.1, ebitda: 25.5, npm: 10.7 },
  { month: "Jun'25", gpm: 33.9, ebitda: 24.4, npm: 10.3 },
  { month: "Jul'25", gpm: 34.2, ebitda: 24.9, npm: 10.6 },
  { month: "Agu'25", gpm: 34.6, ebitda: 25.3, npm: 10.9 },
  { month: "Sep'25", gpm: 34.3, ebitda: 25.0, npm: 10.7 },
  { month: "Okt'25", gpm: 34.8, ebitda: 25.6, npm: 11.1 },
  { month: "Nov'25", gpm: 34.4, ebitda: 24.5, npm: 10.5 },
  { month: "Des'25", gpm: 35.0, ebitda: 25.7, npm: 11.3 },
  { month: "Jan'26", gpm: 35.2, ebitda: 25.9, npm: 11.4 },
  { month: "Feb'26", gpm: 35.4, ebitda: 26.5, npm: 11.6 },
  { month: "Mar'26", gpm: 35.7, ebitda: 27.6, npm: 11.9 },
  { month: "Apr'26", gpm: 36.0, ebitda: 28.5, npm: 12.2 },
  { month: "Mei'26", gpm: 36.2, ebitda: 29.6, npm: 12.5 },
];

/* ── 4. P&L per Segmen (mini P&L subholding) ──────────────────────── */

export interface SegmentPnl {
  segment: string;
  /** Pendapatan YTD (Rp T). */
  revenue: number;
  /** Laba kotor YTD (Rp T). */
  grossProfit: number;
  /** EBITDA YTD (Rp T). */
  ebitda: number;
  /** Margin EBITDA (%). */
  ebitdaMarginPct: number;
  /** Laba bersih YTD (Rp T). */
  netIncome: number;
  tone: "good" | "warn" | "bad";
}

/** Revenue/EBITDA/margin dari keu-core (segmentFinancials). */
export const pnlBySegment: SegmentPnl[] = [
  {
    segment: segmentFinancials[0].segment, // PalmCo
    revenue: segmentFinancials[0].revenueRpT,
    grossProfit: 6.78,
    ebitda: segmentFinancials[0].ebitdaRpT,
    ebitdaMarginPct: segmentFinancials[0].ebitdaMarginPct,
    netIncome: 2.61,
    tone: "good",
  },
  {
    segment: segmentFinancials[1].segment, // SGN
    revenue: segmentFinancials[1].revenueRpT,
    grossProfit: 1.18,
    ebitda: segmentFinancials[1].ebitdaRpT,
    ebitdaMarginPct: segmentFinancials[1].ebitdaMarginPct,
    netIncome: 0.12,
    tone: "bad",
  },
  {
    segment: segmentFinancials[2].segment, // PTPN I
    revenue: segmentFinancials[2].revenueRpT,
    grossProfit: 0.84,
    ebitda: segmentFinancials[2].ebitdaRpT,
    ebitdaMarginPct: segmentFinancials[2].ebitdaMarginPct,
    netIncome: 0.21,
    tone: "warn",
  },
];

/* ── 5. Revenue by Commodity (donut) ──────────────────────────────── */

export interface RevenueCommoditySlice {
  name: string;
  /** Porsi pendapatan YTD (%), total 100. */
  pct: number;
  /** Nilai pendapatan YTD (Rp T). */
  valueRpT: number;
  color: string;
}

/** 58 + 9 + 20 + 4 + 9 = 100% dari pendapatan YTD Rp 24,6 T. */
export const revenueByCommodity: RevenueCommoditySlice[] = [
  { name: "CPO", pct: 58, valueRpT: 14.3, color: PALETTE.green },
  { name: "PKO & Inti Sawit", pct: 9, valueRpT: 2.2, color: PALETTE.teal },
  { name: "Gula", pct: 20, valueRpT: 4.9, color: PALETTE.blue },
  { name: "Tetes", pct: 4, valueRpT: 1.0, color: PALETTE.amber },
  { name: "Karet, Teh & Lainnya", pct: 9, valueRpT: 2.2, color: PALETTE.slate },
];

/* ── 6. Insight & Rekomendasi ─────────────────────────────────────── */

export interface KplInsight {
  insight: string;
  rekomendasi: string;
}

export const kplInsights: KplInsight[] = [
  {
    insight:
      "Bridge EBITDA vs RKAP surplus Rp 0,52 T didominasi harga jual (+0,61) dan volume (+0,42); biaya (−0,28) mulai menggerus.",
    rekomendasi:
      "Kunci sebagian keuntungan harga via forward; kendalikan inflasi biaya pemeliharaan & pupuk.",
  },
  {
    insight:
      "Margin EBITDA Mei 29,6% — tertinggi 24 bulan; jaws GPM vs NPM melebar sehat (bunga & pajak terkendali).",
    rekomendasi:
      "Pertahankan struktur bunga; refinancing Rp 4 T akan menambah ±0,3 pts NPM setahun penuh.",
  },
  {
    insight:
      "Laba bersih SGN hanya Rp 0,12 T dari pendapatan Rp 4,9 T — hampir seluruh laba grup datang dari PalmCo.",
    rekomendasi:
      "Eskalasi turnaround PG merugi ke level BOD; tanpa perbaikan, target laba FY bergantung penuh pada harga CPO.",
  },
];

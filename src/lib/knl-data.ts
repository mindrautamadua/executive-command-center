/**
 * Data statis halaman Neraca & Leverage (/keuangan/neraca-leverage).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts.
 */

import { PALETTE } from "./chart-palette";

/* ── 1. Komposisi Neraca (Rp T) ───────────────────────────────────── */

export interface BalanceBlock {
  label: string;
  /** Nilai (Rp T). */
  value: number;
  color: string;
}

/** Sisi aset: 21,6 + 78,3 + 32,5 = total aset 132,4. */
export const balanceAssets: BalanceBlock[] = [
  { label: "Aset Lancar", value: 21.6, color: PALETTE.teal },
  { label: "Aset Tetap", value: 78.3, color: PALETTE.green },
  { label: "Aset Lainnya", value: 32.5, color: PALETTE.slate },
];

/** Sisi pendanaan: 31,2 + 42,5 + 58,7 = 132,4 (utang berbunga 28,4 di dalamnya). */
export const balanceFunding: BalanceBlock[] = [
  { label: "Liabilitas Jangka Pendek", value: 31.2, color: PALETTE.amber },
  { label: "Liabilitas Jangka Panjang", value: 42.5, color: PALETTE.blue },
  { label: "Ekuitas", value: 58.7, color: PALETTE.navy },
];

export const balanceSummary = {
  totalAsetRpT: 132.4,
  ekuitasRpT: 58.7,
  utangBerbungaRpT: 28.4,
  kasRpT: 7.9,
  /** Net debt = utang berbunga − kas (Rp T). */
  netDebtRpT: 20.5,
};

/* ── 2. Debt Maturity Profile 2026-2031 (Rp T) ────────────────────── */

export interface DebtMaturityBar {
  year: string;
  /** Pokok jatuh tempo (Rp T). */
  value: number;
  /** Tahun puncak refinancing. */
  peak?: boolean;
}

/** Total 4,6 + 8,2 + 5,4 + 4,2 + 3,4 + 2,6 = 28,4 (utang berbunga). */
export const debtMaturity: DebtMaturityBar[] = [
  { year: "2026", value: 4.6 },
  { year: "2027", value: 8.2, peak: true },
  { year: "2028", value: 5.4 },
  { year: "2029", value: 4.2 },
  { year: "2030", value: 3.4 },
  { year: "2031+", value: 2.6 },
];

export const debtMaturityNote =
  "Puncak jatuh tempo 2027 Rp 8,2 T — rencana refinancing Rp 4 T (BOD Decision) menghaluskan profil ke 2030-2032.";

/* ── 3. Leverage Trend 8 kuartal ──────────────────────────────────── */

/** Covenant utama: Net Debt/EBITDA maksimum. */
export const NET_DEBT_EBITDA_COVENANT = 2.5;

export interface LeveragePoint {
  quarter: string;
  /** Debt-to-equity ratio (x). */
  der: number;
  /** Net Debt / EBITDA annualized (x). */
  netDebtEbitda: number;
}

/** Q2'24–Q1'26 + posisi Mei'26; berakhir DER 0,48x · Net Debt/EBITDA 1,38x. */
export const leverageTrend: LeveragePoint[] = [
  { quarter: "Q2'24", der: 0.62, netDebtEbitda: 1.92 },
  { quarter: "Q3'24", der: 0.6, netDebtEbitda: 1.84 },
  { quarter: "Q4'24", der: 0.58, netDebtEbitda: 1.76 },
  { quarter: "Q1'25", der: 0.56, netDebtEbitda: 1.68 },
  { quarter: "Q2'25", der: 0.54, netDebtEbitda: 1.61 },
  { quarter: "Q3'25", der: 0.52, netDebtEbitda: 1.55 },
  { quarter: "Q4'25", der: 0.5, netDebtEbitda: 1.52 },
  { quarter: "Mei'26", der: 0.48, netDebtEbitda: 1.38 },
];

/* ── 4. Covenant Monitor ──────────────────────────────────────────── */

export interface Covenant {
  name: string;
  /** Ambang kontraktual (string berformat, mis. "≤ 2,5x"). */
  threshold: string;
  /** Nilai aktual (string berformat). */
  actual: string;
  /** Ruang aman terhadap ambang (string berformat). */
  headroom: string;
  status: "Aman" | "Waspada" | "Breach";
}

export const covenants: Covenant[] = [
  { name: "Net Debt / EBITDA", threshold: "≤ 2,5x", actual: "1,38x", headroom: "1,12x", status: "Aman" },
  { name: "Debt to Equity (DER)", threshold: "≤ 1,5x", actual: "0,48x", headroom: "1,02x", status: "Aman" },
  { name: "Interest Coverage (ICR)", threshold: "≥ 2,5x", actual: "4,6x", headroom: "2,1x", status: "Aman" },
  { name: "Current Ratio", threshold: "≥ 1,0x", actual: "1,4x", headroom: "0,4x", status: "Aman" },
  { name: "DSCR", threshold: "≥ 1,2x", actual: "1,8x", headroom: "0,6x", status: "Aman" },
];

/* ── 5. Utang per Kreditur & Mata Uang ────────────────────────────── */

export interface DebtByLenderSlice {
  name: string;
  /** Porsi terhadap utang berbunga (%), total 100. */
  pct: number;
  /** Saldo (Rp T). */
  valueRpT: number;
  color: string;
}

/** 38 + 22 + 14 + 16 + 10 = 100% dari utang berbunga Rp 28,4 T. */
export const debtByLender: DebtByLenderSlice[] = [
  { name: "Bank Himbara", pct: 38, valueRpT: 10.8, color: PALETTE.green },
  { name: "Obligasi & Sukuk", pct: 22, valueRpT: 6.2, color: PALETTE.blue },
  { name: "Bank Swasta & Asing", pct: 14, valueRpT: 4.0, color: PALETTE.teal },
  { name: "Multilateral / ECA", pct: 16, valueRpT: 4.5, color: PALETTE.amber },
  { name: "Lainnya (SHL, leasing)", pct: 10, valueRpT: 2.9, color: PALETTE.slate },
];

export interface DebtByCurrencySlice {
  currency: "IDR" | "USD";
  /** Porsi terhadap utang berbunga (%). */
  pct: number;
  /** Saldo (Rp T). */
  valueRpT: number;
  color: string;
}

/** IDR 74% / USD 26% (kurs Rp 16.250). */
export const debtByCurrency: DebtByCurrencySlice[] = [
  { currency: "IDR", pct: 74, valueRpT: 21.0, color: PALETTE.navy },
  { currency: "USD", pct: 26, valueRpT: 7.4, color: PALETTE.amber },
];

export const currencyNote =
  "Utang USD bruto ±USD 455 jt; eksposur neto setelah natural hedge penerimaan ekspor USD 420 jt (hedging ratio 62%).";

/* ── 6. Insight & Rekomendasi ─────────────────────────────────────── */

export interface KnlInsight {
  insight: string;
  rekomendasi: string;
}

export const knlInsights: KnlInsight[] = [
  {
    insight:
      "Seluruh covenant berstatus Aman dengan headroom terlebar di leverage (1,38x vs 2,5x) — kapasitas utang tambahan ±Rp 15 T secara teoritis.",
    rekomendasi:
      "Gunakan headroom untuk refinancing 2027 dan pendanaan hilirisasi, bukan menambah modal kerja.",
  },
  {
    insight:
      "Konsentrasi jatuh tempo 2027 (29% total utang) adalah risiko refinancing tunggal terbesar di neraca.",
    rekomendasi:
      "Eksekusi refinancing Rp 4 T pada 2026 selagi rating & suku bunga menguntungkan; jangan menunggu 2027.",
  },
  {
    insight:
      "Porsi USD 26% dengan hedging 62% — depresiasi rupiah 5% menambah beban utang ±Rp 0,34 T sebelum offset pendapatan ekspor.",
    rekomendasi:
      "Naikkan hedging ratio ke ≥ 70% untuk jatuh tempo USD 2026-2027 via cross-currency swap.",
  },
];

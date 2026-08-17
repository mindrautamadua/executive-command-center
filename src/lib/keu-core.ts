/**
 * Baseline turunan dimensi Keuangan — data-trust sidebar & angka segmen
 * yang dipakai lintas halaman /keuangan/*.
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts.
 */

import type { DimensionDataTrust } from "./dimension-menu";
import { BASELINE_TRUST, KEUANGAN } from "./group-baseline";

/* ── Data Trust ───────────────────────────────────────────────────── */

export const keuDataTrust: DimensionDataTrust = {
  asOf: BASELINE_TRUST.asOf,
  lastRefresh: BASELINE_TRUST.lastRefresh,
  coverage: "96,8%",
  quality: "95,2%",
  sources: ["SAP FI/CO", "Treasury", "Konsolidasi", "e-Budgeting"],
  domain: "Keuangan",
  // Timeliness tertahan closing bulanan; accuracy tinggi karena rekonsiliasi GL.
  qualityBreakdown: [
    { label: "Completeness", value: "97%" },
    { label: "Accuracy", value: "97%" },
    { label: "Timeliness", value: "92%" },
    { label: "Consistency", value: "95%" },
    { label: "Reconciliation", value: "98%" },
    { label: "Certification", value: "93%" },
    { label: "Lineage", value: "94%" },
  ],
};

/* ── Kinerja keuangan per segmen (subholding) ─────────────────────── */

export interface SegmentFinancial {
  /** Nama subholding. */
  segment: "PalmCo" | "SGN" | "PTPN I";
  /** Pendapatan YTD (Rp T) — dari KEUANGAN.segmen. */
  revenueRpT: number;
  /** EBITDA YTD (Rp T), turunan margin × pendapatan. */
  ebitdaRpT: number;
  /** Margin EBITDA YTD (%). */
  ebitdaMarginPct: number;
  /** Return on invested capital (annualized, %). */
  roicPct: number;
  /** Catatan naratif singkat kondisi segmen. */
  note: string;
}

export const segmentFinancials: SegmentFinancial[] = [
  {
    segment: "PalmCo",
    revenueRpT: KEUANGAN.segmen.palmco, // 17,4
    ebitdaRpT: 5.43, // 31,2% × 17,4
    ebitdaMarginPct: 31.2,
    roicPct: 11.2,
    note: "Motor laba grup; margin ditopang harga CPO di atas rata-rata 2025.",
  },
  {
    segment: "SGN",
    revenueRpT: KEUANGAN.segmen.sgn, // 4,9
    ebitdaRpT: 0.69, // 14,1% × 4,9
    ebitdaMarginPct: 14.1,
    roicPct: 4.1,
    note: "Drag margin grup; 11 dari 17 PG masih merugi, musim giling baru mulai Mei.",
  },
  {
    segment: "PTPN I",
    revenueRpT: KEUANGAN.segmen.ptpn1, // 2,3
    ebitdaRpT: 0.45, // 19,4% × 2,3
    ebitdaMarginPct: 19.4,
    roicPct: 7.3,
    note: "SupportingCo — karet, teh & optimalisasi aset; margin membaik bertahap.",
  },
];

/**
 * Selisih EBITDA konsolidasi vs jumlah segmen (Rp T):
 * 6,82 − (5,43 + 0,69 + 0,45) = 0,25 → holding, eliminasi & non-segmen.
 */
export const EBITDA_HOLDING_ELIMINASI_RPT = 0.25;

/* ── Helper format ────────────────────────────────────────────────── */

/** Format angka desimal Indonesia (koma), tanpa satuan. */
export const fmtId = (value: number, decimals = 1): string =>
  value.toLocaleString("id-ID", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

/** Format Rupiah triliun, mis. 6.82 → "Rp 6,82 T". */
export const fmtRpT = (value: number, decimals = 1): string =>
  `Rp ${fmtId(value, decimals)} T`;

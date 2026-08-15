/**
 * Data statis halaman Profitabilitas Segmen (/keuangan/profitabilitas-segmen).
 * Periode acuan: 31 Mei 2026 (YTD). Angka segmen dari keu-core.ts.
 */

import { segmentFinancials, type SegmentFinancial } from "./keu-core";

/* ── 1. Segment P&L Matrix ────────────────────────────────────────── */

export interface SegmentPnlMatrixRow {
  segment: string;
  /** Pendapatan YTD (Rp T). */
  revenue: number;
  /** EBITDA YTD (Rp T). */
  ebitda: number;
  /** Margin EBITDA (%). */
  marginPct: number;
  /** ROIC annualized (%). */
  roicPct: number;
  /** Kontribusi ke pendapatan grup (%). */
  revenueSharePct: number;
  tone: "good" | "warn" | "bad";
  note: string;
}

export const segmentPnlMatrix: SegmentPnlMatrixRow[] = segmentFinancials.map(
  (s: SegmentFinancial): SegmentPnlMatrixRow => ({
    segment: s.segment,
    revenue: s.revenueRpT,
    ebitda: s.ebitdaRpT,
    marginPct: s.ebitdaMarginPct,
    roicPct: s.roicPct,
    revenueSharePct:
      s.segment === "PalmCo" ? 70.7 : s.segment === "SGN" ? 19.9 : 9.3,
    tone: s.segment === "PalmCo" ? "good" : s.segment === "SGN" ? "bad" : "warn",
    note: s.note,
  }),
);

/* ── 2. Regional Profitability (PalmCo, EBITDA/ha) ────────────────── */

export interface RegionalProfit {
  regional: string;
  /** EBITDA per hektar tertanam (Rp juta/ha, annualized). */
  ebitdaPerHaRpJt: number;
  /** Yield TBS (ton/ha). */
  yieldTbsTonHa: number;
  /** Biaya kebun per hektar (Rp juta/ha, annualized). */
  costPerHaRpJt: number;
  /** Luas tertanam (ribu ha). */
  luasRbHa: number;
  tone: "good" | "warn" | "bad";
}

/** 7 regional PalmCo; total luas ±508,7 rb ha (baseline sawit inti). */
export const regionalProfitability: RegionalProfit[] = [
  { regional: "Regional 1 (Sumut)", ebitdaPerHaRpJt: 28.6, yieldTbsTonHa: 23.4, costPerHaRpJt: 46.2, luasRbHa: 88.4, tone: "good" },
  { regional: "Regional 2 (Sumut)", ebitdaPerHaRpJt: 31.2, yieldTbsTonHa: 24.1, costPerHaRpJt: 44.8, luasRbHa: 76.2, tone: "good" },
  { regional: "Regional 3 (Riau)", ebitdaPerHaRpJt: 26.8, yieldTbsTonHa: 22.6, costPerHaRpJt: 47.5, luasRbHa: 82.6, tone: "good" },
  { regional: "Regional 4 (Sumsel-Jambi)", ebitdaPerHaRpJt: 22.4, yieldTbsTonHa: 21.2, costPerHaRpJt: 49.8, luasRbHa: 74.8, tone: "warn" },
  { regional: "Regional 5 (Kalimantan)", ebitdaPerHaRpJt: 20.8, yieldTbsTonHa: 20.6, costPerHaRpJt: 51.4, luasRbHa: 71.5, tone: "warn" },
  { regional: "Regional 6 (Jawa)", ebitdaPerHaRpJt: 19.6, yieldTbsTonHa: 19.8, costPerHaRpJt: 52.6, luasRbHa: 58.4, tone: "warn" },
  { regional: "Regional 7 (Sulawesi-Papua)", ebitdaPerHaRpJt: 18.4, yieldTbsTonHa: 18.9, costPerHaRpJt: 54.2, luasRbHa: 56.8, tone: "bad" },
];

/* ── 3. SGN Mill Clusters (profitabilitas klaster PG) ─────────────── */

export interface SgnMillCluster {
  cluster: string;
  /** Jumlah PG di klaster; total 17 PG (baseline). */
  pgCount: number;
  /** Jumlah PG merugi di klaster; total grup 11 PG. */
  pgRugi: number;
  /** Margin EBITDA klaster (%). */
  marginPct: number;
  /** Rendemen rata-rata klaster (%). */
  rendemenPct: number;
  tone: "good" | "warn" | "bad";
}

/** 6 klaster · 17 PG · 11 PG merugi (musim giling baru mulai Mei). */
export const sgnMillClusters: SgnMillCluster[] = [
  { cluster: "Jawa Timur A", pgCount: 4, pgRugi: 1, marginPct: 18.2, rendemenPct: 7.9, tone: "good" },
  { cluster: "Jawa Timur B", pgCount: 3, pgRugi: 2, marginPct: 9.4, rendemenPct: 7.4, tone: "warn" },
  { cluster: "Jawa Tengah", pgCount: 3, pgRugi: 3, marginPct: -2.8, rendemenPct: 6.9, tone: "bad" },
  { cluster: "Lampung & Sumsel", pgCount: 3, pgRugi: 1, marginPct: 15.6, rendemenPct: 7.8, tone: "good" },
  { cluster: "Sulawesi", pgCount: 2, pgRugi: 2, marginPct: -5.4, rendemenPct: 6.6, tone: "bad" },
  { cluster: "Sumatera Utara", pgCount: 2, pgRugi: 2, marginPct: -7.6, rendemenPct: 6.4, tone: "bad" },
];

export const sgnMillNote =
  "11 dari 17 PG masih merugi YTD; klaster Jateng, Sulawesi & Sumut prioritas revitalisasi. Angka menstabil setelah puncak giling Jun-Sep.";

/* ── 4. Catatan Antar-Segmen ──────────────────────────────────────── */

export interface IntersegmentNote {
  title: string;
  text: string;
  /** Nilai transaksi/dampak antar-segmen (string berformat). */
  value: string;
}

export const intersegmentNotes: IntersegmentNote[] = [
  {
    title: "Eliminasi Penjualan Antar-Segmen",
    text: "Penjualan cangkang & jasa logistik PalmCo ke SGN/PTPN I dieliminasi pada konsolidasi.",
    value: "Rp 0,42 T",
  },
  {
    title: "Biaya Holding & Shared Services",
    text: "Beban kantor holding dialokasikan proporsional pendapatan; belum dibebankan penuh ke margin segmen.",
    value: "Rp 0,25 T",
  },
  {
    title: "Pinjaman Antar-Perusahaan",
    text: "Shareholder loan holding ke SGN untuk modal kerja musim giling, bunga arm's length.",
    value: "Rp 1,1 T",
  },
];

/* ── 5. Insight & Rekomendasi ─────────────────────────────────────── */

export interface KpsInsight {
  insight: string;
  rekomendasi: string;
}

export const kpsInsights: KpsInsight[] = [
  {
    insight:
      "Spread ROIC antar segmen lebar: PalmCo 11,2% vs SGN 4,1% — di bawah biaya modal; SGN destroy value secara ekonomi.",
    rekomendasi:
      "Terapkan kerangka alokasi modal berbasis ROIC: capex baru SGN wajib lolos hurdle rate & gate review.",
  },
  {
    insight:
      "Gap EBITDA/ha antar regional PalmCo Rp 12,8 jt (18,4 vs 31,2). Menutup separuh gap ke median = tambahan EBITDA ±Rp 1,6 T/thn.",
    rekomendasi:
      "Replikasi praktik Regional 2 (panen & pemupukan presisi) ke Regional 5-7 sebagai program margin harvesting.",
  },
  {
    insight:
      "Kerugian PG terkonsentrasi di 3 klaster dengan rendemen < 7% — masalah struktural (mesin tua & pasokan tebu), bukan musiman.",
    rekomendasi:
      "Percepat keputusan revitalisasi vs konsolidasi giling untuk 5 PG terburuk sebelum musim giling 2027.",
  },
];

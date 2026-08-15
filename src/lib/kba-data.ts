/**
 * Data statis halaman Anggaran vs Realisasi (/keuangan/anggaran-realisasi).
 * Periode acuan: 31 Mei 2026 (YTD) · prorata RKAP 41,7% (5/12 bulan).
 * Angka induk dari group-baseline.ts.
 */

/* ── 1. KPI Strip (achievement vs RKAP FY) ────────────────────────── */

export interface KbaKpi {
  label: string;
  /** Achievement YTD vs RKAP FY (%). */
  value: string;
  sub: string;
  delta: string;
  trend: "up" | "down";
  deltaTone: "good" | "bad";
  compare: string;
  tone: "blue" | "green" | "teal" | "amber" | "red";
}

export const kbaKpi: KbaKpi[] = [
  {
    label: "Achievement Pendapatan",
    value: "42,1%",
    sub: "Rp 24,6 T dari RKAP Rp 58,4 T",
    delta: "+0,4 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs prorata 41,7%",
    tone: "blue",
  },
  {
    label: "Achievement EBITDA",
    value: "44,9%",
    sub: "Rp 6,82 T dari RKAP Rp 15,2 T",
    delta: "+3,2 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs prorata 41,7%",
    tone: "green",
  },
  {
    label: "Achievement Laba Bersih",
    value: "48,2%",
    sub: "Rp 2,94 T dari RKAP Rp 6,1 T",
    delta: "+6,5 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs prorata 41,7%",
    tone: "teal",
  },
  {
    label: "Penyerapan Opex",
    value: "39,8%",
    sub: "Di bawah pagu — terkendali",
    delta: "-1,9 pts",
    trend: "down",
    deltaTone: "good",
    compare: "vs prorata 41,7%",
    tone: "amber",
  },
  {
    label: "Penyerapan Capex",
    value: "32,1%",
    sub: "Rp 3,08 T dari RKAP Rp 9,6 T",
    delta: "-9,6 pts",
    trend: "down",
    deltaTone: "bad",
    compare: "vs prorata 41,7%",
    tone: "red",
  },
];

/* ── 2. Budget Variance Waterfall — EBITDA vs RKAP YTD (Rp T) ─────── */

export interface VarianceStep {
  label: string;
  value: number;
  type: "start" | "plus" | "minus" | "total";
}

/** Identik dengan ebitdaBridge kpl-data: 6,30 → 6,82 (+Rp 0,52 T). */
export const varianceWaterfall: VarianceStep[] = [
  { label: "RKAP Prorata YTD", value: 6.3, type: "start" },
  { label: "Volume", value: 0.42, type: "plus" },
  { label: "Harga Jual", value: 0.61, type: "plus" },
  { label: "Biaya", value: -0.28, type: "minus" },
  { label: "Mix & Lainnya", value: -0.23, type: "minus" },
  { label: "Realisasi YTD", value: 6.82, type: "total" },
];

/* ── 3. RKAP Score per Subholding per Lini ────────────────────────── */

export type RkapLine = "Pendapatan" | "EBITDA" | "Laba Bersih" | "Opex" | "Capex";

export interface RkapScoreRow {
  segment: "PalmCo" | "SGN" | "PTPN I";
  /** Achievement YTD vs RKAP FY per lini (%). */
  pendapatan: number;
  ebitda: number;
  laba: number;
  opex: number;
  capex: number;
  /** Skor komposit RKAP subholding (0-100). */
  skor: number;
}

export const rkapScore: RkapScoreRow[] = [
  { segment: "PalmCo", pendapatan: 44.2, ebitda: 48.6, laba: 52.4, opex: 39.2, capex: 32.0, skor: 91.2 },
  { segment: "SGN", pendapatan: 36.8, ebitda: 32.4, laba: 18.6, opex: 41.5, capex: 32.9, skor: 74.6 },
  { segment: "PTPN I", pendapatan: 41.4, ebitda: 43.1, laba: 44.8, opex: 40.2, capex: 30.0, skor: 84.8 },
];

/* ── 4. Monthly Budget Track 2026 (Rp T, pendapatan) ──────────────── */

export interface MonthlyTrackPoint {
  month: string;
  /** RKAP bulanan (Rp T). */
  plan: number;
  /** Realisasi bulanan (Rp T). */
  actual: number;
  /** RKAP kumulatif (Rp T). */
  planKumulatif: number;
  /** Realisasi kumulatif (Rp T). */
  actualKumulatif: number;
}

/** Jan–Mei 2026; kumulatif realisasi 24,6 vs plan 24,35 (prorata 41,7%). */
export const monthlyTrack: MonthlyTrackPoint[] = [
  { month: "Jan", plan: 4.5, actual: 4.4, planKumulatif: 4.5, actualKumulatif: 4.4 },
  { month: "Feb", plan: 4.7, actual: 4.6, planKumulatif: 9.2, actualKumulatif: 9.0 },
  { month: "Mar", plan: 4.9, actual: 5.0, planKumulatif: 14.1, actualKumulatif: 14.0 },
  { month: "Apr", plan: 5.0, actual: 5.2, planKumulatif: 19.1, actualKumulatif: 19.2 },
  { month: "Mei", plan: 5.25, actual: 5.4, planKumulatif: 24.35, actualKumulatif: 24.6 },
];

/* ── 5. Variance Heatmap (subholding × lini) ──────────────────────── */

export interface HeatmapCell {
  segment: "PalmCo" | "SGN" | "PTPN I";
  lini: RkapLine;
  /** Deviasi achievement vs prorata 41,7% (pts; positif = di atas prorata). */
  pct: number;
  tone: "good" | "warn" | "bad";
}

export const varianceHeatmap: HeatmapCell[] = [
  { segment: "PalmCo", lini: "Pendapatan", pct: 2.5, tone: "good" },
  { segment: "PalmCo", lini: "EBITDA", pct: 6.9, tone: "good" },
  { segment: "PalmCo", lini: "Laba Bersih", pct: 10.7, tone: "good" },
  { segment: "PalmCo", lini: "Opex", pct: -2.5, tone: "good" },
  { segment: "PalmCo", lini: "Capex", pct: -9.7, tone: "bad" },
  { segment: "SGN", lini: "Pendapatan", pct: -4.9, tone: "warn" },
  { segment: "SGN", lini: "EBITDA", pct: -9.3, tone: "bad" },
  { segment: "SGN", lini: "Laba Bersih", pct: -23.1, tone: "bad" },
  { segment: "SGN", lini: "Opex", pct: -0.2, tone: "warn" },
  { segment: "SGN", lini: "Capex", pct: -8.8, tone: "bad" },
  { segment: "PTPN I", lini: "Pendapatan", pct: -0.3, tone: "warn" },
  { segment: "PTPN I", lini: "EBITDA", pct: 1.4, tone: "good" },
  { segment: "PTPN I", lini: "Laba Bersih", pct: 3.1, tone: "good" },
  { segment: "PTPN I", lini: "Opex", pct: -1.5, tone: "good" },
  { segment: "PTPN I", lini: "Capex", pct: -11.7, tone: "bad" },
];

/* ── 6. Forecast Full-Year 2026 ───────────────────────────────────── */

export interface FyForecastRow {
  label: string;
  /** RKAP FY (string berformat). */
  rkap: string;
  /** Proyeksi FY (string berformat). */
  forecast: string;
  /** Proyeksi vs RKAP (%). */
  vsRkapPct: number;
  tone: "good" | "warn" | "bad";
}

export const fyForecast: FyForecastRow[] = [
  { label: "Pendapatan", rkap: "Rp 58,4 T", forecast: "Rp 59,1 T", vsRkapPct: 101.2, tone: "good" },
  { label: "EBITDA", rkap: "Rp 15,2 T", forecast: "Rp 15,6 T", vsRkapPct: 102.6, tone: "good" },
  { label: "Laba Bersih", rkap: "Rp 6,1 T", forecast: "Rp 6,3 T", vsRkapPct: 103.3, tone: "good" },
  { label: "Capex", rkap: "Rp 9,6 T", forecast: "Rp 8,7 T", vsRkapPct: 90.6, tone: "warn" },
];

export const fyForecastNote =
  "Proyeksi FY 101% RKAP pendapatan dengan asumsi harga CPO H2 bertahan ≥ Rp 13.000/kg dan musim giling SGN normal.";

/* ── 7. Insight & Rekomendasi ─────────────────────────────────────── */

export interface KbaInsight {
  insight: string;
  rekomendasi: string;
}

export const kbaInsights: KbaInsight[] = [
  {
    insight:
      "Semua lini P&L di atas prorata kecuali capex (32,1%) — pola klasik: laba tercapai, investasi tertunda.",
    rekomendasi:
      "Jangan biarkan surplus laba menutupi keterlambatan capex; keduanya dilaporkan terpisah di rapor BOD.",
  },
  {
    insight:
      "SGN merah di hampir semua lini (laba −23,1 pts vs prorata); PalmCo menutup gap grup sendirian.",
    rekomendasi:
      "Tetapkan rencana pemulihan RKAP SGN pasca-puncak giling September sebagai gate keputusan revisi target.",
  },
  {
    insight:
      "Tren bulanan menguat: realisasi melampaui plan 3 bulan berturut-turut (Mar-Mei) setelah tertinggal di awal tahun.",
    rekomendasi:
      "Pertahankan phasing RKAP saat revisi H2 — jangan menaikkan baseline bulanan melebihi kapasitas produksi musiman.",
  },
];

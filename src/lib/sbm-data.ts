/**
 * Data statis halaman Benchmark Industri (/strategi-kinerja/benchmark).
 * Periode acuan: FY/LTM per 31 Mei 2026. Angka PTPN mengutip group-baseline
 * (EBITDA margin 27,7% · HPP CPO Rp 8.950/kg · rendemen gula 7,45%).
 * Angka peers = estimasi benchmark (lihat sbmSources).
 */

import type { StgInsight, StgKpi } from "./stg-core";

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export const sbmKpi: StgKpi[] = [
  {
    label: "Peringkat EBITDA Margin",
    value: "2",
    valueSuffix: "/8",
    sub: "27,7% vs Rata Emiten 24,1%",
    delta: "+1 peringkat",
    trend: "up",
    deltaTone: "good",
    compare: "vs FY 2025",
    icon: "rank",
    tone: "green",
  },
  {
    label: "Yield CPO",
    value: "4,69",
    sub: "Ton/Ha vs Best-in-Class 5,8",
    subDanger: true,
    delta: "+0,12",
    trend: "up",
    deltaTone: "good",
    compare: "vs FY 2025",
    icon: "yield",
    tone: "amber",
  },
  {
    label: "HPP CPO vs Median Peers",
    value: "+4,1%",
    sub: "Rp 8.950/kg vs Median Rp 8.600/kg",
    subDanger: true,
    delta: "-1,8 pts",
    trend: "down",
    deltaTone: "good",
    compare: "vs FY 2025",
    icon: "cost",
    tone: "red",
  },
  {
    label: "Gap Rendemen Gula",
    value: "-3,75",
    sub: "Pts vs Thailand (11,2%)",
    subDanger: true,
    compare: "Stabil vs FY 2025",
    icon: "score",
    tone: "amber",
  },
];

/* ── 2. Margin Benchmark (EBITDA margin vs 7 peers) ───────────────── */

export interface PeerMetric {
  company: string;
  /** EBITDA margin LTM (%). */
  ebitdaMarginPct: number;
  isPtpn?: boolean;
}

/** Rata 7 peer = 24,1% · top quartile 33% · PTPN peringkat 2/8. */
export const marginBench: PeerMetric[] = [
  { company: "First Resources", ebitdaMarginPct: 33.0 },
  { company: "PTPN Group", ebitdaMarginPct: 27.7, isPtpn: true },
  { company: "Astra Agro Lestari", ebitdaMarginPct: 26.4 },
  { company: "Lonsum", ebitdaMarginPct: 25.8 },
  { company: "Dharma Satya (DSN)", ebitdaMarginPct: 24.6 },
  { company: "Sampoerna Agro", ebitdaMarginPct: 22.4 },
  { company: "SMART", ebitdaMarginPct: 18.9 },
  { company: "Golden Agri (GAR)", ebitdaMarginPct: 17.2 },
];

export const marginBenchRef = {
  rataEmitenPct: 24.1,
  topQuartilePct: 33.0,
} as const;

/* ── 3. Yield Benchmark (TBS, OER, CPO/ha) ────────────────────────── */

export interface YieldPeer {
  name: string;
  /** Yield TBS (ton/ha/thn). */
  yieldTbs: number;
  /** Oil extraction rate (%). */
  oerPct: number;
  /** Yield CPO (ton/ha/thn). */
  cpoPerHa: number;
  isPtpn?: boolean;
}

/**
 * CPO/ha PTPN 4,69 memakai basis areal tertanam (termasuk TBM) — sebab itu
 * lebih rendah dari yieldTbs × OER areal menghasilkan.
 */
export const yieldBench: YieldPeer[] = [
  { name: "Dharma Satya (DSN)", yieldTbs: 25.0, oerPct: 23.2, cpoPerHa: 5.8 },
  { name: "First Resources", yieldTbs: 22.8, oerPct: 22.9, cpoPerHa: 5.2 },
  { name: "Astra Agro Lestari", yieldTbs: 22.1, oerPct: 22.8, cpoPerHa: 5.0 },
  { name: "PTPN Group", yieldTbs: 21.9, oerPct: 22.4, cpoPerHa: 4.69, isPtpn: true },
  { name: "Sampoerna Agro", yieldTbs: 19.6, oerPct: 21.8, cpoPerHa: 4.3 },
  { name: "Lonsum", yieldTbs: 18.9, oerPct: 22.1, cpoPerHa: 4.2 },
  { name: "Rata-rata Malaysia", yieldTbs: 19.1, oerPct: 19.8, cpoPerHa: 3.9 },
];

/* ── 4. Cost Position Curve (HPP CPO industri) ────────────────────── */

export interface CostCurvePoint {
  producer: string;
  /** HPP CPO (Rp/kg). */
  hppRpKg: number;
  isPtpn?: boolean;
}

/** Marker PTPN 8.950 (baseline); median industri sampel = 8.600. */
export const costCurve: CostCurvePoint[] = [
  { producer: "Dharma Satya (DSN)", hppRpKg: 7400 },
  { producer: "First Resources", hppRpKg: 7900 },
  { producer: "Astra Agro Lestari", hppRpKg: 8100 },
  { producer: "Lonsum", hppRpKg: 8600 },
  { producer: "PTPN Group", hppRpKg: 8950, isPtpn: true },
  { producer: "Sampoerna Agro", hppRpKg: 9300 },
  { producer: "SMART (upstream)", hppRpKg: 9600 },
];

export const costCurveRef = { medianRpKg: 8600 } as const;

/* ── 5. Sugar Benchmark (rendemen) ────────────────────────────────── */

export interface SugarBenchRow {
  entity: string;
  rendemenPct: number;
  isPtpn?: boolean;
}

export const sugarBench: SugarBenchRow[] = [
  { entity: "SGN (PTPN)", rendemenPct: 7.45, isPtpn: true },
  { entity: "Rata-rata Jawa", rendemenPct: 7.8 },
  { entity: "Swasta Domestik Terbaik", rendemenPct: 8.6 },
  { entity: "Thailand", rendemenPct: 11.2 },
  { entity: "Brasil (Centre-South)", rendemenPct: 13.1 },
];

/* ── 6. ESG Benchmark (sertifikasi berkelanjutan) ─────────────────── */

export interface EsgBenchRow {
  company: string;
  /** Cakupan ISPO areal inti (%); hanya relevan emiten domestik. */
  ispoPct?: number;
  /** Cakupan RSPO atas areal tersertifikasi (%). */
  rspoPct: number;
  isPtpn?: boolean;
}

export const esgBench: EsgBenchRow[] = [
  { company: "PTPN Group", ispoPct: 88.2, rspoPct: 31, isPtpn: true },
  { company: "Golden Agri (GAR)", rspoPct: 94 },
  { company: "SMART", ispoPct: 96, rspoPct: 88 },
  { company: "First Resources", rspoPct: 82 },
  { company: "Lonsum", ispoPct: 92, rspoPct: 76 },
  { company: "Astra Agro Lestari", ispoPct: 100, rspoPct: 58 },
];

/* ── 7. Gap to Best-in-Class (potensi Rp 3,1 T) ───────────────────── */

export interface GapRow {
  area: string;
  ptpn: string;
  best: string;
  gap: string;
  /** Potensi EBITDA bila gap tertutup (Rp T/thn) — jumlah = 3,1. */
  potensiRpT: number;
}

export const gapToBest: GapRow[] = [
  {
    area: "Yield TBS",
    ptpn: "21,9 ton/ha",
    best: "25,0 ton/ha (DSN)",
    gap: "-3,1 ton/ha",
    potensiRpT: 0.9,
  },
  {
    area: "HPP CPO",
    ptpn: "Rp 8.950/kg",
    best: "Rp 7.400/kg (DSN)",
    gap: "+Rp 1.550/kg",
    potensiRpT: 0.7,
  },
  {
    area: "Rendemen Gula",
    ptpn: "7,45%",
    best: "8,6% (swasta domestik)",
    gap: "-1,15 pts",
    potensiRpT: 0.6,
  },
  {
    area: "OER",
    ptpn: "22,4%",
    best: "23,2% (DSN)",
    gap: "-0,8 pts",
    potensiRpT: 0.5,
  },
  {
    area: "Porsi Hilir",
    ptpn: "14,8% pendapatan",
    best: "±35% (integrated players)",
    gap: "-20,2 pts",
    potensiRpT: 0.4,
  },
];

/* ── 8. Insight & sumber ──────────────────────────────────────────── */

export const sbmInsights: StgInsight[] = [
  {
    title: "Margin kuat, tetapi ditopang harga — bukan biaya",
    text: "Peringkat 2/8 EBITDA margin dicapai saat HPP masih +4,1% di atas median peers. Bila harga CPO normal, posisi turun ke kuartil tengah — agenda biaya tetap prioritas.",
    tone: "warn",
  },
  {
    title: "Gap terbesar ada di kebun, bukan pabrik",
    text: "Gap yield TBS ke best-in-class (Rp 0,9 T) melebihi gabungan gap OER dan HPP pabrik. Replanting & pemupukan presisi adalah pengungkit benchmark utama.",
    tone: "info",
  },
  {
    title: "Rendemen gula tertinggal jauh dari Thailand",
    text: "7,45% vs 11,2% menunjukkan gap struktural varietas & tata kelola tebang-angkut, bukan sekadar musim. Benchmark Thailand layak jadi referensi program swasembada.",
    tone: "bad",
  },
];

/** Footnote sumber benchmark. */
export const sbmSources =
  "Sumber: laporan tahunan/keuangan emiten FY2025 & LTM Q1-2026 (AALI, SMAR, LSIP, DSNG, SGRO, FR, GGR), MPOB Malaysia, OCSB Thailand, UNICA Brasil; diolah PMO Holding. Angka peers adalah estimasi pembanding, bukan angka audited PTPN.";

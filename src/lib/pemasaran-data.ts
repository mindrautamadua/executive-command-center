/**
 * Data statis dimensi Pemasaran & Penjualan — core + Executive Overview
 * (/pemasaran-penjualan) + Volume & Nilai (/pemasaran-penjualan/penjualan-komoditas).
 * Periode acuan: 31 Mei 2026 (YTD). Angka kanonik mengutip src/lib/group-baseline.ts.
 *
 * Catatan konsistensi ASP CPO: baseline cpoAvgYtdRpKg = 12.482 dibaca sebagai
 * ASP realisasi CPO YTD; dengan premium rata-rata +Rp 45/kg, rata-rata benchmark
 * KPBN bulanan = Rp 12.437/kg (lihat aspVsBenchmark & harga-outlook-data.ts).
 */

import { PALETTE } from "./chart-palette";
import type { DimensionDataTrust } from "./dimension-menu";
import { BASELINE_TRUST, KEUANGAN, PEMASARAN, PERIODE_LABEL } from "./group-baseline";

export { PERIODE_LABEL };

/* ── 0. Data Trust ────────────────────────────────────────────────── */

export const mktDataTrust: DimensionDataTrust = {
  asOf: BASELINE_TRUST.asOf,
  lastRefresh: BASELINE_TRUST.lastRefresh,
  coverage: "96,1%",
  quality: "94,8%",
  sources: ["SAP SD", "KPBN", "iTrade", "Treasury"],
};

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export interface MktKpi {
  label: string;
  value: string;
  sub: string;
  delta: string;
  trend: "up" | "down";
  deltaTone: "good" | "bad";
  compare: string;
  icon: "revenue" | "price" | "volume" | "export" | "downstream" | "margin";
  tone: "blue" | "green" | "pink" | "red" | "teal" | "amber";
  /** Nama kanonik metrik (definisi kartu KPI). */
  metric: string;
}

export const mktKpi: MktKpi[] = [
  {
    label: "Nilai Penjualan",
    value: `Rp ${PEMASARAN.penjualanYtdRpT.toLocaleString("id-ID", { minimumFractionDigits: 1 })} T`,
    sub: "102,3% dari RKAP YTD",
    delta: "13,1%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "revenue",
    tone: "green",
    metric: "Nilai Penjualan YTD",
  },
  {
    label: "Harga CPO (ASP YTD)",
    value: "Rp 12.482",
    sub: "/kg · premium +Rp 45 vs KPBN",
    delta: "9,1%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "price",
    tone: "blue",
    metric: "Average Selling Price CPO",
  },
  {
    label: "Volume CPO Terjual",
    value: "968",
    sub: "Ribu ton YTD",
    delta: "4,0%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "volume",
    tone: "teal",
    metric: "Volume Penjualan CPO",
  },
  {
    label: "Porsi Ekspor",
    value: `${PEMASARAN.eksporPctVolCpo}%`,
    sub: "Dari volume CPO",
    delta: "1,8 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "export",
    tone: "red",
    metric: "Porsi Ekspor CPO",
  },
  {
    label: "Porsi Hilir",
    value: "14,8%",
    sub: "Target 25% (2030)",
    delta: "1,7 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "downstream",
    tone: "pink",
    metric: "Porsi Pendapatan Hilir",
  },
  {
    label: "Margin Bruto Blended",
    value: "24,1%",
    sub: "Seluruh komoditas",
    delta: "1,2 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "margin",
    tone: "amber",
    metric: "Margin Bruto Blended",
  },
];

/* ── 2. Executive Intelligence ────────────────────────────────────── */

export interface MktSignal {
  no: string;
  title: string;
  text: string;
  impactLabel: string;
  impactValue: string;
  tone: "red" | "amber" | "green";
}

export const mktIntelligence = {
  counts: [
    { label: "Critical Signals", value: 2, tone: "red" },
    { label: "Opportunities", value: 2, tone: "green" },
    { label: "Decisions Pending", value: 3, tone: "amber" },
  ] as { label: string; value: number; tone: "red" | "green" | "amber" }[],
  signals: [
    {
      no: "01",
      title: "Rally Harga CPO",
      text: "ASP CPO YTD Rp 12.482/kg (+9,1% YoY); spot KPBN Rp 13.680/kg. Jendela penguncian harga forward H2 terbuka selagi sentimen bullish.",
      impactLabel: "Upside Potensial",
      impactValue: "Rp 0,7 T",
      tone: "green",
    },
    {
      no: "02",
      title: "Forward Cover H2 Rendah",
      text: "Volume H2 yang sudah committed baru 32% (batas kebijakan maks 40%). 68% volume masih terekspos koreksi harga.",
      impactLabel: "Eksposur Terbuka",
      impactValue: "907 rb ton",
      tone: "amber",
    },
    {
      no: "03",
      title: "Konsentrasi Buyer Tinggi",
      text: "Top-5 buyer menyerap 61% nilai penjualan CPO & turunan (HHI 1.884). Risiko daya tawar dan counterparty perlu diversifikasi.",
      impactLabel: "Business Impact",
      impactValue: "High",
      tone: "red",
    },
  ] as MktSignal[],
  recommendation:
    "Naikkan forward cover H2 dari 32% menuju 38% secara bertahap di level harga ≥ Rp 13.400/kg, sambil menambah 3-4 buyer baru untuk menurunkan HHI di bawah 1.700.",
};

/* ── 3. Market Risk Radar ─────────────────────────────────────────── */

export type MktRiskLevel = "High" | "Medium" | "Low";

export interface MarketRisk {
  name: string;
  /** Label pendek untuk sumbu radar. */
  short: string;
  /** Kemungkinan terjadi (1-5). */
  likelihood: number;
  /** Besarnya dampak (1-5). */
  impact: number;
  level: MktRiskLevel;
  mitigasi: string;
}

export const marketRisks: MarketRisk[] = [
  {
    name: "Koreksi Harga CPO Global",
    short: "Harga CPO",
    likelihood: 3,
    impact: 5,
    level: "High",
    mitigasi: "Forward selling bertahap (maks 40%), diversifikasi tenor kontrak.",
  },
  {
    name: "Kebijakan DMO / HET Gula",
    short: "DMO & HET",
    likelihood: 3,
    impact: 3,
    level: "Medium",
    mitigasi: "Kepatuhan DMO 100%, advokasi via holding & asosiasi, mix produk premium.",
  },
  {
    name: "Volatilitas Kurs Rupiah",
    short: "Kurs",
    likelihood: 4,
    impact: 3,
    level: "Medium",
    mitigasi: "Natural hedge biaya USD, lindung nilai penerimaan ekspor via Treasury.",
  },
  {
    name: "Konsentrasi Top-5 Buyer",
    short: "Buyer",
    likelihood: 3,
    impact: 4,
    level: "High",
    mitigasi: "Onboarding buyer baru, batas eksposur per counterparty, rating internal.",
  },
  {
    name: "Perubahan Mandat B40",
    short: "B40",
    likelihood: 2,
    impact: 4,
    level: "Medium",
    mitigasi: "Kontrak off-take FAME jangka menengah, pantau kajian B50 2027.",
  },
  {
    name: "Enforcement EUDR (Des 2026)",
    short: "EUDR",
    likelihood: 3,
    impact: 4,
    level: "High",
    mitigasi: "Percepat traceability & due diligence (readiness 78/100), realokasi tujuan ekspor.",
  },
];

/* ── 4. Price Ticker Board ────────────────────────────────────────── */

export interface PriceTicker {
  komoditas: string;
  unit: string;
  /** Harga spot per 31 Mei 2026 (angka mentah untuk format komponen). */
  spot: number;
  spotLabel: string;
  ytdAvgLabel: string;
  /** Perubahan spot vs akhir Des 2025. */
  delta: string;
  trend: "up" | "down";
  /** Sparkline 12 titik (Jun 25 – Mei 26). */
  series: number[];
}

export const priceTicker: PriceTicker[] = [
  {
    komoditas: "CPO KPBN",
    unit: "Rp/kg",
    spot: PEMASARAN.cpoKpbnSpotRpKg,
    spotLabel: "Rp 13.680",
    ytdAvgLabel: "Avg YTD Rp 12.437",
    delta: "+10,8%",
    trend: "up",
    series: [11240, 11480, 11720, 11860, 12040, 12210, 12350, 11595, 12135, 12515, 12305, 13680],
  },
  {
    komoditas: "CPO CIF Rotterdam",
    unit: "USD/ton",
    spot: PEMASARAN.cpoCifRotterdamUsdTon,
    spotLabel: "USD 1.085",
    ytdAvgLabel: "Avg YTD USD 1.056",
    delta: "+8,0%",
    trend: "up",
    series: [955, 972, 988, 1002, 1015, 1028, 1005, 1015, 1052, 1078, 1048, 1085],
  },
  {
    komoditas: "Gula (Lelang)",
    unit: "Rp/kg",
    spot: PEMASARAN.gulaLelangRpKg,
    spotLabel: "Rp 14.850",
    ytdAvgLabel: "Avg YTD Rp 14.550",
    delta: "+4,2%",
    trend: "up",
    series: [13780, 13850, 13940, 14060, 14150, 14210, 14250, 14320, 14410, 14520, 14640, 14850],
  },
  {
    komoditas: "Karet SIR-20",
    unit: "Rp/kg",
    spot: PEMASARAN.karetSir20RpKg,
    spotLabel: "Rp 18.650",
    ytdAvgLabel: "Avg YTD Rp 18.240",
    delta: "+2,9%",
    trend: "up",
    series: [17650, 17710, 17790, 17880, 17960, 18040, 18130, 17980, 18120, 18310, 18140, 18650],
  },
  {
    komoditas: "PKO",
    unit: "Rp/kg",
    spot: 16940,
    spotLabel: "Rp 16.940",
    ytdAvgLabel: "Avg YTD Rp 15.980",
    delta: "+7,5%",
    trend: "up",
    series: [14620, 14840, 15080, 15260, 15480, 15640, 15760, 15540, 15820, 16140, 15980, 16940],
  },
  {
    komoditas: "Tetes (Molase)",
    unit: "Rp/kg",
    spot: 1520,
    spotLabel: "Rp 1.520",
    ytdAvgLabel: "Avg YTD Rp 1.450",
    delta: "-3,2%",
    trend: "down",
    series: [1610, 1620, 1600, 1590, 1580, 1575, 1570, 1480, 1440, 1420, 1430, 1520],
  },
];

/* ── 5. Revenue by Komoditas (donut) ──────────────────────────────── */

export interface RevenueSlice {
  name: string;
  /** Nilai Rp Triliun; total = 19,9 T (PEMASARAN.penjualanYtdRpT). */
  value: number;
  color: string;
}

export const revenueByKomoditas: RevenueSlice[] = [
  { name: "CPO", value: 12.08, color: PALETTE.green },
  { name: "PK & PKO", value: 1.54, color: PALETTE.teal },
  { name: "Gula", value: 1.71, color: PALETTE.amber },
  { name: "Tetes", value: 0.09, color: PALETTE.pink },
  { name: "Karet", value: 0.86, color: PALETTE.navy },
  { name: "Teh", value: 0.27, color: PALETTE.purple },
  { name: "Produk Hilir", value: 2.94, color: PALETTE.blue },
  { name: "Lainnya", value: 0.41, color: PALETTE.slate },
];

/* ── 6. BOD Decision Center ───────────────────────────────────────── */

export interface MktDecision {
  title: string;
  impact: "High Impact" | "Medium Impact" | "Low Impact";
  tone: "red" | "amber" | "green";
  text: string;
  due: string;
}

export const mktDecisions: MktDecision[] = [
  {
    title: "Alokasi Forward Selling H2 2026",
    impact: "High Impact",
    tone: "red",
    text: "Committed H2 baru 32% saat harga rally. Rekomendasi: setujui kenaikan forward cover bertahap ke 38% (dalam batas kebijakan 40%) di harga ≥ Rp 13.400/kg.",
    due: "Jul 2026",
  },
  {
    title: "Kontrak Off-take Biodiesel B40",
    impact: "Medium Impact",
    tone: "amber",
    text: "Alokasi FAME 2026 sebesar 96 rb kL terserap 87,8% YTD. Rekomendasi: kunci kontrak off-take jangka menengah dengan badan usaha BBN menjelang kajian B50 2027.",
    due: "Q3 2026",
  },
  {
    title: "FID Ekspansi Refinery",
    impact: "High Impact",
    tone: "amber",
    text: "Utilisasi refinery 72% dengan porsi hilir 14,8% (target 25% 2030). Rekomendasi: final investment decision ekspansi refinery Rp 2,4 T, COD Q4 2027.",
    due: "Q4 2026",
  },
];

/* ── 7. Sales vs Target (gauge rail) ──────────────────────────────── */

export const salesVsTarget = {
  ytdPct: 102.3,
  ytdNilai: "Rp 19,9 T",
  rkapYtd: "Rp 19,45 T",
  fyOutlookPct: 101.2,
  rkapFy: "Rp 47,8 T",
  fyOutlookNilai: "Rp 48,4 T",
  catatan:
    "Penjualan komoditas YTD 102,3% dari RKAP YTD, ditopang rally harga CPO. Outlook FY 101,2% RKAP dengan asumsi harga base case bertahan di H2.",
};

/* ── 8. Penjualan bulanan (nilai bar + volume line, 2026 vs 2025) ─── */

export interface PenjualanBulanan {
  bulan: string;
  /** Nilai penjualan Rp T; null = belum ada realisasi 2026 (Jun-Des). */
  nilai2026: number | null;
  nilai2025: number;
  /** Volume CPO ribu ton. */
  vol2026: number | null;
  vol2025: number;
}

/** Jan-Mei 2026: nilai total 19,9 T, volume CPO total 968 rb ton. */
export const penjualanBulanan: PenjualanBulanan[] = [
  { bulan: "Jan", nilai2026: 3.72, nilai2025: 3.32, vol2026: 184, vol2025: 179 },
  { bulan: "Feb", nilai2026: 3.84, nilai2025: 3.44, vol2026: 189, vol2025: 183 },
  { bulan: "Mar", nilai2026: 4.08, nilai2025: 3.58, vol2026: 196, vol2025: 190 },
  { bulan: "Apr", nilai2026: 4.02, nilai2025: 3.55, vol2026: 194, vol2025: 188 },
  { bulan: "Mei", nilai2026: 4.24, nilai2025: 3.71, vol2026: 205, vol2025: 191 },
  { bulan: "Jun", nilai2026: null, nilai2025: 3.9, vol2026: null, vol2025: 205 },
  { bulan: "Jul", nilai2026: null, nilai2025: 4.3, vol2026: null, vol2025: 226 },
  { bulan: "Agu", nilai2026: null, nilai2025: 4.4, vol2026: null, vol2025: 234 },
  { bulan: "Sep", nilai2026: null, nilai2025: 4.2, vol2026: null, vol2025: 229 },
  { bulan: "Okt", nilai2026: null, nilai2025: 4.0, vol2026: null, vol2025: 218 },
  { bulan: "Nov", nilai2026: null, nilai2025: 3.8, vol2026: null, vol2025: 204 },
  { bulan: "Des", nilai2026: null, nilai2025: 3.6, vol2026: null, vol2025: 190 },
];

/* ── 9. Sales by Komoditas (tabel vs RKAP) ────────────────────────── */

export interface SalesRow {
  komoditas: string;
  volume: string;
  asp: string;
  nilai: string;
  /** Capaian vs RKAP YTD (%). */
  rkapPct: number;
  tren: "up" | "down" | "flat";
}

/**
 * Volume × ASP ≈ nilai per baris; total nilai Rp 19,90 T (= baseline),
 * capaian agregat 102,3% RKAP YTD.
 */
export const salesByKomoditas: SalesRow[] = [
  { komoditas: "CPO", volume: "968 rb ton", asp: "Rp 12.482/kg", nilai: "Rp 12,08 T", rkapPct: 102.6, tren: "up" },
  { komoditas: "PK & PKO", volume: "226 rb ton", asp: "Rp 6.815/kg", nilai: "Rp 1,54 T", rkapPct: 106.2, tren: "up" },
  { komoditas: "Gula", volume: "117 rb ton", asp: "Rp 14.560/kg", nilai: "Rp 1,71 T", rkapPct: 96.8, tren: "down" },
  { komoditas: "Tetes", volume: "62 rb ton", asp: "Rp 1.450/kg", nilai: "Rp 0,09 T", rkapPct: 91.4, tren: "down" },
  { komoditas: "Karet", volume: "46,1 rb ton", asp: "Rp 18.650/kg", nilai: "Rp 0,86 T", rkapPct: 94.2, tren: "flat" },
  { komoditas: "Teh", volume: "10,2 rb ton", asp: "Rp 26.400/kg", nilai: "Rp 0,27 T", rkapPct: 88.6, tren: "down" },
  { komoditas: "Produk Hilir", volume: "196 rb ton", asp: "Rp 15.000/kg", nilai: "Rp 2,94 T", rkapPct: 108.4, tren: "up" },
  { komoditas: "Lainnya", volume: "—", asp: "—", nilai: "Rp 0,41 T", rkapPct: 97.2, tren: "flat" },
];

export const salesByKomoditasTotal = {
  nilai: "Rp 19,90 T",
  rkapPct: 102.3,
};

/* ── 10. Price-Volume Bridge (waterfall YoY) ──────────────────────── */

export interface BridgeStep {
  label: string;
  /** Rp Triliun; bertanda untuk step naik/turun. */
  value: number;
  type: "total" | "up" | "down";
}

/** 17,60 + 1,42 + 0,68 + 0,25 − 0,05 = 19,90. */
export const priceVolumeBridge: BridgeStep[] = [
  { label: "Penjualan YTD 2025", value: 17.6, type: "total" },
  { label: "Efek Harga", value: 1.42, type: "up" },
  { label: "Efek Volume", value: 0.68, type: "up" },
  { label: "Efek Mix & Hilirisasi", value: 0.25, type: "up" },
  { label: "Lainnya", value: -0.05, type: "down" },
  { label: "Penjualan YTD 2026", value: 19.9, type: "total" },
];

/* ── 11. Sales by Subholding ──────────────────────────────────────── */

export interface SubholdingSales {
  name: string;
  /** Nilai penjualan Rp T; total = 19,9 T. */
  nilai: number;
  sharePct: number;
  rkapPct: number;
  komoditasUtama: string;
}

export const salesBySubholding: SubholdingSales[] = [
  { name: "PalmCo", nilai: 14.6, sharePct: 73.4, rkapPct: 104.0, komoditasUtama: "CPO, PK/PKO, Hilir" },
  { name: "SGN (SugarCo)", nilai: 3.6, sharePct: 18.1, rkapPct: 97.4, komoditasUtama: "Gula, Tetes" },
  { name: "PTPN I (SupportingCo)", nilai: 1.7, sharePct: 8.5, rkapPct: 98.2, komoditasUtama: "Karet, Teh, Lainnya" },
];

/* ── 12. ASP vs Benchmark KPBN (bulanan) ──────────────────────────── */

export interface AspBenchmarkPoint {
  bulan: string;
  /** ASP realisasi CPO Rp/kg. */
  asp: number;
  /** Rata-rata benchmark KPBN bulanan Rp/kg. */
  kpbn: number;
  /** Premium (+) / diskon (−) Rp/kg. */
  premium: number;
}

/** Rata-rata premium YTD = +Rp 45/kg; rata-rata ASP = Rp 12.482/kg. */
export const aspVsBenchmark: AspBenchmarkPoint[] = [
  { bulan: "Jan", asp: 11627, kpbn: 11595, premium: 32 },
  { bulan: "Feb", asp: 12183, kpbn: 12135, premium: 48 },
  { bulan: "Mar", asp: 12570, kpbn: 12515, premium: 55 },
  { bulan: "Apr", asp: 12343, kpbn: 12305, premium: 38 },
  { bulan: "Mei", asp: 13687, kpbn: 13635, premium: 52 },
];

export const aspPremiumAvg = "+Rp 45/kg";

/* ── 13. Insight & rekomendasi ────────────────────────────────────── */

export interface MktInsight {
  title: string;
  text: string;
  tone: "red" | "amber" | "green" | "blue";
}

export const mktInsights: MktInsight[] = [
  {
    title: "Harga menopang capaian, volume on-track",
    text: "Dari kenaikan penjualan +Rp 2,3 T YoY, Rp 1,42 T berasal dari efek harga dan Rp 0,68 T dari volume. Capaian 102,3% RKAP belum teruji terhadap koreksi harga H2.",
    tone: "blue",
  },
  {
    title: "Premium ASP konsisten di atas KPBN",
    text: "ASP CPO YTD Rp 12.482/kg, rata-rata +Rp 45/kg di atas benchmark KPBN — kualitas FFA rendah dan kontrak premium buyer hilir menjadi pendorong.",
    tone: "green",
  },
  {
    title: "Gula & teh di bawah RKAP",
    text: "Gula 96,8% dan teh 88,6% dari RKAP YTD; gula tertahan HET/HAP sementara teh tertekan harga global. Perlu review mix penjualan SGN & PTPN I di H2.",
    tone: "amber",
  },
  {
    title: "Porsi hilir naik ke 14,8%",
    text: "Pendapatan hilir Rp 2,94 T (108,4% RKAP) — laju perlu dua kali lipat untuk mengejar target 25% pada 2030; FID refinery menjadi keputusan kunci.",
    tone: "amber",
  },
];

/* ── 14. Referensi silang baseline (dipakai kartu ringkas) ────────── */

export const mktBaselineRefs = {
  penjualanYtdRpT: PEMASARAN.penjualanYtdRpT,
  pendapatanYtdRpT: KEUANGAN.pendapatanYtd,
  kursUsdIdr: PEMASARAN.kursUsdIdr,
  stokCpoRbTon: PEMASARAN.stokCpoRbTon,
  stokCpoHariJual: PEMASARAN.stokCpoHariJual,
} as const;

/**
 * Data statis halaman Struktur Biaya & HPP (/keuangan/struktur-biaya).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts.
 */

import { PALETTE } from "./chart-palette";
import { PRODUKSI } from "./group-baseline";

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export interface KsbKpi {
  label: string;
  value: string;
  sub: string;
  delta: string;
  trend: "up" | "down";
  deltaTone: "good" | "bad";
  compare: string;
  tone: "blue" | "green" | "amber" | "red";
}

/** Target HPP/kg CPO tahun berjalan (Rp/kg). */
export const HPP_CPO_TARGET_RP_KG = 8700;

export const ksbKpi: KsbKpi[] = [
  {
    label: "HPP YTD",
    value: "Rp 15,8 T",
    sub: "64,2% dari pendapatan",
    delta: "7,8%",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Mei 2025",
    tone: "blue",
  },
  {
    label: "HPP / kg CPO",
    value: `Rp ${PRODUKSI.hppCpoRpKg.toLocaleString("id-ID")}`, // Rp 8.950
    sub: `Target Rp ${HPP_CPO_TARGET_RP_KG.toLocaleString("id-ID")}`,
    delta: "+2,9%",
    trend: "up",
    deltaTone: "bad",
    compare: "vs target",
    tone: "red",
  },
  {
    label: "HPP / kg Gula",
    value: "Rp 11.240",
    sub: "vs harga lelang Rp 14.850",
    delta: "+1,8%",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Mei 2025",
    tone: "amber",
  },
  {
    label: "Cost Inflation",
    value: "4,8%",
    sub: "YoY blended (pupuk, BBM, upah)",
    delta: "-0,7 pts",
    trend: "down",
    deltaTone: "good",
    compare: "vs 2025",
    tone: "green",
  },
];

/* ── 2. Cost Structure Breakdown (komponen HPP) ───────────────────── */

export interface CostComponent {
  name: string;
  /** Porsi terhadap HPP YTD (%), total 100. */
  pct: number;
  /** Nilai YTD (Rp T) dari HPP 15,8 T. */
  valueRpT: number;
  color: string;
}

/** 28 + 22 + 18 + 19 + 13 = 100% dari HPP YTD Rp 15,8 T. */
export const costComponents: CostComponent[] = [
  { name: "Pemeliharaan Tanaman & Pupuk", pct: 28, valueRpT: 4.42, color: PALETTE.green },
  { name: "Panen & Angkut", pct: 22, valueRpT: 3.48, color: PALETTE.blue },
  { name: "Pengolahan Pabrik", pct: 18, valueRpT: 2.84, color: PALETTE.teal },
  { name: "Gaji & Tunjangan", pct: 19, valueRpT: 3.0, color: PALETTE.amber },
  { name: "Umum & Overhead", pct: 13, valueRpT: 2.06, color: PALETTE.slate },
];

/* ── 3. Unit Cost Trend 24 bulan (jaws HPP vs harga jual) ─────────── */

export interface UnitCostPoint {
  month: string;
  /** HPP per kg CPO (Rp/kg). */
  hppCpo: number;
  /** Harga jual rata-rata CPO (Rp/kg). */
  hargaCpo: number;
  /** HPP per kg gula (Rp/kg); null di luar musim giling. */
  hppGula: number | null;
  /** Harga lelang gula (Rp/kg). */
  hargaGula: number;
}

/** Jun'24–Mei'26; berakhir HPP CPO 8.950 · CPO 13.680 · gula 11.240 / 14.850. */
export const unitCostTrend: UnitCostPoint[] = [
  { month: "Jun'24", hppCpo: 8420, hargaCpo: 11250, hppGula: 10780, hargaGula: 14100 },
  { month: "Jul'24", hppCpo: 8450, hargaCpo: 11480, hppGula: 10820, hargaGula: 14150 },
  { month: "Agu'24", hppCpo: 8480, hargaCpo: 11620, hppGula: 10850, hargaGula: 14200 },
  { month: "Sep'24", hppCpo: 8510, hargaCpo: 11540, hppGula: 10880, hargaGula: 14250 },
  { month: "Okt'24", hppCpo: 8530, hargaCpo: 11780, hppGula: 10920, hargaGula: 14300 },
  { month: "Nov'24", hppCpo: 8560, hargaCpo: 11930, hppGula: null, hargaGula: 14350 },
  { month: "Des'24", hppCpo: 8590, hargaCpo: 12140, hppGula: null, hargaGula: 14400 },
  { month: "Jan'25", hppCpo: 8620, hargaCpo: 12080, hppGula: null, hargaGula: 14420 },
  { month: "Feb'25", hppCpo: 8640, hargaCpo: 12210, hppGula: null, hargaGula: 14450 },
  { month: "Mar'25", hppCpo: 8660, hargaCpo: 12340, hppGula: null, hargaGula: 14480 },
  { month: "Apr'25", hppCpo: 8690, hargaCpo: 12460, hppGula: null, hargaGula: 14500 },
  { month: "Mei'25", hppCpo: 8700, hargaCpo: 12380, hppGula: 11040, hargaGula: 14550 },
  { month: "Jun'25", hppCpo: 8720, hargaCpo: 12290, hppGula: 11060, hargaGula: 14580 },
  { month: "Jul'25", hppCpo: 8740, hargaCpo: 12420, hppGula: 11080, hargaGula: 14600 },
  { month: "Agu'25", hppCpo: 8760, hargaCpo: 12550, hppGula: 11100, hargaGula: 14620 },
  { month: "Sep'25", hppCpo: 8780, hargaCpo: 12480, hppGula: 11130, hargaGula: 14650 },
  { month: "Okt'25", hppCpo: 8800, hargaCpo: 12690, hppGula: 11160, hargaGula: 14680 },
  { month: "Nov'25", hppCpo: 8830, hargaCpo: 12820, hppGula: null, hargaGula: 14700 },
  { month: "Des'25", hppCpo: 8850, hargaCpo: 12960, hppGula: null, hargaGula: 14720 },
  { month: "Jan'26", hppCpo: 8870, hargaCpo: 11980, hppGula: null, hargaGula: 14740 },
  { month: "Feb'26", hppCpo: 8890, hargaCpo: 12160, hppGula: null, hargaGula: 14760 },
  { month: "Mar'26", hppCpo: 8910, hargaCpo: 12450, hppGula: null, hargaGula: 14790 },
  { month: "Apr'26", hppCpo: 8930, hargaCpo: 12980, hppGula: null, hargaGula: 14820 },
  { month: "Mei'26", hppCpo: PRODUKSI.hppCpoRpKg, hargaCpo: 13680, hppGula: 11240, hargaGula: 14850 },
];

/* ── 4. HPP per Regional (vs target) ──────────────────────────────── */

export interface RegionalCost {
  regional: string;
  /** HPP/kg CPO regional (Rp/kg). */
  hppRpKg: number;
  /** Selisih vs target 8.700 (Rp/kg, positif = lebih mahal). */
  gapRpKg: number;
  tone: "good" | "warn" | "bad";
}

export const costPerRegional: RegionalCost[] = [
  { regional: "Regional 1 (Sumut)", hppRpKg: 8520, gapRpKg: -180, tone: "good" },
  { regional: "Regional 2 (Sumut)", hppRpKg: 8340, gapRpKg: -360, tone: "good" },
  { regional: "Regional 3 (Riau)", hppRpKg: 8680, gapRpKg: -20, tone: "good" },
  { regional: "Regional 4 (Sumsel-Jambi)", hppRpKg: 9080, gapRpKg: 380, tone: "warn" },
  { regional: "Regional 5 (Kalimantan)", hppRpKg: 9240, gapRpKg: 540, tone: "warn" },
  { regional: "Regional 6 (Jawa)", hppRpKg: 9420, gapRpKg: 720, tone: "bad" },
  { regional: "Regional 7 (Sulawesi-Papua)", hppRpKg: 9680, gapRpKg: 980, tone: "bad" },
];

/* ── 5. Eksposur Pupuk & BBM (vs asumsi RKAP) ─────────────────────── */

export interface InputPriceExposure {
  item: string;
  /** Asumsi harga RKAP (string berformat). */
  asumsiRkap: string;
  /** Harga aktual rata-rata YTD (string berformat). */
  aktual: string;
  /** Deviasi vs asumsi (%; positif = lebih mahal). */
  deviasiPct: number;
  /** Estimasi dampak ke HPP FY (string berformat). */
  dampakFy: string;
  tone: "good" | "warn" | "bad";
}

export const fertilizerFuel: InputPriceExposure[] = [
  { item: "Pupuk NPK", asumsiRkap: "Rp 12.400/kg", aktual: "Rp 13.150/kg", deviasiPct: 6.0, dampakFy: "+Rp 168 M", tone: "bad" },
  { item: "Pupuk Urea", asumsiRkap: "Rp 6.800/kg", aktual: "Rp 7.050/kg", deviasiPct: 3.7, dampakFy: "+Rp 74 M", tone: "warn" },
  { item: "Pupuk KCl", asumsiRkap: "Rp 9.600/kg", aktual: "Rp 9.480/kg", deviasiPct: -1.3, dampakFy: "-Rp 21 M", tone: "good" },
  { item: "BBM Solar Industri", asumsiRkap: "Rp 14.200/lt", aktual: "Rp 14.980/lt", deviasiPct: 5.5, dampakFy: "+Rp 96 M", tone: "bad" },
];

/* ── 6. Cost Saving Programs ──────────────────────────────────────── */

export interface SavingProgram {
  program: string;
  /** Target saving setahun (Rp M). */
  targetRpM: number;
  /** Realisasi saving YTD (Rp M). */
  realisasiRpM: number;
  /** Progress vs target (%). */
  progressPct: number;
  status: "On Track" | "At Risk" | "Off Track";
}

/** 5 program; target total Rp 840 M/thn. */
export const savingPrograms: SavingProgram[] = [
  { program: "Pemupukan presisi (dosis variabel)", targetRpM: 240, realisasiRpM: 104, progressPct: 43.3, status: "On Track" },
  { program: "Optimalisasi angkutan TBS & rute", targetRpM: 210, realisasiRpM: 92, progressPct: 43.8, status: "On Track" },
  { program: "Efisiensi energi pabrik (biomassa)", targetRpM: 160, realisasiRpM: 58, progressPct: 36.3, status: "At Risk" },
  { program: "Sentralisasi pengadaan pupuk & BBM", targetRpM: 130, realisasiRpM: 61, progressPct: 46.9, status: "On Track" },
  { program: "Digitalisasi administrasi kebun", targetRpM: 100, realisasiRpM: 28, progressPct: 28.0, status: "Off Track" },
];

export const savingSummary = {
  targetFyRpM: 840,
  realisasiYtdRpM: 343,
  progressPct: 40.8,
};

/* ── 7. Insight & Rekomendasi ─────────────────────────────────────── */

export interface KsbInsight {
  insight: string;
  rekomendasi: string;
}

export const ksbInsights: KsbInsight[] = [
  {
    insight:
      "HPP/kg CPO Rp 8.950 sudah 2,9% di atas target Rp 8.700; pendorong utama harga NPK (+6,0% vs asumsi) dan solar (+5,5%).",
    rekomendasi:
      "Kunci kontrak pupuk H2 lebih awal dan percepat konversi boiler ke biomassa cangkang.",
  },
  {
    insight:
      "Gap HPP antar regional hampir Rp 1.350/kg (8.340 vs 9.680) — logistik dan skala jadi pembeda terbesar, bukan upah.",
    rekomendasi:
      "Prioritaskan program rute angkut & konsolidasi PKS di Regional 5-7.",
  },
  {
    insight:
      "Program saving 40,8% dari target Rp 840 M — sedikit di bawah prorata; digitalisasi kebun paling tertinggal (28%).",
    rekomendasi:
      "Reviu ulang milestone digitalisasi; realokasi target ke pengadaan sentral yang sedang overdeliver.",
  },
];

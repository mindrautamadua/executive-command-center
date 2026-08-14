import type { Trend } from "./data";
import { GENDER, PALETTE } from "./chart-palette";
import type { ChipTone } from "@/components/ui/KpiCard";

/* ── KPI strip ───────────────────────────────────────────── */

export interface CompKpi {
  label: string;
  value: string;
  delta: string;
  trend: Trend;
  compare: string;
  icon: "biaya" | "gaji" | "rasio" | "kenaikan" | "benefit" | "equity";
  tone: ChipTone;
  line: string;
  series: number[];
  /** ganti sparkline dengan ring mini (Pay Equity Index) */
  ring?: number;
}

export const compKpi: CompKpi[] = [
  {
    label: "Total Biaya Kompensasi",
    value: "Rp 2,48 T",
    delta: "8,7%",
    trend: "up",
    compare: "vs Q1 2026: Rp 2,28 T",
    icon: "biaya",
    tone: "blue",
    line: PALETTE.blue,
    series: [30, 36, 33, 40, 35, 43, 38, 46, 41, 48, 44, 52, 47, 55, 59],
  },
  {
    label: "Rata-rata Gaji Bulanan",
    value: "Rp 12,45 Jt",
    delta: "5,3%",
    trend: "up",
    compare: "vs Q1 2026: Rp 11,82 Jt",
    icon: "gaji",
    tone: "green",
    line: PALETTE.green,
    series: [30, 35, 32, 38, 34, 41, 37, 44, 40, 46, 43, 49, 45, 52, 55],
  },
  {
    label: "Rasio Total Rewards",
    value: "68,4%",
    delta: "2,1%",
    trend: "up",
    compare: "vs Q1 2026: 66,3%",
    icon: "rasio",
    tone: "purple",
    line: PALETTE.purple,
    series: [34, 40, 33, 43, 37, 45, 39, 47, 42, 49, 45, 52, 47, 54, 57],
  },
  {
    label: "Kenaikan Gaji Rata-rata",
    value: "5,8%",
    delta: "0,6%",
    trend: "up",
    compare: "vs Q1 2026: 5,2%",
    icon: "kenaikan",
    tone: "amber",
    line: PALETTE.amber,
    series: [32, 38, 34, 42, 36, 44, 39, 46, 41, 48, 44, 51, 46, 53, 56],
  },
  {
    label: "Employee Benefits Cost",
    value: "Rp 356 M",
    delta: "9,1%",
    trend: "up",
    compare: "vs Q1 2026: Rp 326 M",
    icon: "benefit",
    tone: "teal",
    line: PALETTE.teal,
    series: [29, 35, 31, 39, 34, 42, 37, 45, 40, 47, 43, 50, 46, 53, 57],
  },
  {
    label: "Pay Equity Index",
    value: "0,95",
    delta: "0,03",
    trend: "up",
    compare: "vs Q1 2026: 0,92",
    icon: "equity",
    tone: "blue",
    line: PALETTE.blue,
    series: [],
    ring: 95,
  },
];

/* ── Komposisi total rewards ─────────────────────────────── */

export interface RewardSlice {
  name: string;
  pct: string;
  nominal: string;
  share: number;
  color: string;
}

export const komposisiRewards: RewardSlice[] = [
  { name: "Gaji Pokok", pct: "59,3%", nominal: "Rp 1,47 T", share: 59.3, color: PALETTE.blue },
  { name: "Tunjangan Tetap", pct: "15,2%", nominal: "Rp 378 M", share: 15.2, color: PALETTE.green },
  {
    name: "Tunjangan Tidak Tetap",
    pct: "10,8%",
    nominal: "Rp 268 M",
    share: 10.8,
    color: PALETTE.teal,
  },
  { name: "Insentif / Bonus", pct: "9,1%", nominal: "Rp 226 M", share: 9.1, color: PALETTE.amber },
  { name: "Benefit Lainnya", pct: "5,6%", nominal: "Rp 139 M", share: 5.6, color: PALETTE.purple },
];

/* ── Tren biaya kompensasi (Rp miliar) ───────────────────── */

export const trenBiaya = [
  { name: "Jan 2026", value: 2020, label: "2,02 T" },
  { name: "Feb 2026", value: 2100, label: "2,10 T" },
  { name: "Mar 2026", value: 2210, label: "2,21 T" },
  { name: "Apr 2026", value: 2280, label: "2,28 T" },
  { name: "Mei 2026", value: 2370, label: "2,37 T" },
  { name: "Jun 2026", value: 2480, label: "2,48 T" },
];

/* ── Benchmark gaji per level (Rp juta) ──────────────────── */

export interface BenchmarkRow {
  level: string;
  /** rentang market min → max */
  marketMin: number;
  marketMax: number;
  /** rata-rata market */
  marketAvg: number;
  /** rata-rata perusahaan */
  perusahaan: number;
}

export const benchmarkGaji: BenchmarkRow[] = [
  { level: "Direktur", marketMin: 60, marketMax: 88, marketAvg: 72, perusahaan: 82 },
  { level: "GM / Senior Manager", marketMin: 35, marketMax: 52, marketAvg: 42, perusahaan: 48 },
  { level: "Manager", marketMin: 22, marketMax: 32, marketAvg: 26, perusahaan: 30 },
  { level: "Supervisor", marketMin: 12, marketMax: 19, marketAvg: 15, perusahaan: 17 },
  { level: "Staff", marketMin: 6, marketMax: 9, marketAvg: 7.2, perusahaan: 8 },
];

/* ── Pay gap ─────────────────────────────────────────────── */

/**
 * Ringkasan konsisten dengan payGapPerLevel (rata-rata tertimbang headcount).
 * Unadjusted = gap agregat (termasuk efek komposisi level);
 * adjusted = rata-rata gap per level (tertimbang headcount level).
 */
export const payGapRingkas = {
  lakiLaki: "Rp 12,03 Jt",
  perempuan: "Rp 10,15 Jt",
  gap: "15,6%",
  gapAdjusted: "10,0%",
  gapDelta: "1,2%",
  gapTrend: "up" as Trend,
  gapCompare: "vs Q1 2026",
};

/** Dumbbell per level: rata-rata gaji laki-laki vs perempuan (Rp juta). */
export interface PayGapLevelRow {
  level: string;
  lakiLaki: number;
  perempuan: number;
  /** selisih relatif terhadap gaji laki-laki */
  gap: string;
  headcountLaki: number;
  headcountPerempuan: number;
}

export const payGapPerLevel: PayGapLevelRow[] = [
  { level: "Direktur", lakiLaki: 60.3, perempuan: 53.0, gap: "12,1%", headcountLaki: 96, headcountPerempuan: 32 },
  { level: "Senior Manager", lakiLaki: 38.3, perempuan: 34.3, gap: "10,4%", headcountLaki: 380, headcountPerempuan: 175 },
  { level: "Manager", lakiLaki: 22.3, perempuan: 20.0, gap: "10,3%", headcountLaki: 1420, headcountPerempuan: 860 },
  { level: "Supervisor", lakiLaki: 14.2, perempuan: 12.7, gap: "10,6%", headcountLaki: 3210, headcountPerempuan: 2180 },
  { level: "Staff", lakiLaki: 8.2, perempuan: 7.4, gap: "9,8%", headcountLaki: 9450, headcountPerempuan: 7120 },
];

export const payGapWarna = GENDER;

/* ── Distribusi gaji (persentil) ─────────────────────────── */

export const distribusiGaji = [
  { name: "P10", value: 8 },
  { name: "P25", value: 19 },
  { name: "P50 (Median)", value: 35 },
  { name: "P75", value: 27 },
  { name: "P90", value: 11 },
];

/* ── Realisasi kenaikan gaji ─────────────────────────────── */

export const realisasiKenaikan = {
  pct: 78.4,
  label: "78,4%",
  rincian: [
    { label: "Total Eligible", value: "18.642", unit: "Karyawan" },
    { label: "Sudah Diberikan", value: "14.605", unit: "Karyawan" },
    { label: "Proses", value: "2.180", unit: "Karyawan" },
    { label: "Belum", value: "1.857", unit: "Karyawan" },
  ],
  /** segmen busur gauge: Sudah / Proses / Belum (% dari eligible) */
  segmen: [
    { label: "Sudah Diberikan", pct: 78.4, color: PALETTE.green },
    { label: "Proses", pct: 11.7, color: PALETTE.amber },
    { label: "Belum", pct: 9.9, color: PALETTE.slate },
  ],
};

/* ── Komposisi employee benefits ─────────────────────────── */

export interface BenefitSlice {
  name: string;
  pct: string;
  share: number;
  color: string;
}

export const komposisiBenefits: BenefitSlice[] = [
  { name: "Kesehatan", pct: "45,2%", share: 45.2, color: PALETTE.blue },
  { name: "Pensiun", pct: "22,7%", share: 22.7, color: PALETTE.green },
  { name: "Asuransi Jiwa", pct: "15,6%", share: 15.6, color: PALETTE.amber },
  { name: "Cuti & Lainnya", pct: "9,3%", share: 9.3, color: PALETTE.teal },
  { name: "Program Karyawan", pct: "7,2%", share: 7.2, color: PALETTE.purple },
];

/* ── Ringkasan kompensasi per unit organisasi ────────────── */

export interface UnitKompensasi {
  unit: string;
  totalBiaya: string;
  rataGaji: string;
  kenaikan: string;
  rasioRewards: string;
  /** angka untuk micro-bar */
  rasioNum: number;
  payEquity: string;
  payEquityNum: number;
}

export const unitKompensasi: UnitKompensasi[] = [
  {
    unit: "PTPN I",
    totalBiaya: "456 M",
    rataGaji: "12,85 Jt",
    kenaikan: "5,9%",
    rasioRewards: "69,1%",
    rasioNum: 69.1,
    payEquity: "0,96",
    payEquityNum: 0.96,
  },
  {
    unit: "PTPN II",
    totalBiaya: "389 M",
    rataGaji: "12,12 Jt",
    kenaikan: "5,6%",
    rasioRewards: "67,8%",
    rasioNum: 67.8,
    payEquity: "0,94",
    payEquityNum: 0.94,
  },
  {
    unit: "PTPN III (Persero)",
    totalBiaya: "612 M",
    rataGaji: "12,67 Jt",
    kenaikan: "5,8%",
    rasioRewards: "68,6%",
    rasioNum: 68.6,
    payEquity: "0,95",
    payEquityNum: 0.95,
  },
  {
    unit: "PTPN IV",
    totalBiaya: "298 M",
    rataGaji: "11,48 Jt",
    kenaikan: "5,4%",
    rasioRewards: "66,9%",
    rasioNum: 66.9,
    payEquity: "0,93",
    payEquityNum: 0.93,
  },
  {
    unit: "PTPN V",
    totalBiaya: "333 M",
    rataGaji: "11,91 Jt",
    kenaikan: "5,7%",
    rasioRewards: "67,1%",
    rasioNum: 67.1,
    payEquity: "0,94",
    payEquityNum: 0.94,
  },
  {
    unit: "Holding & Supporting Co",
    totalBiaya: "394 M",
    rataGaji: "13,26 Jt",
    kenaikan: "6,1%",
    rasioRewards: "69,8%",
    rasioNum: 69.8,
    payEquity: "0,97",
    payEquityNum: 0.97,
  },
];

/* ── Rasio kompensasi terhadap kinerja ───────────────────── */

/** x = performance score, y = total rewards ratio (%) */
export const rasioKinerja = [
  { x: 55, y: 58 },
  { x: 58, y: 61 },
  { x: 60, y: 57 },
  { x: 62, y: 64 },
  { x: 64, y: 62 },
  { x: 66, y: 68 },
  { x: 68, y: 65 },
  { x: 70, y: 71 },
  { x: 71, y: 67 },
  { x: 73, y: 74 },
  { x: 75, y: 70 },
  { x: 76, y: 77 },
  { x: 78, y: 73 },
  { x: 79, y: 80 },
  { x: 81, y: 76 },
  { x: 82, y: 83 },
  { x: 84, y: 79 },
  { x: 85, y: 86 },
  { x: 87, y: 82 },
  { x: 88, y: 89 },
  { x: 90, y: 85 },
  { x: 92, y: 91 },
  { x: 94, y: 88 },
  { x: 96, y: 93 },
];

/** garis tren putus-putus */
export const rasioTren = [
  { x: 54, y: 58 },
  { x: 97, y: 92 },
];

/* ── Insight & rekomendasi AI ────────────────────────────── */

export interface CompInsight {
  highlight: string;
  isi: string;
  tone: ChipTone;
  icon: "trend" | "check" | "warning" | "info";
}

export const compInsight: CompInsight[] = [
  {
    highlight: "Total biaya kompensasi",
    isi: " meningkat 8,7% dibandingkan Q1 2026, sejalan dengan peningkatan kinerja perusahaan.",
    tone: "blue",
    icon: "trend",
  },
  {
    highlight: "Pay Equity Index",
    isi: " berada di 0,95 (mendekati ideal 1,00). Pertahankan konsistensi kebijakan remunerasi.",
    tone: "green",
    icon: "check",
  },
  {
    highlight: "Gap gaji terbesar",
    isi: " terdapat pada level Senior Manager ke atas. Rekomendasi: review struktur gaji pada level tersebut.",
    tone: "amber",
    icon: "warning",
  },
  {
    highlight: "Rasio Total Rewards",
    isi: " yang kompetitif membantu meningkatkan retention karyawan potensial.",
    tone: "teal",
    icon: "info",
  },
];

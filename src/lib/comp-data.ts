import type { Trend } from "./data";
import { GENDER, PALETTE } from "./chart-palette";
import type { ChipTone } from "@/components/ui/KpiCard";
import {
  equityBridgeCanon,
  levelGapPct,
  payEquityCanon,
  payLevels,
} from "./pay-equity-data";

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
    // = unadjusted ratio dari pay-equity-data (sumber tunggal dengan halaman D&I)
    label: "Pay Equity Index",
    value: payEquityCanon.unadjustedRatio,
    delta: "0,01",
    trend: "up",
    compare: "vs Q1 2026: 0,96",
    icon: "equity",
    tone: "blue",
    line: PALETTE.blue,
    series: [],
    ring: 97,
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

/**
 * Level & kolom `perusahaan` selaras payLevels (rata-rata gabungan L+P per
 * level) supaya benchmark tidak bertentangan dengan analisis pay gap.
 */
export const benchmarkGaji: BenchmarkRow[] = [
  { level: "Direksi", marketMin: 60, marketMax: 88, marketAvg: 72, perusahaan: 81 },
  { level: "Vice President", marketMin: 38, marketMax: 56, marketAvg: 46, perusahaan: 47.3 },
  { level: "Senior Manager", marketMin: 24, marketMax: 36, marketAvg: 29, perusahaan: 29.6 },
  { level: "Manager", marketMin: 16, marketMax: 26, marketAvg: 20.5, perusahaan: 19.7 },
  { level: "Assistant Manager", marketMin: 10, marketMax: 16, marketAvg: 12.8, perusahaan: 12.9 },
  { level: "Staff", marketMin: 6.5, marketMax: 9.5, marketAvg: 7.8, perusahaan: 8.3 },
];

/* ── Pay gap ─────────────────────────────────────────────── */

/**
 * Seluruh angka diturunkan dari pay-equity-data (sumber tunggal dengan
 * halaman Diversity, Equity & Inclusion) — tidak ada agregat hardcode.
 */
export const payGapRingkas = {
  lakiLaki: payEquityCanon.rataL,
  perempuan: payEquityCanon.rataP,
  gap: payEquityCanon.unadjustedGap,
  gapAdjusted: payEquityCanon.adjustedGap,
  gapDelta: "0,2%",
  gapTrend: "down" as Trend,
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

export const payGapPerLevel: PayGapLevelRow[] = payLevels.map((r) => ({
  level: r.level,
  lakiLaki: r.gajiL,
  perempuan: r.gajiP,
  gap: `${levelGapPct(r).toFixed(1).replace(".", ",")}%`,
  headcountLaki: r.headcountL,
  headcountPerempuan: r.headcountP,
}));

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
    payEquity: "0,97",
    payEquityNum: 0.97,
  },
  {
    unit: "PTPN I Regional 1",
    totalBiaya: "389 M",
    rataGaji: "12,12 Jt",
    kenaikan: "5,6%",
    rasioRewards: "67,8%",
    rasioNum: 67.8,
    payEquity: "0,96",
    payEquityNum: 0.96,
  },
  {
    unit: "PTPN III (Persero)",
    totalBiaya: "612 M",
    rataGaji: "12,67 Jt",
    kenaikan: "5,8%",
    rasioRewards: "68,6%",
    rasioNum: 68.6,
    payEquity: "0,97",
    payEquityNum: 0.97,
  },
  {
    unit: "PTPN IV",
    totalBiaya: "298 M",
    rataGaji: "11,48 Jt",
    kenaikan: "5,4%",
    rasioRewards: "66,9%",
    rasioNum: 66.9,
    payEquity: "0,95",
    payEquityNum: 0.95,
  },
  {
    unit: "PTPN IV Regional 3",
    totalBiaya: "333 M",
    rataGaji: "11,91 Jt",
    kenaikan: "5,7%",
    rasioRewards: "67,1%",
    rasioNum: 67.1,
    payEquity: "0,96",
    payEquityNum: 0.96,
  },
  {
    unit: "Holding & Supporting Co",
    totalBiaya: "394 M",
    rataGaji: "13,26 Jt",
    kenaikan: "6,1%",
    rasioRewards: "69,8%",
    rasioNum: 69.8,
    payEquity: "0,98",
    payEquityNum: 0.98,
  },];

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

/* ── Compa-ratio & range position ────────────────────────── */

export interface CompaLevelRow {
  level: string;
  /** rata-rata gaji aktual (Rp juta) */
  aktual: number;
  /** market P50 (Rp juta) */
  marketP50: number;
  /** compa-ratio = aktual / market P50 */
  compa: number;
  posisi: string;
  status: "Competitive" | "Above Market" | "Monitor";
}

export const compaPerLevel: CompaLevelRow[] = [
  { level: "Direktur", aktual: 82, marketP50: 72, compa: 114, posisi: "P75", status: "Above Market" },
  { level: "GM / Senior Manager", aktual: 48, marketP50: 42, compa: 114, posisi: "P75", status: "Above Market" },
  { level: "Manager", aktual: 30, marketP50: 26, compa: 115, posisi: "P75", status: "Above Market" },
  { level: "Supervisor", aktual: 17, marketP50: 15, compa: 113, posisi: "P70", status: "Competitive" },
  { level: "Staff", aktual: 8, marketP50: 7.2, compa: 111, posisi: "P65", status: "Competitive" },
];

/** Distribusi compa-ratio seluruh karyawan */
export const compaDistribusi = [
  { bucket: "<80%", pct: 4, color: PALETTE.red },
  { bucket: "80–90%", pct: 12, color: PALETTE.amber },
  { bucket: "90–110%", pct: 64, color: PALETTE.green },
  { bucket: "110–120%", pct: 15, color: PALETTE.blue },
  { bucket: ">120%", pct: 5, color: PALETTE.purple },
];

/** Posisi karyawan dalam rentang gaji (range penetration) */
export const rangePosition = [
  { label: "Below Range", pct: 8, color: PALETTE.red },
  { label: "Lower Quartile", pct: 18, color: PALETTE.amber },
  { label: "Midpoint", pct: 47, color: PALETTE.green },
  { label: "Upper Quartile", pct: 21, color: PALETTE.blue },
  { label: "Above Range", pct: 6, color: PALETTE.purple },
];

export const strukturRisiko = [
  { label: "Di bawah minimum range", value: "486", tone: "red" as ChipTone },
  { label: "Di atas maximum range", value: "312", tone: "amber" as ChipTone },
  { label: "Pay compression (gap <5% vs new hire)", value: "1.240", tone: "amber" as ChipTone },
  { label: "Salary inversion (new hire > incumbent)", value: "74", tone: "red" as ChipTone },
];

/* ── Pay equity: bridge & remediation ────────────────────── */

/** Waterfall: unadjusted → within-level → unexplained (dari pay-equity-data). */
export const equityBridge = equityBridgeCanon;

export const equityRemediasi = {
  affected: "812",
  affectedNote: "karyawan berpotensi terdampak",
  biaya: "Rp 14 M",
  biayaNote: "estimasi biaya remediasi / tahun",
  prioritas: ["Direksi", "Vice President", "Senior Manager"],
  konsentrasi:
    "Within-level gap ~4,8% sebagian besar dijelaskan rumpun jabatan & tenur; unexplained 1,2% terkonsentrasi di level senior — targeted review, bukan remediasi massal.",
  confidence: [
    { label: "Pay Equity Confidence", value: 94 },
    { label: "Sample Coverage", value: 92 },
    { label: "Model Fit (R²)", value: 89 },
    { label: "Data Completeness", value: 97 },
  ],
};

/* ── Pay-for-performance effectiveness ───────────────────── */

export interface RewardPerfRow {
  rating: string;
  avgReward: string;
  rewardNum: number;
  merit: string;
  meritNum: number;
}

export const rewardByPerformance: RewardPerfRow[] = [
  { rating: "Outstanding", avgReward: "Rp 18,6 Jt", rewardNum: 18.6, merit: "8,2%", meritNum: 8.2 },
  { rating: "Exceeds", avgReward: "Rp 15,2 Jt", rewardNum: 15.2, merit: "6,8%", meritNum: 6.8 },
  { rating: "Meets", avgReward: "Rp 13,1 Jt", rewardNum: 13.1, merit: "5,1%", meritNum: 5.1 },
  { rating: "Below", avgReward: "Rp 11,8 Jt", rewardNum: 11.8, merit: "2,8%", meritNum: 2.8 },
  { rating: "Poor", avgReward: "Rp 10,9 Jt", rewardNum: 10.9, merit: "1,0%", meritNum: 1.0 },
];

export const p4pRingkas = {
  rewardDiff: "1,42×",
  rewardDiffNote: "Outstanding vs Meets — total rewards",
  meritDiff: "1,61×",
  meritDiffNote: "Outstanding vs Meets — merit increase",
  korelasi: "r = 0,87",
};

export const rewardMisalignment = [
  {
    label: "High Performer / Underpaid",
    value: "482",
    note: "Compa <90% — retention risk",
    tone: "red" as ChipTone,
  },
  {
    label: "Low Performer / Overpaid",
    value: "731",
    note: "Compa >110% — cost effectiveness risk",
    tone: "amber" as ChipTone,
  },
];

/* ── People cost efficiency ──────────────────────────────── */

export const costEfficiency = [
  { label: "Compensation / Revenue", value: "38,2%", note: "Target industri: <40%", tone: "green" as ChipTone },
  { label: "Compensation / Opex", value: "52,4%", note: "vs Q1: 53,1%", tone: "blue" as ChipTone },
  { label: "Revenue / Comp Cost", value: "2,62×", note: "vs Q1: 2,55×", tone: "teal" as ChipTone },
  { label: "EBITDA / Comp Cost", value: "0,75×", note: "vs Q1: 0,71×", tone: "purple" as ChipTone },
];

export const affordability = {
  narasi:
    "Kenaikan biaya kompensasi 8,7% masih di bawah pertumbuhan revenue 11,2% dan EBITDA 13,4% — kenaikan payroll affordable.",
  bars: [
    { label: "Compensation Growth", value: 8.7, color: PALETTE.amber },
    { label: "Revenue Growth", value: 11.2, color: PALETTE.blue },
    { label: "EBITDA Growth", value: 13.4, color: PALETTE.green },
  ],
};

/* ── Critical talent compensation risk ───────────────────── */

export const criticalTalentRisk = {
  level: "HIGH",
  funnel: [
    { label: "Critical Talent", value: "2.842", pct: 100 },
    { label: "Di bawah Market P50", value: "614", pct: 22 },
    { label: "Compa-ratio <90%", value: "421", pct: 15 },
    { label: "High Performer + Compa <90%", value: "187", pct: 6.6 },
    { label: "HiPo + Compa <90%", value: "82", pct: 2.9 },
  ],
  ekonomi: [
    { label: "Retention gap ke Market P75", value: "Rp 3,4 Jt/bln" },
    { label: "Biaya retention adjustment", value: "Rp 11 M/thn" },
    { label: "Estimasi replacement cost", value: "Rp 34,6 M" },
  ],
  kesimpulan: "Adjustment < replacement cost — retention premium economically justified.",
};

/* ── Compensation scenario → decision center ─────────────── */

export interface CompScenario {
  nama: string;
  deskripsi: string;
  payroll: string;
  equity: string;
  retention: string;
  rekomendasi: boolean;
  color: string;
}

export const compScenarios: CompScenario[] = [
  {
    nama: "A — Broad Increase",
    deskripsi: "Kenaikan merata 6,5% seluruh workforce",
    payroll: "+Rp 168 M",
    equity: "+2 pts",
    retention: "+1,2%",
    rekomendasi: false,
    color: PALETTE.slate,
  },
  {
    nama: "B — Targeted Equity",
    deskripsi: "Merit 5,8% + adjustment high performer under-market & equity gap",
    payroll: "+Rp 46 M",
    equity: "+5 pts",
    retention: "+6,8% high performer",
    rekomendasi: true,
    color: PALETTE.green,
  },
  {
    nama: "C — Market Correction",
    deskripsi: "Critical roles dinaikkan ke market P75",
    payroll: "+Rp 92 M",
    equity: "+3 pts",
    retention: "−18 pts critical risk",
    rekomendasi: false,
    color: PALETTE.blue,
  },
];

export const compDecision = {
  rekomendasi: "Scenario B — Targeted Equity",
  alasan:
    "Impact retention tertinggi per rupiah incremental payroll: prioritas 187 high performer under-market, 82 HiPo di bawah P50, dan remediasi unexplained gap 1,2%.",
  syarat: [
    "Validasi individual compa-ratio sebelum adjustment",
    "Remediasi pay equity dieksekusi dalam 2 siklus payroll",
    "Review dampak retention 2 kuartal setelah implementasi",
  ],
  log: [
    { label: "Diajukan oleh", value: "Direktur SDM" },
    { label: "Review", value: "Komite Remunerasi" },
    { label: "Status", value: "Menunggu approval BOD" },
    { label: "Target efektif", value: "Q3 2026" },
  ],
};

/* ── Market data governance ──────────────────────────────── */

export const marketGovernance = {
  sumber: "Mercer TRS + Korn Ferry (blended)",
  cut: "Indonesia · Plantation / Agribusiness · BUMN",
  percentile: "P50 / P75",
  asOf: "Mar 2026",
};

/* ── Insight & rekomendasi AI ────────────────────────────── */

export interface CompInsight {
  highlight: string;
  isi: string;
  tone: ChipTone;
  icon: "trend" | "check" | "warning" | "info";
}

export const compInsight: CompInsight[] = [
  {
    highlight: "Biaya kompensasi naik 8,7%",
    isi: " — masih affordable: di bawah pertumbuhan revenue 11,2% dan EBITDA 13,4%.",
    tone: "blue",
    icon: "trend",
  },
  {
    highlight: "Adjusted pay gap ~10% konsisten di semua level",
    isi: " — indikasi pola struktural, bukan outlier. Pay equity memerlukan targeted review, bukan sekadar dipertahankan.",
    tone: "amber",
    icon: "warning",
  },
  {
    highlight: "187 high performer & 82 HiPo under-market",
    isi: " (compa <90% / di bawah P50) — retention compensation risk tinggi pada critical talent.",
    tone: "red",
    icon: "warning",
  },
  {
    highlight: "Rekomendasi: targeted adjustment",
    isi: " (+Rp 46 M) melindungi critical talent dan menutup equity gap dengan biaya jauh di bawah broad increase (+Rp 168 M).",
    tone: "green",
    icon: "check",
  },
];

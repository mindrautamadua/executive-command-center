import type { Trend } from "./data";
import type { ChipTone } from "@/components/ui/KpiCard";
import { GENERATION, PALETTE, SEMANTIC } from "./chart-palette";

/* ── KPI strip ───────────────────────────────────────────── */

export interface TalentKpi {
  label: string;
  value: string;
  unit?: string;
  delta: string;
  trend: Trend;
  /** Override warna delta untuk metrik yang bagus saat turun. */
  deltaTone?: "good" | "bad";
  compare: string;
  tone: ChipTone;
  color: string;
  series: number[];
}

export const talentKpi: TalentKpi[] = [
  {
    label: "Total Talenta (High Potential)",
    value: "3.142",
    delta: "8,2%",
    trend: "up",
    compare: "vs Des 2024: 2.903",
    tone: "blue",
    color: PALETTE.blue,
    series: [30, 34, 31, 37, 34, 40, 37, 43, 40, 46, 43, 49, 46, 52, 57],
  },
  {
    label: "Talenta Siap Dipromosikan",
    value: "742",
    delta: "11,3%",
    trend: "up",
    compare: "vs Des 2024: 667",
    tone: "green",
    color: PALETTE.green,
    series: [28, 33, 30, 36, 33, 39, 36, 42, 39, 45, 42, 48, 45, 51, 56],
  },
  {
    label: "Rata-rata Potensi Talenta",
    value: "8,4 / 10",
    delta: "0,4",
    trend: "up",
    compare: "vs Des 2024: 8,0",
    tone: "purple",
    color: PALETTE.purple,
    series: [32, 36, 31, 40, 34, 43, 37, 46, 40, 49, 43, 52, 47, 55, 59],
  },
  {
    label: "Rasio Talenta Kritis Terisi",
    value: "78%",
    delta: "5,6%",
    trend: "up",
    compare: "vs Des 2024: 72%",
    tone: "amber",
    color: PALETTE.amber,
    series: [34, 39, 33, 43, 37, 46, 40, 48, 42, 51, 45, 54, 49, 56, 60],
  },
  {
    // 303 → 312 = naik; metrik ini bagus saat turun, jadi kenaikan diberi tone "bad"
    label: "Talenta Retention Risk (High)",
    value: "312",
    delta: "3,1%",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Des 2024: 303",
    tone: "red",
    color: PALETTE.red,
    series: [48, 43, 51, 41, 47, 39, 45, 37, 43, 35, 41, 33, 39, 31, 36],
  },
];

export const diversityTalenta = {
  value: "38%",
  suffix: "Perempuan",
  compare: "vs Des 2024: 36%",
  perempuan: 38,
  lakiLaki: 62,
};

/* ── 9-Box grid ──────────────────────────────────────────── */

/**
 * Jumlah talenta per sel, urutan kanonik shared/NineBoxGrid
 * (baris atas = potensi tinggi; kolom kanan = kinerja tinggi).
 * Total = 3.142 — konsisten dengan KPI Total Talenta.
 */
export const nineBox: number[] = [145, 501, 412, 244, 800, 302, 155, 337, 246];

/* ── Tren jumlah talenta ─────────────────────────────────── */

const BULAN = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];

export const trenTalenta = [
  2345, 2410, 2480, 2590, 2720, 2815, 2890, 2950, 3010, 3085, 3120, 3142,
].map((v, i) => ({ name: BULAN[i], value: v }));

/* ── Pipeline ────────────────────────────────────────────── */

export const pipeline = [
  { label: "Identified", value: 2843, color: PALETTE.blueSoft },
  { label: "Assessed", value: 1782, color: PALETTE.blue },
  { label: "Developed", value: 1126, color: PALETTE.green },
  { label: "Ready Now", value: 742, color: PALETTE.amber },
  { label: "In Role", value: 518, color: PALETTE.purple },
];

export const conversionRate = "69,8%";

/* ── Cluster generasi ────────────────────────────────────── */

export const clusterGenerasi = [
  { name: "Gen Z", periode: "(1997-2012)", pct: "12,2%", jumlah: "384", share: 12.2, color: GENERATION.genZ },
  { name: "Milenial", periode: "(1981-1996)", pct: "58,6%", jumlah: "1.840", share: 58.6, color: GENERATION.millennial },
  { name: "Gen X", periode: "(1965-1980)", pct: "25,1%", jumlah: "789", share: 25.1, color: GENERATION.genX },
  { name: "Baby Boomer", periode: "(≤1964)", pct: "4,1%", jumlah: "129", share: 4.1, color: GENERATION.babyBoomer },
];

/* ── Heatmap unit kerja ──────────────────────────────────── */

/** level per region peta: 1 Sumatra, 2 Kalimantan, 3 Jawa/Nusa, 4 Sulawesi, 5 Papua/Maluku */
export const heatLevelByRegion: Record<number, "tinggi" | "sedang" | "rendah"> = {
  1: "tinggi",
  2: "tinggi",
  3: "sedang",
  4: "rendah",
  5: "sedang",
};

export const HEAT_COLOR = {
  tinggi: SEMANTIC.good,
  sedang: SEMANTIC.warn,
  rendah: SEMANTIC.bad,
};

/** Nama & jumlah talenta per region + posisi chip (persen area peta). */
export const heatRegions = [
  { region: 1, name: "Sumatra", jumlah: 486, x: 13, y: 34 },
  { region: 2, name: "Kalimantan", jumlah: 312, x: 40, y: 36 },
  { region: 3, name: "Jawa & Nusa Tenggara", jumlah: 176, x: 32, y: 80 },
  { region: 4, name: "Sulawesi", jumlah: 86, x: 58, y: 47 },
  { region: 5, name: "Papua & Maluku", jumlah: 124, x: 86, y: 58 },
];

export const heatLegend = [
  { label: "Tinggi (> 200)", level: "tinggi" as const },
  { label: "Sedang (101 - 200)", level: "sedang" as const },
  { label: "Rendah (≤ 100)", level: "rendah" as const },
];

/* ── Capability distribution ─────────────────────────────── */

/** pct = kondisi saat ini; target = sasaran 2026 (overlay radar). */
export const capability = [
  { label: "Leadership", pct: 82, target: 90 },
  { label: "Strategic Thinking", pct: 76, target: 85 },
  { label: "People Management", pct: 72, target: 80 },
  { label: "Digital Acumen", pct: 68, target: 85 },
  { label: "Innovation", pct: 65, target: 75 },
  { label: "Change Management", pct: 63, target: 75 },
];

/* ── Rail kanan ──────────────────────────────────────────── */

export const topPotential = [
  { nama: "Andi Pratama", jabatan: "Direktur Operasional", skor: "9.6", seed: 3 },
  { nama: "Dewi Lestari", jabatan: "GM Perkebunan", skor: "9.4", seed: 11 },
  { nama: "Budi Santoso", jabatan: "GM Pabrik Kelapa Sawit", skor: "9.2", seed: 5 },
  { nama: "Rina Fitriani", jabatan: "GM Keuangan", skor: "9.1", seed: 14 },
  { nama: "Ahmad Fauzi", jabatan: "GM SDM & Umum", skor: "9.0", seed: 7 },
];

export const retentionRisk = [
  { nama: "Irfan Maulana", jabatan: "Manager IT", risk: "85%", seed: 4 },
  { nama: "Siti Aisyah", jabatan: "Senior Analyst", risk: "76%", seed: 13 },
  { nama: "Yudha Prasetyo", jabatan: "Asisten Manager", risk: "75%", seed: 8 },
  { nama: "Maya Sari", jabatan: "Supervisor Keuangan", risk: "73%", seed: 15 },
  { nama: "Taufik Hidayat", jabatan: "Engineer", risk: "72%", seed: 6 },
];

export const insightAi = [
  "Talenta dengan potensi tinggi di divisi Perkebunan meningkat 12%.",
  "Retention risk tertinggi ditemukan pada kelompok usia < 30 tahun.",
  "Program leadership development berkontribusi pada peningkatan talent ready.",
];

/* ── Tabel talenta kritis ────────────────────────────────── */

export type Readiness = "Ready Now" | "Ready In 1-2 Thn";
export type RiskLevel = "Low" | "Medium" | "High";

export const talentaKritis: {
  posisi: string;
  unit: string;
  saatIni: string;
  readiness: Readiness;
  suksesor: { nama: string; seed: number }[];
  readyNow: number;
  ready12: number;
  risk: RiskLevel;
}[] = [
  {
    posisi: "Direktur Operasional",
    unit: "Holding",
    saatIni: "Andi Pratama",
    readiness: "Ready Now",
    suksesor: [
      { nama: "Dewi Lestari", seed: 11 },
      { nama: "Budi Santoso", seed: 5 },
    ],
    readyNow: 1,
    ready12: 1,
    risk: "Low",
  },
  {
    posisi: "GM Perkebunan",
    unit: "Regional 1",
    saatIni: "Dewi Lestari",
    readiness: "Ready Now",
    suksesor: [
      { nama: "Rina Fitriani", seed: 14 },
      { nama: "Yoga Pratama", seed: 2 },
    ],
    readyNow: 1,
    ready12: 1,
    risk: "Low",
  },
  {
    posisi: "GM Pabrik Kelapa Sawit",
    unit: "Regional 2",
    saatIni: "Budi Santoso",
    readiness: "Ready In 1-2 Thn",
    suksesor: [
      { nama: "Ahmad Fauzi", seed: 7 },
      { nama: "Indra Wijaya", seed: 12 },
    ],
    readyNow: 0,
    ready12: 1,
    risk: "Medium",
  },
  {
    posisi: "Kepala Bagian Keuangan",
    unit: "Holding",
    saatIni: "Rina Fitriani",
    readiness: "Ready In 1-2 Thn",
    suksesor: [
      { nama: "Siti Aisyah", seed: 13 },
      { nama: "Dimas Saputra", seed: 10 },
    ],
    readyNow: 0,
    ready12: 1,
    risk: "Medium",
  },
  {
    posisi: "Kepala Bagian SDM",
    unit: "Holding",
    saatIni: "Ahmad Fauzi",
    readiness: "Ready In 1-2 Thn",
    suksesor: [
      { nama: "Taufik Hidayat", seed: 6 },
      { nama: "Maya Sari", seed: 15 },
    ],
    readyNow: 0,
    ready12: 1,
    risk: "Medium",
  },
];

/** Kelas chip tone (globals.css) — aman dark mode. */
export const READINESS_STYLE: Record<Readiness, string> = {
  "Ready Now": "tone-green",
  "Ready In 1-2 Thn": "tone-amber",
};

export const RISKLEVEL_STYLE: Record<RiskLevel, string> = {
  Low: "tone-green",
  Medium: "tone-amber",
  High: "tone-red",
};

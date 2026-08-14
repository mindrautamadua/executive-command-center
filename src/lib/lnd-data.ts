import type { Trend } from "./data";
import { GENERATION, PALETTE, SEQ_BLUE, SEQ_GREEN } from "./chart-palette";
import type { ChipTone } from "@/components/ui/KpiCard";

/* ── KPI strip ───────────────────────────────────────────── */

export interface LndKpi {
  label: string;
  value: string;
  delta: string;
  trend: Trend;
  compare: string;
  icon: "jam" | "peserta" | "program" | "completion" | "rata" | "investasi";
  tone: ChipTone;
  line: string;
  series: number[];
}

export const lndKpi: LndKpi[] = [
  {
    label: "Total Jam Pelatihan",
    value: "125.430 Jam",
    delta: "16,4%",
    trend: "up",
    compare: "vs Q1 2025",
    icon: "jam",
    tone: "blue",
    line: PALETTE.blue,
    series: [30, 36, 33, 40, 35, 43, 38, 46, 41, 48, 44, 52, 47, 55, 59],
  },
  {
    label: "Total Peserta",
    value: "29.842",
    delta: "12,7%",
    trend: "up",
    compare: "vs Q1 2025",
    icon: "peserta",
    tone: "green",
    line: PALETTE.green,
    series: [28, 34, 31, 38, 34, 42, 37, 45, 40, 48, 43, 51, 46, 54, 57],
  },
  {
    label: "Program Diselenggarakan",
    value: "248",
    delta: "15,0%",
    trend: "up",
    compare: "vs Q1 2025",
    icon: "program",
    tone: "purple",
    line: PALETTE.purple,
    series: [32, 38, 30, 41, 36, 44, 38, 47, 42, 49, 45, 53, 48, 56, 60],
  },
  {
    label: "Completion Rate",
    value: "92,1%",
    delta: "3,6%",
    trend: "up",
    compare: "vs Q1 2025",
    icon: "completion",
    tone: "amber",
    line: PALETTE.amber,
    series: [34, 39, 35, 43, 38, 45, 40, 48, 43, 50, 46, 54, 49, 56, 58],
  },
  {
    label: "Rata-rata Jam / Karyawan",
    value: "17,9 Jam",
    delta: "2,1 Jam",
    trend: "up",
    compare: "vs Q1 2025",
    icon: "rata",
    tone: "teal",
    line: PALETTE.teal,
    series: [29, 35, 32, 39, 35, 42, 38, 46, 41, 49, 44, 52, 47, 55, 58],
  },
  {
    label: "Training Investment",
    value: "Rp 24,8 M",
    delta: "8,9%",
    trend: "up",
    compare: "vs Q1 2025",
    icon: "investasi",
    tone: "blue",
    line: PALETTE.blue,
    series: [31, 37, 33, 40, 36, 44, 39, 46, 42, 50, 45, 53, 48, 55, 59],
  },
];

/* ── Distribusi jam pelatihan per kompetensi ─────────────── */

export interface DonutSlice {
  name: string;
  jam: string;
  pct: string;
  share: number;
  color: string;
}

export const distribusiKompetensi: DonutSlice[] = [
  { name: "Leadership", jam: "22.350", pct: "17,8%", share: 17.8, color: PALETTE.blue },
  { name: "Technical", jam: "31.280", pct: "24,9%", share: 24.9, color: PALETTE.green },
  { name: "Operational", jam: "27.450", pct: "21,9%", share: 21.9, color: PALETTE.amber },
  { name: "Soft Skill", jam: "23.180", pct: "18,5%", share: 18.5, color: PALETTE.purple },
  // Compliance netral (merah hanya untuk alert)
  { name: "Compliance", jam: "13.170", pct: "10,5%", share: 10.5, color: PALETTE.slate },
  { name: "Lainnya", jam: "7.000", pct: "5,6%", share: 5.6, color: PALETTE.teal },
];

/* ── Tren jam pelatihan ──────────────────────────────────── */

export const trenJamPelatihan = [
  { name: "Jan 2025", value: 78540 },
  { name: "Feb 2025", value: 85210 },
  { name: "Mar 2025", value: 90120 },
  { name: "Apr 2025", value: 106230 },
  { name: "Mei 2025", value: 112450 },
  { name: "Jun 2025", value: 125430 },
];

/* ── Top 5 program berdasarkan partisipasi ───────────────── */

export interface ProgramBar {
  nama: string;
  peserta: string;
  value: number;
  color: string;
}

// Ramp biru satu-hue sesuai peringkat (1 = paling pekat)
export const topProgram: ProgramBar[] = [
  { nama: "Leadership Excellence Program", peserta: "4.892", value: 4892, color: SEQ_BLUE[4] },
  { nama: "Digital Transformation Academy", peserta: "3.742", value: 3742, color: SEQ_BLUE[3] },
  { nama: "Operational Excellence Training", peserta: "3.210", value: 3210, color: SEQ_BLUE[2] },
  { nama: "Supervisor Development Program", peserta: "2.845", value: 2845, color: SEQ_BLUE[1] },
  { nama: "Safety & Compliance Training", peserta: "2.156", value: 2156, color: SEQ_BLUE[0] },
];

/* ── Program berdasarkan tipe ────────────────────────────── */

export interface TipeSlice {
  name: string;
  jumlah: number;
  pct: string;
  share: number;
  color: string;
}

export const programTipe: TipeSlice[] = [
  { name: "Classroom", jumlah: 86, pct: "34,7%", share: 34.7, color: PALETTE.blue },
  { name: "E-Learning", jumlah: 78, pct: "31,5%", share: 31.5, color: PALETTE.green },
  { name: "Blended", jumlah: 52, pct: "21,0%", share: 21.0, color: PALETTE.amber },
  { name: "Webinar", jumlah: 20, pct: "8,1%", share: 8.1, color: PALETTE.purple },
  { name: "Lainnya", jumlah: 12, pct: "4,7%", share: 4.7, color: PALETTE.slate },
];

/* ── Capaian pembelajaran (Kirkpatrick) ──────────────────── */

export interface KirkpatrickLevel {
  level: string;
  aspek: string;
  pct: number;
  status: string;
  color: string;
}

// Funnel berurutan L1→L4; ramp hijau satu-hue (pekat → pucat)
export const kirkpatrick: KirkpatrickLevel[] = [
  { level: "Level 1", aspek: "Reaksi", pct: 96, status: "Sangat Baik", color: SEQ_GREEN[4] },
  { level: "Level 2", aspek: "Pembelajaran", pct: 89, status: "Baik", color: SEQ_GREEN[3] },
  { level: "Level 3", aspek: "Perilaku", pct: 76, status: "Baik", color: SEQ_GREEN[2] },
  { level: "Level 4", aspek: "Hasil", pct: 62, status: "Cukup Baik", color: SEQ_GREEN[1] },
];

/* ── Partisipasi berdasarkan generasi ────────────────────── */

export interface GenerasiItem {
  nama: string;
  rentang: string;
  pct: string;
  share: number;
  color: string;
}

export const partisipasiGenerasi: GenerasiItem[] = [
  { nama: "Gen Z", rentang: "(1997-2012)", pct: "15,2%", share: 15.2, color: GENERATION.genZ },
  { nama: "Milenial", rentang: "(1981-1996)", pct: "58,7%", share: 58.7, color: GENERATION.millennial },
  { nama: "Gen X", rentang: "(1965-1980)", pct: "23,8%", share: 23.8, color: GENERATION.genX },
  { nama: "Baby Boomer", rentang: "(1946-1964)", pct: "2,3%", share: 2.3, color: GENERATION.babyBoomer },
];

/** Ring jam belajar per karyawan vs target tahunan. */
export const jamPerKaryawan = {
  value: 17.9,
  label: "17,9",
  target: 20,
  targetLabel: "dari target 20 Jam",
};

/* ── Heatmap partisipasi per unit organisasi ─────────────── */

export const heatmapBulan = [
  "Jan 2025",
  "Feb 2025",
  "Mar 2025",
  "Apr 2025",
  "Mei 2025",
  "Jun 2025",
];

export interface HeatmapRow {
  unit: string;
  nilai: number[];
  rata: string;
  /** headcount unit — dipakai menghitung estimasi peserta per sel */
  karyawan: number;
}

export const heatmapUnit: HeatmapRow[] = [
  { unit: "PTPN I", nilai: [78, 82, 85, 87, 89, 90], rata: "85,2%", karyawan: 9820 },
  { unit: "PTPN II", nilai: [75, 79, 83, 84, 85, 88], rata: "82,3%", karyawan: 8460 },
  { unit: "PTPN III (Persero)", nilai: [80, 83, 86, 90, 92, 93], rata: "87,3%", karyawan: 12340 },
  { unit: "PTPN IV", nilai: [72, 76, 78, 80, 83, 85], rata: "79,0%", karyawan: 10150 },
  { unit: "PTPN V", nilai: [68, 71, 74, 75, 78, 81], rata: "74,5%", karyawan: 7630 },
  { unit: "Holding & Support Co", nilai: [81, 84, 87, 88, 90, 91], rata: "86,8%", karyawan: 3210 },
];

/** Skala hijau untuk sel heatmap: 0% (pucat) → 100% (pekat). */
export function heatColor(pct: number) {
  const stops = [
    { at: 60, bg: "#eaf7ef", fg: "#4b6b58" },
    { at: 70, bg: "#d6efe0", fg: "#2f6b48" },
    { at: 80, bg: "#b6e3c8", fg: "#215f3c" },
    { at: 88, bg: "#8ed4ac", fg: "#14532d" },
    { at: 101, bg: "#5ec18c", fg: "#0f3f22" },
  ];
  return stops.find((s) => pct < s.at) ?? stops[stops.length - 1];
}

/* ── Top 5 instruktur ────────────────────────────────────── */

export interface Instruktur {
  nama: string;
  bidang: string;
  rating: string;
  peserta: string;
}

export const topInstruktur: Instruktur[] = [
  { nama: "Dr. Andi Pratama", bidang: "Leadership Expert", rating: "4.9", peserta: "1.245" },
  { nama: "Dewi Lestari, M.M.", bidang: "Digital Transformation", rating: "4.8", peserta: "1.102" },
  { nama: "Budi Santoso", bidang: "Operational Excellence", rating: "4.8", peserta: "978" },
  { nama: "Rina Fitriani", bidang: "HR & People Development", rating: "4.7", peserta: "854" },
  { nama: "Ahmad Fauzi", bidang: "Safety & Compliance", rating: "4.7", peserta: "756" },
];

/* ── Insight & rekomendasi AI ────────────────────────────── */

export interface LndInsight {
  isi: string;
  tone: "info" | "success" | "warning" | "neutral";
}

export const lndInsight: LndInsight[] = [
  {
    isi: "Partisipasi pelatihan meningkat 12,7% dibanding Q1 2025. Pertahankan momentum ini!",
    tone: "info",
  },
  {
    isi: "Program Leadership memiliki completion rate tertinggi (95%). Pertimbangkan untuk memperluas program serupa.",
    tone: "success",
  },
  {
    isi: "Unit PTPN V menunjukkan partisipasi terendah (74,5%). Disarankan untuk kampanye awareness di unit tersebut.",
    tone: "warning",
  },
  {
    isi: "Rata-rata jam pelatihan per karyawan baru mencapai 17,9 jam. Target tahunan 20 jam/karyawan masih on track.",
    tone: "neutral",
  },
];

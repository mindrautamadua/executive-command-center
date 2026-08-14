import type { Trend } from "./data";
import type { ChipTone } from "@/components/ui/KpiCard";
import { PALETTE, READINESS, SEMANTIC } from "./chart-palette";

/* ── KPI strip ───────────────────────────────────────────── */

export interface SuksesiKpi {
  label: string;
  value: string;
  /** Delta dengan panah naik/turun. */
  delta?: string;
  trend?: Trend;
  /** "good" untuk metrik yang bagus saat turun (mis. risiko kekosongan). */
  deltaTone?: "good" | "bad";
  /** Angka pendamping tanpa panah (mis. porsi terhadap posisi kritis). */
  extra?: string;
  compare: string;
  icon: "kritis" | "siap" | "pool" | "bench" | "setahun" | "risiko";
  tone: ChipTone;
  line: string;
  series: number[];
}

export const suksesiKpi: SuksesiKpi[] = [
  {
    label: "Posisi Kritis",
    value: "212",
    delta: "3,4%",
    trend: "up",
    compare: "vs Q1 2025: 205",
    icon: "kritis",
    tone: "blue",
    line: PALETTE.blue,
    series: [30, 35, 32, 38, 34, 41, 37, 44, 40, 46, 43, 49, 45, 52, 55],
  },
  {
    label: "Posisi dengan Kandidat Siap",
    value: "158",
    extra: "74,5%",
    compare: "vs Q1 2025: 71,2%",
    icon: "siap",
    tone: "green",
    line: PALETTE.green,
    series: [29, 34, 31, 37, 34, 40, 36, 43, 39, 45, 42, 48, 44, 50, 53],
  },
  {
    label: "Talent Pool (High Potential)",
    value: "1.245",
    delta: "5,5%",
    trend: "up",
    compare: "vs Q1 2025: 1.180",
    icon: "pool",
    tone: "purple",
    line: PALETTE.purple,
    series: [31, 36, 33, 40, 36, 43, 39, 46, 42, 49, 45, 51, 47, 54, 58],
  },
  {
    label: "Bench Strength (Rata-rata)",
    value: "1,6",
    delta: "0,1",
    trend: "up",
    compare: "vs Q1 2025: 1,5",
    icon: "bench",
    tone: "amber",
    line: PALETTE.amber,
    series: [33, 37, 34, 40, 37, 42, 39, 44, 41, 46, 43, 48, 45, 50, 52],
  },
  {
    label: "Siap dalam 1 Tahun",
    value: "64",
    extra: "30,2%",
    compare: "vs Q1 2025: 28,3%",
    icon: "setahun",
    tone: "teal",
    line: PALETTE.teal,
    series: [30, 35, 32, 39, 35, 41, 38, 44, 40, 47, 43, 49, 46, 52, 54],
  },
  {
    label: "Risiko Kekosongan",
    value: "54",
    delta: "25,5%",
    trend: "down",
    deltaTone: "good",
    compare: "vs Q1 2025: 28,8%",
    icon: "risiko",
    tone: "red",
    line: PALETTE.red,
    series: [52, 48, 51, 45, 49, 44, 47, 42, 45, 41, 44, 39, 42, 38, 36],
  },
];

/* ── Peta suksesi: 9 box talent grid ─────────────────────── */

/**
 * Jumlah karyawan per sel, urutan kanonik shared/NineBoxGrid
 * (baris atas = potensi tinggi; kolom kanan = kinerja tinggi).
 * Total = 1.245 karyawan yang dinilai.
 */
export const nineBox: number[] = [88, 247, 307, 115, 211, 160, 39, 50, 28];

/* ── Posisi kritis dengan risiko kekosongan ──────────────── */

export type RiskLevel = "Tinggi" | "Sedang" | "Rendah";

export interface PosisiKritis {
  posisi: string;
  unit: string;
  risk: RiskLevel;
  bench: string;
  /** Nilai numerik bench strength — untuk bar mini vs target 1,0. */
  benchVal: number;
  kandidat: number;
}

export const posisiKritis: PosisiKritis[] = [
  { posisi: "Direktur Operasional", unit: "PTPN III (Persero)", risk: "Tinggi", bench: "0,5", benchVal: 0.5, kandidat: 0 },
  { posisi: "VP Agronomi", unit: "PTPN IV", risk: "Tinggi", bench: "0,7", benchVal: 0.7, kandidat: 1 },
  { posisi: "VP Keuangan", unit: "Holding & Supporting Co", risk: "Tinggi", bench: "0,8", benchVal: 0.8, kandidat: 0 },
  { posisi: "Kepala Kebun", unit: "PTPN V", risk: "Tinggi", bench: "0,9", benchVal: 0.9, kandidat: 2 },
  { posisi: "VP Supply Chain", unit: "PTPN II", risk: "Sedang", bench: "1,0", benchVal: 1.0, kandidat: 1 },
  { posisi: "VP Human Capital", unit: "PTPN III (Persero)", risk: "Sedang", bench: "1,2", benchVal: 1.2, kandidat: 2 },
  { posisi: "VP Engineering", unit: "PalmCo", risk: "Sedang", bench: "1,3", benchVal: 1.3, kandidat: 1 },
  { posisi: "Kepala Pabrik", unit: "PTPN IV", risk: "Sedang", bench: "1,4", benchVal: 1.4, kandidat: 2 },
  { posisi: "VP IT & Digital", unit: "Holding & Supporting Co", risk: "Sedang", bench: "1,5", benchVal: 1.5, kandidat: 2 },
  { posisi: "Kepala Unit Usaha", unit: "PTPN I", risk: "Sedang", bench: "1,6", benchVal: 1.6, kandidat: 2 },
];

/** Kelas chip tone (globals.css) — aman dark mode. */
export const RISK_STYLE: Record<RiskLevel, string> = {
  Tinggi: "tone-red",
  Sedang: "tone-amber",
  Rendah: "tone-green",
};

/* ── Pipeline kepemimpinan per level ─────────────────────── */

export const kesiapanSeri = [
  { key: "s1", nama: "Siap < 1 Tahun", color: READINESS[0] },
  { key: "s2", nama: "Siap 1-2 Tahun", color: READINESS[1] },
  { key: "s3", nama: "Siap 2-3 Tahun", color: READINESS[2] },
  { key: "s4", nama: "> 3 Tahun", color: READINESS[3] },
] as const;

export interface PipelineRow {
  level: string;
  /** [< 1 th, 1-2 th, 2-3 th, > 3 th] */
  nilai: [number, number, number, number];
  total: number;
}

export const pipelineLevel: PipelineRow[] = [
  { level: "Board Level", nilai: [2, 3, 4, 6], total: 15 },
  { level: "Direktur", nilai: [6, 7, 10, 12], total: 35 },
  { level: "VP", nilai: [11, 17, 22, 20], total: 70 },
  { level: "Manager", nilai: [26, 44, 55, 38], total: 163 },
  { level: "Supervisor", nilai: [19, 31, 41, 26], total: 117 },
];

export const pipelineTotal = { nilai: [64, 102, 132, 102], total: 400 };

/** Total terbesar antar level — dipakai sebagai skala lebar bar. */
export const pipelineMax = Math.max(...pipelineLevel.map((r) => r.total));

/* ── Talent pool berdasarkan fungsi ──────────────────────── */

export interface PoolSlice {
  name: string;
  jumlah: number;
  pct: string;
  share: number;
  color: string;
}

export const talentPoolFungsi: PoolSlice[] = [
  { name: "Operasional", jumlah: 388, pct: "31,2%", share: 31.2, color: PALETTE.blue },
  { name: "Keuangan", jumlah: 204, pct: "16,4%", share: 16.4, color: PALETTE.green },
  { name: "Komersial", jumlah: 187, pct: "15,0%", share: 15.0, color: PALETTE.amber },
  { name: "Teknologi & Digital", jumlah: 129, pct: "10,4%", share: 10.4, color: PALETTE.purple },
  { name: "SDM & Umum", jumlah: 119, pct: "9,6%", share: 9.6, color: PALETTE.teal },
  { name: "Lainnya", jumlah: 218, pct: "17,4%", share: 17.4, color: PALETTE.slate },
];

/* ── Tren bench strength ─────────────────────────────────── */

export const trenBenchStrength = [
  { name: "Jan 2025", value: 1.2 },
  { name: "Feb 2025", value: 1.3 },
  { name: "Mar 2025", value: 1.4 },
  { name: "Apr 2025", value: 1.5 },
  { name: "Mei 2025", value: 1.5 },
  { name: "Jun 2025", value: 1.6 },
];

/* ── Distribusi kesiapan kandidat ────────────────────────── */

export const distribusiKesiapan: PoolSlice[] = [
  { name: "Siap < 1 Tahun", jumlah: 64, pct: "16,0%", share: 16.0, color: READINESS[0] },
  { name: "Siap 1-2 Tahun", jumlah: 102, pct: "25,5%", share: 25.5, color: READINESS[1] },
  { name: "Siap 2-3 Tahun", jumlah: 132, pct: "33,0%", share: 33.0, color: READINESS[2] },
  { name: "> 3 Tahun", jumlah: 102, pct: "25,5%", share: 25.5, color: READINESS[3] },
];

export const totalKandidat = "400";

/* ── Rencana aksi suksesi ────────────────────────────────── */

export interface AksiRow {
  inisiatif: string;
  deskripsi: string;
  target: string;
  progress: number;
  status: "Hampir Selesai" | "Berjalan";
  /** Kesehatan progres — menentukan warna bar. */
  kesehatan: "on-track" | "at-risk" | "behind";
}

export const rencanaAksi: AksiRow[] = [
  {
    inisiatif: "Identifikasi Talent Kritis",
    deskripsi: "Identifikasi talent untuk posisi kritis",
    target: "100%",
    progress: 95,
    status: "Hampir Selesai",
    kesehatan: "on-track",
  },
  {
    inisiatif: "Pengembangan Talent",
    deskripsi: "Program pengembangan kepemimpinan",
    target: "300 orang",
    progress: 78,
    status: "Berjalan",
    kesehatan: "on-track",
  },
  {
    inisiatif: "Job Rotation",
    deskripsi: "Rotasi untuk expose pengalaman",
    target: "150 orang",
    progress: 62,
    status: "Berjalan",
    kesehatan: "at-risk",
  },
  {
    inisiatif: "Mentoring Program",
    deskripsi: "Program mentoring untuk talent potensial",
    target: "200 orang",
    progress: 62,
    status: "Berjalan",
    kesehatan: "behind",
  },
  {
    inisiatif: "Assessment Center",
    deskripsi: "Penilaian kompetensi & potensi",
    target: "400 orang",
    progress: 80,
    status: "Berjalan",
    kesehatan: "on-track",
  },
];

/** Kelas chip tone status (globals.css) — aman dark mode. */
export const STATUS_STYLE: Record<AksiRow["status"], string> = {
  "Hampir Selesai": "tone-green",
  Berjalan: "tone-blue",
};

/** Warna bar progres per kesehatan progres. */
export const KESEHATAN_COLOR: Record<AksiRow["kesehatan"], string> = {
  "on-track": SEMANTIC.good,
  "at-risk": SEMANTIC.warn,
  behind: SEMANTIC.bad,
};

/* ── Kandidat siap sekarang ──────────────────────────────── */

export interface KandidatSiap {
  posisi: string;
  unit: string;
  jumlah: number;
  seed: number;
}

export const kandidatSiap: KandidatSiap[] = [
  { posisi: "Direktur Operasional", unit: "PTPN III (Persero)", jumlah: 2, seed: 4 },
  { posisi: "VP Keuangan", unit: "Holding & Supporting Co", jumlah: 2, seed: 7 },
  { posisi: "Kepala Kebun", unit: "PTPN IV", jumlah: 3, seed: 2 },
  { posisi: "VP Human Capital", unit: "PTPN III (Persero)", jumlah: 2, seed: 9 },
  { posisi: "VP Supply Chain", unit: "PTPN II", jumlah: 2, seed: 6 },
];

/* ── Insight & rekomendasi AI ────────────────────────────── */

export interface SuksesiInsight {
  isi: string;
  tone: "danger" | "warning" | "success" | "info";
}

export const suksesiInsight: SuksesiInsight[] = [
  {
    isi: "Risiko kekosongan posisi Direktur Operasional sangat tinggi. Disarankan percepatan pengembangan kandidat internal.",
    tone: "danger",
  },
  {
    isi: "Bench Strength di level Direksi masih rendah (0,6). Fokus pada pengembangan talent potensial.",
    tone: "warning",
  },
  {
    isi: "High Potential Talent meningkat 5,5% dibanding Q1 2025. Pertahankan momentum identifikasi talent.",
    tone: "success",
  },
  {
    isi: "Disarankan memperluas program job rotation untuk mempercepat kesiapan kandidat.",
    tone: "info",
  },
];

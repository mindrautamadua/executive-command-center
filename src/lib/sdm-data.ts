import type { Trend } from "./data";
import type { ChipTone } from "@/components/ui/KpiCard";
import { GENDER, GENERATION, PALETTE, SEMANTIC } from "./chart-palette";

/* ── KPI strip ───────────────────────────────────────────── */

export interface SdmKpi {
  label: string;
  value: string;
  delta: string;
  trend: Trend;
  /** "good" untuk metrik yang bagus saat turun (mis. turnover). */
  deltaTone?: "good" | "bad";
  compare: string;
  icon: "users" | "smile" | "cycle" | "userCheck" | "diversity" | "wallet";
  tone: ChipTone;
  line: string;
  series: number[];
}

export const sdmKpi: SdmKpi[] = [
  {
    label: "Total Karyawan",
    value: "70.142",
    delta: "2,15%",
    trend: "up",
    compare: "vs Des 2024: 68.862",
    icon: "users",
    tone: "blue",
    line: PALETTE.blue,
    series: [30, 34, 31, 38, 35, 41, 39, 45, 42, 48, 44, 51, 47, 54, 58],
  },
  {
    label: "Engagement Score",
    value: "4,21 / 5",
    delta: "0,18",
    trend: "up",
    compare: "vs Des 2024: 4,03",
    icon: "smile",
    tone: "green",
    line: PALETTE.green,
    series: [28, 32, 29, 36, 33, 40, 37, 43, 40, 47, 44, 50, 48, 55, 59],
  },
  {
    label: "Turnover Rate",
    value: "2,45%",
    delta: "-0,35%",
    trend: "down",
    deltaTone: "good",
    compare: "vs Des 2024: 2,80%",
    icon: "cycle",
    tone: "purple",
    line: PALETTE.purple,
    series: [52, 47, 55, 44, 50, 41, 47, 38, 45, 36, 42, 33, 40, 31, 34],
  },
  {
    label: "Talent Readiness",
    value: "68%",
    delta: "5%",
    trend: "up",
    compare: "vs Des 2024: 63%",
    icon: "userCheck",
    tone: "amber",
    line: PALETTE.amber,
    series: [34, 40, 33, 44, 38, 48, 41, 51, 45, 54, 48, 57, 52, 59, 62],
  },
  {
    label: "Diversity Ratio",
    value: "37%",
    delta: "2%",
    trend: "up",
    compare: "vs Des 2024: 35%",
    icon: "diversity",
    tone: "teal",
    line: PALETTE.teal,
    series: [36, 41, 35, 44, 39, 47, 42, 49, 44, 52, 47, 54, 50, 56, 58],
  },
  {
    label: "Biaya SDM",
    value: "Rp 8,43 T",
    delta: "4,12%",
    trend: "up",
    compare: "vs Des 2024: Rp 8,10 T",
    icon: "wallet",
    tone: "slate",
    line: PALETTE.slate,
    series: [38, 44, 36, 47, 40, 50, 43, 53, 46, 55, 49, 57, 52, 59, 61],
  },
];

/* ── Distribusi karyawan ─────────────────────────────────── */

export const distribusiUnit = [
  { name: "Perkebunan", value: 45642, pct: "65,0%", color: PALETTE.green },
  { name: "Pabrik", value: 12980, pct: "18,5%", color: PALETTE.blue },
  { name: "Kantor & Support", value: 7456, pct: "10,6%", color: PALETTE.amber },
  { name: "Perdagangan & Lainnya", value: 4064, pct: "5,9%", color: PALETTE.purple },
];

/* ── Headcount trend ─────────────────────────────────────── */

const BULAN = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];

export const headcountTrend = [
  62100, 63400, 64800, 66000, 66900, 67500, 68000, 68400, 68900, 69300, 69700, 70142,
].map((v, i) => ({ name: BULAN[i], value: v }));

/* ── Komposisi generasi ──────────────────────────────────── */

export const generasi = [
  { name: "Milenial", periode: "(1981–1996)", value: 30156, pct: "42,9%", share: 42.9, color: GENERATION.millennial },
  { name: "Gen X", periode: "(1965–1980)", value: 20987, pct: "29,9%", share: 29.9, color: GENERATION.genX },
  { name: "Gen Z", periode: "(1997–2012)", value: 12254, pct: "17,4%", share: 17.4, color: GENERATION.genZ },
  { name: "Baby Boomer", periode: "(≤1964)", value: 6745, pct: "9,6%", share: 9.6, color: GENERATION.babyBoomer },
];

/* ── Talenta utama ───────────────────────────────────────── */

export const talenta = [
  { nama: "Andi Pratama", jabatan: "Direktur Operasional", skor: "9.2", seed: 3 },
  { nama: "Dewi Lestari", jabatan: "GM Perkebunan", skor: "8.8", seed: 11 },
  { nama: "Budi Santoso", jabatan: "GM Pabrik Kelapa Sawit", skor: "8.6", seed: 5 },
  { nama: "Rina Fitriani", jabatan: "GM Keuangan", skor: "8.4", seed: 14 },
  { nama: "Ahmad Fauzi", jabatan: "GM SDM & Umum", skor: "8.3", seed: 7 },
];

/* ── Kinerja karyawan ────────────────────────────────────── */

export const ratingKinerja = [
  { label: "Outstanding", range: "(4.51 - 5.00)", pct: 16, color: PALETTE.green },
  { label: "Above Target", range: "(3.51 - 4.50)", pct: 43, color: PALETTE.blue },
  { label: "On Target", range: "(2.51 - 3.50)", pct: 31, color: SEMANTIC.goodSoft },
  { label: "Below Target", range: "(1.51 - 2.50)", pct: 8, color: SEMANTIC.warn },
  { label: "Poor", range: "(≤ 1.50)", pct: 2, color: SEMANTIC.bad },
];

/* ── Rekrutmen ───────────────────────────────────────────── */

export const rekrutmenAtas = [
  { label: "Total Hire", value: "2.145", delta: "18,7% vs 2024", trend: "up" as Trend },
  { label: "Time to Fill", value: "32 Hari", delta: "-6 Hari vs 2024", trend: "down" as Trend, deltaTone: "good" as const },
];

export const rekrutmenBawah: {
  label: string;
  value: string;
  delta?: string;
  trend?: Trend;
  sub?: string;
}[] = [
  { label: "Offer Acceptance", value: "89%", delta: "4,5% vs 2024", trend: "up" },
  { label: "Sumber Hire Terbanyak", value: "Internal", sub: "42%" },
];

/* ── Learning & Development ──────────────────────────────── */

export const lndAtas = [
  { label: "Total Jam Pelatihan", value: "125.430", delta: "16,4% vs 2024", trend: "up" as Trend },
  { label: "Rata-rata Jam / Karyawan", value: "17,9 Jam", delta: "2,1 Jam vs 2024", trend: "up" as Trend },
];

export const lndBawah = [
  { label: "Program Aktif", value: "48", delta: "8 vs 2024", trend: "up" as Trend },
  { label: "Completion Rate", value: "92%", delta: "5% vs 2024", trend: "up" as Trend },
];

/* ── Employee engagement ─────────────────────────────────── */

export const dimensiEngagement = [
  { label: "Pride", value: 4.35 },
  { label: "Advocacy", value: 4.18 },
  { label: "Satisfaction", value: 4.21 },
  { label: "Motivation", value: 4.15 },
  { label: "Well-being", value: 4.0 },
];

/* ── Rasio gender ────────────────────────────────────────── */

export const gender = {
  pria: { pct: "61,3%", jumlah: "43.021", share: 61.3, color: GENDER.lakiLaki },
  wanita: { pct: "38,7%", jumlah: "27.121", share: 38.7, color: GENDER.perempuan },
};

/* ── Suksesi posisi kritis ───────────────────────────────── */

export interface SuksesiRow {
  posisi: string;
  jumlah: number;
  /** Jumlah suksesor per horizon kesiapan: [Ready Now, 1-2 thn, 3+ thn]. */
  kesiapan: [number, number, number];
  risk: "Tinggi" | "Sedang" | "Rendah";
}

export const suksesi: SuksesiRow[] = [
  { posisi: "Direktur", jumlah: 12, kesiapan: [4, 5, 3], risk: "Tinggi" },
  { posisi: "General Manager", jumlah: 45, kesiapan: [18, 17, 10], risk: "Sedang" },
  { posisi: "Manager", jumlah: 120, kesiapan: [48, 50, 22], risk: "Rendah" },
];

/** Kelas chip tone (globals.css) — aman dark mode, gantikan inline style. */
export const RISK_STYLE: Record<SuksesiRow["risk"], string> = {
  Tinggi: "tone-red",
  Sedang: "tone-amber",
  Rendah: "tone-green",
};

/* ── Workforce planning ──────────────────────────────────── */

/** 2023-2025 aktual; 2026-2028 proyeksi (digambar putus-putus). */
export const workforce: { name: string; aktual?: number; proyeksi?: number }[] = [
  { name: "2023", aktual: 66480 },
  { name: "2024", aktual: 68862 },
  { name: "2025", aktual: 70142, proyeksi: 70142 },
  { name: "2026", proyeksi: 73200 },
  { name: "2027", proyeksi: 76500 },
  { name: "2028", proyeksi: 79800 },
];

/* ── Alert & notifikasi ──────────────────────────────────── */

export const sdmAlerts = [
  {
    tone: "danger" as const,
    time: "08:30",
    title: "Risiko Turnover Tinggi",
    desc: "Divisi Pabrik Kelapa Sawit memiliki risiko turnover di atas ambang batas",
  },
  {
    tone: "warning" as const,
    time: "07:45",
    title: "Evaluasi Probation",
    desc: "23 karyawan akan selesai masa probation dalam 30 hari ke depan",
  },
  {
    tone: "info" as const,
    time: "06:15",
    title: "Review Performance",
    desc: "120 karyawan dengan rating Below Target perlu ditindaklanjuti",
  },
];

/* ── Employee spotlight ──────────────────────────────────── */

export const spotlight = {
  nama: "Rizky Putra",
  jabatan: "Asisten Afdeling",
  unit: "PTPN IV Regional 1",
  badge: "Rising Star",
  skor: "4.8 / 5.0",
  seed: 9,
};
